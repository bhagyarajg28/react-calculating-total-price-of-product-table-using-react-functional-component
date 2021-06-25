import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <h1>Hello World</h1> */}
      <span className={getBadges()}>{formatCounter()}</span>
      <button onClick={handleEvent} className="btn btn-secondary btn-sm">
        Increment
      </button>

      {/* <ul>{state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
    </div>
  );
  function handleEvent (){
    return setCount(count + 1);
  }

  function formatCounter() {
    return count === 0 ? 'Zero' : count;
  }
  function getBadges() {
    let classes = 'badge m-2 badge-';
    classes += count === 0 ? 'warning' : 'primary';
    return classes;
  }
}
