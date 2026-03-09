"use client";

import { Search, MapPin } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";

const Hero = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [searchJob, setSearchJob] = useState("");

  // Load countries
  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  // Load states
  useEffect(() => {
    if (selectedCountry) {
      setStates(State.getStatesOfCountry(selectedCountry));
      setCities([]);
      setSelectedState("");
      setSelectedCity("");
    }
  }, [selectedCountry]);

  // Load cities
  useEffect(() => {
    if (selectedCountry && selectedState) {
      setCities(City.getCitiesOfState(selectedCountry, selectedState));
      setSelectedCity("");
    }
  }, [selectedState]);

  const handleSearch = () => {
    console.log({
      job: searchJob,
      country: selectedCountry,
      state: selectedState,
      city: selectedCity,
    });
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-10 py-16 px-6 lg:px-20 ">

      {/* LEFT SIDE */}
      <div className="max-w-xl w-full">

        <h1 className="text-4xl font-bold text-[#25324B] leading-tight">
          Find your <span className="text-[#4F46E5]">dream job</span> today
        </h1>

        <p className="text-lg text-[#515B6F] mt-4">
          Great platform for job seekers who want to reach new career heights
          and discover exciting startup opportunities.
        </p>

        {/* SEARCH BOX */}
        <div className="bg-white z-50 shadow-lg w-fit rounded-xl p-4 mt-8 flex flex-col lg:flex-row gap-3">

          {/* JOB INPUT */}
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 flex-1">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Job title or keyword"
              value={searchJob}
              onChange={(e) => setSearchJob(e.target.value)}
              className="outline-none w-full text-sm"
            />
          </div>

          {/* COUNTRY */}
          <select
            className="border rounded-lg px-3 py-2 text-sm"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="">Country</option>
            {countries.map((country) => (
              <option key={country.isoCode} value={country.isoCode}>
                {country.name}
              </option>
            ))}
          </select>

          {/* STATE */}
          <select
            className="border rounded-lg px-3 py-2 text-sm"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            disabled={!states.length}
          >
            <option value="">State</option>
            {states.map((state) => (
              <option key={state.isoCode} value={state.isoCode}>
                {state.name}
              </option>
            ))}
          </select>

          {/* CITY */}
          <select
            className="border rounded-lg px-3 py-2 text-sm"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!cities.length}
          >
            <option value="">City</option>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>

          {/* SEARCH BUTTON */}
          <button
            onClick={handleSearch}
            className="bg-[#4F46E5] z-50 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-[#4338CA] transition"
          >
            <MapPin size={18} />
            Search
          </button>
        </div>

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div>
        <Image
          src="/user.svg"
          alt="Hero"
          width={450}
          height={500}
          className="w-full max-w-md"
        />
      </div>

    </section>
  );
};

export default Hero;