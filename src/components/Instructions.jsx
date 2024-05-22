export default function Instructions({getSimpleInformation}) {
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
    <div className="meal__description font-normal text-lg md:max-h-[420px] overflow-auto md:rounded-tr-lg indent-5 md:indent-8 text-justify p-4 md:p-5 lg:col-span-7 col-span-6">
      {getMealInstructions("strInstructions")}
    </div>
  );
}
