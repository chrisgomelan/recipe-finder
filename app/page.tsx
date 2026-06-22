"use client";

import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import RecipeGrid from "@/components/RecipeGrid";
import { useState } from "react";

export default function Home() {
const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <SearchBar searchTerm={search} setSearchTerm={setSearch} />

      <RecipeGrid searchTerm={search} />
      
    </div>
  );
}
