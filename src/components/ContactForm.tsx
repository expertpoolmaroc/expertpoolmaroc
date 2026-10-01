"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { isMoroccanPhone } from "@/lib/contact";

const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP || process.env.NEXT_PUBLIC_PHONE || "+212660628760").replace(/\D/g, "");
const projectTypes = ["Piscine", "Construction piscine", "Rénovation piscine", "Fontaine", "Spa & Jacuzzi", "Sauna & Hammam", "Entretien piscine", "Électricité & Plomberie piscine", "Matériel & équipements piscine", "Traitement piscine", "Chauffage piscine", "Déshumidification piscine"];

export function ContactForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const inFlight = useRef(false);
  const [project, setProject] = useState("");
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const value = new URLSearchParams(window.location.search).get("projet") || "";
      setProject(value);
      setSelectedProject(value);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!isMoroccanPhone(String(data.phone || ""))) {
      setError("Veuillez saisir un numéro de téléphone marocain valide.");
      return;
    }
    inFlight.current = true;
    setSending(true);
    setError("");
    setSuccess(false);
    try {
      const response = await fetch("/api/quote", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: new URLSearchParams(window.location.search).get("source") || window.location.pathname }),
      });
      if (!response.ok) {
        const result: unknown = await response.json().catch(() => null);
        const message = result && typeof result === "object" && "error" in result && typeof result.error === "string"
          ? result.error
          : "Une erreur est survenue. Veuillez réessayer ou nous contacter par WhatsApp.";
        throw new Error(message);
      }
      setSuccess(true);
      form.reset();
      setSelectedProject("");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Une erreur est survenue. Veuillez réessayer ou nous contacter par WhatsApp.");
    } finally {
      inFlight.current = false;
      setSending(false);
    }
  }

  return (
    <section className="section contactSection" id="formulaire-devis">
      <div className="container contactGrid">
        <form className="contactForm" onSubmit={submit}>
          <div className="sectionHead alignLeft"><p className="kicker">Devis personnalisé</p><h2>Parlez-nous de votre projet</h2><p>Quelques informations suffisent pour préparer un premier échange utile.</p></div>
          <label>Nom complet<input name="name" autoComplete="name" required minLength={2} maxLength={120} placeholder="Votre nom" /></label>
          <label>Téléphone<input name="phone" autoComplete="tel" required inputMode="tel" placeholder="+212 6..." /></label>
          <label>Adresse e-mail<input name="email" autoComplete="email" required type="email" maxLength={254} placeholder="vous@email.com" /></label>
          <label>Ville<input name="city" autoComplete="address-level2" required maxLength={120} placeholder="Votre ville" /></label>
          <label className="full">Type de projet<select name="projectType" required value={selectedProject} onChange={(event) => setSelectedProject(event.target.value)}><option value="" disabled>Sélectionnez un type de projet</option>{[...new Set([...projectTypes, project].filter(Boolean))].map((item) => <option key={item}>{item}</option>)}</select></label>
          <label className="full">Message<textarea name="message" required maxLength={5000} rows={5} placeholder="Besoins, dimensions, contraintes ou calendrier..." /></label>
          <label className="honeypot" aria-hidden="true">Site web<input name="website" tabIndex={-1} autoComplete="off" /></label>
          {error ? <p className="formError full" role="alert">{error}</p> : null}
          {success ? <p className="full" role="status">Votre demande a été envoyée avec succès. Notre équipe vous contactera rapidement.</p> : null}
          <button className="goldButton full" type="submit" disabled={sending}>{sending ? "Envoi en cours..." : "Envoyer ma demande"}</button>
          <p className="formNote full">Vous préférez WhatsApp ? <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">Contactez-nous directement.</a></p>
        </form>
        <aside className="contactPanel">
          <p className="kicker">Nos coordonnées</p><h2>Parlons de votre projet</h2>
          <p>Un échange permet de préciser le lieu, les dimensions et les besoins techniques avant une proposition adaptée.</p>
          <div className="contactDetails">
            <a href="tel:+212660628760"><Phone size={20} /><span><strong>+212 660 628 760</strong><small>Appeler notre équipe</small></span></a>
            <a href="mailto:contact@expertpool.ma"><Mail size={20} /><span><strong>contact@expertpool.ma</strong><small>Projets et devis</small></span></a>
            <a href="mailto:service@expertpool.ma"><Mail size={20} /><span><strong>service@expertpool.ma</strong><small>Service et suivi</small></span></a>
            <div><MapPin size={20} /><span><strong>Bd Lalla Yacout N°17, 4e étage</strong><small>Casablanca, Maroc</small></span></div>
          </div>
        </aside>
      </div>
    </section>
  );
}
