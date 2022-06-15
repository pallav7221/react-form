import React from "react";

const EmployeeData = ({ addToDatabase }) => {
    const [employeeData, setEmployeeData] = React.useState({
        name: "",
        age: "",
        address: "",
        department: "",
        salary: "",
        martialStatus: false
    });
    // console.log(employeeData)
    const handleChange = (e) => {

        let {name, value, checked, type} = e.target;
        value = type === "checkbox" ? checked : value;

        setEmployeeData({ ...employeeData, [name]: value });
    }
    const handleSubmit = (e, employeeData) => {
        e.preventDefault();
        addToDatabase(employeeData);
        setEmployeeData({
            name: "",
            age: "",
            address: "",
            department: "",
            salary: "",
            martialStatus: false,
        });

    }
    let { name, age, address, department, salary, martialStatus } = employeeData;

    return <>
        <form onSubmit={(e) => handleSubmit(e, employeeData)}>
            <label>Name : </label>
            <input type="text" value={name} name="name" placeholder="Name" onChange={(e) => handleChange(e)} />
            <br />
            <label>Age : </label>
            <input type="number" value={age} name="age" placeholder="age" onChange={(e) => handleChange(e)} />
            <br />
            <label>Addess : </label>
            <input type="text" name="address" value={address} placeholder="Address" onChange={(e) => handleChange(e)} />
            <br />
            <label >Department : </label>
            <select name="department" value={department} onChange={(e) => handleChange(e)} >
                <option value="">department</option>
                <option value="textile">Textile</option>
                <option value="cs">CS</option>
                <option value="it">IT</option>
                <option value="electroincs">Electronics</option>
            </select>
            <br />
            <label >Salary : </label>
            <input type="text" value={salary} onChange={(e) => handleChange(e)} name="salary" placeholder="Salary"  />
            <br />
            <label >Martial Status : </label>
            <input type="checkbox" name="martialStatus" checked={martialStatus} onChange={(e) => handleChange(e)} />
            <br />
            <button >Submit</button>
        </form>
    </>
}

export default EmployeeData;