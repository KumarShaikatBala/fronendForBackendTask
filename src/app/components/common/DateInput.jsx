import { useState } from "react";

export default function DateInputComponent({ label }) {
  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <p className="py-2 font-bold text-sm">{label}</p>

      <input
        type="date"
        className="p-2 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        value={date}
        min={new Date().toISOString().split('T')[0]}
        onChange={handleDateChange}
      />
    </>
  );
}
