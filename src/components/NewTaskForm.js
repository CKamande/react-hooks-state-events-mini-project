import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1] || "");

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === "") return;
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(categories[1] || "");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text"
          placeholder="New task details" 
          value={text} 
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.filter((cat) => cat !== "All").map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;