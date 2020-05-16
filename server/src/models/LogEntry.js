var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const requiredString = {
  type: String,
  required: true,
};

const requiredNumber = {
  type: Number,
  required: true,
};

var logEntrySchema = new Schema(
  {
    title: requiredString,
    description: String,
    comments: String,
    image: String,
    rating: {
      Number,
      min: 0,
      max: 10,
      default: 0,
    },
    latitude: requiredNumber,
    longitude: requiredNumber,
    visitDate: {
      required: true,
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = logEntrySchema;
