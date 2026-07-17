
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
     document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>

      <h1>Count: {count}</h1>

      <button onClick={()=> setCount(count + 1)}>Increase</button>
      <button onClick={()=> setCount(0)}>Reset</button>  
      <button onClick={()=> setCount(count>0? (count-1) : count)}>Decrease</button>          


    </div>
  );
};

export default App;