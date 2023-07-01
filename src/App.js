import "./App.css";
import DoctorList from "./components/DoctorList";
import { doctorData } from "./utility/data";
function App() {
  return(
    <main className=" text-center">
      <h2 className=" mt-3 display-2" >Cleveland Clinic</h2>
      <DoctorList doctor={doctorData}/>
    </main>
  );
}

export default App;
