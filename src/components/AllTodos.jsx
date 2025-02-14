import React, { useState } from "react";
import { MdModeEdit, MdSave, MdDelete } from "react-icons/md";
import "../styles/styles.css";  // Import external CSS

function AllTodos({ todoData, deleteTodo, editTodo }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Handle edit button click
  const handleEditClick = (index, item) => {
    setEditIndex(index);
    setEditValue(item);
  };

  // Save edited value
  const handleSave = (index) => {
    editTodo(index, editValue);
    setEditIndex(null);
  };

  return (
    <>
      {todoData.map((item, index) => (
        <div key={index} className="todo-item mt-2">
          {/* Check if the current todo is being edited */}
          {editIndex === index ? (
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
          ) : (
            <h2>{item}</h2>
          )}
          <div>
            {editIndex === index ? (
              <button className="btn btn-outline-success m-1" onClick={() => handleSave(index)}>
                <MdSave />
              </button>
            ) : (
              <button className="btn btn-outline-warning m-1" onClick={() => handleEditClick(index, item)}>
                <MdModeEdit />
              </button>
            )}
            <button className="btn btn-outline-danger m-1" onClick={() => deleteTodo(index)}>
              <MdDelete />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default AllTodos;
