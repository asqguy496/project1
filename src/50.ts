// Project 1: School
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      {count <= 5 && (
        <>
          Count: {count}
          <p>Press 'Increment' to see the count increase.</p>
        </>
      )}
    </div>
  );
};

export default App;
