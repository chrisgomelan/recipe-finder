

export default function RecipeGrid( {recipes}: {recipes: any[]}){ {

    // function for fetching ingredients and measures from the recipe object
    function getIngredients(recipe: any) {
    const ingredients = [];
    for(let i = 1; i<=20; i++){
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];
        
        if(ingredient !== "" && ingredient !== null && measure !== "" && measure !== null){
            ingredients.push(` ${ingredient} - ${measure}  `);
        } else {
            break;
        } 
    }
    return ingredients;
    }

    if(recipes.length === 0 || recipes === null){
        return <div className="text-center text-gray-700 dark:text-gray-300 mt-10">No recipes found. Try searching for something else!</div>
    }

    

    return <div className="recipe-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

            {recipes.map((recipe) => (

                

                <div className="recipe-card bg-white dark:bg-gray-800 rounded-lg shadow-md p-4" key={recipe.idMeal}>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-48 object-cover rounded-md mb-4" />
                     <h3 className="text-center font-bold text-lg">{recipe.strMeal}</h3>
                     <h4 className="text-lg text-center font-400 text-sm text-gray-700 dark:text-gray-300">{recipe.strCategory}</h4>

                    <h5 className="text-md my-2 font-bold text-gray-700 dark:text-gray-300">Instruction</h5>
                    <div className="text-sm text-gray-700 dark:text-gray-300">{recipe.strInstructions}</div>

                    <h5 className="text-md my-2 font-bold text-gray-700 dark:text-gray-300">Ingredients</h5>
                    <ul className="text-sm text-gray-700 dark:text-gray-300">
                        {getIngredients(recipe).map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>

                    <h2 className="text-md my-3 font-light">Tutorial: <a className="text-blue-500 hover:text-blue-700 underline" href={recipe.strYoutube} target="_blank" rel="noopener noreferrer">Watch on Youtube!</a></h2>
                 </div>
            )  ) }
    </div>


}
}