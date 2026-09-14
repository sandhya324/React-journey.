// import { useState } from "react";
// import InputBox from "./assets/InputBox/InputBox";
// import Greeting from "./assets/Greeting/Greeting";

// import "./App.css";

// const App = () => {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <InputBox setName={setName} />
//       <Greeting name={name} />
//     </div>
//   );
// };

// export default App;




import { useState } from "react";
import SearchInput from "./SearchInput";
import ComplaintResult from "./ComplaintResult";

function App() {
  const [id, setId] = useState("");

  return (
    <>
      <SearchInput setId={setId} />
      <ComplaintResult id={id} />
    </>
  );
}

export default App;