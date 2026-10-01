import nodemailer from "nodemailer";
import { quoteEmail, validateQuote } from "@/lib/quote-request";

export const runtime = "nodejs";

const attempts = new Map<string, number[]>();
const windowMs = 60 * 60 * 1000;
const limit = 5;

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return Response.json({ error: "Origine non autorisée" }, { status: 403 });
  if (Number(request.headers.get("content-length") || 0) > 12000) return Response.json({ error: "Requête trop volumineuse" }, { status: 413 });
  let payload: unknown;
  try { payload = await request.json(); } catch { return Response.json({ error: "Données invalides" }, { status: 400 }); }
  const quote = validateQuote(payload);
  if (!quote) return Response.json({ error: "Données invalides" }, { status: 400 });
  if (quote.website) return Response.json({ ok: true });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const recent = (attempts.get(ip) || []).filter((time) => now - time < windowMs);
  if (recent.length >= limit) return Response.json({ error: "Trop de demandes" }, { status: 429 });
  recent.push(now);
  attempts.set(ip, recent);
  if (attempts.size > 10000) for (const [key, values] of attempts) if (values.every((time) => now - time >= windowMs)) attempts.delete(key);

  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_TO || "contact@expertpool.ma";
  if (!from || to !== "contact@expertpool.ma") {
    console.error("Quote delivery is not configured: EMAIL_FROM or EMAIL_TO is invalid");
    return Response.json({ error: "L'envoi par e-mail est momentanément indisponible. Contactez-nous par WhatsApp." }, { status: 503 });
  }
  const { subject, text } = quoteEmail(quote);
  try {
    let id: string | undefined;
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
      const port = Number(process.env.SMTP_PORT || 587);
      const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST, port, secure: port === 465,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
      });
      const result = await transport.sendMail({ from, to, replyTo: quote.email, subject, text });
      if (!result.accepted.includes(to)) throw new Error("Recipient rejected");
      id = result.messageId;
    } else if (process.env.RESEND_API_KEY) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from, to: [to], reply_to: quote.email, subject, text }),
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error(`Provider HTTP ${response.status}`);
      const result = await response.json();
      if (typeof result.id !== "string" || !result.id) throw new Error("Provider did not accept email");
      id = result.id;
    } else {
      console.error("Quote delivery is not configured: SMTP or RESEND_API_KEY is required");
      return Response.json({ error: "L'envoi par e-mail est momentanément indisponible. Contactez-nous par WhatsApp." }, { status: 503 });
    }
    return Response.json({ ok: true, id });
  } catch (error) {
    console.error("Quote delivery failed", error);
    return Response.json({ error: "L'e-mail n'a pas pu être envoyé. Réessayez ou contactez-nous par WhatsApp." }, { status: 502 });
  }
}
