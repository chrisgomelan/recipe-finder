export default function RecipeGrid({searchTerm}: {searchTerm: string}) {

    return <div className="recipe-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <div className="recipe-card bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
            <h3 className="recipe-title text-lg font-semibold mb-2">Recipe Title</h3>
            <p className="recipe-description text-gray-600 dark:text-gray-300">Recipe description goes here.</p>
        </div>
        <div className="recipe-card bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
            <h3 className="recipe-title text-lg font-semibold mb-2">Recipe Title</h3>
            <p className="recipe-description text-gray-600 dark:text-gray-300">Recipe description goes here.</p>
        </div>
        <div className="recipe-card bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
            <h3 className="recipe-title text-lg font-semibold mb-2">Recipe Title</h3>
            <p className="recipe-description text-gray-600 dark:text-gray-300">Recipe description goes here.</p>
        </div>
    </div>


}