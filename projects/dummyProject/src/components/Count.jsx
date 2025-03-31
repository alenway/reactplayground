import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={handleIncrement}>add{count}</button>
    </div>
  );
}
