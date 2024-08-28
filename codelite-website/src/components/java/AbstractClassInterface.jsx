import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


function JavaAbstractClassInterface() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Abstract Classes vs. Interfaces</h2>
            <p>Abstract classes and interfaces in Java share similarities. Both cannot be instantiated and can contain a mix of method declarations and implementations. However, abstract classes allow for non-static and non-final fields, and can include methods with public, protected, and private access. In contrast, all fields in interfaces are implicitly public, static, and final, and methods are always public, including default methods. You can extend only one class, whether abstract or not, while multiple interfaces can be implemented.</p>
        </section>
        
        <section>
            <h2>When to Use Abstract Classes vs. Interfaces</h2>
            <p>Choose abstract classes when:</p>
            <ul>
                <li>You want to share code among several closely related classes.</li>
                <li>You anticipate that extending classes will have many common methods or fields, or require non-public access modifiers (e.g., protected or private).</li>
                <li>You need to declare non-static or non-final fields, allowing methods to access and modify the object's state.</li>
            </ul>
            <p>Choose interfaces when:</p>
            <ul>
                <li>You expect various unrelated classes to implement your interface. For instance, interfaces like <code>Comparable</code> and <code>Cloneable</code> are implemented by many unrelated classes.</li>
                <li>You want to define the behavior of a data type without concern for who implements it.</li>
                <li>You need to utilize multiple inheritance of types.</li>
            </ul>
        </section>
        
        <section>
            <h2>Examples in the JDK</h2>
            <p>For instance, <code>AbstractMap</code> is an abstract class in the JDK part of the Collections Framework. Its subclasses, such as <code>HashMap</code>, <code>TreeMap</code>, and <code>ConcurrentHashMap</code>, share many methods like <code>get()</code>, <code>put()</code>, <code>isEmpty()</code>, <code>containsKey()</code>, and <code>containsValue()</code>, which <code>AbstractMap</code> defines.</p>
            <p>On the other hand, <code>HashMap</code> implements several interfaces, including <code>Serializable</code>, <code>Cloneable</code>, and <code>Map&lt;K, V&gt;</code>. This means that <code>HashMap</code> instances can be cloned, are serializable (convertible into a byte stream), and possess map functionalities. The <code>Map&lt;K, V&gt;</code> interface includes default methods like <code>merge()</code> and <code>forEach()</code>, which older classes implementing this interface do not have to define.</p>
            <p>Many software libraries utilize both abstract classes and interfaces; for example, <code>HashMap</code> implements multiple interfaces and extends the abstract class <code>AbstractMap</code>.</p>
        </section>
        
        <section>
            <h2>Abstract Class Example</h2>
            <p>Consider an object-oriented drawing application where you can draw various graphic objects like circles, rectangles, lines, and Bezier curves. These objects share certain attributes (e.g., position, color) and behaviors (e.g., moveTo, draw) but differ in their specific implementations.</p>
            <p>An abstract superclass is ideal for this scenario. You can define a common abstract class, <code>GraphicObject</code>, which provides shared member variables and methods such as <code>moveTo()</code>. Abstract methods like <code>draw()</code> and <code>resize()</code> will be implemented by subclasses.</p>
            <div class="example">
                <pre><code>abstract class GraphicsObject &#123;
    int x, y;
    void moveTo(int newX, int newY) &#123;
        this.x = newX;
        this.y = newY;
    &#125;
    abstract void draw();
    abstract void resize();
&#125;
</code></pre>
            </div>
            <p>Each concrete subclass, such as <code>Circle</code> and <code>Rectangle</code>, must implement the <code>draw()</code> and <code>resize()</code> methods:</p>
            <div class="example">
                <pre><code>class Circle extends GraphicsObject &#123;
    void draw() &#123;
        // Implementation of draw for Circle
    &#125;
    void resize() &#123;
        // Implementation of resize for Circle
    &#125;
&#125;
class Rectangle extends GraphicsObject &#123;
    void draw() &#123;
        // Implementation of draw for Rectangle
    &#125;
    void resize() &#123;
        // Implementation of resize for Rectangle
    &#125;
&#125;
</code></pre>
            </div>
        </section>
        
        <section>
            <h2>When an Abstract Class Implements an Interface</h2>
            <p>An abstract class can implement an interface without fully implementing all its methods. For instance:</p>
            <div class="example">
                <pre><code>abstract class X implements Y &#123;
    // Implements all but one method of Y
&#125;

class XX extends X &#123;
    // Implements the remaining method in Y
&#125;
</code></pre>
            </div>
            <p>In this case, <code>X</code> must be abstract because it does not fully implement <code>Y</code>. However, <code>XX</code> can extend <code>X</code> and provide implementations for all methods in <code>Y</code>.</p>
        </section>
    </div>
    <Footer />
    </>
    );

}

export default JavaAbstractClassInterface;