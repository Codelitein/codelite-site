import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaMultipleInheritance() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction</h2>
            <p>In Java, there are key differences between classes and interfaces, particularly concerning inheritance. Classes can have fields and be instantiated to create objects, while interfaces cannot have fields and cannot be instantiated. Objects store their state in fields defined by classes, but Java restricts multiple class inheritance to prevent issues related to multiple inheritance of state.</p>
        </section>
        
        <section>
            <h2>Multiple Inheritance of State</h2>
            <p>Java does not support multiple inheritance of state to avoid complications that arise from inheriting fields from multiple classes. For instance, if a class could extend multiple classes, it would inherit fields from all these superclasses. This could lead to conflicts if different superclasses initialize the same field. Since interfaces do not include fields, Java avoids these issues by disallowing multiple inheritance of state.</p>
        </section>
        
        <section>
            <h2>Multiple Inheritance of Implementation</h2>
            <p>Multiple inheritance of implementation allows a class to inherit method definitions from several classes. This can create problems like name conflicts and ambiguities. If multiple superclasses have methods with the same name, the compiler may struggle to determine which method to use. Adding new methods to superclasses can also introduce conflicts. Java handles this with default methods in interfaces, where a class can implement multiple interfaces containing default methods with the same name. The Java compiler follows specific rules to resolve which default method a class should use.</p>
        </section>
        
        <section>
            <h2>Multiple Inheritance of Type</h2>
            <p>Java supports multiple inheritance of type, which means a class can implement multiple interfaces. This allows an object to have multiple types: its own class type and the types of all interfaces it implements. Consequently, a variable declared as an interface type can reference any object of a class implementing that interface. This is further explained in the section on using interfaces as types.</p>
        </section>
        
        <section>
            <h2>Handling Multiple Implementations</h2>
            <p>Similar to multiple inheritance of implementation, a class may inherit different implementations of a method from interfaces. The choice of which method implementation to use is determined by either the compiler or the user, depending on the situation.</p>
        </section>
    </div>
    <Footer />
    </>
    );
}