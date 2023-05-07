import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveOrder } from "../../app/actions/Order.actions";
import { toast } from "react-toastify";

function AddOrder(props) {
  const dispatch = useDispatch();
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [teatype, setTeaType] = useState("");
  const [teaBrand, setTeaBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [datetobedelivered, setDatetobedelivered] = useState("");
  const [address, setAddress] = useState("");

  const handleOnSubmit = () => {
    const dataObject = {
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

    // Add validations for all the required fields
    if (!fname.trim()) {
      toast.error("Please enter a valid name");
      return;
    }

    if (!lname.trim()) {
      toast.error("Please enter a valid address");
      return;
    }

    const regex = /^\d{10}$/; // regular expression to match 10 digits
    if (!regex.test(contactNumber)) {
      toast.error("Please enter a valid 10-digit contact number");
      return;
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    dispatch(saveOrder(dataObject));

    setEmail("");
    setfname("");
    setlname("");
    setTeaType("");
    setTeaBrand("");
    setContactNumber("");
    setQuantity("");
    setDatetobedelivered("");
    setAddress("");
  };

  const teaTypes = ["Black Tea", "Green Tea", "Herbal Tea", "Oolong Tea", "White Tea", "Jasmine Tea", "Ginger Tea"];
  const teaBrands = ["Lipton", "Dilmah", "Starsh Tea", "Tetly", "Mlesna", "Zesta", "Heladiv", "Tazo"];

  return (
    <div className="container mt-5">
      <div className="card p-5 mb-5">
        <div className="row">
          <h3 className="text-center">Place your order here</h3>
          <hr />
          <div className="col-sm-5 p-2">
            <label>First Name</label>
            <input
              type="text"
              value={fname}
              onChange={(e) => setfname(e.target.value)}
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="col-sm-5 p-2">
            <label>Last Name</label>
            <input
              type="text"
              value={lname}
              onChange={(e) => setlname(e.target.value)}
              className="form-control"
              placeholder="Last name"
            />
          </div>
          <div className="col-sm-5 p-2">
            <label>Contact Number</label>
            <input
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="form-control"
              placeholder="Contact number"
            />
          </div>
          <div className="col-sm-5 p-2">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Email"
            />
          </div>

          <div className="col-sm-5 p-2">
            <label>Tea Type</label>
            <select
              className="form-select"
              value={teatype}
              onChange={(e) => setTeaType(e.target.value)}
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

          <div className="col-sm-5 p-2">
            <label>Quantity (kg)</label>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="form-control mb-3"
              placeholder="Enter Quantity"
            />
          </div>

          <div className="col-sm-5 p-2">
            <label>Date to be delivered (within 3-4 days)</label>
            <input
              type="date"
              value={datetobedelivered}
              onChange={(e) => setDatetobedelivered(e.target.value)}
              className="form-control mb-3"
              placeholder="Enter date"
            />
          </div>

          <div className="col-sm-5 p-2">
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
              className="btn btn-primary"
              onClick={handleOnSubmit}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddOrder;

