import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function Contacts() {
  const [records, setRecords] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then((res) => {
        setRecords(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteRecord = (id) => {
    axios.delete(`http://localhost:5000/posts/${id}`);
  };

  console.log("data", records);
  return (
    <div>
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

export default Contacts;
