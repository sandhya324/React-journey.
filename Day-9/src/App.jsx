import {useState} from 'react'
import './App.css'

const App = () => {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [agree, setAgree] = useState(false);
  
  function handleSubmit(e){

    e.preventDefault();

    if( name === "" || email === "" || mobile === "" || city === "" || password === "" || confirmpass === ""){
      alert("Please Enter your details!");
      retturn;
    }

    if (password !== confirmpass) {
      alert("Passwords do not match");
      return;
    }

    if (!agree) {
      alert("Please accept the terms and conditions");
      return;
    }



    console.log(name);
    console.log(email);
    console.log(mobile);
    console.log(city);
    console.log(password);
    console.log(confirmpass);

    alert("Registration Successful!");
  }

  return (

  <div className='form-section'>

    <h1>Stay in Touch</h1>

    <form onSubmit={handleSubmit}>

      
      <div className="form-input">
         <label>Name</label>
         <input 
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
      </div>


      <div className="form-input">
         <label>Email</label>
         <input 
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
      </div>

      <div className="form-input">
         <label>Mobile</label>
         <input 
            type='tel'
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
         />
      </div>

      <div className="form-input">

        <label>City</label>
        <select 
            value={city}
            onChange={(e) => setCity(e.target.value)}
         >

         <option value="">Select City</option>
         <option>Dehradun</option>
         <option>Delhi</option>
         <option>Bangaluru</option>
        </select>
         
      </div>

      <div className="form-input">
         <label>Password</label>
         <input 
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
      </div>

      <div className="form-input">
         <label>Confirm Password</label>
         <input 
            type='password'
            value={confirmpass}
            onChange={(e) => setConfirmpass(e.target.value)}
         />
      </div>


      <div className="form-input">
        <div className="check">
        <input 
            type='checkbox'
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
         />
         
         <p>I declare the above term, i'm sure it is correct </p>
        </div>
      </div>

    

      <button type='submit'>
        Submit
      </button>
      
    </form>
      
       
    </div>
  )
}

export default App
