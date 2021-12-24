import Head from "next/head";
import React, { useState } from "react";
import ModeSelector from "../components/ModeSelector";
import SearchResultsBox from "../components/SearchResultsBox";
import getBreweries from "../utilities/getBreweries";

export default function Home() {
  const [currentMode, updateCurrentMode] = useState("zip");
  const [fetchedBreweries, updateFetchedBreweries] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.form[0].value;
    getBreweries(search, currentMode, updateFetchedBreweries);
  }

  return (
    <div className="">
      <Head>
        <title>Beer Near</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Simple website to find breweries near you in the United States utilizing the openbrewerydb API"></meta>
        <meta
          name="keywords"
          content="beer,breweries,near,me,united,states,openbrewerydb"></meta>
      </Head>

      <div className="container mx-auto">
        {/* Header */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-amber-600 tracking-wide uppercase">
                Beer Near
              </h2>
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Find U.S breweries near you
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-center mb-4 text-lg leading-6 font-medium text-gray-900">
              Select a mode
            </h3>
            <ModeSelector
              currentMode={currentMode}
              updateMode={updateCurrentMode}
            />
            <div className="text-center my-4  text-sm text-gray-500">
              <p>Find breweries by {currentMode}</p>
            </div>
            <form className="mt-5 sm:flex sm:items-center justify-center">
              {/* Zip Code Input */}
              {currentMode === "zip" && (
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="zip" className="sr-only">
                    Zip
                  </label>
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    pattern="[0-9]*"
                    className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Zip Code"
                  />
                </div>
              )}
              {/* City Input */}
              {currentMode === "city" && (
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="email" className="sr-only">
                    City
                  </label>
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    pattern="[a-zA-Z]"
                    className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="US City Name"
                  />
                </div>
              )}
              <button
                onClick={(e) => handleSubmit(e)}
                className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                Search
              </button>
            </form>
          </div>
        </div>

        {/* List of Breweries Returned from the Search Here */}
        <div className="my-4">
          {/* We pass down the fetched breweries state/array into this search results component */}
          <SearchResultsBox fetchedBreweries={fetchedBreweries} />
        </div>
      </div>
    </div>
  );
}
