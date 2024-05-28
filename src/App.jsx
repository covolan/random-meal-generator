import { useState } from "react";
import Button from "./components/Button";
import Title from "./components/Title";
import Image from "./components/Image";
import Instructions from "./components/Instructions";
import Ingredients from "./components/Ingredients";
import Video from "./components/Video";

// investigar net::ERR_BLOCKED_BY_CLIENT ytb, don't display video if empty, don't display "|" if no measure.

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
      <div
        className={
          "main-div flex flex-col font-sans bg-primary md:mx-5 " +
          (currentMeal.length == 0 ? "h-dvh" : "h-full")
        }
      >
        <Button fetchData={fetchData} />
        {currentMeal.length == 0 ? null : (
          <>
            <div className="meals bg-white md:m-2 mt-10 md:mt-10 md:p-5 rounded-3xl">
              <Title getSimpleInformation={getSimpleInformation} />
              <div className="main-content grid lg:grid-cols-10">
                <div className="left-items p-2 lg:col-span-3">
                  <Image
                    currentMeal={currentMeal}
                    getSimpleInformation={getSimpleInformation}
                  />
                  <Ingredients currentMeal={currentMeal} />
                </div>
                <div className="right-items p-2 lg:col-span-7">
                  <Instructions getSimpleInformation={getSimpleInformation} />
                  <Video getSimpleInformation={getSimpleInformation} />
                </div>
              </div>
              {/* <div className="meal__extra md:rounded-br-lg background-green-pastel col-span-2"></div> */}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
