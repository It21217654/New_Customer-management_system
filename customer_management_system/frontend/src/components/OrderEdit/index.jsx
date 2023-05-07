import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder} from "../../app/actions/Order.actions";
import { toast } from "react-toastify";

function OrderEdit(props) {
  const dispatch = useDispatch();
  const selectedOrder = useSelector((state) => state.order.selectedOrder);

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [teatype, setteaType] = useState("");
  const [teaBrand, setTeaBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [datetobedelivered, setdatetobedelivered] = useState("");
  const [address, setAddress] = useState("");


  useEffect(()=>{
    if(selectedOrder){
      setfname(selectedOrder.fname)
      setlname(selectedOrder.lname)
      setContactNumber(selectedOrder.contactNumber)
      setEmail(selectedOrder.email)
      setteaType(selectedOrder.teatype)
      setTeaBrand(selectedOrder.teaBrand)
      setQuantity(selectedOrder.quantity)
      setdatetobedelivered(selectedOrder.datetobedelivered)
      setAddress(selectedOrder.address)
    }
  }, [selectedOrder])

  const handleOnSubmit = () => {
    

    const dataObject = {
      _id: selectedOrder._id,
      fname,
      lname,
      contactNumber,
      email,
      teatype,
      teaBrand,
      quantity,
      datetobedelivered,
      address,
    };

    if (!fname || !lname || !contactNumber || !email || !teatype || !teaBrand || !quantity || !datetobedelivered ||! address) {
      toast.error("All the fields are required");
      return;
    }
    dispatch(updateOrder(dataObject));
    props.closeModal();
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="card p-5 mb-5">
        <div className="row">
          <h3 className="text-center">ORDER DETAILS</h3>
          <p className="text-center">
            Edit the necessary fields and click on submit to save the changes.
          </p>
          <hr />
          <div className="col-sm-12 p-2">
            <label>First Name</label>
            <input
              type="text"
              value={fname}
              onChange={(e) => setfname(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-sm-12 p-2">
            <label htmlFor="title">Last Name</label>
            <textarea
              value={lname}
              onChange={(e) => setlname(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-sm-12 p-2">
            <label>Contact Number</label>
            <input
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-sm-12 p-2">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-sm-12 p-2">
            <label>Tea Type</label>
            <select
              className="form-select"
              value={teatype}
              onChange={(e) => setteaType(e.target.value)}
            >
              <option value="">Select Tea Type</option>
              <option value="Black Tea">Black Tea</option>
              <option value="Green Tea">Green Tea</option>
              <option value="Herbal Tea">Herbal Tea</option>
              <option value="Oolong Tea">Oolong Tea</option>
              <option value="White Tea">White Tea</option>
              <option value="Jasmine Tea">Jasmine Tea</option>
              <option value="Ginger Tea">Ginger Tea</option>
            </select>
            
          </div>

          <div className="col-sm-5 p-2">
            <label>Tea Brand</label>
            <select
              className="form-select"
              value={teaBrand}
              onChange={(e) => setTeaBrand(e.target.value)}
            >
              <option value="">Select Tea Brand</option>
              <option value="Lipton">Lipton</option>
              <option value="Dilmah">Dilmah</option>
              <option value="Starsh Tea">Starsh Tea</option>
              <option value="Tetly">Tetly</option>
              <option value="Mlesna">Mlesna</option>
              <option value="Zesta">Zesta</option>
              <option value="Tazo">Tazo</option>
            </select>
          </div>

          <div className="col-sm-12 p-2">
            <label>Quantity (kg)</label>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="form-control mb-3"
              placeholder="Enter Quantity"
            />
            
          </div>
          <div className="col-sm-12 p-2">
            <label>Date to be delivered</label>
            <input
              type="Date"
              value={datetobedelivered}
              onChange={(e) => setdatetobedelivered(e.target.value)}
              className="form-control mb-3"
              placeholder="Enter date"
            />
            
          </div>

          <div className="col-sm-12 p-2">
            <label>Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control mb-3"
              placeholder="Enter Address"
            />
            
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 p-2">
            <button
              className="btn btn-success text-white w-100"
              onClick={handleOnSubmit}
            >
              SUBMIT
            </button>
          </div>
          <div className="col-sm-12 p-2">
            <button
              className="btn btn-danger text-white w-100"
              onClick={props.closeModal}
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderEdit;
