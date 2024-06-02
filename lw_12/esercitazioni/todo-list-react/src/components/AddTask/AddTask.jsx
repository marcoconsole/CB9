import { useState } from "react";

const AddTask = ({ setTask = () => {} }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        className="task-input"
        type="text"
        placeholder="Inserisci todo"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        className="task-button"
        type="button"
        onClick={() => {
          setTask((prev) => [...prev, inputValue]);
        }}
      >
        Inserisci
      </button>
    </div>
  );
};

export default AddTask;
