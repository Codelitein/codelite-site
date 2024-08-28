import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaInheritanceOverview() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction to Inheritance</h2>
            <p>Inheritance is a key concept in object-oriented programming that enables classes to derive common attributes and behaviors from other classes. For example, while mountain bikes, road bikes, and tandem bikes share basic bicycle characteristics such as current speed, pedal cadence, and gear, each type also has its unique features. Tandem bikes have two seats and handlebars, road bikes feature drop handlebars, and some mountain bikes come with an additional chain ring for a lower gear ratio.</p>
        </section>
        
        <section>
            <h2>Inheritance in Java</h2>
            <p>In Java, inheritance allows one class to inherit fields and methods from another class. This process is straightforward: you declare a subclass using the <code>extends</code> keyword followed by the name of the superclass. For instance, in the following example, <code>MountainBike</code> extends <code>Bicycle</code>, inheriting its attributes and behaviors:</p>
            <pre><code>class MountainBike extends Bicycle &#123;
    // Additional fields and methods specific to MountainBike would be added here
&#125;
</code></pre>
            <p>By doing this, <code>MountainBike</code> inherits all fields and methods from <code>Bicycle</code>, but can also include features that are unique to it. This promotes code reusability and clarity. However, it’s crucial to document the state and behavior defined in the superclass thoroughly, as this code will not be visible in the subclass’s source file.</p>
        </section>

        <section>
            <h2>Benefits of Inheritance</h2>
            <p>Inheritance offers several advantages in object-oriented programming:</p>
            <ul>
                <li><strong>Code Reusability:</strong> Common features are defined once in the superclass and reused by subclasses.</li>
                <li><strong>Enhanced Maintainability:</strong> Changes made to the superclass automatically propagate to subclasses, reducing duplication of code.</li>
                <li><strong>Improved Code Organization:</strong> Inheritance allows for a hierarchical structure, making the code easier to manage and understand.</li>
            </ul>
        </section>

        <section>
            <h2>Example Hierarchy of Bicycle Classes</h2>
            <p>Consider the following hierarchy where <code>Bicycle</code> is the superclass and <code>MountainBike</code>, <code>RoadBike</code>, and <code>TandemBike</code> are subclasses:</p>
        </section>
    </div>
    <Footer />
    </>
    );
}