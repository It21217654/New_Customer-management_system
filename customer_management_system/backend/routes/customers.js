const express = require('express')
const {
    createcustomer,
    getcustomers,
    getcustomer,
    deletecustomer,
    updatecustomer
}=require('../controllers/customerController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
//router.use(requireAuth)

//GET all customers
router.get('/',getcustomers)

//GET a single customer
router.get('/:id', getcustomer)

//post a new customer
router.post('/',createcustomer )

//DELETE a customer
router.delete('/:id',deletecustomer)

//update a customer
router.patch('/:id',updatecustomer)


module.exports = router