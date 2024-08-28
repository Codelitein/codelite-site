import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaConstructor() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>What is a Constructor?</h2>
            <p>In Java, a class can have constructors that are used to create objects based on the class's blueprint. Constructors are similar to methods but have a few key differences: they share the class's name and do not have a return type. For example, the <code>Bicycle</code> class includes a constructor as shown below:</p>
            <pre><code>public Bicycle(int startCadence, int startSpeed, int startGear) &#123;
    gear = startGear;
    cadence = startCadence;
    speed = startSpeed;
&#125;
</code></pre>
        </section>
        
        <section>
            <h2>Creating Objects with Constructors</h2>
            <p>To instantiate a new <code>Bicycle</code> object named <code>myBike</code>, you would use the <code>new</code> operator along with the constructor:</p>
            <pre><code>Bicycle myBike = new Bicycle(40, 0, 3);
</code></pre>
            <p>This statement allocates memory for the <code>myBike</code> object and initializes its fields based on the constructor parameters.</p>
        </section>
        
        <section>
            <h2>Multiple Constructors</h2>
            <p>A class can have multiple constructors with different parameter lists. For instance, <code>Bicycle</code> might also have a no-argument constructor:</p>
            <pre><code>public Bicycle() &#123;
    gear = 1;
    cadence = 10;
    speed = 0;
&#125;
</code></pre>
            <p>Using this constructor:</p>
            <pre><code>Bicycle yourBike = new Bicycle();
</code></pre>
            <p>Creates a new <code>Bicycle</code> object named <code>yourBike</code> with default values.</p>
            <p>Java differentiates constructors by the number and type of arguments. It is not possible to have two constructors with the same argument list in the same class, as this would lead to a compile-time error.</p>
        </section>
        
        <section>
            <h2>Default Constructors</h2>
            <p>If a class does not explicitly define any constructors, the Java compiler automatically provides a no-argument default constructor. This default constructor calls the no-argument constructor of the superclass. If the superclass lacks a no-argument constructor, the compiler will raise an error. However, if your class does not extend any other class, it implicitly extends <code>Object</code>, which has a no-argument constructor.</p>
        </section>
        
        <section>
            <h2>Using Superclass Constructors</h2>
            <p>You can also use constructors from a superclass. This will be further explored in lessons on interfaces and inheritance.</p>
        </section>
        
        <section>
            <h2>Access Modifiers</h2>
            <p>Access modifiers can be used in a constructor's declaration to control the visibility and accessibility of the constructor from other classes.</p>
        </section>
    </div>
    <Footer />
    </>
    );
}