import "./not-found.css";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function NotFound() {
  const { t } = useTranslation("not-found");

  return (
    <div className="content">
      <Link href="/" className="return-link">
        {t("title")}
      </Link>
      <div className="title">
        <span className="floating-letter delay0">4</span>
        <span className="floating-letter delay200">0</span>
        <span className="floating-letter delay400">4</span>
      </div>
      <div className="subtitle">{t("message")}</div>
    </div>
  );
}
