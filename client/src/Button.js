import React from "react";

export default function Button({ endpoint, btnText, getGames }) {
  return <button onClick={() => getGames(endpoint)}>{btnText}</button>;
}