import React, { useState } from "react";
import Card from "./Card";

const Cards=(props)=>{
    let courses=props.courses;
    let category=props.category;
    
    const [likedcourses,setlikedcourses]=useState([]);

    function getcourses(){
        if(category==="All"){
            let allcourses=[];
            Object.values(courses).forEach(array=>{
                array.forEach(courseData => {
                    allcourses.push(courseData);
                })
            })
        return allcourses;
        }
        else{
            //mai sirf specific category ka data bhejunga
            return courses[category];
        } 
        
        
    }

   return (
    <div className=" justify-center item-center flex flex-wrap gap-5">
        {
            getcourses().map((course)=>{
                return <Card key={course.id} 
                course={course}
                likedcourses={likedcourses}
                setlikedcourses={setlikedcourses}></Card>
               
            })
        }
    </div>
   )
}
export default Cards;