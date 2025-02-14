import React, { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import AllTodos from "./AllTodos";
import "../styles/styles.css"; // Import external CSS

function AddTodo() {
  const [todoData, setTodoData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Add Todos
  const addData = () => {
    if (inputValue.trim() !== "") {
      setTodoData([...todoData, inputValue]);
      setInputValue(""); // Clear input after adding
    } else {
      alert("Enter a Todo");
    }
  };

  useEffect(() => {
    console.log(todoData);
  }, [todoData]);

  // Delete todos
  const deleteTodo = (index) => {
    const updatedData = todoData.filter((_, i) => i !== index);
    setTodoData(updatedData);
  };

  // Edit a todo
  const editTodo = (index, newValue) => {
    const updatedData = [...todoData];
    updatedData[index] = newValue;
    setTodoData(updatedData);
  };

  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Todo"
          value={inputValue}
          onChange={handleChange}
          style={{color:'white'}}
        />
      </div>
      <div>
        <button type="button" className="btn btn-primary" onClick={addData}>
          <FiPlusCircle className="fs-4" /> Add Your Todo
        </button>
      </div>
      <div>
        <AllTodos todoData={todoData} deleteTodo={deleteTodo} editTodo={editTodo} />
      </div>
    </div>
  );
}

export default AddTodo;
