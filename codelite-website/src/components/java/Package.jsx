import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaPackage() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>What is a Package?</h2>
            <p>A package in Java is a namespace that organizes related classes and interfaces. Think of packages like folders on your computer: you might have one folder for HTML files, another for images, and yet another for scripts or applications. In a similar way, packages help manage and organize large numbers of Java classes and interfaces by grouping related ones together.</p>
        </section>

        <section>
            <h2>Java Platform Class Library</h2>
            <p>The Java platform provides an extensive library of classes organized into packages, known as the "Application Programming Interface" (API). This library contains classes for common programming tasks:</p>
            <ul>
                <li><code>String</code> for managing character strings.</li>
                <li><code>File</code> for handling file creation, deletion, inspection, comparison, and modification.</li>
                <li><code>Socket</code> for network communication.</li>
                <li>Various GUI components for building user interfaces.</li>
            </ul>
            <p>These packages simplify your coding process by providing pre-built functionalities, allowing you to focus on designing your application rather than building foundational infrastructure.</p>
        </section>

        <section>
            <h2>Java Platform API Specification</h2>
            <p>The Java Platform API Specification is a comprehensive resource listing all the packages, interfaces, classes, fields, and methods available in the Java SE platform. Bookmark this page as it will become an essential reference for your programming work.</p>
            <div class="note">
                <p><strong>Note:</strong> Make sure to consult the Java API documentation frequently to understand the classes and methods you can use in your projects.</p>
            </div>
        </section>
    </div>
    <Footer />
    </>
    );
}