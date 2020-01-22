import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import NavBar from "./components/NavBar";
import RestaurantCard from "./components/RestaurantCard";
import SortButtons from "./components/SortButtons";

// Custom hook is not used here because using 'import' to load local json file
// in custom hook is giving a Webpack error.

const App = () => {
  const [restaurants, setRestaurants] = useState(null);

  const loadJson = async () => {
    const load = await import("./data/restaurants.json");
    const data = load.restaurants;
    setRestaurants(data);
  };

  useEffect(() => {
    loadJson();
  }, []);

  // Callback function to update state of Parent component from Child.

  const updateRestaurants = async data => {
    // This await line is needed otherwise the state updating was messing up.
    // It update SortButtons props but the App state was not being updated in real time.
    // So first we clear the state and wait for it and then update it which forces
    // RestaurantCard component to be re-rendered.
    await setRestaurants("");
    setRestaurants(data);
  };

  return (
    <>
      <NavBar />
      <div className="main-title">Restaurants</div>
      <SortButtons data={restaurants} updateRestaurants={updateRestaurants} />
      <RestaurantCard data={restaurants} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
