import Head from "next/head";
import React, { useState } from "react";
import ModeSelector from "../components/ModeSelector";
import SearchResultsTable from "../components/SearchResultsTable";
import getBreweries from "../utilities/getBreweries";

export default function Home() {
  const [currentMode, updateCurrentMode] = useState("city");
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
        <div className="">
          <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-amber-500 tracking-wide uppercase">
                Beer Near
              </h2>
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Find U.S breweries near you
              </p>
            </div>
          </div>
        </div>

        <div className="sm:rounded-lg mx-auto block w-fit">
          <div className="">
            <h3 className="block text-center sm:text-left mb-2 sm:-mb-2 text-lg leading-6 font-medium text-gray-900">
              Search mode
            </h3>
            <ModeSelector
              currentMode={currentMode}
              updateMode={updateCurrentMode}
            />
            <div className="block w-full sm:w-auto -mt-2 sm:inline-block sm:ml-2">
              {" "}
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
                  className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Search
                </button>
              </form>
            </div>
            
          </div>
        </div>

        {/* List of Breweries Returned from the Search Here */}
        <div className="my-4">
          {/* We pass down the fetched breweries state/array into this search results component */}
          <SearchResultsTable fetchedBreweries={fetchedBreweries} />
        </div>
      </div>
    </div>
  );
}
