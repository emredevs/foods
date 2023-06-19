import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import FoodForm from "../food-form";
export default function Navbar() {
  const [navbar, setNavbar] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => setNavbar(res.data.meals));
  }, []);
  return (
    <div>
      <ul className={styles.categoryContainer}>
        {navbar.map((cate, index) => (
          <li key={index}>
            <Link to={`/${cate.strCategory}`}>{cate.strCategory}</Link>
          </li>
        ))}
        {!formOpen && (
          <SearchIcon
            style={{ cursor: "pointer" }}
            onClick={() => {
              setFormOpen(true);
            }}
          />
        )}
        <FoodForm formOpen={formOpen} />
        {formOpen && (
          <CloseIcon
            style={{ cursor: "pointer" }}
            onClick={() => setFormOpen(false)}
          />
        )}
      </ul>
    </div>
  );
}
