import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Mainheder() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="mainHeader">
      <div className="image">
        <img src="/logoamar.png" className="logo_img" alt="logo" />
      </div>

      <div className="tegs">
        <p
          className={`btn m-3 ${location.pathname === "/Home" ? "active" : ""}`}
          onClick={() => navigate("/Home")}
        >
          Գլխավոր
        </p>
        <p
          className={`btn m-3 ${location.pathname === "/zexj" ? "active" : ""}`}
          onClick={() => navigate("/zexj")}
        >
          Զեղչեր
        </p>
        <p
          className={`btn m-3 ${location.pathname === "/work" ? "active" : ""}`}
          onClick={() => navigate("/work")}
        >
          Ծառայություններ
        </p>
        <p
          className={`btn m-3 ${location.pathname === "/about-us" ? "active" : ""}`}
          onClick={() => navigate("/about-us")}
        >
          Մեր մասին
        </p>
      </div>
    </div>
  );
}
