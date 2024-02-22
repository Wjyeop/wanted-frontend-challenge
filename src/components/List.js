import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/listSlice";

export default function List() {
  const [inputValue, setInputValue] = useState("");
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addItem({ id: Date.now(), text: inputValue }));
    setInputValue("");
  };

  console.log(list);

  return (
    <div className="list">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="addBtn" onClick={handleAdd}>
        Add Item
      </button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.text}
            <button
              className="deleteBtn"
              onClick={() => dispatch(removeItem(item.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
