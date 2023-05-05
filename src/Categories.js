import React from "react";

const Categories = ({ categories, filterItems, activeCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            onClick={() => filterItems(category)}
            type="button"
            className={`${
              activeCategory === category ? "filter-btn active" : "filter-btn"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
