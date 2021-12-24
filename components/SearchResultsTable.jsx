import React, { useEffect, useState } from "react";
import { parsePhoneNumber, parsePhoneNumberWithError } from "libphonenumber-js";

export default function SearchResultsTable(props) {
  //State of default message on the search results box
  const [initialMessage, updateInitialMessage] = useState(
    "Use the State and City selector to find breweries"
  );

  //State of count of breweries found
  const [foundCount, updateFoundCount] = useState(
    props.fetchedBreweries.length
  );

  //Update the initial Message shown to be hidden if breweries are returned
  useEffect(() => {
    let mounted = true;
    if (props.fetchedBreweries.length > 0 && mounted) {
      updateInitialMessage(
        <div className="text-xs italic">
          Brewery not on the list? Report it{" "}
          <a
            href="https://github.com/openbrewerydb/openbrewerydb"
            className="text-blue-400">
            here
          </a>
        </div>
      );
    } else {
      updateInitialMessage("Use the State and City selector to find breweries");
    }
    updateFoundCount(props.fetchedBreweries.length);
    return (mounted = false);
  }, [props]);

  const formatPhone = (row) => {
    {
      let phone;
      let formattedPhone;
      if (typeof row === "string") {
        phone = parsePhoneNumber(row,'US').formatNational();
        formattedPhone = phone;
        return <a href={`tel:${formattedPhone}`}>{formattedPhone}</a>;
      } else {
        formattedPhone = "";
        return formattedPhone;
      }
    }
  }

  return (
    <div className="text-center max-w-7xl mx-auto   py-4">
      <div className="text-lg">{foundCount} Breweries Found</div>
      {/* <div className="text-xs italic">
        Brewery not on the list? Report it{" "}
        <a href="https://github.com/openbrewerydb/openbrewerydb" className="text-blue-400">here</a>
      </div> */}
      <div className="italic text-sm">{initialMessage}</div>
      {/* Results table*/}
      <div className="flex flex-col mt-6 px-4 lg:px-0">
        <div className="-my-2 overflow-x-auto ">
          <div className="align-middle inline-block min-w-full ">
            <div className=" overflow-hidden border-b border-gray-200 sm:rounded-lg ">
              <table className=" min-w-full divide-y divide-gray-200">
                <thead className="bg-amber-500">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Website
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
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
                        <a href={row.website_url} target="_blank">
                          {row.website_url}
                        </a>
                      </td>
                      <td className="text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {formatPhone(row.phone)}
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
