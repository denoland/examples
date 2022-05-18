import { React } from "../../deps.client.js";

function FilterButton(props) {
  return (
    <button
      type="button"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span>Show</span>
      <span>{props.name}</span>
      <span>tasks</span>
    </button>
  );
}

export default FilterButton;
