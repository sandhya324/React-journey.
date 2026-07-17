// import {useState} from 'react'
// import './App.css'

// const App = () => {
//   const [name, setName] = useState("Sandya");

//   return (
//    <>
    
//     <h1>Hello, {name} </h1> 
//     <button onClick={()=> {
//       setName("");
//       alert("Please Enter your Name");
//     }}
//     >
//     Reset</button>
  
//   </>
//   )
// }

// export default App














// ------------------------------ you were supposed to do this ----------------------------------------

// import {useState} from 'react'
// import './App.css'

 
// const App = () => {

//   const [name, setName] = useState("Sandhya");
//   const [show, setShow] = useState(false);
//   return (
//     <div>
       
//        <input type="text"  value={name} onChange={(e)=> setName(e.target.value)}/> 
       
//        {name==="" ? "Please Enter your name" : <h1>Hello, {name}</h1>}

//     </div>
//   )
// }

// export default App











// ------------------------------ with bonus Challenge ----------------------------------------


import { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("Sandhya");
  const [show, setShow] = useState(true);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name === "" ? (
        <p>Please Enter your Name</p>
      ) : (
        show && <h1>Hello, {name}</h1>
      )}

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Greeting" : "Show Greeting"}
      </button>
      
    </div>
  );
};

export default App;