// import { useState } from "react";

// const App = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     department: "water",
//     gender: "",
//     agree: false,
//   });

//    const [submittedData, setSubmittedData] = useState(null);

//   function handleSubmit(e) {
//     e.preventDefault();

//      setSubmittedData({ ...formData });


//     console.log("Submitted");
//     console.log(formData);
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h1>Enter your name</h1>

//         <div className="user-input">
//           <label>Name: </label>
//           <input
//             type="text"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           />
//         </div>

//         <div className="user-input">
//           <label>Email: </label>
//           <input
//             type="email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//           />
//         </div>

//         <div className="user-input">
//           <label>Your Message: </label>
//           <textarea
//             type="text"
//             value={formData.message}
//             onChange={(e) =>
//               setFormData({ ...formData, message: e.target.value })
//             }
//           />
//         </div>

//         <select
//           value={formData.department}
//           onChange={(e) =>
//             setFormData({ ...formData, department: e.target.value })
//           }
//         >
//           <option value="water">Water</option>
//           <option value="electricity">Electricity</option>
//           <option value="road">road</option>
//         </select>

//         <div className="gender-select">

//           <div>
//             <label>
//             <input
//               type="radio"
//               value="male"
//               name="gender"
//               checked={formData.gender === "male"}
//               onChange={(e) =>
//                 setFormData({ ...formData, gender: e.target.value })
//               }
//             />
//             Male</label>
//           </div>

//           <div>
//             <label>
//             <input
//               type="radio"
//               value="female"
//               name="gender"
//               checked={formData.gender === "female"}
//               onChange={(e) =>
//                 setFormData({ ...formData, gender: e.target.value })
//               }
//             />
//               Female</label>
//           </div>
//         </div>

//         <div>
//           <input
//             type="checkbox"
//             checked={formData.agree}
//             onChange={(e) =>
//               setFormData({ ...formData, agree: e.target.checked })
//             }
//           />
//         </div>

//         <button>Submit</button>
//       </form>



//       {submittedData && (
//         <div>
//           <h2>Submitted Details</h2>
//           <p>Name: {submittedData.name}</p>
//           <p>Email: {submittedData.email}</p>
//           <p>Message: {submittedData.message}</p>
//           <p>Department: {submittedData.department}</p>
//           <p>Gender: {submittedData.gender || "Not selected"}</p>
//           <p>Agreed: {submittedData.agree ? "Yes" : "No"}</p>
//         </div>
//       )}

//     </div>
//   );
// };

// export default App;











// 🏆 Mini Project – Student Registration Form

// Create a form with:

// - Name
// - Email
// - Age
// - Course (Dropdown)
// - Gender (Radio)
// - Terms & Conditions (Checkbox)
// - Submit Button

// On submit:

// - Prevent page refresh.
// - Display all entered information below the form.

// import { useState } from "react";

// const App = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//     course: "",
//     gender: "",
//     agree: ""
//   });


//   const [submittedData, setSubmittedData] = useState(null);
  
//   function handleSubmit(e) {
//     e.preventDefault();

//     setSubmittedData({ ...formData});

//     console.log(formData);
//     console.log("Summitted");
//   }

//   return (
//     <div>
//       <div className="text-center">
//         <h1>Fill your Details</h1>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <div className="user-input">
//           <label>Name: </label>
//           <input
//             type="text"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           />
//         </div>

//         <div className="user-input">
//           <label>Email</label>
//           <input
//             type="email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//           />
//         </div>

//         <div className="user-input">
//           <label>Age: </label>
//           <input
//             type="text"
//             value={formData.age}
//             onChange={(e) => setFormData({ ...formData, age: e.target.value })}
//           />
//         </div>

//         <select
//           value={formData.course}
//           name="MCA"
//           onChange={(e) => setFormData({ ...formData, course: e.target.value })}
//         >
//           <option value="MCA">MCA</option>
//           <option value="BCA">BCA</option>
//           <option value="Btech">Btech</option>
//         </select>

//         <div className="select-gender">
//           <div>
//             <label>Male</label>
//             <input
//               type="radio"
//               value="Male"
//               checked={formData.gender === "Male"}
//               onChange={(e) =>
//                 setFormData({ ...formData, gender: e.target.value })
//               }
//             />
//           </div>

//           <div>
//             <label>Female</label>
//             <input
//               type="radio"
//               value="Female"
//               checked={formData.gender === "Female"}
//               onChange={(e) =>
//                 setFormData({ ...formData, gender: e.target.value })
//               }
//             />
//           </div>
//         </div>

//         <div className="term">
//           <input
//             type="checkbox"
//             onChange={(e) => setFormData({ ...formData, term: e.target.checked })}
//           />
//           <p>i agree</p>
//         </div>

//         <button type="submit">Submit</button>
//       </form>


//       { submittedData && (
//         <div>
//           <h1>Submitted Data</h1>
//           <p>Name: {submittedData.name}</p>
//           <p>Email: {submittedData.email}</p>
//           <p>Age: {submittedData.age}</p>
//           <p>Course: {submittedData.course}</p>
//           <p>Gender: {submittedData.gender}</p>
//         </div>
//       )}

//     </div>
//   );
// };

// export default App;











// ⭐ Bonus Challenge – Citizen Complaint Form

// Build a complaint registration form with:

// - Citizen Name
// - Email
// - Complaint Title
// - Department (Dropdown)
// - Complaint Description (Textarea)
// - Submit Button

// After submission, display the complaint details in a card like:

// Complaint Submitted

// Name: Sandhya
// Department: Water
// Title: Water Leakage
// Description: Pipeline leaking near the main road.




import { useState } from "react";

const App = () => {

  const [formData, setFormData] = useState({
    name: "",
    email:"",
    title:"",
    department:"",
    description:"",
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(e){
    e.preventDefault();
    setSubmittedData({ ...formData});

    console.log(formData);
    console.log("Submitted");
  }

  return (
    <div>

      <div className="heading text-xl text-center font-semibold">
        <h1>Fill your Details</h1>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="user-input">
          <label>Citizen Name: </label>
          <input 
             type="text"
             value={formData.name}
             onChange={(e)=>
              setFormData({...formData, name: e.target.value})
             }
          />
        </div>


         <div className="user-input">
          <label>Email</label>
          <input 
             type="email"
             value={formData.email}
             onChange={(e)=>
              setFormData({...formData, email: e.target.value})
             }
          />
        </div>

        <div className="user-input">
          <select 
            type=""
            value={formData.title}
            onChange={(e)=>
              setFormData({...formData, title: e.target.value})
            }
          >
            <option value="water">Water Leakage</option>
            <option value="electricity">Electricity connection</option>
            <option value="aadhar">Aadhar card</option>
          </select>
        </div>


        <div className="gender-select">
          <p>Select your Gender: </p>
          <label>
            <input 
               type="radio"
               value="Male"
               name="gender"
               checked={formData.gender === "Male"}
               onChange={(e)=>
                setFormData({...formData, gender: e.target.value})
              }
            />
            Male
          </label>

          <label>
            <input 
               type="radio"
               value="Female"
               name="gender"
               checked={formData.gender === "Female"}
               onChange={(e)=>
                setFormData({...formData, gender: e.target.value})
              }
            />
            Female
          </label>
        </div>
        

        <div className="user-input flex">
          <label>Description</label>
          <textarea
            type="text"
            onChange={(e)=>
              setFormData({...formData, description: e.target.value})
            }
          />
        </div>


        <button>Submit</button>

      </form>



      {submittedData && (
        <div>
          <h1>Submitted Details</h1>
          <p>Citizen Name: {submittedData.name}</p>
          <p>Complaint Title: {submittedData.title}</p>
          <p>Department: {submittedData.department}</p>
          <p>Complaint Description: {submittedData.description}</p>
        </div>
      )}
      
    </div>
  )
}

export default App





