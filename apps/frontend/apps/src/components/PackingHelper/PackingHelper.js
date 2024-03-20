import React, { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import PackingList from "./components/PackingList";

function PackingHelper() {
  const [items, setItems] = useState([]);
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentagePacked =
    numItems > 0 ? Math.round((packedItems / numItems) * 100) : 0;
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleTogglePackedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    setItems([]);
  }
  return (
    <div className="app">
      <Header />
      <InputForm onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTogglePackedItem={handleTogglePackedItem}
        onClearList={handleClearList}
      />
      <Footer
        noOfItems={numItems}
        packedItems={packedItems}
        percentagePacked={percentagePacked}
      />
    </div>
  );
}

function Footer({ noOfItems, packedItems, percentagePacked }) {
  return (
    <footer>
      <em>
        You have {noOfItems} items on your list. You already packed{" "}
        {packedItems} ({percentagePacked}%).
      </em>
    </footer>
  );
}
export default PackingHelper;
