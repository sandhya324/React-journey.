import './Exercise_01.css'

// ------------------------------Employee Data----------------------------------------

const employees = [    

    {
        id: 1,
        name: "Abhi",
        role: "Engineer",
        department: "IT",
        salary: 150000
    },

    {
        id: 2,
        name: "Aman",
        role: "Developer",
        department: "IT",
        salary: 110000
    },

    {
        id: 3,
        name: "Chahat",
        role: "Doctor",
        department: "Medical",
        salary: 250000
    },

    {
        id: 4,
        name: "Shivu",
        role: "Pharmacist",
        department: "Medical",
        salary: 150000
    },

    {
        id: 5,
        name: "Harsha",
        role: "HR",
        department: "HR",
        salary: 135000
    },

    {
        id: 6,
        name: "Khushi",
        role: "Manager",
        department: "Management",
        salary: 240000
    },

    {
        id: 7,
        name: "Abhinav",
        role: "Designer",
        department: "Design",
        salary: 150000
    }

]



// ------------------------------Combining Props + map()----------------------------------------
function Employee({name, role, department, salary}){

    return(

        <div className="card">
            <h2><strong>{name}</strong></h2>
            <p><strong>role:</strong>{role}</p>
            <p><strong>department: </strong>{department}</p>
            <p><strong>{salary > 120000? "High Salary " : " Standard Salary"}</strong></p>
        </div>

    )
}



//----------------------------rendering a list of components using the map() method.---------------------------

const Exercise_01 = () => {
  return (
    <>
    
    <div className="employeeCard">

       <h1>Employee Cards</h1>
       <div className="employee-list">

       {        
          employees.map(emp=>(
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

export default Exercise_01
