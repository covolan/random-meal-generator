export default function Instructions({ getSimpleInformation }) {
  const getRecipeInstructions = (meal) => {
    let instructions = getSimpleInformation(meal);

    // split each instruction paragraph
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
    <div className="text-teal-800 font-medium text-lg md:max-h-[600px] overflow-auto indent-5 text-justify p-3">
      <RecipeInstructionsTitle />
      {getRecipeInstructions("strInstructions")}
    </div>
  );
}

function RecipeInstructionsTitle() {
  return (
    <h2 className="text-center text-xl font-bold text-teal-900">
      Instructions
    </h2>
  );
}
