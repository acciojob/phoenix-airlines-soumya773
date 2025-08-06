import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Welcome to Flight Booking App</h1>
      <button onClick={() => navigate("/flight-search")}>SEARCH FLIGHTS HERE</button>
    </div>
  );
}
