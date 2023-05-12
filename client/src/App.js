import "./App.css";
import axios from "axios";
import { useState } from "react";
import Button from "./Button";



function App() {
  const [games, setGames] = useState([]);

  async function getGames(endpoint) {
    const API = `http://localhost:8080/games?year=1995`;
    const res = await axios.get(API);
    setGames(res.data);
  }
  return (
    <div className="App">
      <h1>Game Explorer</h1>
      <div className="btn-container">
        <Button endpoint="games?year=1983" btnText="1983" getGames={getGames} />
        <Button endpoint="games?year=1986" btnText="1986" getGames={getGames} />
        <Button endpoint="games?year=1991" btnText="1991" getGames={getGames} />
        <Button endpoint="games?year=1994" btnText="1994" getGames={getGames} />
        <Button endpoint="games?year=1995" btnText="1995" getGames={getGames} />
        <Button endpoint="random" btnText="Random" getGames={getGames} />
      </div>
      {games.map((game, idx) => {
        return (
          <p key={idx}>
            {game.name} - {game.year}
          </p>
        );
      })}
    </div>
  );
}

export default App;