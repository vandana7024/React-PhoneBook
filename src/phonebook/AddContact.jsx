import axios from "axios";
import React, { useState } from "react";

function AddContact() {
  const [user, setUser] = useState({
    id: Math.floor(Math.random() * 1000),
    name: "",
    number: "",
    lastName: "",
  });

  const handleUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  };

  const handleSubmit = async () => {
    await axios.post(`http://localhost:5000/posts`, user);
  };

  return (
    <div>
      <div>
        <label htmlFor="">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          name="name"
          value={user.name}
          onChange={handleUser}
        />
      </div>
      <div className="">
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={user.lastName}
          onChange={handleUser}
        />
      </div>
      <div>
        <label htmlFor="">Mobile Number</label>
        <input
          type="number"
          placeholder="Mobile Number"
          name="number"
          value={user.number}
          onChange={handleUser}
        />
      </div>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default AddContact;
