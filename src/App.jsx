import { useState } from "react";

// TODO: Remover lógica dos ingredientes do html, investigar net::ERR_BLOCKED_BY_CLIENT ytb

function App() {
  const [currentMeal, setCurrentMeal] = useState([]);

  const fData = async () => {
    const resp = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await resp.json();
    console.log(data.meals);
    setCurrentMeal(data.meals);
  };

  const getSimpleData = (elem) => {
    if (currentMeal.length == 0) {
      return null;
    }
    return currentMeal[0][elem];
  };

  const getMealDescription = (meal) => {
    let description = getSimpleData(meal);
    description = description.split('\r\n');
    return (
      <>
      {description.map((elem, index) => {
        return (
          <p className="pt-3" key={elem + index}>{elem}</p>
        )
      })}
      </>
    )
  }

  const ingredientDisplay = (elem) => {
    let ingredientList = [];
    let placeholderIng = "strIngredient";
    let placeholderMea = "strMeasure";

    for (let i = 1; i < 20; i++) {
      if (
        elem[placeholderIng + String(i)] == "" ||
        elem[placeholderMea + String(i) == ""]
      ) {
        break;
      }
      ingredientList.push(
        elem[placeholderMea + String(i)] +
          " | " +
          elem[placeholderIng + String(i)]
      );
    }

    return ingredientList;
  };

  const genYtLink = (providedLink) => {
    if (providedLink) {
      let id = providedLink.split("?v=")[1];
      id = "http://www.youtube.com/embed/" + id;
      return id;
    }
  };

  return (
    <>
      <div className="main-div flex flex-col font-sans justify-center">
        <button
          onClick={fData}
          className="bg-sky-300 transition ml-auto mr-auto text-stone-800 ease-in-out hover:bg-sky-500 hover:scale-110 hover:-translate-y-1 font-sans text-lg font-medium rounded-md px-4 py-3 mt-10"
        >
          {" "}
          🥘 Generate Random Meal 🍟
        </button>
        {currentMeal.length == 0 ? null : (
          <>
            <div className="meal__title text-xl rounded-t-lg font-bold mr-auto ml-auto mt-20 p-5 background-bege">
              <h1>{getSimpleData("strMeal")}</h1>
            </div>
            <div className="meals background-bege rounded-lg col-auto grid mx-5 grid-rows-2 grid-cols-10 max-md:grid-rows-5 max-md:grid-cols-1 ">
              <div className="meal__img lg:col-span-3 col-span-4">
                {currentMeal.length == 0 ? null : (
                  <img
                    src={getSimpleData("strMealThumb")}
                    alt="picture of the meal"
                    className="rounded-tl-lg max-md:rounded-t-lg w-full h-full"
                  />
                )}
              </div>
              <div className="meal__description text-lg md:max-h-[420px] overflow-auto md:rounded-tr-lg indent-5 md:indent-8 text-justify p-4 md:p-5 lg:col-span-7 col-span-6">
                {getMealDescription("strInstructions")}
              </div>
              <div className="meal__ingredients text-lg font-semibold md:rounded-bl-lg p-3 md:p-4 text-center col-span-3 background-green-pastel">
                {currentMeal.map((elem) => {
                  return (
                    <div key={elem.idMeal} className="current-meal">
                      {ingredientDisplay(elem).map((elem, index) => (
                        <p key={elem + index}>{elem}</p>
                      ))}
                    </div>
                  );
                })}
              </div>
              <div className="meal__video background-green-pastel content-center col-span-5">
                <iframe
                  src={genYtLink(getSimpleData("strYoutube"))}
                  className=""
                  width="100%"
                  height="90%"
                  frameborder="0"
                ></iframe>
              </div>
              <div className="meal__extra md:rounded-br-lg background-green-pastel col-span-2"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
