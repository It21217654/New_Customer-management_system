import React from "react";
import Modal from "react-modal";
import {
  deleteOrder,
  getOrderById,
} from "../../app/actions/Order.actions";
import { useDispatch } from "react-redux";
import OrderEdit from "../OrderEdit";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('div');

function OrderTable({dataArray}) {
  const dispatch = useDispatch();
  const [editModalIsOpen, setEditModalIsOpen] =
    React.useState(false);

  function openModal() {
    setEditModalIsOpen(true);
  }

  function closeModal() {
    setEditModalIsOpen(false);
  }

  return (
    <div>
      <table className="table table-striped table-hover mt-2">
        <thead>
          <tr>
            <th scope="col">Order No</th>
            
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Contact</th>
            <th scope="col">Email</th>
            <th scope="col">Tea Type</th>
            <th scope="col">Tea Brand</th>
            <th scope="col">Quantity (kg)</th>
            <th scope="col">Date to be delivered</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
            
          </tr>
        </thead>
        <tbody>
          {dataArray &&
            dataArray.map((item, key) => {
              return (
                <tr key={item._id}>
                  <th scope="row">{++key}</th>
                  
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                  <td>{item.contactNumber}</td>
                  <td>{item.email}</td>
                  <td>{item.teatype}</td>
                  <td>{item.teaBrand}</td>
                  <td>{item.quantity}</td>
                  <td>{item.datetobedelivered}</td>
                  <td>{item.address}</td>

<td>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Action
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <button
                            className="dropdown-item btn btn-primary"
                            onClick={() => {
                              dispatch(getOrderById(item._id));
                              openModal();
                            }}
                          >
                            EDIT
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item btn btn-danger"
                            onClick={() =>
                              dispatch(deleteOrder(item._id))
                            }
                          >
                            DELETE
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                  
                </tr>
              );
            })}
        </tbody>
      </table>

      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center">EDIT ORDER</h2>
        <div className="p-5">
          <OrderEdit closeModal={closeModal}/>
        </div>
      </Modal>
    </div>
  );
}

export default OrderTable;