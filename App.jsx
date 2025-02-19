
// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   let [todoInput, setInput] = useState("");
//   let [todoList, setToDoList] = useState([
//     //{ id: , task: "" },
  
//   ]);
//   let nextId = todoList.length + 1;

//   function addNew() {
//     if (todoInput === "") {
//       alert("Please add some text");
//     } else {
//       let newTodos = [...todoList, { id: nextId++, task: todoInput }];
//       setToDoList(newTodos);
//       setInput(""); // Clear the input after adding
//     }

//   }

//   function deleteTodo(id) {
//     let updatedTodo = todoList.filter((todo) => todo.id !== id);
//     setToDoList(updatedTodo);
//   }

//   return (
//     <div className="container mt-5 w-250">
//       <h3 className="text-center">ToDo App using React.js</h3>
//       <div className="input-group mb-3">
//         <input
//           type="text"
//           className="form-control"
//           value={todoInput}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button className="btn btn-primary" onClick={addNew} >
//           Add
//         </button>
//       </div>
//       <ul className="list-group ">
//         {todoList.map((todo) => (
//           <li key={todo.id} className="list-group-item d-flex justify-content-between">
      
//             <p>{todo.task}</p>
//             {todoList.length > 0 && (
//         <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
//           ❌
//         </button>
//       )}
//             {/* <button className="btn btn-danger"  style={{ display: todoList.length >=1 ? "block" : "none" }} onClick={() => deleteTodo(todo.id)}>
//               ❌
//             </button> */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";

function App() {
  let [todoInput, setInput] = useState("");
  let [todoList, setToDoList] = useState([]);
  var newid=todoList.length;
  function addNew() {
    
    if (todoInput === "") {
      alert("Please add some text");
    } else {
      let newTodo = { //id: //Date.now()
      id:newid++ , task: todoInput };
      setToDoList([...todoList, newTodo]);
      setInput(""); // Clear input after adding
    }
  }

  function deleteTodo(id) {
    let updatedTodo = todoList.filter((todo) => todo.id !== id);
    setToDoList(updatedTodo);
  }

  return (
    <div className="app-container">
      <div className="todo-box">
        <h3 className="text-center">ToDo App</h3>
        <div className="input-group">
          <input
            type="text"
            className="todo-input"
            placeholder="Enter a task..."
            value={todoInput}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="add-btn" onClick={addNew}>
            Add
          </button>
        </div>
        <ul className="todo-list">
          {todoList.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span>{todo.task}</span>
              {todoList.length>0 && <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                ❌
              </button>}
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
