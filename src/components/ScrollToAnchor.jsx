import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToAnchor() {

  const { pathname, hash } = useLocation();

  useEffect(() => {

    if (hash) {

      const id = hash.replace("#", "");

      /*
        Small delay allows the new page
        to render before finding the section.
      */

      setTimeout(() => {

        const element = document.getElementById(id);

        if (element) {

          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }

      }, 100);

    } else {

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });

    }

  }, [pathname, hash]);

  return null;
}

export default ScrollToAnchor;