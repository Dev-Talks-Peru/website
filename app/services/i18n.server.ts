import { RemixI18Next } from "remix-i18next";
import translation from "~/locales/es/translation.json";

export let i18n = new RemixI18Next({
  detection: {
    supportedLanguages: ["es"],
    fallbackLanguage: "es",
  },
  i18next: { resources: { es: { translation } } },
});
