import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import Header from "../../components/header";
export default function Category() {
  const [cate, setCate] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
      .then((res) => setCate(res.data.meals))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(id);
  console.log(cate);
  return (
    <div>
      <Header />
      <div className={styles.cateList}>
        {cate.map((cate) => (
          <div className={styles.cateBox} key={cate.idMeal}>
            <div>
              <Link to={`/search/${cate.strMeal}`}>
                <img
                  className={styles.cateImg}
                  src={cate.strMealThumb}
                  alt=""
                />
                {cate.strMeal}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link className="homeLink" to={"/"}>
        <HomeIcon />
      </Link>
    </div>
  );
}
