import { useState } from "react";

export default function TodoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(props.title);

  function handleBlur() {
    props.editItem(props.id, newValue);
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <input
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          onBlur={handleBlur}
        />
      ) : (
        <p value={props}>{props.title}</p>
      )}

      <div>
        <button
          onClick={() => props.handleDelete(props.id)}
          disabled={isEditing}
        >
          X
        </button>

        <button onClick={() => setIsEditing((p) => !p)}>edit</button>
      </div>
    </div>
  );
}
