import { useState } from "react";

export default function Ingredients({ currentMeal }) {
  const getIngredients = (elem) => {
    let ingredients = [];
    let ingredientsName = "strIngredient";
    let measureName = "strMeasure";

    // Formatting the ingredients and returning them
    for (let i = 1; i < 20; i++) {
      if (
        elem[ingredientsName + String(i)] == "" &&
        elem[measureName + String(i)] == ""
      ) {
        break;
      }
      if (elem[measureName + String(i)] == "") {
        ingredients.push(elem[ingredientsName + String(i)]);
      } else {
        ingredients.push(
          elem[measureName + String(i)] +
            " | " +
            elem[ingredientsName + String(i)]
        );
      }
    }

    return ingredients;
  };

  return (
    <div className="meal__ingredients text-teal-800 text-lg font-semibold p-3 text-center">
      <h1 className="text-xl font-bold text-teal-900 pb-2">Ingredients</h1>
      {currentMeal.map((item) => {
        return (
          <div
            key={item.idMeal}
            className="current-meal flex flex-col items-center"
          >
            {getIngredients(item).map((ingredient, index) => (
              <ToggleableIngredientButton
                key={ingredient + index}
                ingredient={ingredient}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

function ToggleableIngredientButton({ ingredient }) {
  const [toggleState, setToggleState] = useState(false);

  const handleClick = () => {
    setToggleState(!toggleState);
  };

  return (
    <p
      onClick={handleClick}
      className={
        "bg-slate-100 cursor-pointer my-1 px-3 rounded-md w-fit " +
        (toggleState ? "line-through text-slate-600" : null)
      }
    >
      {ingredient}
    </p>
  );
}
