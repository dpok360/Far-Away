import { useState } from "react";
import "./index.css";
import Logo from "./Logo";
import Form from "./Form";
import { PackagingList } from "./PackagingList";
import { Stats } from "./Stats";
export default function App() {
  const [items, setItems] = useState([]); // global state

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handelClearList() {
    const confirmed = window.confirm("Are you sure you want to delete");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handelClearList}
      />
      <Stats items={items} />
    </div>
  );
}
