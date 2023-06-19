import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FoodForm({ formOpen }) {
  const [formFood, setFormFood] = useState("");
  const navigation = useNavigate();

  if (!formOpen) return;

  const foodForm = (e) => {
    navigation(`/search/${formFood}`);
  };
  return (
    <div>
      <form onSubmit={foodForm}>
        <input
          style={{
            color: "gray",
            borderRadius: "10px",
            outline: "0",
            border: "0",
          }}
          type="text"
          onChange={(e) => setFormFood(e.target.value)}
          placeholder="food name"
        />
      </form>
    </div>
  );
}
