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
    <div className="meal__ingredients text-lg font-semibold md:rounded-bl-lg p-3 md:p-4 text-center col-span-3 background-green-pastel">
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
