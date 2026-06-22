"use client";
import {useState} from "react";


export default function SearchBar(){
    const [searchTerm, setSearchTerm] = useState("");
    
    return(
        <div className="search-bar flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-900 p-4 rounded-md shadow-md mt-4">
            <input
            type="text"
            className="search-input p-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            placeholder="Search for a recipe..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Search
            </button>
        </div>
    )
}
