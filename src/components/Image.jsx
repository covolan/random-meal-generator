export default function Image({getSimpleInformation, currentMeal}) {
  return (
    <div className="meal__img p-3">
      {currentMeal.length == 0 ? null : (
        <img
          src={getSimpleInformation("strMealThumb")}
          alt="picture of the meal"
          className="rounded-xl w-full h-full"
        />
      )}
    </div>
  );
}
