import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaGarbageCollector() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction</h2>
            <p>In some object-oriented programming languages, you need to manually manage the memory of the objects you create, including their explicit destruction when they are no longer needed. This manual memory management can be cumbersome and prone to errors. However, the Java platform simplifies this process by handling memory management for you. You can create as many objects as you like, limited only by your system's capacity, without having to worry about their disposal. This is accomplished through a process known as garbage collection.</p>
        </section>

        <section>
            <h2>How Garbage Collection Works</h2>
            <p>In Java, an object becomes eligible for garbage collection when there are no longer any references to it. Typically, references held in a variable are discarded when the variable goes out of scope. Alternatively, you can manually remove a reference by setting the variable to <code>null</code>. It's important to note that an object can have multiple references, and all references must be removed before the object can be collected.</p>
        </section>

        <section>
            <h2>The Role of the Garbage Collector</h2>
            <p>The Java runtime environment includes a garbage collector that automatically reclaims memory from objects that are no longer in use. This process happens periodically and is managed by the runtime environment, ensuring that memory is efficiently freed without requiring manual intervention from the programmer.</p>
        </section>
    </div>
    <Footer />
    </>
    );
}