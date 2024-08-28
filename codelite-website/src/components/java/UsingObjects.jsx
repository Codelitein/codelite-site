import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaUsingObjects() {

    return(
        <>
        <Header />
        <div class="container">

        <section>
            <h2>Accessing Object Fields</h2>
            <p>To use an object's fields, you access them by name. Inside the object's class, you can use the field names directly. For example, within the <code>Rectangle</code> class, you might print the width and height as follows:</p>
            <pre><code>System.out.println("Width and height are: " + width + ", " + height);</code></pre>
            <p>Here, <code>width</code> and <code>height</code> are accessed directly.</p>
            <p>When accessing fields from outside the object's class, you need to use an object reference followed by the dot (.) operator. For example, if you have a <code>Rectangle</code> object named <code>rectOne</code>, you would access its fields like this:</p>
            <pre><code>System.out.println("Width of rectOne: "  + rectOne.width);
System.out.println("Height of rectOne: " + rectOne.height);</code></pre>
            <p>Attempting to use the field names directly outside the class will result in an error because these fields are specific to each object.</p>
            <p>To access fields from a newly created object, you can use the <code>new</code> operator:</p>
            <pre><code>int height = new Rectangle().height;</code></pre>
            <p>This creates a new <code>Rectangle</code> object and retrieves its default height, though the reference to this object is not retained afterward.</p>
        </section>

        <section>
            <h2>Calling Object Methods</h2>
            <p>Methods of an object are invoked using an object reference. You append the method's name to the reference with a dot (.) operator, and provide any required arguments within parentheses. For instance:</p>
            <pre><code>objectReference.methodName(argumentList);
objectReference.methodName();</code></pre>
            <p>The <code>Rectangle</code> class includes methods like <code>getArea()</code> to calculate the area and <code>move()</code> to alter the rectangle's position. Example usage in the <code>CreateObjectDemo</code> class:</p>
            <pre><code>System.out.println("Area of rectOne: " + rectOne.getArea());
rectTwo.move(40, 72);</code></pre>
            <p>Here, <code>getArea()</code> computes and displays the area of <code>rectOne</code>, while <code>move()</code> updates <code>rectTwo</code>'s position.</p>
            <p>For methods returning values, you can use the returned value in expressions. For example:</p>
            <pre><code>int areaOfRectangle = new Rectangle(100, 50).getArea();</code></pre>
            <p>This creates a new <code>Rectangle</code> and retrieves its area in one statement.</p>
        </section>

    </div>
    <Footer />
    </>
    );
}