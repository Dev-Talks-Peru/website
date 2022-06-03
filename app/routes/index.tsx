import { type LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import blob from "~/assets/blob.png";
import discordIcon from "~/assets/icons/discord.svg";
import illustration from "~/assets/illustration.svg";
import isotype from "~/assets/isotype.svg";
import logo from "~/assets/logo~dark.svg";
import styles from "~/styles/home.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Index() {
  let { t } = useTranslation();

  return (
    <section
      id="home"
      className="bg-no-repeat bg-right-top min-h-screen px-20"
      style={{
        // @ts-expect-error CSS Variable
        "--blob-url-4x": `url(${blob})`,
      }}
    >
      <header className="flex items-center justify-between">
        <img src={logo} width={56} height={56} alt={t("communityName")} />

        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <a href="/coc" className="text-gray-100 font-semibold leading-7">
                {t("nav.coc")}
              </a>
            </li>
            <li>
              <a href="/coc" className="text-gray-100 font-semibold leading-7">
                {t("nav.prev")}
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="flex items-center justify-between">
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

          <Link
            to="discord"
            className="py-3 px-9 bg-orange-80 text-orange-10 inline-flex items-center rounded-xl text-2xl leading-none"
          >
            <img src={discordIcon} alt="" aria-hidden width={20} height={20} />
            <span>{t("hero.cta")}</span>
          </Link>
        </div>

        <img src={illustration} alt="" width={589.14} height={296} />
      </section>
    </section>
  );
}
