import { useState, useEffect } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 550);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hidden) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [hidden]);

  return (
    <div id="loader" className={hidden ? "hidden" : ""} aria-hidden="true">
      <div className="loader-mark">
        HINDHUSTHAN
        <div className="loader-current"></div>
      </div>
    </div>
  );
}
