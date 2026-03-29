import React, { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Homepage/Banner/Banner";
import Players from "./components/Homepage/Players/Players";

const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const App = () => {
  const playersPromise = fetchPlayers();
  return (
    <div>
      <Navbar></Navbar>

      <Banner></Banner>

      <Suspense
        fallback={<span className="loading loading-ring loading-lg"></span>}
      >
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </div>
  );
};

export default App;
