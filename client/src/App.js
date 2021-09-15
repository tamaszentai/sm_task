import React, { useState, useEffect } from "react";

import axios from "axios";

import UserModal from "./components/UserModal";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Female");

  const userNameChangeHandler = (event) => {
    const inputName = event.target.value;
    setUserName(inputName);
  }

  const dobChangeHandler = (event) => {
    const inputDob = event.target.value;
    setDob(inputDob);
  }

  const genderChangeHandler = (event) => {
    const inputGender = event.target.value;
    setGender(inputGender);
  }

  const addNewUserHandler = () => {
    let newUser;
    if (userName.trim() !== "" && dob !== "") {
      newUser = {
        name: userName,
        dob: dob,
        gender: gender 
      }
    } else {
      alert("Please fill all fields!")
      return
    }
    axios.post("http://localhost:5000/users", newUser)
    .then(res => {
      const tempUsers = [...users]
      setUsers([...tempUsers, res.data])
    })
    setUserName('');
    setDob('');
    setGender('Female');
  }

  return (
    <div className="App">
      <h1>User management interface</h1>
      <UserModal
        buttonLabel={"Add New User"}
        userName={userName}
        dob={dob}
        gender={gender}
        userNameChangeHandler={userNameChangeHandler}
        dobChangeHandler={dobChangeHandler}
        genderChangeHandler={genderChangeHandler}
        addNewUserHandler={addNewUserHandler}
      />
    </div>
  );
}

export default App;