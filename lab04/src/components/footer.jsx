import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10">
      <div className="container mx-auto grid grid-cols-3 gap-8">
        <div>
          <h5 className="text-lg font-bold">About us</h5>
          <p className="mt-2">
            Welcome to our website, a wonderful place to explore and learn how
            to cook like a pro.
          </p>
          <div className="mt-4 flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 rounded-l-md bg-gray-100 text-black w-64"
            />
            <button className="bg-pink-400 px-4 py-2 rounded-r-md">Send</button>
          </div>
        </div>
        <div>
          <h5 className="text-lg font-bold">Learn more</h5>
          <ul className="mt-2 space-y-2">
            <li>Our Cooks</li>
            <li>See our Features</li>
            <li>FAQ</li>
            <li>Gift Subscription</li>
            <li>Send Us Feedback</li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-bold">Recipes</h5>
          <ul className="mt-2 space-y-2">
            <li>What to Cook This Week</li>
            <li>Pasta</li>
            <li>Dinner</li>
            <li>Healthy</li>
            <li>Vegetarian</li>
            <li>Vegan</li>
            <li>Christmas</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
