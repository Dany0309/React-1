import React from "react";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://3d3594b01633b18c.mokky.dev/items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType.sortProperty}`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, [categoryId, sortType.setSortType]);

  const sortedItems = items.sort((a, b) => {
    if (sortType.sortProperty === "rating") {
      return b.rating - a.rating; // Сортировка по популярности
    } else if (sortType.sortProperty === "price") {
      return a.price - b.price; // Сортировка по цене
    } else if (sortType.sortProperty === "title") {
      return a.title.localeCompare(b.title); // Сортировка по алфавиту
    }
    return 0;
  });
  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} setSortType={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? (
          items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
        ) : sortedItems.length > 0 ? (
          sortedItems.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
        ) : (
          <p>Пицц пока нет</p> // Отображаем сообщение, если пицц нет
        )}
      </div>
    </>
  );
};

export default Home;
