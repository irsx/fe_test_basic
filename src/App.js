import React, {useState} from "react";

function ChildComponent({action}) {
  console.log("Child Component Rendered");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p>
        <br />
        <i>=== Child Component ===</i>
      </p>
      <h1>Hello World</h1>
      <button onClick={action}> Like </button>
    </div>
  );
}

export default function App() {
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
          padding: '10px'
        }}
      >
        <p>
          <i> === Parent Component === </i>
        </p>
        <h1>Total Like: {count}</h1>
        <button onClick={likeAction}>Like </button>

        <div>
          <ChildComponent action={likeAction} />
        </div>
      </div>
    </>
  );
}