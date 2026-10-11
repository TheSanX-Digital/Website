"use client";

import { useState } from "react";
import { contactEmail, services } from "@/lib/site";

type Status = { type: "error" | "success"; message: string } | null;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "peer w-full rounded-[14px] border border-white/8 bg-white/[.03] px-4 pb-2 pt-6 text-[0.95rem] text-fg outline-none transition placeholder:text-transparent focus:border-accent/50 focus:bg-white/5 focus:shadow-[0_0_0_3px_rgb(201_169_110/.08)] aria-[invalid=true]:border-red-400/70";
const labelClass =
  "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-muted transition-all peer-focus:top-4 peer-focus:text-[0.68rem] peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:text-[0.68rem]";

function Field({ name, label, type = "text", autoComplete, invalid }: {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  invalid?: boolean;
}) {
  return (
    <div className="relative">
      <input id={name} name={name} type={type} autoComplete={autoComplete} placeholder=" " required aria-invalid={invalid} className={inputClass} />
      <label htmlFor={name} className={labelClass}>{label}</label>
    </div>
  );
}

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
    <form noValidate onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <Field name="name" label="Nom" autoComplete="name" invalid={invalid.name} />
      <Field name="email" label="E-mail" type="email" autoComplete="email" invalid={invalid.email} />

      <div className="relative sm:col-span-2">
        <select id="service" name="service" className={`${inputClass} appearance-none`}>
          {services.map((s) => (
            <option key={s.title} className="bg-card">{s.title}</option>
          ))}
          <option className="bg-card">Autre</option>
        </select>
        <label htmlFor="service" className="pointer-events-none absolute left-4 top-4 -translate-y-1/2 text-[0.68rem] text-muted">
          Service souhaité
        </label>
        <span aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted">▾</span>
      </div>

      <div className="relative sm:col-span-2">
        <textarea id="message" name="message" rows={5} placeholder=" " required aria-invalid={invalid.message} className={`${inputClass} resize-y pt-7`} />
        <label
          htmlFor="message"
          className="pointer-events-none absolute left-4 top-5 text-sm text-muted transition-all peer-focus:top-2.5 peer-focus:text-[0.68rem] peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-[0.68rem]"
        >
          Votre projet
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" className="btn-primary">
          Envoyer la demande <span aria-hidden="true">→</span>
        </button>
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${status?.type === "error" ? "text-red-400" : "text-accent"}`}
        >
          {status?.message}
        </p>
      </div>
    </form>
  );
}
