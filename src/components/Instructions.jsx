export default function Instructions({ getSimpleInformation }) {
  const getMealInstructions = (meal) => {
    let instructions = getSimpleInformation(meal);
    instructions = instructions.split("\r\n");
    return (
      <>
        {instructions.map((paragraph, index) => {
          return (
            <p className="pt-3" key={paragraph + index}>
              {paragraph}
            </p>
          );
        })}
      </>
    );
  };

  return (
    <div className="meal__description text-teal-800 font-medium text-lg md:max-h-[600px] overflow-auto indent-5 text-justify p-3">
      {" "}
      <h1 className="text-center text-xl font-bold text-teal-900">Instructions</h1>
      {getMealInstructions("strInstructions")}
    </div>
  );
}
