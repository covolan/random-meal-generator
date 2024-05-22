export default function Image({getSimpleInformation, currentMeal}) {
  return (
    <div className="meal__img lg:col-span-3 col-span-4">
      {currentMeal.length == 0 ? null : (
        <img
          src={getSimpleInformation("strMealThumb")}
          alt="picture of the meal"
          className="rounded-tl-lg max-md:rounded-t-lg w-full h-full"
        />
      )}
    </div>
  );
}
