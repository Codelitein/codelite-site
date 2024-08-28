import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaCreatingObjects() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction to Object Creation</h2>
            <p>In Java, a class serves as a blueprint for objects. You can create an object from a class using the following statements:</p>
            <pre><code>Point originOne = new Point(23, 94);
Rectangle rectOne = new Rectangle(originOne, 100, 200);
Rectangle rectTwo = new Rectangle(50, 100);</code></pre>
            <p>Here’s what each part of these statements does:</p>
            <ul>
                <li><strong>Declaration:</strong> The variable declarations (e.g., <code>Point originOne</code>) associate a variable name with a specific object type.</li>
                <li><strong>Instantiation:</strong> The <code>new</code> keyword creates the object.</li>
                <li><strong>Initialization:</strong> Following the <code>new</code> keyword, a constructor call initializes the newly created object.</li>
            </ul>
        </section>
        
        <section>
            <h2>Declaring a Variable to Refer to an Object</h2>
            <p>To declare a variable, use the syntax:</p>
            <pre><code>type name;</code></pre>
            <p>This informs the compiler that <code>name</code> will refer to data of type <code>type</code>. For reference variables, declaring them alone does not create an object:</p>
            <pre><code>Point originOne;</code></pre>
            <p>Without creating an object and assigning it to <code>originOne</code>, its value remains uninitialized. An attempt to use it without assigning an object will result in a compiler error.</p>
        </section>
        
        <section>
            <h2>Instantiating a Class</h2>
            <p>The <code>new</code> operator is used to instantiate a class, which involves allocating memory for a new object and returning a reference to that memory. This operator also invokes the object's constructor:</p>
            <p>To instantiate a class, use:</p>
            <pre><code>Point originOne = new Point(23, 94);</code></pre>
            <p>Here, <code>new Point(23, 94)</code> creates a new <code>Point</code> object with the specified arguments. This reference can be used directly in expressions:</p>
            <pre><code>int height = new Rectangle().height;</code></pre>
        </section>
        
        <section>
            <h2>Initializing an Object</h2>
            <p>Consider the following code for the <code>Point</code> class:</p>
            <pre><code>public class Point &#123;
    public int x = 0;
    public int y = 0;

    // Constructor
    public Point(int a, int b) &#123;
        x = a;
        y = b;
    &#125;
&#125;</code></pre>
            <p>This class includes a constructor that sets the <code>x</code> and <code>y</code> coordinates. When you create an object like this:</p>
            <pre><code>Point originOne = new Point(23, 94);</code></pre>
            <p>The constructor initializes the object’s coordinates to 23 and 94, respectively.</p>
        </section>
        
        <section>
            <h2>Rectangle Class with Multiple Constructors</h2>
            <p>Here’s how the <code>Rectangle</code> class is defined:</p>
            <pre><code>public class Rectangle &#123;
    public int width = 0;
    public int height = 0;
    public Point origin;

    // Constructors
    public Rectangle() &#123;
        origin = new Point(0, 0);
    &#125;

    public Rectangle(Point p) &#123;
        origin = p;
    &#125;

    public Rectangle(int w, int h) &#123;
        origin = new Point(0, 0);
        width = w;
        height = h;
    &#125;

    public Rectangle(Point p, int w, int h) &#123;
        origin = p;
        width = w;
        height = h;
    &#125;

    // Method to move the rectangle
    public void move(int x, int y) &#123;
        origin.x = x;
        origin.y = y;
    &#125;

    // Method to compute the area
    public int getArea() &#123;
        return width * height;
    &#125;
&#125;</code></pre>
            <p>This class includes four constructors that initialize the rectangle’s <code>origin</code>, <code>width</code>, and <code>height</code>. If a class has multiple constructors, they must have unique signatures.</p>
            <p>For instance:</p>
            <pre><code>Rectangle rectOne = new Rectangle(originOne, 100, 200);</code></pre>
            <p>This creates a <code>Rectangle</code> with <code>origin</code> set to <code>originOne</code>, <code>width</code> to 100, and <code>height</code> to 200.</p>
            <p>Another example:</p>
            <pre><code>Rectangle rectTwo = new Rectangle(50, 100);</code></pre>
            <p>This uses a constructor that sets the <code>width</code> and <code>height</code>, creating a new <code>Point</code> object with default coordinates.</p>
            <p>A no-argument constructor is used as follows:</p>
            <pre><code>Rectangle rect = new Rectangle();</code></pre>
            <p>All classes have at least one constructor. If none is explicitly defined, Java provides a default constructor that calls the superclass's no-argument constructor.</p>
        </section>
    </div>
    <Footer />
    </>
    );
}