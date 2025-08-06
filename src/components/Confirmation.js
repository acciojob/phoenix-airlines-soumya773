import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Confirmation() {
  const booking = useSelector((state) => state.booking);
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2>Booking Confirmed!</h2>
      <p>Trip: {booking.tripType}</p>
      <p>From: {booking.source} → To: {booking.destination}</p>
      <p>Date: {booking.date}</p>
      <p>Passenger: {booking.passenger.name}</p>
      <p>Email: {booking.passenger.email}</p>
      <p>Phone: {booking.passenger.phone}</p>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
}
