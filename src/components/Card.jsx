import React from "react";

const Card = ({ country }) => {
  return (
    <div className="max-w-sm shadow-xl mb-10 rounded-md flex flex-col overflow-hidden dark:bg-gray-800 dark:text-white">
      <img
        src={country.flag}
        alt={`${country.name} flag`}
        style={{ width: "100%", height: "230px", objectFit: "cover" }}
      />
      <div className="p-7 flex flex-col justify-between">
        <h2 className="text-2xl font-bold mb-6">{country.name}</h2>
        <p className="mb-4">
          <strong>Population: </strong>
          {country.population}
        </p>
        <p className="mb-4">
          <strong>Region: </strong>
          {country.region}
        </p>
        <p className="mb-10">
          <strong>Capital: </strong>
          {country.capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
