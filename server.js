const express = require("express");
const cors = require("cors");
const tutorial = require("./app/models/tutorial.model");

const newTutorial = {
  title: "marion",
  description: "some description",
  pulished: 2,
};
tutorial.create(newTutorial, () => {});
const app = express();
var corsOprtions = {
  origin: "http://localhost:8001",
};

app.use(cors(corsOprtions));
app.use(express.json());

app.use(express.urlencoded({ extend: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to marion" });
});

const PORT = process.env.PORT || 8008;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
