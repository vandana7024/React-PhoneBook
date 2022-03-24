import React, { useReducer } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlinePhone, MdPersonOutline } from "react-icons/md";
import AvatorCard from "./AvatorCard";

function EditContact() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [records, setRecords] = React.useState({
    id: "",
    name: "",
    number: "",
    lastName: "",
  });

  const handleRecord = (e) => {
    setRecords({
      ...records,
      [e.target.name]: e.target.value,
    });
    console.log(records);
  };

  const handleSubmit = async () => {
    console.log("firstName");
    await axios.put(`http://localhost:5000/posts/${id}`, records);
    navigate("/");
  };

  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/posts/${id}`)
      .then((res) => {
        setRecords(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("records", records);

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <AvatorCard name={records.name} />
        <h1 className="text-blue-800 mt-6 font-medium text-3xl">
          {records.name}
        </h1>

        <div className="max-w-[520px]">
          <div className="flex gap-4 my-8 w-full items-center">
            <MdPersonOutline size={28} className="opacity-[0.56]" />
            <input
              type="text"
              placeholder="First Name"
              name="name"
              value={records.name}
              onChange={handleRecord}
              className="border-b w-full focus:outline-none leading-8"
            />
          </div>
          <div className="flex gap-4 my-8 w-full items-center">
            <MdOutlinePhone size={28} className="opacity-[0.56]" />
            <input
              type="number"
              placeholder="Mobile Number"
              name="number"
              value={records.number}
              onChange={handleRecord}
              className="border-b w-full focus:outline-none leading-8"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="h-10 bg-[#1a73e8] text-white px-8 rounded disabled:grayscale"
          >
            Edit
          </button>
        </div>
      </section>
    </>
  );
}

export default EditContact;
