const { default: mongoose } = require("mongoose");

const MovieSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    year: { type: Number, require: true },
    description: { type: String, require: true },
    Rating: { type: String, require: true },
  },
  {
    versionKey: false,
  }
);

const MovieModel = mongoose.model("movie", MovieSchema);

module.exports = { MovieModel };
