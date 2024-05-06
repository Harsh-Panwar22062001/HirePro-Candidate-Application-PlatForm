import "./App.css";
import FiltersSection from "./Pages/FilterSection";
import Hiringlist from "./Pages/Hiringlist";
import { useState } from "react";

function App() {
  const [filters, setFilters] = useState({
    location: "",
    jobRole: "",
    minExp: "",
    minJdSalary: "",
    workType: "",
    companyName: "",
  });
  return (
    <div className="App">
      <FiltersSection filters={filters} setFilters={setFilters} />
      
      <Hiringlist filters={filters} />
    </div>
  );
}

export default App;
