import { useParams } from "react-router-dom";
import { useDoctorContext } from "../context/DoctorContext";
import { useState } from "react";

const Profile = () => {
  const { id } = useParams();
  const { doctors, appointment, setAppointment } = useDoctorContext();

  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    datetime: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointment((prev) => ({
      ...prev,
      [doctor.id]: formData,
    }));
    alert("Appointment booked!");
  };

  const formatToAMPM = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (!doctor) return <p className="p-4 text-center">Doctor not found</p>;
  if (!doctor.available)
    return <p className="p-4 text-center text-red-500">Doctor not available</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-60 object-cover rounded"
      />
      <h2 className="text-2xl font-semibold mt-4">{doctor.name}</h2>
      <p className="text-gray-700">{doctor.specialization}</p>
      <p className="text-green-600 mt-1">Available</p>

      <h3 className="text-lg font-bold mt-6">Book Appointment</h3>
      <form onSubmit={handleSubmit} className="space-y-2 mt-2">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="datetime"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Confirm Appointment
        </button>
      </form>

      {appointment[doctor.id] && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h4 className="font-bold">Your Appointment</h4>
          <p>Name: {appointment[doctor.id].name}</p>
          <p>Email: {appointment[doctor.id].email}</p>
          <p>Time: {formatToAMPM(appointment[doctor.id].datetime)}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
