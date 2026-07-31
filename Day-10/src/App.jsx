import { useState } from "react";
import InputBox from "./assets/InputBox/InputBox";
import Greeting from "./assets/Greeting/Greeting";

import "./App.css";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <InputBox setName={setName} />
      <Greeting name={name} />
    </div>
  );
};

export default App;