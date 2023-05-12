const express = require("express");
const cors = require("cors");
const PORT = 8080;
const app = express();
app.use(cors());

// functions
const games = require("./library/games");
const random = require("./library/random");

app.get("/", (request, response) => response.json("You are on the root route."));

app.get("/games", games);
app.get("/random", random);

app.listen(PORT, () => console.log(`aPp iS RUnNIng oN POrT ${PORT}`));