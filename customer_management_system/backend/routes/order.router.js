const express = require("express");
const router = express.Router();
const {
  saveOrder,
  getOrderById,
  getOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/Order.controller");

//GET all orders
router.get("/", getOrders);

//GET a single booking
router.get("/:id", getOrderById);

//post a new Booking
router.post("/", (req, res) => { // add a callback function here
  saveOrder(req, res);
});

//DELETE a Booking
router.delete("/:id", deleteOrder);

//update a Booking
router.put("/:id", updateOrder);

module.exports = router;
