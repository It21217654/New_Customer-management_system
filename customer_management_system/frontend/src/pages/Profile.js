import React, { useEffect, useState } from "react";
import "./profile.css";
import axios from "axios";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import UserAccountEdit from "./UserAccountEdit";

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

Modal.setAppElement("div");

const Profile = () => {
  const [profileImage, setProfileimage] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [userId, setUserId] = useState();
  const [address, setAddress] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [editModalIsOpen, setEditModalIsOpen] = React.useState(false);

  function openModal() {
    setEditModalIsOpen(true);
  }

  function closeModal() {
    setEditModalIsOpen(false);
  }

  useEffect(() => {
    const jsonObject = JSON.parse(localStorage.getItem("user"));
    const dataObject = {
      email: jsonObject.email,
    };

    console.log(dataObject);

    axios
      .post(process.env.REACT_APP_BACKEND_API + "/api/user/getuser", dataObject)
      .then((response) => {
        console.log(response);
        setEmail(response.data.email);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setUserId(response.data._id);
        setAddress(response.data.address);
        setContactNumber(response.data.contactNumber);
        setProfileimage(response.data.profileImage);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  });

  const onHandleDelete = () => {
    axios
      .delete(process.env.REACT_APP_BACKEND_API + "/api/user/" + userId)
      .then((response) => {
        console.log(response);
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="container mb-5">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                {!profileImage ? (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="Profile"
                    className="rounded-circle mb-3"
                    style={{ width: "150px", height: "150px" }}
                  />
                ) : (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="rounded-circle mb-3"
                    style={{ width: "150px", height: "150px" }}
                  />
                )}

                <p className="fs-1">
                  {firstName} {lastName}
                </p>
              </div>
              <hr />
              <div className="profile-details text-right">
                <p>
                  <strong>Email:</strong> {email}{" "}
                </p>
                <p>
                  <strong>Address:</strong> {address}
                </p>
                <p>
                  <strong>Contact No:</strong> {contactNumber}
                </p>
              </div>
              <div className="row">
                <div className="col-12 p-2 text-center">
                  <button
                    className="btn btn-outline-primary w-25"
                    onClick={openModal}
                  >
                    EDIT PROFILE
                  </button>
                </div>
                <div className="col-12 p-2 text-center">
                  <button
                    className="btn btn-outline-danger w-25"
                    onClick={() => {
                      onHandleDelete();
                    }}
                  >
                    DELETE PROFILE
                  </button>
                </div>
                <div className="col-6">
                <Link
                  className="Links btn btn-dark text-white"
                  to="/admin/book"
                >
                  My orders
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center">EDIT USER</h2>
        <div>
          <UserAccountEdit
            closeModal={closeModal}
            firstName={firstName}
            lastName={lastName}
            id={userId}
            email={email}
            address={address}
            contactNumber={contactNumber}
            profileImage={profileImage}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Profile;
