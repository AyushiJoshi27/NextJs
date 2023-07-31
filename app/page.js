"use client";
import React, { useEffect, useRef, useState } from "react";
// import { collection, addDoc } from "firebase/firestore";
import { doc, setDoc, getDoc, collection, query, QuerySnapshot, where, getDocs} from "firebase/firestore";
import { db } from "./firebase";

export default function Home() {
  const nameRef = useRef("");
  const priceRef = useRef("");
  // const [items, setItems] = useState([
    // { name: "coffee", price: 4.95, },
    // { name: "MOvie", price: 24.95, },
    // { name: "candy", price: 4.95, },
  // ]);
  const [items, setItems] = useState('');

  const [newItem, setNewItem] = useState({ name: "", price: "" });
  const [total, setTotal] = useState(0);

  //add item to db
  const addItem = async (e) => {
    e.preventDefault();
    console.log("event data");

    if (newItem.name !== "" && newItem.price !== "") {
      console.log("setItems");

      await setDoc(doc(db, "data", '3'), {
        name: newItem.name,
        price: newItem.price,
      });
      setNewItem({ name: "", price: "" });
    }
  };

  useEffect(() => {
    if (!items) {
      getData();
      console.log(getData())
    }

    console.log(items);
  }, [items]);

  //read
  const getData = async () => {
    const q = query(collection(db, "data"));
    const querySnapshot = await getDocs(q);
    console.log("querySnapshot: ", querySnapshot);
    let itemsArr = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc._document.data.value.mapValue.fields);
      console.log({...doc.data(), id: doc.id});
      itemsArr.push({...doc.data(), id: doc.id})
    });
    setItems(itemsArr);
    return itemsArr;
  };

  //delete


  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl p-4 text-center">Expense Tracker</h1>
        <div className="bg-slate-800 p-4 rounded-lg">
          <form className="grid grid-cols-12 items-center text-black">
            <input
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              value={newItem.name}
              // ref={nameRef}
              className="col-span-3 p-3 border"
              type="text"
              placeholder="Enter item"
            />
            <input
              // ref={priceRef}
              value={newItem.price}
              onChange={(e) =>
                setNewItem({ ...newItem, price: e.target.value })
              }
              className="col-span-3 p-3 border"
              type="number"
              placeholder="Enter $"
            />
            <button
              className="text-white bg-slate-950 hover:bg-slate-900 p-3 text-xl"
              onClick={addItem}
              type="submit"
            >
              +
            </button>
          </form>
          {/* <button className="text-white border-2 p-2 color-white" onClick={getData}>Get data</button> */}
          <br />
          <ul>
            {items ? 
            <>
            {items.map((item, id) => (
              <li
                key={id}
                className="my-4w-full flex justify-between bg-slate-950"
              >
                <div className="p-4 w-full flex justify-between text-white">
                  <span className="capitalize">{item.name}</span>
                  <span>${item.price}</span>
                </div>
                <button className="ml-4 border-l-2 border-slate-900 hover:bg-slate-900 w-16">
                  X
                </button>
              </li>
            ))}
            </> 
            : '' }
          </ul>
          {items.length < 1 ? (
            ""
          ) : (
            <div className="flex justify-between p-3">
              <span>Total</span>
              <span>{items.length}</span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
