export default function Ingredients({ currentMeal }) {
  const getIngredients = (elem) => {
    let ingredients = [];
    let ingredientsName = "strIngredient";
    let measureName = "strMeasure";

    for (let i = 1; i < 20; i++) {
      if (
        elem[ingredientsName + String(i)] == "" ||
        elem[measureName + String(i) == ""]
      ) {
        break;
      }
      ingredients.push(
        elem[measureName + String(i)] +
          " | " +
          elem[ingredientsName + String(i)]
      );
    }

    return ingredients;
  };

  return (
    <div className="meal__ingredients text-teal-800 text-lg font-semibold p-3 text-center">
      <h1 className="text-xl font-bold text-teal-900 pb-2">Ingredients</h1>
      {currentMeal.map((item) => {
        return (
          <div key={item.idMeal} className="current-meal">
            {getIngredients(item).map((ingredient, index) => (
              <p key={ingredient + index}>{ingredient}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
}
