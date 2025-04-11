import React from "react";

const SearchBar = ({ country, region, setCountry, setRegion }) => {
  let regions = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Polar",
    "",
  ];

  const changeCountry = (e) => {
    setCountry(e.target.value);
    setRegion("");
  };

  return (
    <>
      <div
        style={{ maxWidth: "1800px" }}
        className="mx-auto flex justify-between items-center my-20"
      >
        <div className="shadow-xl px-6 py-4 rounded-md w-full max-w-md flex items-center gap-2 dark:bg-gray-800 focus-within:ring-2 focus-within:ring-white">
          <img src="" alt="" />
          <input
            type="text"
            name="country"
            value={country}
            onChange={changeCountry}
            className="outline-none border-none text-sm w-full dark:bg-gray-800 dark:text-white focus:outline-none"
            placeholder="Search for A Country..."
          />
        </div>
        <div className="relative group ml-4">
          <div className="flex justify-between items-center px-6 py-4 w-40 cursor-pointer shadow-lg bg-white dark:bg-gray-800 rounded-md text-gray-700 dark:text-white">
            <span>{region ? region : "Filter By Region"}</span>
            <img src="" alt="" />
          </div>

          <ul className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-md rounded-md p-2 mt-1 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-200 z-10">
            {regions.map((region, index) => {
              return (
                <li
                  key={index}
                  className="py-1 px-2 hover:text-sm hover:text-gray-600 dark:hover:text-gray-400"
                  onClick={() => setRegion(region)}
                >
                  {region || "All Regions"}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
