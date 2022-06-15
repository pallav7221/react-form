import React from "react";
const ShowData = ({ allEmployeeData,handlePage,page,lastPage }) => {
   
    return (<>

        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Salary</td>
                    <td>Department</td>
                    <td>IsMarrid</td>
                    <td>Address</td>
                </tr>
            </thead>
            <tbody>
                {console.log(allEmployeeData)}
                {allEmployeeData.forEach((data) => {
                   return (
                    
                       <tr key={data.id}>
                           <h1>"pallav"</h1>
                           <td>{data.id}</td>
                           <td>{data.name}</td>
                           <td>{data.age}</td>
                           <td>{data.salary}</td>
                           <td>{data.department}</td>
                           <td>{data.martialStatus ? "yes" : "No"}</td>
                           <td>{data.address}</td>
                       </tr>
                   );
                })}
            </tbody>
        </table>
        <button onClick={() => handlePage(-1)} disabled={page === 1}>
            Prev
        </button>
        <button onClick={() => handlePage(1)} disabled={page === lastPage}>
            NEXT
        </button>
    </>
    )
};

export default ShowData;