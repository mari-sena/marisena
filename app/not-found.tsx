import "./not-found.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="content">
      <Link href="/" className="return-link">
        {"title"}
      </Link>
      <div className="title">
        <span className="floating-letter delay0">4</span>
        <span className="floating-letter delay200">0</span>
        <span className="floating-letter delay400">4</span>
      </div>
      <div className="subtitle">{"message"}</div>
    </div>
  );
}
