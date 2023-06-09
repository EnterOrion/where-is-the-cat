import React from "react";
import useLevelStore from "./contexts/LevelContext";
import LevelOne from "./components/LevelOne";
import LevelTwo from "./components/LevelTwo";
import LevelThree from "./components/LevelThree";
import "./styles/style.scss";

function App() {
  const difficulty = useLevelStore((state) => state.difficulty);

  return (
    <div className="App">
      {difficulty === "Easy" && <LevelOne />}
      {difficulty === "Normal" && <LevelTwo />}
      {difficulty === "Hard" && <LevelThree />}
    </div>
  );
}

export default App;
