import { type InitOptions } from "i18next";
import translation from "~/locales/es/translation";

export let config: InitOptions = {
  supportedLngs: ["es"],
  fallbackLng: "es",
  react: { useSuspense: false },
  resources: { es: { translation } },
};
