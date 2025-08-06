import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    tripType: "one-way",
    source: "",
    destination: "",
    date: "",
    passenger: { name: "", email: "", phone: "" },
    bookingConfirmed: false,
  },
  reducers: {
    setTripType: (state, action) => { state.tripType = action.payload; },
    setFlightDetails: (state, action) => { 
      state.source = action.payload.source; 
      state.destination = action.payload.destination; 
      state.date = action.payload.date; 
    },
    setPassengerDetails: (state, action) => { state.passenger = action.payload; },
    confirmBooking: (state) => { state.bookingConfirmed = true; }
  }
});

export const { setTripType, setFlightDetails, setPassengerDetails, confirmBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
