import React, { Suspense, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Homepage/Banner/Banner";
import Players from "./components/Homepage/Players/Players";

const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const App = () => {
  const [coin, setCoin] = useState(0)
  const playersPromise = fetchPlayers();
  return (
    <div>
      <Navbar coin={coin} setCoin={setCoin}></Navbar>

      <Banner setCoin={setCoin}></Banner>

      <Suspense
        fallback={<span className="loading loading-ring loading-lg"></span>}
      >
        <Players
          coin={coin}
          setCoin={setCoin}
          playersPromise={playersPromise}
        ></Players>
      </Suspense>
    </div>
  );
};

export default App;
