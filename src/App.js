import "./App.css";
import FiltersSection from "./Pages/FilterSection";
import HiringCard from "./Pages/HiringCard";
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
      <HiringCard filters={filters} />
    </div>
  );
}

export default App;
