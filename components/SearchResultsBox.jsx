import React, { useEffect, useState } from "react";

export default function SearchResultsBox(props) {
  //State of default message on the search results box
  const [initialMessage, updateInitialMessage] = useState(
    "Use the State and City selector to find breweries"
  );

  //State of count of breweries found
  const [foundCount, updateFoundCount] = useState(
    props.fetchedBreweries.length
  );

 console.log(props.fetchedBreweries)
  //Update the initial Message shown to be hidden if breweries are returned
  useEffect(() => {
    let mounted = true;
    if (props.fetchedBreweries.length > 0 && mounted) {
      updateInitialMessage("");
      updateFoundCount(props.fetchedBreweries.length);
    } else {
      updateInitialMessage("Use the State and City selector to find breweries");
    }
    return (mounted = false);
  }, [props]);

  return (
    <div className=" p-4 text-center container mx-auto ">
      <div className="text-lg">{foundCount} Breweries Found</div>
      <div className="italic text-sm">{initialMessage}</div>
      {/* Results table*/}
      <div className="flex flex-col mt-4 ">
        <div className="-my-2 overflow-x-auto w-100">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Website
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {props.fetchedBreweries.map((row, i) => (
                    <tr key={i}>
                      <td className="text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {row.name}
                      </td>
                      <td className="text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {row.street}
                        <br></br> {row.city}, {row.state}. {row.postal_code}
                      </td>
                      <td className="text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {row.website_url}
                      </td>
                      <td className="text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {row.phone}
                      </td>
                      <td className="text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {row.brewery_type.toUpperCase()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
