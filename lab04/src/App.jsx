import { useState } from "react";

import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto p-4">
        <Header />
        <main className="flex flex-col items-center justify-center text-center py-10">
          <img src="../img/filter.png" alt="Filter" className="max-w-sm" />
          <h2 className="text-2xl font-bold mt-6">
            Sorry, no results were found for "cakescascsa"
          </h2>
          <img src="../img/warn.png" alt="Warning" className="w-20 h-20 mt-4" />
          <p className="text-lg mt-2">
            We have all your Independence Day sweets covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button className="bg-pink-300 text-pink-700 px-4 py-2 rounded-full">
              Sweet Cake
            </button>
            <button className="bg-purple-300 text-purple-700 px-4 py-2 rounded-full">
              Black Cake
            </button>
            <button className="bg-red-300 text-red-700 px-4 py-2 rounded-full">
              Pozole Verde
            </button>
            <button className="bg-green-300 text-green-700 px-4 py-2 rounded-full">
              Healthy food
            </button>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
