import { useState } from "react";
import Button from "./components/Button";
import Title from "./components/Title";
import Image from "./components/Image";
import Instructions from "./components/Instructions";
import Ingredients from "./components/Ingredients";
import Video from "./components/Video";

// investigar net::ERR_BLOCKED_BY_CLIENT ytb

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

  const getSimpleInformation = (element) => {
    if (currentMeal.length == 0) {
      return null;
    }
    return currentMeal[0][element];
  };

  return (
    <>
      <div className="main-div flex flex-col font-sans justify-center">
        <Button fetchData={fetchData} />
        {currentMeal.length == 0 ? null : (
          <>
            <Title getSimpleInformation={getSimpleInformation} />
            <div className="meals background-bege rounded-lg col-auto grid mx-5 grid-rows-2 grid-cols-10 max-md:grid-rows-5 max-md:grid-cols-1 ">
              <Image
                currentMeal={currentMeal}
                getSimpleInformation={getSimpleInformation}
              />
              <Instructions getSimpleInformation={getSimpleInformation} />
              <Ingredients currentMeal={currentMeal} />
              <Video getSimpleInformation={getSimpleInformation} />
              <div className="meal__extra md:rounded-br-lg background-green-pastel col-span-2"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
