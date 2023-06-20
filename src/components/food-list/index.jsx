import React, { useContext, useState } from "react";
import FoodContext from "../../context";
import styles from "./styles.module.css";
import ReplyAllOutlinedIcon from "@mui/icons-material/ReplyAllOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FoodModal from "../food-modal";
import { Link } from "react-router-dom";
export default function FoodList() {
  const { foods } = useContext(FoodContext);
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState(null);

  return (
    <div className={styles.foodList}>
      {foods.map((food) => (
        <div className={styles.foodBox} key={food.idCategory}>
          {modalId === food.idCategory && (
            <FoodModal modal={modal}>
              <div>{food.strCategoryDescription}</div>
              <span onClick={() => setModal(false)}>
                <ReplyAllOutlinedIcon />
              </span>
            </FoodModal>
          )}

          <div>
            <Link to={`/${food.strCategory}`}>
              <img src={food.strCategoryThumb} alt="" />
              {food.strCategory}
            </Link>
          </div>
          <button
            onClick={() => {
              setModalId(food.idCategory);
              setModal(true);
            }}
          >
            <MenuBookIcon fontSize="large" />
          </button>
        </div>
      ))}
    </div>
  );
}
