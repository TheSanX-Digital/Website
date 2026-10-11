"use client";

import { useState } from "react";
import { contactEmail, services } from "@/lib/site";

type Status = { type: "error" | "success"; message: string } | null;

const fieldClass =
  "rounded-[10px] border border-line bg-ink px-4 py-3 text-fg aria-[invalid=true]:border-red-400";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>(null);
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const errors = {
      name: !get("name"),
      email: !emailPattern.test(get("email")),
      message: !get("message"),
    };
    setInvalid(errors);
    const firstInvalid = Object.keys(errors).find((k) => errors[k as keyof typeof errors]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      setStatus({ type: "error", message: "Merci de remplir correctement tous les champs." });
      return;
    }
    if (!contactEmail) {
      setStatus({ type: "error", message: "Le formulaire n'est pas encore configuré." });
      return;
    }

    const subject = `Demande de projet — ${get("service")}`;
    const body = `Nom : ${get("name")}\nE-mail : ${get("email")}\nService : ${get("service")}\n\n${get("message")}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus({ type: "success", message: "Votre client e-mail va s'ouvrir pour finaliser l'envoi." });
    form.reset();
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="mx-auto grid max-w-3xl gap-4.5 rounded-2xl border border-line bg-surface p-6 shadow-[0_20px_50px_-20px_rgb(0_0_0/.6)] sm:grid-cols-2 sm:p-10"
    >
      <label className="flex flex-col gap-1.5 text-sm font-semibold">
        Nom
        <input name="name" type="text" autoComplete="name" required aria-invalid={invalid.name} className={`${fieldClass} text-base font-normal`} />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-semibold">
        E-mail
        <input name="email" type="email" autoComplete="email" required aria-invalid={invalid.email} className={`${fieldClass} text-base font-normal`} />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-semibold sm:col-span-2">
        Service souhaité
        <select name="service" className={`${fieldClass} text-base font-normal`}>
          {services.map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
          <option>Autre</option>
        </select>
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-semibold sm:col-span-2">
        Votre projet
        <textarea name="message" rows={5} required aria-invalid={invalid.message} className={`${fieldClass} resize-y text-base font-normal`} />
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" className="btn">
          Envoyer la demande
        </button>
        <p
          role="status"
          aria-live="polite"
          className={status?.type === "error" ? "text-red-400" : status ? "text-emerald-300" : ""}
        >
          {status?.message}
        </p>
      </div>
    </form>
  );
}
