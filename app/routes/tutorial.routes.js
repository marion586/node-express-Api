module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller");
  var router = require("express").Router();
  //cReate a new Tutorial
  router.post("/", tutorials.create);
  //Retrieve all Tutorials
  router.get("/", tutorials.findAll);
  //Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);
  //retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);
  //update a Tutorial with id
  router.put("/:id", tutorials.update);
  //dete a TUtorial with id
  router.delete("/:d", tutorials.delete);
  //Delete all tutorials
  router.delete("/", tutorials.deleteAll);
  app.use("api/tutorials", router);
};
