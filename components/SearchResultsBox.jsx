import React, {useEffect, useState} from 'react'

export default function SearchResultsBox(props) {
    console.log(props.fetchedBreweries)
    //State of default message on the search results box
    const [initialMessage,updateInitialMessage] = useState("Use the State and City selector to find breweries")

    //State of count of breweries found
    const [foundCount,updateFoundCount] = useState(props.fetchedBreweries.length)

    //Update the initial Message shown to be hidden if breweries are returned
    useEffect(()=> {
        let mounted = true;
        if (props.fetchedBreweries.count > 0 && mounted) {
            updateInitialMessage('')
        } else {
            updateInitialMessage(
              "Use the State and City selector to find breweries"
            );
        }
        return (mounted = false)
    },[props.fetchedBreweries])

    return (
      <div className="border-2 border-black-50  rounded-md p-4 text-center">
        <div className="text-lg">{foundCount} Breweries Found</div>
        <div className="italic text-sm">{initialMessage}</div>
        
        {/* We use the fetchedBreweries being passed in to generate a list of results. This will be further enhanced to be links that you click to open up more detail about the brewery, including a map and so forth*/}
        <div className="my-4 bg-gray-50">
          {props.fetchedBreweries.map((row, i) => {
            return <div key={i} className="p-2">{row.name}</div>;
          })}
        </div>
      </div>
    );
}
