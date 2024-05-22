export default function Title({getSimpleInformation}) {
  return (
    <div className="meal__title text-xl rounded-t-lg font-bold mr-auto ml-auto mt-20 p-5 background-bege">
      <h1>{getSimpleInformation("strMeal")}</h1>
    </div>
  );
}
