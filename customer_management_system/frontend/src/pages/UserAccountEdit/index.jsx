import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { storage } from '../../firebase';

const UserAccountEdit = (props) => {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [address, setaddress] = useState(props.address);
  const [contactNumber, setcontact_number] = useState(props.contactNumber);
  const [email, setEmail] = useState(props.email);
  const [profileImage, setProfileImage] = useState(props.profileImage);

  const uploadImage = (e) => {
    if (e.target.files[0] !== null) {
      const fileName = e.target.files[0].name + '-' + new Date();
      const uploadTask = storage.ref(`users/${fileName}`).put(e.target.files[0]);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          //progress function
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        (error) => {
          //error function
          console.log(error);
        },
        () => {
          //complete function
          storage
            .ref('users')
            .child(fileName)
            .getDownloadURL()
            .then((url) => {
              setProfileImage(url);
            });
        },
      );
    } else {
      console.log('Something went wrong');
    }
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    let updateData = {};
    if(profileImage){
      updateData = {
        firstName,
        lastName,
        address,
        contactNumber,
        email,
        profileImage
      };
    }else{
      updateData = {
        firstName,
        lastName,
        address,
        contactNumber,
        email,
      };
    }


    axios
      .put(
        process.env.REACT_APP_BACKEND_API + "/api/user/" + props.id,
        updateData
      )
      .then(() => {
        toast.success("Edit successfull");
        props.closeModal();
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="row">
      <form onSubmit={onHandleSubmit}>
        <label>Email address:</label>
        <input
          className="form-control"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          readOnly
        />
        <div id="emailHelp" class="form-text mb-3">
          We'll never share your email with anyone else.
        </div>

        <label>First Name:</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <label>Last Name:</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />

        <label>Address:</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setaddress(e.target.value)}
          value={address}
        />

        <label>Contact Number:</label>
        <input
          className="form-control"
          type="tel"
          onChange={(e) => setcontact_number(e.target.value)}
          value={contactNumber}
        />

        <label>Profile Image:</label>
        {profileImage && <img src={profileImage} width="200" height="200"/>}
        <input
          className="form-control"
          type="file"
          onChange={(e) => uploadImage(e)}
        />

        <div></div>
        <div className="row">
          <div className="col-sm-12 p-2">
            <button className="btn btn-success text-white w-100" type="submit">
              EDIT
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
      </form>
    </div>
  );
};

export default UserAccountEdit;
