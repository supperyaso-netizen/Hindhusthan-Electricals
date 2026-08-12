import { useState, useEffect } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hidden) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
      document.body.classList.add("page-loaded");
    }
  }, [hidden]);

  return (
    <div id="loader" className={hidden ? "hidden" : ""} aria-hidden="true">
      <div className="loader-mark">
        HINDHUSTHAN
        <small>Electricals &amp; Hardwares</small>
        <div className="loader-current"></div>
      </div>
    </div>
  );
}
