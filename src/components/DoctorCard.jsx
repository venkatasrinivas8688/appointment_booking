import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (doctor.available) {
      navigate(`/doctors/${doctor.id}`);
    } else {
      alert("Doctor is not available right now.");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer border p-4 rounded-lg shadow hover:shadow-md bg-white"
    >
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold mt-2">{doctor.name}</h2>
      <p className="text-gray-600">{doctor.specialization}</p>
      <p
        className={`mt-2 font-medium ${
          doctor.available ? "text-green-600" : "text-red-500"
        }`}
      >
        {doctor.available ? "Available" : "Not Available"}
      </p>
    </div>
  );
};

export default DoctorCard;
