import './App.css';
import { useState } from 'react';
import Reorder from './Reorder';

function App() {
  const [count, setCount] = useState(5);
  const onReorder = () => {
    setCount(5);
  }
  return (
    <div className="app">
      <div className="counter">
        <button className="count-button" disabled={!count} onClick={() => setCount(count - 1)}>-</button>
        <span className="count-result">{count}</span>
        <button className="count-button" onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div className="reorder">{!count ? <Reorder onReorder={onReorder} /> : ""}</div>
    </div>
  );
}

export default App;
