import "./App.css";
import { useState } from "react";
import Task from "./components/Task/Task.jsx";
import AddTask from "./components/AddTask/AddTask.jsx";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div>
      <h1>My Todo List</h1>
      <AddTask setTask={setTaskList} />

      <div className="container">
        <ul className="task-list">
          {taskList.map((task, index) => (
            <Task key={index} text={task} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
