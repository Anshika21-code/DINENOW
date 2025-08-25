import React from "react";

const DishCard = ({ data }) => {
  return (
    <div className="w-64 bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4">
      <img
        src={data.image}
        alt={data.name}
        className="w-full h-40 object-cover rounded-xl"
      />
      <h3 className="mt-3 font-semibold text-lg">{data.name}</h3>
      <p className="text-gray-500 text-sm">{data.desc}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-red-500 font-bold">₹{data.price}</span>
        <button className="bg-gray-100 rounded-full p-2 hover:bg-gray-200">
          +
        </button>
      </div>
    </div>
  );
};

export default DishCard;
