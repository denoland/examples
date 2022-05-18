import { React, useState } from "../../deps.client.js";

function Form(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name);
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        <label htmlFor="new-todo-input">
          What needs to be done?
        </label>
      </h2>

      <input
        type="text"
        id="new-todo-input"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
