import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaClass() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>What is a Class?</h2>
            <p>In programming, a class serves as a blueprint for creating objects. Think of it as a template from which many objects of the same type can be instantiated. For instance, consider bicycles: while each bicycle might be different in terms of color or wear, they are all created from the same design specifications. In object-oriented programming, each bicycle is an instance of the class <code>Bicycle</code>, which serves as the blueprint for creating individual bicycle objects.</p>
        </section>
        
        <section>
            <h2>Example of a Bicycle Class</h2>
            <p>Below is an example of how you might define a <code>Bicycle</code> class in Java:</p>
            <pre><code>class Bicycle &#123;
    int cadence = 0;
    int speed = 0;
    int gear = 1;

    void changeCadence(int newValue) &#123;
        cadence = newValue;
    &#125;

    void changeGear(int newValue) &#123;
        gear = newValue;
    &#125;

    void speedUp(int increment) &#123;
        speed = speed + increment;   
    &#125;

    void applyBrakes(int decrement) &#123;
        speed = speed - decrement;
    &#125;

    void printStates() &#123;
        System.out.println("cadence:" +
            cadence + " speed:" + 
            speed + " gear:" + gear);
    &#125;
&#125;
</code></pre>
            <p>This <code>Bicycle</code> class includes fields to represent the state of the bicycle (cadence, speed, and gear) and methods to interact with this state (e.g., <code>changeCadence()</code>, <code>changeGear()</code>, etc.).</p>
        </section>
        
        <section>
            <h2>The BicycleDemo Class</h2>
            <p>To utilize the <code>Bicycle</code> class, you need another class to create and manage its objects. The <code>BicycleDemo</code> class demonstrates how to instantiate <code>Bicycle</code> objects and call their methods:</p>
            <pre><code>class BicycleDemo &#123;
    public static void main(String[] args) &#123;
        // Create two different Bicycle objects
        Bicycle bike1 = new Bicycle();
        Bicycle bike2 = new Bicycle();

        // Invoke methods on those objects
        bike1.changeCadence(50);
        bike1.speedUp(10);
        bike1.changeGear(2);
        bike1.printStates();

        bike2.changeCadence(50);
        bike2.speedUp(10);
        bike2.changeGear(2);
        bike2.changeCadence(40);
        bike2.speedUp(10);
        bike2.changeGear(3);
        bike2.printStates();
    &#125;
&#125;
</code></pre>
            <p>The output of this program will show the state of each bicycle after calling various methods:</p>
            <div class="output">
                <pre><code>cadence:50 speed:10 gear:2
cadence:40 speed:20 gear:3</code></pre>
            </div>
        </section>
    </div>
    <Footer />
    </>
    );
}