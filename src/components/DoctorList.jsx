import { useState } from "react";
import { useDoctorContext } from "../context/DoctorContext";
import DoctorCard from "./DoctorCard";

const DoctorList = () => {
  const { doctors } = useDoctorContext();
  const [search, setSearch] = useState("");

  const filtered = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <input
        type="text"
        placeholder="Search by name or specialization..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <h1 className="text-1xl font-bold mb-2">Find Your Doctor</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
