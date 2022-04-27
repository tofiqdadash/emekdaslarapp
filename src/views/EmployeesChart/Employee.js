import React, { useEffect, useState } from "react";
import AccordionContent from "./AccordionContent";
import Modal from "../../components/Modal";
import axios from 'axios';

const Employee = () => {
  const [click, setClick] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [users, setUsers] = useState([]);

  const [userId , setUserId] = useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({data}) => setUsers(data)).catch(err => console.log(err))
}, [])


  const toggle = (index) => {
    if (click === index) {
      setClick(null);
    }
    setClick(index);
  };


  const handleDelete = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }


  return (
    <div className="Employee">
      {users.map((user) => (
        <div key={user.id} className="an-employee">
          <div className="employee-title">
            <h4>{user.name}</h4>
            <span onClick={() => toggle(user.id)}>
              {click === user.id ? (
                <img src="upload.png" alt="down-arrow" />
              ) : (
                <img src="down-arrow.png" alt="up arrow" />
              )}
            </span>
            <img
              className="delete-button"
              src="delete-user.png"
              alt="delete icon"
              onClick={() => {
                setOpenModal(true);
                setUserId(user.id);
              }}
            />
          </div>

          {click === user.id ? (
            <AccordionContent user={user} />
          ) : null}
        </div>
      ))}

      {openModal && <Modal 
      handleDelete={handleDelete}
      closeModal={() => setOpenModal(false)}
      header={"Əməkdaşı silinmesi"}
      title={"Emekdasi silmeye eminsiniz?"}
      />}
    </div>
  );
};

export default Employee;
