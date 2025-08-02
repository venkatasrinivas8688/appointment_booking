import { createContext, useContext, useState, useEffect } from "react";
import { doctors as sampleDoctors } from "../data";

const DoctorContext = createContext();

export const useDoctorContext = () => useContext(DoctorContext);

export const DoctorProvider = ({ children }) => {
  const [doctors] = useState(sampleDoctors);
  const [selectedDoctor, setSelectedDoctor] = useState(() => {
    const saved = localStorage.getItem("selectedDoctor");
    return saved ? JSON.parse(saved) : null;
  });

  const [appointment, setAppointment] = useState(() => {
    const saved = localStorage.getItem("appointment");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("selectedDoctor", JSON.stringify(selectedDoctor));
  }, [selectedDoctor]);

  useEffect(() => {
    localStorage.setItem("appointment", JSON.stringify(appointment));
  }, [appointment]);

  return (
    <DoctorContext.Provider
      value={{
        doctors,
        selectedDoctor,
        setSelectedDoctor,
        appointment,
        setAppointment,
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};
