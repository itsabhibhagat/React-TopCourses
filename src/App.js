import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Filter from  "./Components/Filter";
import Cards from  "./Components/Cards";
import { apiUrl,filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from  "./Components/Spinner";


const App=()=> {

  const [courses, setCourses] =useState(null);
  const [loading,setLoading]=useState(true);  
  const [category,setcategory]=useState(filterData[0].title);
  
  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      //output-->
      setCourses(output.data);
    }
    catch(error){
      toast.error("Network me dikkat hai");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])



  return (
   <div className="min-h-screen flex flex-col ">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="bg-[#393951] min-h-screen">
        <div>
          <Filter filterData={filterData} category={category} setcategory={setcategory}></Filter>
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category}></Cards>)
        }
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
