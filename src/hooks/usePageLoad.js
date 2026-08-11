import { useEffect, useState } from "react";

export default function usePageLoad(loaderDelay = 600) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), loaderDelay);
    return () => clearTimeout(timer);
  }, [loaderDelay]);

  useEffect(() => {
    if (!loaded) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [loaded]);

  return loaded;
}
