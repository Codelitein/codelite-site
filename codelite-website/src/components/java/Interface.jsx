import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaInterface() {

    return(
        <>
        <Header />
        <div class="container">
    <section>
        <h2>What is an Interface?</h2>
        <p>In Java, interfaces are a way to define the methods that a class must implement. These methods define how an object interacts with the outside world. For example, the buttons on your television set represent an interface between you and the electrical system inside the TV. Pressing the "power" button is a way to interact with the TV's functionality.</p>
    </section>

    <section>
        <h2>Defining an Interface</h2>
        <p>An interface in Java typically consists of a set of related methods without any implementation. Here’s an example of how you might define an interface for a bicycle:</p>
        <pre><code>interface Bicycle &#123;
    void changeCadence(int newValue);
    void changeGear(int newValue);
    void speedUp(int increment);
    void applyBrakes(int decrement);
&#125;</code></pre>
    </section>

    <section>
        <h2>Implementing an Interface</h2>
        <p>To use an interface in a class, the class must implement the methods defined by the interface. Here is an example of a class implementing the <code>Bicycle</code> interface:</p>
        <pre><code>class ACMEBicycle implements Bicycle &#123;
    int cadence = 0;
    int speed = 0;
    int gear = 1;

    public void changeCadence(int newValue) &#123;
        cadence = newValue;
    &#125;

    public void changeGear(int newValue) &#123;
        gear = newValue;
    &#125;

    public void speedUp(int increment) &#123;
        speed = speed + increment;
    &#125;

    public void applyBrakes(int decrement) &#123;
        speed = speed - decrement;
    &#125;

    public void printStates() &#123;
        System.out.println("cadence:" + cadence + " speed:" + speed + " gear:" + gear);
    &#125;
&#125;</code></pre>
    </section>

    <section>
        <h2>Interface Contracts</h2>
        <p>Implementing an interface in a class formalizes the contract between the class and the outside world. This contract ensures that the class provides all the methods specified by the interface. The compiler enforces this contract, and the class must include all interface methods to compile successfully.</p>
        <p><strong>Note:</strong> To compile the <code>ACMEBicycle</code> class, you should include the <code>public</code> keyword before the interface methods. The reasons for this will be covered in later sections on classes, objects, and inheritance.</p>
    </section>
</div>
<Footer />
</>
    );
}