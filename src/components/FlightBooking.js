import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPassengerDetails, confirmBooking } from "../redux/bookingSlice";
import { useNavigate } from "react-router-dom";

export default function FlightBooking() {
  const [passenger, setPassenger] = useState({ name: "", email: "", phone: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!passenger.name || !passenger.email || !passenger.phone) {
      alert("All fields are required!");
      return;
    }
    dispatch(setPassengerDetails(passenger));
    dispatch(confirmBooking());
    navigate("/confirmation");
  };

  return (
    <div className="container">
      <h2>Enter Passenger Details</h2>
      <input type="text" placeholder="Full Name" value={passenger.name} onChange={(e) => setPassenger({ ...passenger, name: e.target.value })} />
      <input type="text" placeholder="Email" value={passenger.email} onChange={(e) => setPassenger({ ...passenger, email: e.target.value })} />
      <input type="text" placeholder="Phone" value={passenger.phone} onChange={(e) => setPassenger({ ...passenger, phone: e.target.value })} />
      <button onClick={handleSubmit}>Confirm Booking</button>
    </div>
  );
}
