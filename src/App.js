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
      <h1
        style={{
          textAlign: "center",
          margin: "20px 0",
          fontSize: "2rem",
          color: "#333",
        }}
      >
        Explore Job Listings
      </h1>

      <FiltersSection filters={filters} setFilters={setFilters} />

      <Hiringlist filters={filters} />
    </div>
  );
}

export default App;
