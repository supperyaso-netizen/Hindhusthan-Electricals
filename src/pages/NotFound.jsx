import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="status-page">
      <p className="status-mark">HINDHUSTHAN</p>
      <p className="status-code">ERROR · 404</p>
      <div className="status-line" aria-hidden="true"></div>
      <h1 className="status-title">
        Oops. This connection doesn't exist.
      </h1>
      <p className="status-sub">
        The page you're looking for may have moved or never existed. Let's get
        you back on track.
      </p>
      <Link className="btn btn-primary" to="/">
        Back Home
      </Link>
    </div>
  );
}
