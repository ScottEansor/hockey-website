import { useState } from "react";

export default function CreateGroup({ onSubmit }) {
      const handleSubmitCreateGroup = (e) => {
    e.preventDefault();
    onSubmit(player);
  };

    const [group, setGroup] = useState({
      name: "",
      color: "",
    });
  
    const updateGroup = (key, value) => {
      setGroup((prev) => ({ ...prev, [key]: value }));
    };

  return (
    <form className="d-flex flex-column gap-3" onSubmit={handleSubmitCreateGroup}>
      <h3>create group</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Group Name"
        required
        name="name"
        value={group.name}
        onChange={(e) => {
          updateGroup("name", e.target.value);
        }}
      />
      <label>
        Color
        <input
          type="color"
          className="form-control"
          required
          value={group.color}
          onChange={(e) => {
            updateGroup("color", e.target.value);
          }}
        />
      </label>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
