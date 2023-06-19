import HomeIcon from "@mui/icons-material/Home";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import Header from "../../components/header";
export default function Search() {
  const { id } = useParams();
  const [searchFood, setSearchFood] = useState([]);
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
      .then((res) => setSearchFood(res.data.meals));
  }, [id]);
  console.log(searchFood);
  return (
    <>
      <Header />
      <div className={styles.searchList}>
        {searchFood.map((food) => (
          <div className={styles.searchBox} key={food.idMeal}>
            <img src={food.strMealThumb} alt="" />
            <div>
              <div>Area: {food.strArea}</div>
              <div>Meal: {food.strMeal}</div>
              <div>Category: {food.strCategory}</div>
              İçindekiler:
              <div>{food.strIngredient1},</div>
              <div>{food.strIngredient2},</div>
              <div>{food.strIngredient3},</div>
              <div>{food.strIngredient4},</div>
              <div>{food.strIngredient5},</div>
              <div>{food.strIngredient6},</div>
              <div>{food.strIngredient7},</div>
              <div>{food.strIngredient8},</div>
              <div>{food.strIngredient9},</div>
              <div>{food.strIngredient10}</div>
              <div>{food.strIngredient11}</div>
            </div>
          </div>
        ))}
        <Link className="homeLink" to={"/"}>
          <HomeIcon />
        </Link>
      </div>
    </>
  );
}
