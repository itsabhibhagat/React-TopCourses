import React from "react";
import "./Spinner.css";

const Spinner=()=>{
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="spinner"></div>
        <p className="text-bgDark text-lg font-semibold">Loading....</p>
    </div>
}

export default Spinner;