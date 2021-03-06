import React, { useState, useEffect } from "react";

import axios from "axios";

import UserModal from "./components/UserModal";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Female");

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);

  const userNameChangeHandler = (event) => {
    const inputName = event.target.value;
    setUserName(inputName);
  };

  const dobChangeHandler = (event) => {
    const inputDob = event.target.value;
    setDob(inputDob);
  };

  const genderChangeHandler = (event) => {
    const inputGender = event.target.value;
    setGender(inputGender);
  };

  const addNewUserHandler = () => {
    let newUser;
    if (userName.trim() !== "" && dob !== "") {
      newUser = {
        name: userName,
        dob: dob,
        gender: gender,
      };
    } else {
      alert("Please fill all fields!");
      return;
    }
    axios.post("http://localhost:5000/users", newUser).then((res) => {
      const tempUsers = [...users];
      setUsers([...tempUsers, res.data]);
    });
    setUserName("");
    setDob("");
    setGender("Female");
  };

  const updateUserHandler = (id, updatedUser) => {
    axios.put(`http://localhost:5000/users/${id}`, updatedUser).then((res) => {
      if (res.statusText === "OK") {
        let newUsers = [...users]
        newUsers = users.map(user => id === user._id ? {...user, ...updatedUser} : user); 
        setUsers(newUsers);
       }
    });
  };

  const deleteUserHandler = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`).then((res) => {
      if (res.statusText === "OK") {
        const filteredArray = users.filter((user) => id !== user._id);
        setUsers(filteredArray);
      }
    });
  };

  return (
    <div className="App">
      <br />
      <h1>User management interface</h1>
      <br />
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
      <br />
      {users &&
        users.map((user) => (
          <UserCard
            key={user._id}
            name={user.name}
            dob={user.dob}
            gender={user.gender}
            id={user._id}
            deleteUserHandler={deleteUserHandler}
            updateUserHandler={updateUserHandler}
          />
        ))}
    </div>
  );
}

export default App;
