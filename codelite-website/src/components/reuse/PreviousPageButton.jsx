import React from "react";
import { useNavigate } from "react-router-dom";


export default function PreviousPageButton({path}) {
    const navigate = useNavigate();

    function callBtn(){
        navigate(path);
    }

    return(
        <>
            <button className="next-page-btn" onClick={callBtn}>Previous Page</button>
        </>
    );
}