import { useState } from "react";
import "./App.css";
import DoctorList from "./components/DoctorList";
import { doctorData } from "./utility/data";
import { appointmentData } from "./utility/data";
import AppointmentList from "./components/AppointmentList";
function App() {
  const [appointments, setAppointments] = useState(appointmentData);
  return (
    <main className=" text-center">
      <h2 className=" mt-3 display-2">Cleveland Clinic</h2>
      <DoctorList
        appointments={appointments}
        setAppointments={setAppointments}
        doctor={doctorData}
      />
      <AppointmentList 
      appointments={appointments}
      setAppointments={setAppointments}
      />
    </main>
  );
}

export default App;
