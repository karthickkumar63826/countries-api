import React, { useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./Search";
import Cards from "./Cards";

const Home = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <SearchBar
        country={country}
        region={region}
        setCountry={setCountry}
        setRegion={setRegion}
      />
      <Cards country={country} region={region} />
    </div>
  );
};

export default Home;
