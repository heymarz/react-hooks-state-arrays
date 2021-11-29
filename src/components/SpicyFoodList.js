import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  //using a state variable to hold an array of spicy foods;

  const [filterBy, setFilterBy] = useState("All");
  const foodToDisplay = foods.filter((food)=>{
    if(filterBy==="All"){
      return true;
    }else{
      return food.cuisine === filterBy
    }
  })
  const foodList = foodToDisplay.map((food)=>(
    <li key={food.id} onClick={()=>handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ))
// using that array to display each spicy food as an <li>;
function handleAddFood() {
  const newFood = getNewSpicyFood();
  const newFoodArray = [...foods, newFood];
  setFoods(newFoodArray);
}

// adding a new spicy food to the array when the button is clicked.
  function handleLiClick(id){
    const newFoodArray = foods.filter((food)=> food.id !== id);
    setFoods(newFoodArray);
  }

  function handleFilterChange(event){
    setFilterBy(event.target.value);
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>
        {foodList}
      </ul>
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="American">American</option>
          <option value="Sichuan">Sichuan</option>
          <option value="Thai">Thai</option>
          <option value="Mexican">Mexican</option>
        </select>
    </div>
  );
}

export default SpicyFoodList;
