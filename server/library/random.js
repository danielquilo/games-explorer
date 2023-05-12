const data = require("../data/games.json");

function random(request, response) {
  const randomGame = data[Math.floor(Math.random() * data.length)];
  response.json([randomGame]);
}

module.exports = random;