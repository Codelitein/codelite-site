import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaInheritance() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction to Inheritance</h2>
            <p>Inheritance in Java allows one class to inherit the fields and methods of another class. This concept enables code reuse and establishes a hierarchical relationship between classes.</p>
        </section>
        
        <section>
            <h2>Definitions</h2>
            <p>In Java, a class that inherits from another class is referred to as a <strong>subclass</strong> (also known as a derived class, extended class, or child class). The class from which the subclass is derived is called a <strong>superclass</strong> (also known as a base class or parent class).</p>
            <p>Every class, except <code>Object</code>, which has no superclass, has exactly one direct superclass (single inheritance). If no explicit superclass is defined, a class implicitly extends <code>Object</code>.</p>
            <p>Classes can inherit from other classes, forming a chain of inheritance that ultimately traces back to <code>Object</code>, the root class. This chain allows classes to inherit features from multiple layers of the hierarchy.</p>
        </section>
        
        <section>
            <h2>Inheritance Mechanics</h2>
            <p>The purpose of inheritance is to allow the creation of new classes based on existing ones, thereby reusing existing code. This simplifies the development process by eliminating the need to rewrite and debug previously tested code.</p>
            <p>A subclass inherits all members (fields, methods, and nested classes) from its superclass. However, constructors are not inherited. A subclass can invoke the constructor of its superclass using the <code>super</code> keyword.</p>
            <p>The <code>Object</code> class in the <code>java.lang</code> package is the root of the class hierarchy. Many classes directly extend <code>Object</code>, creating a hierarchy that becomes increasingly specialized as you move down the hierarchy.</p>
        </section>
        
        <section>
            <h2>Example of Inheritance</h2>
            <p>Consider the following implementation of a <code>Bicycle</code> class:</p>
            <div class="example">
                <pre><code>public class Bicycle &#123;
    // Fields of the Bicycle class
    public int cadence;
    public int gear;
    public int speed;
    
    // Constructor of the Bicycle class
    public Bicycle(int startCadence, int startSpeed, int startGear) &#123;
        gear = startGear;
        cadence = startCadence;
        speed = startSpeed;
    &#125;
    
    // Methods of the Bicycle class
    public void setCadence(int newValue) &#123;
        cadence = newValue;
    &#125;
    
    public void setGear(int newValue) &#123;
        gear = newValue;
    &#125;
    
    public void applyBrake(int decrement) &#123;
        speed -= decrement;
    &#125;
    
    public void speedUp(int increment) &#123;
        speed += increment;
    &#125;
&#125;
</code></pre>
            </div>
            <p>A <code>MountainBike</code> class that extends <code>Bicycle</code> might look like this:</p>
            <div class="example">
                <pre><code>public class MountainBike extends Bicycle &#123;
    // New field in MountainBike
    public int seatHeight;
    
    // Constructor of MountainBike
    public MountainBike(int startHeight, int startCadence, int startSpeed, int startGear) &#123;
        super(startCadence, startSpeed, startGear);
        seatHeight = startHeight;
    &#125;
    
    // New method in MountainBike
    public void setHeight(int newValue) &#123;
        seatHeight = newValue;
    &#125;
&#125;
</code></pre>
            </div>
            <p>The <code>MountainBike</code> class inherits all fields and methods from the <code>Bicycle</code> class and adds its own field and method. Although it appears as if <code>MountainBike</code> was created from scratch, it actually builds upon the existing <code>Bicycle</code> class, saving development time and effort.</p>
        </section>
        
        <section>
            <h2>Subclass Capabilities</h2>
            <p>Subclasses inherit all public and protected members from their superclass, regardless of the package. If the subclass and superclass are in the same package, package-private members are also inherited. Subclasses can:</p>
            <ul>
                <li>Use inherited fields directly.</li>
                <li>Declare fields with the same name as in the superclass (not recommended).</li>
                <li>Add new fields not present in the superclass.</li>
                <li>Use inherited methods directly.</li>
                <li>Override instance methods from the superclass.</li>
                <li>Hide static methods from the superclass.</li>
                <li>Add new methods not present in the superclass.</li>
                <li>Invoke superclass constructors using the <code>super</code> keyword.</li>
            </ul>
        </section>
        
        <section>
            <h2>Private Members in Superclasses</h2>
            <p>Private members of a superclass are not inherited by subclasses. However, if the superclass provides public or protected methods for accessing private fields, these methods can be used by the subclass.</p>
            <p>Nested classes have access to private members of their enclosing class. Thus, a nested class inherited by a subclass has indirect access to the private members of the superclass.</p>
        </section>
        
        <section>
            <h2>Casting Objects</h2>
            <p>Objects are instantiated with a specific class type. For example:</p>
            <div class="example">
                <pre><code>public MountainBike myBike = new MountainBike();
</code></pre>
            </div>
            <p>Here, <code>myBike</code> is of type <code>MountainBike</code>. Since <code>MountainBike</code> extends <code>Bicycle</code> and <code>Object</code>, <code>myBike</code> is also a <code>Bicycle</code> and an <code>Object</code>.</p>
            <p>Implicit casting allows an object to be treated as an instance of a superclass or interface:</p>
            <div class="example">
                <pre><code>Object obj = new MountainBike();
</code></pre>
            </div>
            <p>Here, <code>obj</code> is both an <code>Object</code> and a <code>MountainBike</code>. To cast <code>obj</code> back to <code>MountainBike</code>, explicit casting is used:</p>
            <div class="example">
                <pre><code>MountainBike myBike = (MountainBike)obj;
</code></pre>
            </div>
            <p>This cast includes a runtime check to ensure <code>obj</code> is indeed a <code>MountainBike</code>. If not, an exception is thrown.</p>
            <p>The <code>instanceof</code> operator can be used to check the type of an object before casting:</p>
            <div class="example">
                <pre><code>if (obj instanceof MountainBike) &#123;
    MountainBike myBike = (MountainBike)obj;
&#125;
</code></pre>
            </div>
            <p>This ensures safe casting by verifying that <code>obj</code> is a <code>MountainBike</code> before performing the cast.</p>
        </section>
    </div>
    <Footer />
    </>
    );
}