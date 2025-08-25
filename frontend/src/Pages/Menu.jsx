import React, { useEffect, useState } from "react";
import DishCard from "../components/DishCard";
import data from "../restApi.json"; // ✅ Import JSON file directly
import Navbar from "../components/Navbar";

const Menu = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
  if (data.length > 0) {
    setDishes(data[0].dishes); // Load dishes from the first restaurant
  }
}, []);

  return (
  <><Navbar />
  <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Top dishes near you</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dishes && dishes.length > 0 ? (
          dishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))
        ) : (
          <p>No dishes available</p>
        )}
      </div>
    </div></>
);

};

export default Menu;
