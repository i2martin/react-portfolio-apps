import React, { useState } from "react";

export default function InputForm({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
    setQuantity("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <input
        min="1"
        type="text"
        placeholder="What do you need?"
        maxLength="20"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <input
        type="number"
        placeholder="How many?"
        max="20"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
