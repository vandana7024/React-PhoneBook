import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AvatorCard from "./AvatorCard";

function AddContact(props) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: Math.floor(Math.random() * 1000),
    name: "",
    number: "",
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
    navigate("/");
  };

  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center p-4 flex-wrap">
        <div className="flex flex-wrap flex-col">
          <label htmlFor="" className="flex justify-start">
            Name :
          </label>
          <input
            type="text"
            placeholder=" Name"
            name="name"
            value={user.name}
            onChange={handleUser}
            className=" px-6 py-2  border-2 rounded-lg border-gray-200 shadow-gray-50"
          />
        </div>

        <div className="px-2 flex flex-wrap justify-center flex-col mt-5 ">
          <label htmlFor="" className="flex justify-start">
            Mobile Number :
          </label>
          <input
            type="number"
            placeholder="Mobile Number"
            name="number"
            value={user.number}
            onChange={handleUser}
            className=" px-6 py-2 border-2 rounded-lg border-gray-200 shadow-gray-50"
          />
        </div>
        <div className="float-right">
          <button
            onClick={handleSubmit}
            className="bg-blue-800 text-base mt-4  text-white px-6 py-2 rounded-lg  font-medium"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}

export default AddContact;
