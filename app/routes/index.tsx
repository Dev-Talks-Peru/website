import {
  json,
  type HeadersFunction,
  type LinksFunction,
} from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import blob from "~/assets/blob.png";
import blob2x from "~/assets/blob@2x.png";
import blob3x from "~/assets/blob@3x.png";
import blob4x from "~/assets/blob@4x.png";
import illustration from "~/assets/illustration.svg";
import isotype from "~/assets/isotype.svg";
import logo from "~/assets/logo~dark.svg";
import { Icon, icons } from "~/components/icon";
import { getMetrics, type Metrics } from "~/services/metrics.server";
import styles from "~/styles/home.css";

type LoaderData = { metrics: Metrics };

export let links: LinksFunction = () => {
  return [
    {
      rel: "preload",
      as: "image",
      href: blob4x,
      imagesrcset: `${blob} 1x, ${blob2x} 2x, ${blob3x} 3x, ${blob4x} 4x`,
      fetchpriority: "high",
      media: "(min-width: 1280px)",
    },
    { rel: "preload", href: styles, as: "style" },
    { rel: "preload", href: illustration, as: "image" },
    { rel: "preload", href: isotype, as: "image" },
    { rel: "preload", href: logo, as: "image" },
    { rel: "preload", href: icons, as: "image" },
    { rel: "stylesheet", href: styles },
  ];
};

export let loader = async () => {
  try {
    let metrics = await getMetrics();
    return json<LoaderData>(
      { metrics },
      {
        headers: {
          "Cache-Control":
            "public, max-age=60, s-maxage=600, stale-while-revalidate=86400, stale-if-error=86400",
        },
      }
    );
  } catch {
    return json<LoaderData>({
      metrics: {
        discord: 260,
        twitter: 383,
        twitch: 36,
      },
    });
  }
};

export let headers: HeadersFunction = ({ loaderHeaders }) => {
  return loaderHeaders;
};

export default function Index() {
  let { t } = useTranslation();
  let { metrics } = useLoaderData<LoaderData>();

  return (
    <section
      id="home"
      className="bg-no-repeat 2xl:bg-contain bg-right-top min-h-screen px-4 flex flex-col"
      style={{
        // @ts-expect-error CSS Variable
        "--blob-url-1x": `url(${blob})`,
        "--blob-url-2x": `url(${blob2x})`,
        "--blob-url-3x": `url(${blob3x})`,
        "--blob-url-4x": `url(${blob4x})`,
      }}
    >
      <header className="flex items-center justify-between h-14 my-2.5 w-full max-w-screen-xl mx-auto">
        <Link to="/">
          <img src={logo} width={56} height={56} alt={t("communityName")} />
        </Link>

        <nav className="hidden sm:block">
          <ul className="flex items-center gap-x-4 sm:gap-x-8">
            <li>
              <Link to="/coc" className="text-gray-100 font-semibold leading-7">
                {t("nav.coc")}
              </Link>
            </li>
            <li>
              <Link
                to="/meetups"
                className="text-gray-100 font-semibold leading-7"
              >
                {t("nav.prev")}
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="flex items-center lg:justify-between py-14 px-2.5 max-w-screen-xl w-full mx-auto flex-grow gap-x-2.5 md:justify-center">
        <div className="space-y-9">
          <div className="space-y-5">
            <h1 className="text-orange-40">
              <img
                src={isotype}
                alt={t("hero.title")}
                width={533.51}
                height={48}
              />
            </h1>
            <p className="text-xl text-orange-10">{t("hero.subtitle")}</p>
          </div>

          <Link
            to="discord"
            className="py-3 px-9 gap-x-2 bg-orange-100 text-white inline-flex items-center rounded-xl text-2xl leading-none"
          >
            <Icon name="discord" width={20} height={20} />
            <span>{t("hero.cta")}</span>
          </Link>
        </div>

        <img
          src={illustration}
          alt=""
          width={589.14}
          height={296}
          className="hidden lg:block"
        />
      </section>

      <section className="bg-orange-40 text-gray-100 py-6 -mx-4">
        <div className="flex items-center md:justify-center md:px-32 px-[33%] gap-x-16 md:gap-x-24 md:flex-row flex-col gap-y-4">
          <Link to="/discord">
            <Metric
              icon="discord"
              amount={metrics.discord}
              copy={t("metrics.discord")}
            />
          </Link>
          <Link to="/twitter">
            <Metric
              icon="twitter"
              amount={metrics.twitter}
              copy={t("metrics.twitter")}
            />
          </Link>
          <Link to="/twitch">
            <Metric
              icon="twitch"
              amount={metrics.twitch}
              copy={t("metrics.twitch")}
            />
          </Link>
        </div>
      </section>
    </section>
  );
}

function Metric(props: { icon: string; amount: number; copy: string }) {
  return (
    <div className="flex items-center gap-x-3 md:w-auto justify-center w-1/3 mx-auto">
      <Icon name={props.icon} width={52} height={52} />
      <div>
        <h2 className="text-5xl font-extrabold">{props.amount}</h2>
        <p className="text-2xl">{props.copy}</p>
      </div>
    </div>
  );
}
