import React from "react";
import { useNavigate } from "react-router-dom";


export default function NextPageButton({path}) {
    const navigate = useNavigate();

    function callBtn(){
        navigate(path);
    }

    return(
        <>
            <button className="next-page-btn" onClick={callBtn}>Next Page</button>
        </>
    );
}