import { type LinksFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import blob from "~/assets/blob.png";
import illustration from "~/assets/illustration.svg";
import logo from "~/assets/logo~dark.svg";
import styles from "~/styles/home.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Index() {
  return (
    <section
      id="home"
      className="bg-no-repeat bg-right-top min-h-screen"
      style={{
        // @ts-expect-error CSS Variable
        "--blob-url-4x": `url(${blob})`,
      }}
    >
      <Header />
      <section>
        <img src={illustration} alt="" width={589.14} height={296} />
      </section>
    </section>
  );
}

function Header() {
  let { t } = useTranslation();
  return (
    <header>
      <img src={logo} width={56} height={56} alt={t("communityName")} />

      <nav>
        <ul>
          <li>
            <a href="/coc">{t("nav.coc")}</a>
          </li>
          <li>
            <a href="/coc">{t("nav.prev")}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
