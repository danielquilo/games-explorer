const data = require("../data/games.json");

function games(request, response) {
  let dataToReturn = data;

  if (request.query.year) {
    dataToReturn = data.filter((game) => game.year == request.query.year);
  }

  response.json(dataToReturn);
}

module.exports = games;