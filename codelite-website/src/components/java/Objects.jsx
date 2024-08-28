import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaObjects() {

    return(
        <>
        <Header />
        <div class="container">
    <section>
        <h2>What is an Object?</h2>
        <p>An object is essentially a software bundle that encapsulates related state and behavior. In this context, state refers to the data or attributes of the object, while behavior pertains to the actions or methods it can perform. This concept of combining state and behavior into a single unit is foundational to object-oriented programming (OOP).</p>
    </section>

    <section>
        <h2>Characteristics of Objects</h2>
        <p>Objects are defined by their state and behavior. For example, consider dogs and bicycles:</p>
        <ul>
            <li><strong>Dogs:</strong> Have attributes like name, color, breed, and hunger state. Their behaviors include barking, fetching, and wagging their tails.</li>
            <li><strong>Bicycles:</strong> Have attributes such as current gear, pedal cadence, and speed. Their behaviors include changing gears, adjusting pedal cadence, and applying brakes.</li>
        </ul>
        <p>Observing real-world objects and identifying their state and behavior is a great way to start thinking in terms of OOP. For instance, a desktop lamp has a simple state (on and off) and behavior (turning on and off), whereas a desktop radio has a more complex state (volume, station) and behavior (changing volume, tuning).</p>
    </section>

    <section>
        <h2>Software Objects</h2>
        <p>In software, an object combines state and behavior. It stores its state in fields (or variables) and exposes behavior through methods (or functions). Methods manipulate the object's state and facilitate interaction between objects. Data encapsulation, a core principle of OOP, involves hiding the internal state of an object and requiring all interactions to occur through its methods.</p>
        <p>Consider a bicycle modeled as a software object:</p>
        <ul>
            <li><strong>State:</strong> Includes current speed, pedal cadence, and gear.</li>
            <li><strong>Methods:</strong> Allow for changing these attributes. For example, if a bicycle has only 6 gears, its method for changing gears will enforce this limit by rejecting values outside the range of 1 to 6.</li>
        </ul>
    </section>

    <section>
        <h2>Benefits of Object-Oriented Design</h2>
        <p>Designing software using objects offers several advantages:</p>
        <ul>
            <li><strong>Modularity:</strong> Objects can be developed and maintained independently. Once created, they can be reused and integrated into different parts of a system.</li>
            <li><strong>Information-hiding:</strong> Interactions with objects are handled through their methods, keeping the internal implementation details hidden.</li>
            <li><strong>Code Reusability:</strong> Existing objects can be reused in new programs, facilitating the incorporation of pre-tested and reliable components.</li>
            <li><strong>Pluggability and Debugging:</strong> If an object proves problematic, it can be replaced with another without altering the entire system, similar to replacing a broken part in a mechanical system.</li>
        </ul>
    </section>
</div>
<Footer />
</>
    );
}