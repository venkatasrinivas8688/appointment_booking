import DoctorList from "../components/DoctorList";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4 text-shadow-blue-400">
        Doctor Appointment
      </h1>
      <DoctorList />
    </div>
  );
};

export default Home;
