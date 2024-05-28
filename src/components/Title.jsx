export default function Title({getSimpleInformation}) {
  return (
    <div className="meal__title text-2xl text-teal-950 text-center font-bold p-3">
      <h1>{getSimpleInformation("strArea")} | {getSimpleInformation("strMeal")}</h1>
    </div>
  );
}
