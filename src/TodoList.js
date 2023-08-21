import { useRef, useEffect, useState } from "react";
import { db } from "./config/firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const itemRef = useRef("");
  const [listItems, setListItems] = useState([]);
  console.log("listItems: ", listItems);

  // updating todo items
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "test_data"), (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(newData);
      setListItems(newData);
    });

    return () => unsubscribe();
  }, []);

  // adding a todo item
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(itemRef.current.value);

    let data = {
      testData: itemRef.current.value,
    };

    try {
      addDoc(collection(db, "test_data"), data);
    } catch (err) {
      console.log("Problem submitting: ", err);
    }
  };

  // render items
  const items = listItems.map((item) => (
    <TodoItem key={item.id} title={item.testData} />
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={itemRef} />
        <button type="submit">add</button>
      </form>
      <div>{items}</div>
    </div>
  );
}
