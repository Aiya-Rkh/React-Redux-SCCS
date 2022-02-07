import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Categories, Sort, SushiBlock } from "../components";
import { fetchSushi } from "../redux/actions/sushi";

import { setCategory, setSortBy } from "../redux/actions/filters";
// !эти ссылки вывели из функции ,чтобы не производить лишний реренд!
const categoryItems = ["Классические", "Запеченные", "Сеты"];
const sortItems = [
  { name: "по цене", type: "price" },
  { name: "популярные", type: "popular" },
];

export default function Home() {
  const dispatch = useDispatch();
  // ! Тут из Reduxa берем данные
  const items = useSelector(({ sushi }) => sushi.items);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchSushi());
  }, [category]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        {/* Здесь мы в items передаем ссылки массивов выше */}
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryItems}
        />
        <Sort
          activeSortType={sortBy}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все суши</h2>
      <div className="content__items">
        {/* тут рендерим данные из Редакса на главной странице */}
        {items && items.map((obj) => <SushiBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}
