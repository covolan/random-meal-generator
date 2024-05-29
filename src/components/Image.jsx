export default function Image({getSimpleInformation, currentMeal}) {
  return (
    <div className="p-3">
        <img
          src={getSimpleInformation("strMealThumb")}
          alt="picture of the meal"
          className="rounded-xl w-full h-full"
        />
    </div>
  );
}
