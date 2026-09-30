"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP || process.env.NEXT_PUBLIC_PHONE || "+212660628760").replace(/\D/g, "");

export function ContactForm() {
  const [error, setError] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (!whatsappNumber) {
      setError("Le numéro WhatsApp doit être configuré avant la mise en production.");
      return;
    }
    const source = new URLSearchParams(window.location.search).get("projet") || "contact";
    const message = ["Bonjour Expert Pool Maroc,", `Je souhaite discuter d'un projet ${form.get("projectType")}.`, `Nom : ${form.get("name")}`, `Téléphone : ${form.get("phone")}`, `E-mail : ${form.get("email")}`, `Ville : ${form.get("city")}`, `Message : ${form.get("message")}`, `Page : ${source}`].join("\n");
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
  return (
    <section className="section contactSection">
      <div className="container contactGrid">
        <form className="contactForm" onSubmit={submit}>
          <div className="sectionHead alignLeft"><p className="kicker">Devis personnalisé</p><h2>Parlez-nous de votre projet</h2><p>Quelques informations suffisent pour préparer un premier échange utile.</p></div>
          <label>Nom complet<input name="name" autoComplete="name" required placeholder="Votre nom" /></label>
          <label>Téléphone<input name="phone" autoComplete="tel" required inputMode="tel" pattern="(?:\+212|0)[5-7][0-9]{8}" placeholder="+212 6..." /></label>
          <label>Adresse e-mail<input name="email" autoComplete="email" required type="email" placeholder="vous@email.com" /></label>
          <label>Ville<input name="city" autoComplete="address-level2" required placeholder="Votre ville" /></label>
          <label className="full">Type de projet<select name="projectType" required defaultValue=""><option value="" disabled>Sélectionnez un type de projet</option><option>Piscine</option><option>Fontaine ou mur d&apos;eau</option><option>Spa ou jacuzzi</option><option>Sauna ou hammam</option><option>Entretien piscine</option><option>Équipement ou local technique</option></select></label>
          <label className="full">Message<textarea name="message" required rows={5} placeholder="Besoins, dimensions, contraintes ou calendrier..." /></label>
          {error ? <p className="formError full" role="alert">{error}</p> : null}
          <button className="goldButton full" type="submit">Envoyer via WhatsApp</button>
          <p className="formNote full">Aucune donnée n&apos;est stockée par ce site. Le message est transmis par WhatsApp.</p>
        </form>
        <aside className="contactPanel">
          <p className="kicker">Nos coordonnées</p>
          <h2>Parlons de votre projet</h2>
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
