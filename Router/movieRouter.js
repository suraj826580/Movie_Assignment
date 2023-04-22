const { Router } = require("express");
const { MovieModel } = require("../models/movie.model");

movieRouter = Router();

movieRouter.get("/", async (req, res) => {
  try {
    const { q, rating } = req.query;
    const query = {};
    if (q) {
      query.title = q;
      const Data = await MovieModel.find(query);
      res.send(Data);
    }
    if (rating) {
      query.Rating = rating;
      const Data = await MovieModel.find(query);
      res.send(Data);
    } else {
      const Data = await MovieModel.find();
      res.send(Data);
    }
  } catch (error) {
    res.send(error);
  }
});

movieRouter.get("/:sort", async (req, res) => {
  const { sort } = req.params;
  try {
    if (sort === "asc") {
      const Data = await MovieModel.find().sort({ year: 1 });
      res.send(Data);
    } else {
      const Data = await MovieModel.find().sort({ year: -1 });
      res.send(Data);
    }
  } catch (error) {
    res.send(error);
  }
});

movieRouter.post("/", async (req, res) => {
  try {
    const movie = new MovieModel(req.body);
    await movie.save();
    res.send(`Data Saved`);
  } catch (error) {
    res.send(error);
  }
});
movieRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await MovieModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send("Data Updated");
  } catch (error) {
    res.send(error);
  }
});

movieRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await MovieModel.findByIdAndDelete(id);
    res.send(`Data Deleted`);
  } catch (error) {
    res.send(error);
  }
});
module.exports = { movieRouter };
