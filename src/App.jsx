import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { DoctorProvider } from "./context/DoctorContext";

const App = () => {
  return (
    <DoctorProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors/:id" element={<Profile />} />
        <Route path="*" element={<div className="p-4">404 - Not Found</div>} />
      </Routes>
    </DoctorProvider>
  );
};

export default App;
