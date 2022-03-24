import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

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
    <div className="flex justify-center items-center">
      <table className=" flex flex-col justify-center w-full m-2 sm:w-[40rem]">
        <thead className="flex justify-around">
          <th> Name </th>
          <th>Mobile Number </th>
          <th>Action</th>
        </thead>
        <tbody className="flex flex-col-reverse ">
          {records?.map((user) => (
            <tr
              key={user.id}
              className=" flex justify-around items-center mt-4" >
              <td>{user.name}</td>
              <td>{user.number}</td>
              <td className="flex ">
                <button
                  onClick={() => navigate(`/edit/${user.id} `)}
                  className="bg-gray-200 text-blue-800 p-2 rounded-full text-sm font-medium  m-1" >
                  <AiOutlineEdit />
                </button>
                <button
                  onClick={() => deleteRecord(user.id)}
                  className="bg-gray-200 text-blue-800 p-2 rounded-full text-sm font-medium  m-1"
                >
                  <AiFillDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;
