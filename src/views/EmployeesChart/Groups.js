import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../../components/Modal";

const Groups = ({ header, title }) => {
  const [todos, setTodos] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  const [todoId, setTodoId] = useState();

  const url = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => setTodos(data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = () => {
    axios.delete(`${url}/todos/${todoId}`);
  }

  return (
    <div className="Groups">
      <ul>
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <li>{todo.title}</li>
            <button
              className="cancel-button"
              onClick={() => {
                setOpenModal(true);
                setTodoId(todo.id);
              }}
            >
              <img src="./cancel.png" alt="cancel icon" />
            </button>

            {openModal && (
              <Modal
                handleDelete={handleDelete}
                closeModal={() => setOpenModal(false)}
                header={"todonun silinmesi"}
                title={"todonun silinmesine eminsiniz?"}
              />
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Groups;
