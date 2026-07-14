// import { useState } from 'react';

// const App = () => {

//   const [count, setCount] = useState(0);

//   return (
//     <div>

//        <button onClick={()=> setCount(count - 1)}>
//         Decrease
//        </button>
       
//        <h1>{count}</h1>

//        <button onClick={()=> setCount(count + 1)}>
//         Increment
//        </button>


//        <button onClick={()=> setCount(0)}>Reset</button>
      


//     </div>
//   )
// }

// export default App













// import { useState } from 'react';

// const App = () => {

//   const [name, setName] = useState("Sandhya");

//   return (
//     <div>

//        <button onClick={()=> setName("Software Engineer")}>
//         Change Name
//        </button>
       
//        <h1>{name}</h1>    

//     </div>
//   )
// }

// export default App





// ---------------------------------------- Boolean State  ---------------------------------------------------------------------------------------------------


// import { useState } from 'react';

// const App = () => {

//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div>

//        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//          Toggle
//       </button>
       
//        <h1>{name}</h1>    

//     </div>
//   )
// }

// export default App









// ---------------------------------------- Boolean State  ---------------------------------------------------------------------------------------------------



import { useState } from 'react';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div className='counter'>

       <button onClick={() => setCount(count + 1)}>
         Increase
       </button>


       <div className="btn">
         <h1>{count}</h1>  <button onClick={()=> setCount(0)}>Reset</button>  
         <p>{count % 2 === 0 ? "Even Number" : "Odd Number"}</p> 
       </div>


       <button onClick={() => setCount(count===0? 0 : count - 1)}>
         Decrease
       </button>

    </div>
  )
}

export default App