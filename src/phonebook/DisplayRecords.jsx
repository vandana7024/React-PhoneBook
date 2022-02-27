import { data } from "autoprefixer";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function DisplayRecords() {
  const [records, setRecords] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    setInterval(() => {
      axios
        .get("http://localhost:5000/posts")
        .then((res) => {
          setRecords(res.data);
        })
        .catch((err) => console.log(err));
    }, 10000);
  }, []);

  const deleteRecord = (id) => {
    const newRecords = records.filter((record) => record.id !== id);
    setRecords(newRecords);
  };

  console.log("data", records);
  return (
    <div>
      DisplayRecords
      <table>
        <thead>
          <th>First Name </th>
          <th>Last Name </th>
          <th>Mobile Number </th>
        </thead>
        <tbody className="flex flex-col-reverse">
          {records?.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.number}</td>
              <button onClick={() => navigate(`/edit/${user.id} `)}>
                Edit
              </button>
              <button onClick={() => deleteRecord(user.id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayRecords;
