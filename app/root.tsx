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
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next";
import tailwind from "~/styles/tailwind.css";
import { i18n } from "./services/i18n.server";

type LoaderData = { locale: string; title: string };

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwind }];
};

export let loader: LoaderFunction = async ({ request }) => {
  let locale = await i18n.getLocale(request);
  let t = await i18n.getFixedT(locale);
  return json<LoaderData>({ locale, title: t("communityName") });
};

export let meta: MetaFunction = ({ data }) => {
  return {
    charset: "utf-8",
    title: data.title,
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
        <Scripts />
      </body>
    </html>
  );
}
