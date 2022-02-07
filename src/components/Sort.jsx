import React, { useEffect, useRef, useState } from "react";
// ! обернули в react.memo .чтобы не ререндерился-делает поверхностное сравнение,делает ререндер только в случае изменеия ссылок на пропсы.
const Sort = React.memo(function Sort({
  items,
  onClickSortType,
  activeSortType,
}) {
  const [popUp, setPopUp] = useState(false);
  const [changeColor, setChangeColor] = useState(0);
  const color = items.find((obj) => obj.type === activeSortType).name;

  const changePopup = (index) => {
    setChangeColor(index);
  };

  // !для хранения ссылок(всегда на момент вызова возвращает актульное значение)
  // !улсовно задает точный адрес(ссылку) без изменения элементу!
  // !дает доступ к определн.элементу!
  const sortRef = useRef();

  // !для лучшей производительности создавать функции ,содержащие ананомн функц и уже потом новую функцию передовать в события(OnClick).
  const togglePopUp = () => {
    setPopUp(!popUp);
  };

  // ! клик мы использовали чтобы скрыть попап,задали условие с помощью sortRef И передали  в функцию false
  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setPopUp(false);
    }
  };

  const onSelectItem = (index) => {
    onClickSortType(index);
    setPopUp(false);
  };
  // ! useEffect если передать в массив зависимости элемент,то он будет рендерится только в той области,которую задали
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          className={popUp ? "rotated" : ""}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={togglePopUp}>{color}</span>
      </div>
      {popUp && (
        <div className="sort__popup">
          <ul>
            {items &&
              items.map((obj, index) => (
                <li
                  onClick={() => onSelectItem(obj.type)}
                  className={activeSortType === obj.type ? "active" : ""}
                  key={`${obj.type}_${index}`}
                >
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default Sort;
