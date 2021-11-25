import Head from "next/head";
import React, { useState } from "react";
import SearchResultsBox from "../components/SearchResultsBox";

export default function Home() {

  //Set a state that represents an array of the breweries fetched, initially starts out as an empty array
  const fakeBreweryList = [{name: 'Beer Me Bitch'},{name:'Black Out'},{name:'White Girl Wasted'}]
  const [fetchedBreweries, updateFetchedBreweries] = useState([]);

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

      {/* Navigation Bar Here */}
      <div className="pt-8 pb-8 bg-blue-200 text-center">
        Navigation bar here
      </div>

      <div className="container mx-auto">
        {/* Site Title Logo Here */}
        <div className="my-4 pt-32 pb-32 h-auto bg-gray-50">
          <div className="text-center">Site Title and Logo here</div>
        </div>

        {/* State/City Selector UI here */}
        <div className="my-4 p-4 bg-blue-200 text-center">
          City/State Dropdown Component Here
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
