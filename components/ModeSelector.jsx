import React, {useState} from 'react'

export default function ModeSelector(props) {


    const handleClick = (mode) => {
        props.updateMode(mode);
    }

    return (
      <div className='sm:inline-block w-fit'>
        <div className="relative z-0 flex rounded-md justify-center">
          <button
            onClick={() => handleClick("city")}
            type="button"
            className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
            City
          </button>
          <button
            onClick={() => handleClick("zip")}
            type="button"
            className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
            Zip Code
          </button>
          <button
            onClick={() => handleClick("state")}
            type="button"
            className="-ml-1 relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
            State
          </button>
        </div>
      </div>
    );
}
