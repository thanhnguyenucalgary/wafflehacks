import React, { useEffect } from "react";
import { useState } from "react";
import "./Provider.css";
import { Link } from "react-router-dom";


function Provider() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = (name, quantity) => {
    const newItems = {
      id: Date.now(),
      name: name,
      quantity: quantity,
      deleted: false,
    };
    setItems([...items, newItems]);
    console.log(items);
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedItems);
    console.log(items);
  };

  const deleteItem = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, deleted: true } : item
    );
    setItems(updatedItems);
  };

  return (
    <div className="Provider">
      <div className="Top">
        <div id="Right">Welcome to the student food bank center</div>
        <div id="Left">
          <div id="UserName">UserName</div>
          <div id="Logout">
            <Link to="/login">
            <button>Logout</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="Middle">
        {items.map((item) => {
          if (item.deleted) return null;
          return (
            <div className ="Item" key={item.id}>
              {item.name}{" "}
              <button
                onClick={() =>
                  updateQuantity(item.id, item.quantity - 1)
                }
              >
                -
              </button>{" "}
              {item.quantity}{" "}
              <button
                onClick={() =>
                  updateQuantity(item.id, item.quantity + 1)
                }
              >
                +
              </button>{" "}
              <button className="DeleteItem" onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
          );
        })}
      </div>
      <div className="Bottom">
        <div id="Add" className="Add">
          <input type="text" id="itemInput" placeholder="Item Name" />
          <input type="number" id="quantityInput" placeholder="Quantity" />
          <button
            onClick={() => {
              const itemInput = document.getElementById("itemInput");
              const quantityInput = document.getElementById("quantityInput");
              addItem(itemInput.value, parseInt(quantityInput.value));
              itemInput.value = "";
              quantityInput.value = "";
            }}
          >
            Add items to stock
          </button>
        </div>
      </div>
    </div>
  );
}

export default Provider;
