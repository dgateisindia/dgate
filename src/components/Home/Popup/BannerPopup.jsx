import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

import "./BannerPopup.css";

import { popupBanner } from "../../../assets/images/home/popup";

/*
  This variable survives React component remounts
  while navigating inside the website.

  But when the browser is refreshed,
  JavaScript reloads and this becomes false again.
*/
let bannerShownThisLoad = false;

function BannerPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    /*
      Banner already appeared during this website load.
      Don't show it again when user comes back to Home.
    */
    if (bannerShownThisLoad) {
      return;
    }

    const timer = setTimeout(() => {
      setOpen(true);

      /*
        Mark banner as shown for this page load.
      */
      bannerShownThisLoad = true;
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  if (!open) {
    return null;
  }

  return (
    <div
      className="popup-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="BRX Expo 2026 announcement"
    >
      <div className="popup-container">

        <button
          type="button"
          className="popup-close"
          onClick={handleClose}
          aria-label="Close banner"
        >
          <FaTimes />
        </button>

        <img
          src={popupBanner}
          alt="BRX Expo 2026"
          className="popup-banner"
        />

      </div>
    </div>
  );
}

export default BannerPopup;