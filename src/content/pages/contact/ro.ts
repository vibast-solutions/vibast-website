import type { ContactPageContent } from "./types";

export const contactRo: ContactPageContent = {
  meta: {
    title: "Contact: cere o estimare pentru proiectul tău",
    description:
      "Spune-ne de ce ai nevoie și de unde pornești. Revenim cu întrebări sau cu o primă estimare. Fără nicio obligație.",
  },
  h1: "Cere o estimare pentru proiectul tău",
  intro: "Spune-ne de ce ai nevoie și de unde pornești. Revenim cu întrebări sau cu o primă estimare.",
  emailPrompt: "Sau scrie-ne direct",
  phonePrompt: "Sau sună-ne",
  form: {
    nameLabel: "Nume",
    namePlaceholder: "Numele tău",
    emailLabel: "Email",
    emailPlaceholder: "tu@firma.ro",
    messageLabel: "Mesaj",
    messagePlaceholder: "Spune-ne despre proiectul tău...",
    captchaRequired: "Te rugăm să completezi verificarea captcha",
    captchaMissing: "Verificarea captcha nu este configurată, așa că formularul nu este disponibil momentan.",
    sendFailed: "Mesajul nu a putut fi trimis",
    sending: "Se trimite...",
    submit: "Trimite mesajul",
    successTitle: "Mesaj trimis",
    successBody: "Mulțumim că ne-ai scris. Revenim cu întrebări sau cu o primă estimare.",
    sendAnother: "Trimite alt mesaj",
  },
};
