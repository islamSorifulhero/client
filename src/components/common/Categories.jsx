import React from "react";
import garbage from "../../assets/garbage.jpg";
import construction from "../../assets/construction.jpg";
import property from "../../assets/property.jpg";
import road from "../../assets/road.jpg";

const categories = [
  { id: 1, name: "Garbage", image: garbage },
  { id: 2, name: "Illegal Construction", image: construction },
  { id: 3, name: "Broken Public Property", image: property },
  { id: 4, name: "Road Damage", image: road },
];

const Categories = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Issue Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            <img src={cat.image} alt={cat.name} className="w-full h-40 object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg text-green-700">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
