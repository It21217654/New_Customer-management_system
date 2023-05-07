const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  teatype: {
    type: String, // specify that the field should be an array of strings
    //unique: true
  },
  teaBrand: {
    type: String, // specify that the field should be an array of strings
    //unique: true
  },
  quantity: {
    type: String,
  },
  datetobedelivered: {
    type: String,
  },
  address: {
    type: String,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = Order = mongoose.model("Order", OrderSchema);
