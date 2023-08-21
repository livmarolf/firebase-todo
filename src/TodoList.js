import { useRef, useEffect, useState } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./config/firebase";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [listItems, setListItems] = useState([]);
  const itemRef = useRef("");

  // updating todo items
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "test_data"), (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setListItems(newData);
    });

    return () => unsubscribe();
  }, []);

  // adding a todo item
  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      testData: itemRef.current.value,
    };

    try {
      addDoc(collection(db, "test_data"), data);
    } catch (err) {
      console.log("Problem submitting: ", err);
    }

    if (itemRef.current) {
      itemRef.current.value = "";
    }
  };

  // editing a todo item
  const editItem = (id, value) => {
    const docRef = doc(db, "test_data", id);

    updateDoc(docRef, {
      testData: value,
    });
  };

  // deleting a todo item
  const handleDelete = (id) => {
    deleteDoc(doc(db, "test_data", id));
  };

  // render items
  const items = listItems.map((item) => (
    <TodoItem
      key={item.id}
      title={item.testData}
      handleDelete={handleDelete}
      editItem={editItem}
      id={item.id}
    />
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
