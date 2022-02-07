0import React, { useState } from "react";
// !не производит ререндер
const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  console.log(activeCategory);

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
