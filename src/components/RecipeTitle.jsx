export default function RecipeTitle({getSimpleInformation}) {
  return (
    <div className="text-2xl text-teal-950 text-center font-bold p-3">
      <h1>{getSimpleInformation("strArea")} | {getSimpleInformation("strMeal")}</h1>
    </div>
  );
}
