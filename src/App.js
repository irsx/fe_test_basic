import React, { useState } from "react";

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function ChildComponent({action}) {
  sleep(500) // Visualisasi "heavy-process", Jangan menghapus kode ini!!
  console.log("Child Component Rendered");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'green',
      }}
    >
      <p>
        <br />
        <i>=== Child Component ===</i>
      </p>
      <button onClick={action}>Increment</button>
    </div>
  );
}

export default function ParentComponent() {
  const [count, setCount] = useState(0);
  const likeAction = () => setCount((current) => current + 1);
  
  console.log("Parent Component Rendered");
  return (
    <>
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid black",
          padding: '10px',
          margin: '20px',
        }}
      >
        <div
          style={{
            backgroundColor: 'yellow',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>
            <i> === Parent Component === </i>
          </p>
          <h1>Total count: </h1>
          <h1>{count}</h1>
        </div>
        <div>
          <ChildComponent action={likeAction} />
        </div>
      </div>
    </>
  );
}