import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

const Card=(props)=>{
    let likedcourses=props.likedcourses;
    let setlikedcourses=props.setlikedcourses;
    function clickHandler(){
        //logic
        if(likedcourses.includes(course.id)){
            //pehle se like hua pada hai
            setlikedcourses((prev) => prev.filter((cid)=>(cid !== course.id)));
            toast.warning("Like removed")
        }
        else{
            //pehle se liked nhi hai
            if(likedcourses.length===0){
                setlikedcourses([course.id])
            }
            else{
                //non-empty pehle se hai
                setlikedcourses((prev) => [...prev, course.id]);
            }
            toast.success( "Course added to likes");
            
        }
    }


    let course=props.course;
    return(
        <div className="w-[300px] bg-bgDark overflow-hidden bg-[#28283e] bg-opacity-80 rounded-md">
            <div className="relative ">
                <img src={course.image.url} alt="#"></img>
                <div className="absolute w-[40px] h-[40px] rounded-full right-2 bottom-[-0.8rem] bg-white grid place-items-center">
                    <button onClick={clickHandler}>
                       {
                        !likedcourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem"/>) : 
                        (<FcLike fontSize="1.75rem"/>)
                       }
                    </button>
                </div>
            </div>
           
            <div className="p-4">
                <p className="font-semibold text-white text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2 ">
                    {
                        course.description.length > 100 ? (course.description.substr(0,100))+"...":(course.description)
                    }
                </p>
            </div>
        </div>
    )
}
export default Card;