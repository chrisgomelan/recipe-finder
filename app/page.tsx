"use client";

import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import RecipeGrid from "@/components/RecipeGrid";
import { useState } from "react";
import { Recipe } from "@/types/recipe";

export default function Home() {
const [search, setSearch] = useState("");
const [recipes, setRecipes] = useState<Recipe[]>([]);
const api = process.env.NEXT_PUBLIC_RECIPE_API_KEY;


async function searchRecipes(query: string){
  // Implementation for fetching recipes
  const response = await fetch(`${api}/search.php?s=${query}`);
  const data = await response.json();
  console.log(data);
  setRecipes(data.meals || []);
}




  return (
    <div className="flex flex-col flex-1 items-center justify-center p-10 bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <SearchBar searchTerm={search} setSearchTerm={setSearch} onSearch={searchRecipes} />

      <RecipeGrid recipes={recipes} />
      
    </div>
  );
}
