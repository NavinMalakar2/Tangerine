import React, { useState } from "react";
import { CalendarIcon, ClockIcon, UserIcon } from "lucide-react";

const ReservationForm = () => {
  const [date, setDate] = useState("2025-06-07");
  const [time, setTime] = useState("19:00");
  const [people, setPeople] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation made for ${people} people on ${date} at ${time}`);
  };

  return (
    <div className="flex items-center justify-center h-92 bg-black p-5 mb-10">
      <div className="bg-white rounded-2xl shadow-lg w-60 h-80 p-6">
        <h2 className="text-lg font-semibold text-center mb-4">Make a Reservation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border p-2 rounded-md">
            <CalendarIcon className="w-5 h-5 mr-2" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex items-center border p-2 rounded-md">
            <ClockIcon className="w-5 h-5 mr-2" />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex items-center border p-2 rounded-md">
            <UserIcon className="w-5 h-5 mr-2" />
            <select
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="w-full bg-transparent focus:outline-none"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} {i + 1 === 1 ? "person" : "people"}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
          >
            Find a Table
          </button>
        </form>
        <div className="mt-4 text-center text-xs text-gray-500">
          <span className="inline-block w-2 h-2 bg-red-600 rounded-full mr-1"></span>
          OpenTable®
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
