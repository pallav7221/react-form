import React from "react";
import EmployeeData from "./EmployeeData"
import ShowData from "./showData";

const EmployeeDetails = () => {
    const [allEmployeeData,setAllEmployeeData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [page, setPage] = React.useState(1);

    const [lastPage, setLastPage] = React.useState();
    
    const addToDatabase = async (employeeData) =>{
        try {
                await fetch(`http://localhost:3001/employee`, {
                method: "POST",
                body: JSON.stringify(employeeData),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            getData();
        } catch (error) {
            setError(true);
        }
 
    }
    const getData = async () =>{
        try {
            setLoading(true)
            let res = await fetch(`http://localhost:3001/employee?_page=${page}&_limit=3`);
            let data = await res.json();
        
            setAllEmployeeData(data);
        
            for (let pair of res.headers.entries()) {
          if(pair[0] === 'x-total-count'){
              setLastPage(Math.ceil(pair[1]/3));
          }
      }
        } catch (error) {
            setError(true)
            console.log(error);
        }
        setLoading(false) ;
    }
   const handlePage=(data)=>{
        setPage(page+data);
   }

    React.useEffect(()=>{
        getData();
    },[page])

    return <>
        <EmployeeData addToDatabase={addToDatabase} />
        {loading?(<h1>Loading Data...</h1>)
        :error?(<h1>Error Occur....</h1>):

        ( <ShowData allEmployeeData={allEmployeeData}
         handlePage={handlePage}
         page={page}
         lastPage={lastPage}
        
         />)
}
    </>
}

export default EmployeeDetails;