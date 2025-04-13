import "./not-found.css";

import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="grid-background"></div>

      <Link href="/" className="return-link">
        Return Home
      </Link>

      <div className="content">
        <h1 className="title">
          <span className="floating-letter delay0">4</span>
          <span className="floating-letter delay200">0</span>
          <span className="floating-letter delay400">4</span>
        </h1>
        <h3 className="subtitle">Página não encontrada</h3>
      </div>
    </>
  );
}
