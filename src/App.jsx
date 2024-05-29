import { useState } from "react";
import Button from "./components/Button";
import RecipeTitle from "./components/RecipeTitle";
import Image from "./components/Image";
import Instructions from "./components/Instructions";
import Ingredients from "./components/Ingredients";
import Video from "./components/Video";
import Socials from "./components/Socials";

// net::ERR_BLOCKED_BY_CLIENT ytb =>> adblock
function App() {
  const [currentMeal, setCurrentMeal] = useState([]);

  const fetchData = async () => {
    const resp = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await resp.json();
    console.log(data.meals);
    setCurrentMeal(data.meals);
  };

  const dataIsEmpty = () => {
    if (currentMeal.length == 0) {
      return true;
    }
    return false;
  }

  const getSimpleInformation = (element) => {
    if (dataIsEmpty()) {
      return null;
    }
    return currentMeal[0][element];
  };

  return (
    <>
      <div
        className={
          "main-div flex flex-col font-sans bg-primary md:mx-5 " +
          (dataIsEmpty() ? "h-dvh" : "h-full")
        }
      >
        <Button fetchData={fetchData} />
        {dataIsEmpty() ? null : (
          <>
            <div className="bg-white md:m-2 mt-10 mb-10 md:mb-10 md:mt-10 md:p-5 rounded-3xl">
              <RecipeTitle getSimpleInformation={getSimpleInformation} />
              <div id="left-column" className="grid lg:grid-cols-10">
                <div className="p-2 lg:col-span-3">
                  <Image
                    currentMeal={currentMeal}
                    getSimpleInformation={getSimpleInformation}
                  />
                  <Ingredients currentMeal={currentMeal} />
                </div>
                <div id="right-column" className="p-2 lg:col-span-7">
                  <Instructions getSimpleInformation={getSimpleInformation} />
                  <Video getSimpleInformation={getSimpleInformation} />
                </div>
              </div>
              <Socials />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
