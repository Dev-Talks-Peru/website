import { RemixBrowser } from "@remix-run/react";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { hydrate } from "react-dom";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { getInitialNamespaces } from "remix-i18next";
import { config } from "./services/i18n";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    ...config,
    ns: getInitialNamespaces(),
    detection: { order: ["htmlTag"], caches: [] },
  })
  .then(() => {
    return hydrate(
      <I18nextProvider i18n={i18next}>
        <RemixBrowser />
      </I18nextProvider>,
      document
    );
  });
