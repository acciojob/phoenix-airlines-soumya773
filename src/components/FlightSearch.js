import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTripType, setFlightDetails } from "../redux/bookingSlice";
import { useNavigate } from "react-router-dom";

export default function FlightSearch() {
  const [trip, setTrip] = useState("one-way");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!source || !destination || !date) {
      alert("All fields are required!");
      return;
    }
    dispatch(setTripType(trip));
    dispatch(setFlightDetails({ source, destination, date }));
    navigate("/flight-booking");
  };

  return (
    <div className="container">
      <h2>Search Flights</h2>
      <div>
        <label>
          <input type="radio" name="trip" value="one-way" checked={trip === "one-way"} onChange={(e) => setTrip(e.target.value)} /> One-way
        </label>
        <label>
          <input type="radio" name="trip" value="round-trip" checked={trip === "round-trip"} onChange={(e) => setTrip(e.target.value)} /> Round-trip
        </label>
      </div>
      <input type="text" placeholder="Source City" value={source} onChange={(e) => setSource(e.target.value)} />
      <input type="text" placeholder="Destination City" value={destination} onChange={(e) => setDestination(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button className="book-flight" onClick={handleSubmit}>Book Flight</button>
    </div>
  );
}
