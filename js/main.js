// Adresse de réception des demandes de contact : à renseigner.
const CONTACT_EMAIL = "";

document.documentElement.classList.remove("no-js");

// Année du pied de page
document.getElementById("year").textContent = new Date().getFullYear();

// En-tête : bordure au défilement
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Menu mobile
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("nav-menu");
const setMenu = (open) => {
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  menu.classList.toggle("open", open);
};
toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

// Apparition au défilement
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

// Formulaire de contact : validation puis ouverture du client e-mail
const form = document.getElementById("contact-form");
const status = form.querySelector(".form-status");
const setStatus = (msg, type) => {
  status.textContent = msg;
  status.className = "form-status" + (type ? " " + type : "");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;
  form.querySelectorAll("[required]").forEach((field) => {
    const ok = field.value.trim() !== "" && (field.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim()));
    field.setAttribute("aria-invalid", String(!ok));
    if (!ok && valid) field.focus();
    valid = valid && ok;
  });
  if (!valid) {
    setStatus("Merci de remplir correctement tous les champs.", "error");
    return;
  }
  if (!CONTACT_EMAIL) {
    setStatus("Le formulaire n'est pas encore configuré.", "error");
    return;
  }
  const data = new FormData(form);
  const subject = `Demande de projet — ${data.get("service")}`;
  const body = `Nom : ${data.get("name")}\nE-mail : ${data.get("email")}\nService : ${data.get("service")}\n\n${data.get("message")}`;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  setStatus("Votre client e-mail va s'ouvrir pour finaliser l'envoi.", "success");
  form.reset();
});
