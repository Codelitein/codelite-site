import React from "react";
import 'font-awesome/css/font-awesome.min.css';


export default function Header() {

    return(
        <>
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" className="checkbtn">
                    <i className="fa fa-bars"></i>
                </label>
                <label className="logo">codelite.co.in</label>
                <ul id="nav-drag">
                    <li><a className="active" href="#">Home</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>
            </nav>
        </>
    );
}