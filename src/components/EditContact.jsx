import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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
    <div>
      EditContact
      <div>
        <label htmlFor="">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          name="name"
          value={records.name}
          onChange={handleRecord}
        />
      </div>
      <div className="">
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={records.lastName}
          onChange={handleRecord}
        />
      </div>
      <div>
        <label htmlFor="">Mobile Number</label>
        <input
          type="number"
          placeholder="Mobile Number"
          name="number"
          value={records.number}
          onChange={handleRecord}
        />
      </div>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default EditContact;
