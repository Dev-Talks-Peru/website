import { useTranslation } from "react-i18next";
import logo from "~/assets/logo~dark.svg";

export default function Index() {
  return (
    <>
      <Header />
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1>Welcome to Remix</h1>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

function Header() {
  let { t } = useTranslation();
  return (
    <header>
      <img src={logo} width={56} height={56} alt={t("communityName")} />
    </header>
  );
}
