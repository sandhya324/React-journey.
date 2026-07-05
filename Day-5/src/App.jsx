import './App.css'

const employee = [

  {
    id:1,
    name: "John",
    role: "Developer",
    department: "Engineering",
    salary: 60000
  },
  
  {
    id: 2,
    name: "Jane",
    role: "Designer",
    department: "Design",
    salary: 55000
  },

  {
    id: 3,
    name: "Mike",
    role: "Manager",
    department: "Operations",
    salary: 75000
  },

  {
    id: 4,
    name: "Sarah",
    role: "Tester",
    department: "Quality Assurance",
    salary: 50000
  },

  {
    id: 5,
    name: "David",
    role: "Support",
    department: "Customer Service",
    salary: 45000
  },

  {
    id: 6, 
    name: "Emily",
    role: "HR",
    department: "Human Resources",
    salary: 65000
  }

];

function Employee({ name, role, department, salary}){
  return (

    <div className="card">
      <h2>{name}</h2>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Department: </strong>{department}</p>
      <p><strong>Salary: </strong>₹{salary.toLocaleString()}</p>
      <p>{salary > 50000 ? "✅ High Salary" : "📌 Standard Salary"}</p>
    </div>

  );
}


const App = () => {
  return (

    <> 

<div className="Container">
    <h1>Employee Directory</h1>

  <div className="employee-list">
    {
      employee.map(emp => (
        <Employee
          key={emp.id}
          name={emp.name}
          role={emp.role}
          department={emp.department}
          salary={emp.salary}
        />
      ))
    }
  </div>

</div>

    </>
  )
}

export default App
