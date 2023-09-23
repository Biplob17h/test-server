import mongoose from "mongoose";

const testSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Test = mongoose.model("tests", testSchema);

export default Test;
