import { useRef } from "react";
import { db } from "./config/firebase";
import { collection, addDoc } from "firebase/firestore";
// import Item from "./Item";

export default function TodoList() {
  const itemRef = useRef("");
  // get items
  // const items = [
  //   {
  //     id: 1,
  //     title: "get laundry",
  //   },
  // ];

  // create todo item
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
  // const listItems = items.map((item) => (
  //   <Item key={item.id} title={item.title} />
  // ));

  return (
    <div>
      <h1>Hello from todo list</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" ref={itemRef} />
        <button type="submit">add</button>
      </form>
      {/* <div>{listItems}</div> */}
    </div>
  );
}
