import { useState, useEffect } from "react";
import axios from "axios";

// PLEASE NOTE THIS HOOK IS NOT USED IN THE APPLICATION.
// I ALREADY WROTE IT SO I DID NOT REMOVED IT FROM THE FILES
// WHEN USING IMPORT KEYWORD TO IMPORT LOCAL JSON FILE IT GIVES A WEBPACK ERROR.
// THIS HOOK CAN STILL BE USED WITH AXIOS OR FETCH TO GET DATA FROM SERVER.
// BUT AS WE ARE NOT FETCHING DATA FROM THE SERVER BUT USING A LOCAL JSON FILE. WE DON'T NEED THIS.

export const useLoadJSON = baseUrl => {
  const [data, setData] = useState();
  const loadJson = async () => {
    try {
      const load = await axios.get(baseUrl);
      const data = load.restaurants;
      const sort = data.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      setData(sort);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadJson();
  });

  return data;
};
