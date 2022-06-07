import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import logo from "~/assets/logo~dark.svg";

export default function Live() {
  let { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col">
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

      <iframe
        src="https://player.twitch.tv/?channel=devtalkspe&parent=localhost&parent=devtalks.pe"
        height="300"
        width="400"
        allowFullScreen
        title={t("live.iframeTitle")}
        className="bg-gray-100 aspect-video w-full flex-grow"
      />
    </div>
  );
}
