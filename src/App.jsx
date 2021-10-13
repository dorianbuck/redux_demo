import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state);
  // const [greeting, setGreeting] = useState('Hello World from component state')
  const [newGreeting, setNewGreeting] = useState();

  const dispatchGreetiing = () => {
    dispatch({
      type: "CHANGE_GREETING",
      payload: { greeting: newGreeting },
    });
  };
  return (
    <div>
      <h1>{greeting}</h1>
      <input
        type="text"
        onChange={(event) => setNewGreeting(event.target.value)}
      ></input>
      <button
        onClick={() => {
          dispatchGreetiing();
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default App;
