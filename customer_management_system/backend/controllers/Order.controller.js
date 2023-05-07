const Order = require("../models/Order.model");

//Save Book
const saveOrder = async (req, res) => {
  //get Book details from request
  const {
    fname,
    lname,
    contactNumber,
    email,
    teatype,
    teaBrand,
    quantity,
    datetobedelivered,
    address,
  } = req.body;

  //Create a object from DailyNotice model
  const order = new Order({
    fname,
    lname,
    contactNumber,
    email,
    teatype,
    teaBrand,
    quantity,
    datetobedelivered,
    address,
  });

  //Save to mongodb database
  order
    .save()
    .then((savedData) => {
      res.json(savedData);
    })
    .catch((error) => res.status(500).send("Server Error" + error));
};

//Fetch all companies
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).send("Server Error" + error);
  }
};

//Fetch Company by Id
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.json(order);
  } catch (error) {
    res.status(500).send("Server Error" + error);
  }
};

//Update Company by Id
const updateOrder = async (req, res) => {
    Order.findByIdAndUpdate(req.params.id)
    .then((existingData) => {
      //Assign updated value from request to exiting company
      existingData.fname = req.body.fname;
      existingData.lname = req.body.lname;
      existingData.contactNumber = req.body.contactNumber;
      existingData.email = req.body.email;
      existingData.teatype = req.body.teatype;
      existingData.teaBrand = req.body.teaBrand;
      existingData.quantity = req.body.quantity;
      existingData.datetobedelivered = req.body.datetobedelivered;
      existingData.address = req.body.address;
      //Save the changes from request to database
      existingData
        .save()
        .then((updatedData) => res.json(updatedData))
        .catch((error) => res.status(400).json("Error: " + error));
    })
    .catch((error) => res.status(400).json("Error: " + error));
};

//Delete company by Id
const deleteOrder = async (req, res) => {
    Order.findByIdAndDelete(req.params.id)
    .then((deletedData) => {
      res.json(deletedData);
    })
    .catch((error) => res.status(400).json("Error: " + error));
};

module.exports = {
  saveOrder,
  getOrderById,
  getOrders,
  updateOrder,
  deleteOrder,
};
