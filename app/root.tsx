import {
  json,
  type LinksFunction,
  type LoaderFunction,
  type MetaFunction,
} from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next";
import tailwind from "~/styles/tailwind.css";
import { i18n } from "./services/i18n.server";

type LoaderData = {
  locale: string;
  meta: { title: string; description: string };
};

export let links: LinksFunction = () => {
  return [
    { rel: "preload", href: tailwind, as: "style" },
    { rel: "stylesheet", href: tailwind },
  ];
};

export let loader: LoaderFunction = async ({ request }) => {
  let locale = await i18n.getLocale(request);
  let t = await i18n.getFixedT(locale);
  return json<LoaderData>({
    locale,
    meta: { title: t("root.title"), description: t("root.description") },
  });
};

export let meta: MetaFunction = ({ data }) => {
  return {
    charset: "utf-8",
    title: data.meta.title,
    description: data.meta.description,
    viewport: "width=device-width,initial-scale=1",
  };
};

export let handle = { i18n: "translation" };

export default function App() {
  let { locale } = useLoaderData<LoaderData>();

  let { i18n } = useTranslation();

  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={i18n.dir()} className="bg-gray-100 text-orange-10">
      <head>
        <Meta />
        <link rel="shortcut icon" href="/favicon.ico" />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
      </body>
    </html>
  );
}
