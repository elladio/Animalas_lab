require("dotenv").config();
const mongoose = require("./connection");
const Animal = require("./animalSchema");

mongoose.connection.on("open", () => {
  // define data we want to put in the database
  const startAnimals = [
    {
      species: "Elephant",
      extinct: "false",
      location: "Africa",
      lifeExpectancy: "70",
    },
    {
      species: "Siberian Tiger",
      extinct: "false",
      location: "Asia",
      lifeExpectancy: "25",
    },
    {
      species: "Shih Tzu",
      extinct: "false",
      location: "Germany",
      lifeExpectancy: "12",
    },
    {
      species: "Mosasaurus",
      extinct: "true",
      location: "Kansas and South Dakota",
      lifeExpectancy: "210",
    },
    {
      species: "Silverback Gorilla",
      extinct: "false",
      location: "Africa",
      lifeExpectancy: "35",
    },
  ];
  // Delete all animals
  Animal.remove({}, (error, data) => {
    // create new animals once old animals are deleted
    Animal.create(startAnimals, (error, createdAnimals) => {
      res.json(createdAnimals);
    });
  });
});