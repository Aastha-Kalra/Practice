import React, { useState } from "react";
import { useParams } from "react-router-dom";
const RecipeInfo = () => {
  const [item, setItem] = useState();
  const { MealId } = useParams();
  if (MealId != "") {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals[0]);
      });
  }

  return (
    <div className="bg-purple-400 p-6 rounded cursor-pointer h-full">
      {!item ? (
        ""
      ) : (
        <div className="text-white p-3 flex flex-col gap-6 justify-center items-center">
          <h1 className="font-bold text-4xl text-purple-950">{item.strMeal}</h1>
          <h1 className="font-bold text-4xl text-purple-950">
            {item.strCategory}
          </h1>
          <img
            src={item.strMealThumb}
            alt={item.strMeal}
            className="w-96 rounded-md"
          />

          <div className="flex justify-center items-center gap-5 w-full">
            <div className="w-full">
              <div className="text-4xl font-bold p-2 text-center text-purple-950">
                Recipe
              </div>

              <div className="text-2xl w-full bg-purple-950 p-10 hover:scale-95 transition-all ease-in duration-500">
                {item.strInstructions}
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-4xl font-bold text-center p-2 text-purple-950">
                Ingredients
              </h1>
              <div className="text-4xl font-bold grid grid-cols-3 w-full bg-purple-950 p-20 gap-10 text-sky-500 hover:scale-95 transition-all ease-in duration-500">
                <div>{item.strIngredient1}</div>
                <div>{item.strIngredient2}</div>
                <div>{item.strIngredient3}</div>
                <div>{item.strIngredient4}</div>
                <div>{item.strIngredient5}</div>
                <div>{item.strIngredient6}</div>
                <div>{item.strIngredient7}</div>
                <div>{item.strIngredient8}</div>
                <div>{item.strIngredient9}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeInfo;