const Customer = require('../models/customerModel')
const mongoose = require('mongoose')

// get all customers
const getcustomers = async ( req,res) => {
    const customers = await Customer.find({}).sort({createdAt : -1})

    res.status(200).json(customers)
}

// get a single customer
const getcustomer = async (req,res)=>{
    const {id} =req.params

if(!mongoose.Types.ObjectId.isValid(id)){
  return res.status(404).json({error:'No such customer'})
}

const customer = await Customer.findById(id)

if (!customer) {
     return res.status(404).json({error: 'No such customer'})
  }

  res.status(200).json(customer)


}
// create  new customer
    const createcustomer = async (req, res) => {
    const{name,address,contact_number,vehicle_number,email,NIC} = req.body

    let emptyFields = []

    if (!name) {
      emptyFields.push('name')
    }
    if (!address) {
      emptyFields.push('address')
    }
    if (!contact_number) {
      emptyFields.push('contact_number')
    }
    if (!vehicle_number) {
      emptyFields.push('vehicle_number')
    }
    if (!email) {
      emptyFields.push('email')
    }
    if (!NIC) {
      emptyFields.push('NIC')
    }

      if (emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }
  



//add doc to db
    try{
      const customer = await Customer.create({name,address,contact_number,vehicle_number,email,NIC})
      res.status(200).json(customer)
    }catch(error){
       res.status(400).json({error:error.message})

    }
} 
// delete a customer 
const deletecustomer = async (req, res) => {
    const {id} =req.params  

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such customer'})
      }

      const customer = await Customer.findOneAndDelete({_id: id})
      
      if (!customer) {
        return res.status(400).json({error: 'No such customer'})
     }

     res.status(200).json(customer)
    }



// update a customer
const updatecustomer = async (req, res) => {
    const {id} =req.params  

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such customer'})
      }
      const customer = await Customer.findOneAndUpdate({_id: id}, {
        ...req.body
      })

     if (!customer) {
        return res.status(400).json({error: 'No such customer'})
     }

     res.status(200).json(customer)
}

module.exports = {
    getcustomers,
    getcustomer,
    createcustomer,
    deletecustomer,
    updatecustomer
}