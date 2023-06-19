import React, { useContext, useEffect } from "react";
import axios from "axios";
import FoodContext from "../../context";
import Header from "../../components/header";
import FoodList from "../../components/food-list";

export default function HomeContainer() {
  const { setFoods } = useContext(FoodContext);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => setFoods(res.data.categories));
  }, [setFoods]);

  return (
    <div>
      <Header />
      <FoodList />
    </div>
  );
}
