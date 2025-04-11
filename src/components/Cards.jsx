import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";

const Cards = ({ country, region }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  const filterCountries = useCallback(() => {
    let filtered = countries;

    if (region) {
      filtered = countries.filter(
        (c) => c.region.toLowerCase() === region.toLowerCase()
      );
    }

    if (country) {
      filtered = countries.filter((c) =>
        c.name.toLowerCase().includes(country.toLowerCase())
      );
    }

    setFilteredCountries(filtered);
  }, [countries, region, country]);

  useEffect(() => {
    filterCountries();
  }, [filterCountries]);

  return (
    <div style={{ maxWidth: "1800px" }} className="mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCountries.map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
