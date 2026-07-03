import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./BannerPopup.css";

import { popupBanner } from "../../assets/images/popup";

function BannerPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">

        <button
          className="popup-close"
          onClick={() => setOpen(false)}
        >
          <FaTimes />
        </button>

        <img
          src={popupBanner}
          alt="BRX 2026"
          className="popup-banner"
        />

      </div>
    </div>
  );
}

export default BannerPopup;