import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaClassMembers() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Class Variables</h2>
            <p>In Java, when multiple objects are instantiated from the same class, each object maintains its own separate copy of instance variables. For instance, in the <code>Bicycle</code> class, instance variables like <code>cadence</code>, <code>gear</code>, and <code>speed</code> are unique to each Bicycle object, stored at different memory locations.</p>
            <p>To have variables shared across all instances of a class, we use the <code>static</code> keyword. Static fields, or class variables, are linked to the class itself rather than to any specific object. Each instance of the class shares a single copy of a static variable, which resides in one fixed location in memory. Class variables can be modified without needing to instantiate the class.</p>
            <p>For instance, if we want each <code>Bicycle</code> object to have a unique ID starting from 1, we use an instance variable for the ID and a static variable to track the total number of <code>Bicycle</code> objects created:</p>
            <pre><code>public class Bicycle &#123;
    private int cadence;
    private int gear;
    private int speed;
    private int id;
    private static int numberOfBicycles = 0;
    ...
&#125;</code></pre>
            <p>Class variables are typically accessed using the class name:</p>
            <pre><code>Bicycle.numberOfBicycles</code></pre>
            <p>Although you can also access static fields via an object reference (e.g., <code>myBike.numberOfBicycles</code>), this practice is discouraged as it obscures the fact that these are class-level variables.</p>
        </section>
        
        <section>
            <h2>Using Static Fields in Constructors</h2>
            <p>The constructor for the <code>Bicycle</code> class can be used to set the ID and increment the <code>numberOfBicycles</code> class variable:</p>
            <pre><code>public class Bicycle &#123;
    private int cadence;
    private int gear;
    private int speed;
    private int id;
    private static int numberOfBicycles = 0;
    
    public Bicycle(int startCadence, int startSpeed, int startGear) &#123;
        gear = startGear;
        cadence = startCadence;
        speed = startSpeed;
        id = ++numberOfBicycles;
    &#125;
    
    public int getID() &#123;
        return id;
    &#125;
    ...
&#125;</code></pre>
        </section>
        
        <section>
            <h2>Static Methods</h2>
            <p>In Java, static methods are methods declared with the <code>static</code> keyword and are invoked using the class name. This allows you to call the method without creating an instance of the class:</p>
            <pre><code>ClassName.methodName(args)</code></pre>
            <p>Static methods are often used to access static fields. For instance, you can add a static method to the <code>Bicycle</code> class to return the <code>numberOfBicycles</code> field:</p>
            <pre><code>public static int getNumberOfBicycles() &#123;
    return numberOfBicycles;
&#125;</code></pre>
            <p>Instance methods can access instance variables and methods directly, as well as class variables and methods. Static methods can only access class variables and methods directly. To access instance variables or methods from a static method, you must use an object reference and cannot use the <code>this</code> keyword, as it refers to an instance of the class.</p>
        </section>
        
        <section>
            <h2>Defining Constants</h2>
            <p>The <code>static</code> modifier combined with the <code>final</code> modifier is used to define constants in Java. The <code>final</code> keyword ensures that the value of the constant cannot be changed:</p>
            <pre><code>static final double PI = 3.141592653589793;</code></pre>
            <p>Constants are typically named in uppercase letters, with words separated by underscores. The compiler replaces constant names with their values at compile time if the value is known during compilation. If the constant’s value changes externally, recompiling the class is necessary to update the value.</p>
        </section>
        
        <section>
            <h2>The Updated Bicycle Class</h2>
            <p>Here is the <code>Bicycle</code> class with the discussed modifications:</p>
            <pre><code>public class Bicycle &#123;
    private int cadence;
    private int gear;
    private int speed;
    private int id;
    private static int numberOfBicycles = 0;

    public Bicycle(int startCadence, int startSpeed, int startGear) &#123;
        gear = startGear;
        cadence = startCadence;
        speed = startSpeed;
        id = ++numberOfBicycles;
    &#125;

    public int getID() &#123;
        return id;
    &#125;

    public static int getNumberOfBicycles() &#123;
        return numberOfBicycles;
    &#125;

    public int getCadence() &#123;
        return cadence;
    &#125;

    public void setCadence(int newValue) &#123;
        cadence = newValue;
    &#125;

    public int getGear() &#123;
        return gear;
    &#125;

    public void setGear(int newValue) &#123;
        gear = newValue;
    &#125;

    public int getSpeed() &#123;
        return speed;
    &#125;

    public void applyBrake(int decrement) &#123;
        speed -= decrement;
    &#125;

    public void speedUp(int increment) &#123;
        speed += increment;
    &#125;
&#125;</code></pre>
        </section>
    </div>
    <Footer />
    </>
    );
}