import { MdKitchen } from "react-icons/md";
export default function Navbar(){
    return(
        <nav className="navbar flex-col items-center ">
            <div className="flex align-center justify-center items-center mb-10">
                <MdKitchen className="text-2xl text-gray-800 dark:text-white mr-2" />
                <h1 className="font-bold text-xl text-gray-800 dark:text-white">Hungry Ninja</h1>
            </div>
            <h2 className="font-600 text-gray-800 dark:text-white">
                Find your Favorite Recipe
            </h2>
        </nav>
    )
}