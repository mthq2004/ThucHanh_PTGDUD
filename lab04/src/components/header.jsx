import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-white">
      <img src="../img/logo.png" alt="Logo" className="h-10" />
      <div className="relative w-80">
        <img
          src="../img/search.png"
          alt="Search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 outline-none"
        />
      </div>
      <nav>
        <ul className="flex space-x-6 text-gray-600">
          <li>
            <a href="#" className="hover:text-pink-500">
              What to cook
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              Recipes
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              Ingredients
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              Occasions
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              About Us
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-pink-100 px-4 py-2 rounded-lg shadow-sm">
          <img src="../img/box.png" alt="Recipe Box" className="h-8" />
          <span className="ml-2 font-bold text-pink-500">Your Recipe Box</span>
        </div>
        <div className="w-12 h-12 rounded-full bg-pink-300 flex items-center justify-center overflow-hidden border border-black">
          <img
            src="../img/warn.png"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
