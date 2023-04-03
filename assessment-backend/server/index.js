const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune);

const { getColor } = require('./controller')

app.get("/api/color", getColor);

const { getAnimal } = require('./controller')

app.get("/api/animal", getAnimal);

const { getCity } = require('./controller')

app.get("/api/city", getCity);

app.listen(4000, () => console.log("Server running on 4000"));


