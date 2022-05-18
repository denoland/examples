import { React, useEffect, useRef, useState } from "../../deps.client.js";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  const wasEditing = usePrevious(isEditing);

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!newName.trim()) {
      return;
    }
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          type="text"
          value={newName || props.name}
          onChange={handleChange}
          ref={editFieldRef}
        />
      </div>
      <div>
        <button
          type="button"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span>renaming {props.name}</span>
        </button>
        <button type="submit">
          Save
          <span>new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div>
      <div>
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div>
        <button
          type="button"
          onClick={() => setEditing(true)}
          ref={editButtonRef}
        >
          Edit <span>{props.name}</span>
        </button>
        <button
          type="button"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span>{props.name}</span>
        </button>
      </div>
    </div>
  );

  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  return <li>{isEditing ? editingTemplate : viewTemplate}</li>;
}
