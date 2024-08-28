import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaInterfaceImpl() {

    return(
        <>
        <Header />
        <div class="container">
    <section>
        <h2>Introduction to Interfaces</h2>
        <p>In software engineering, interfaces serve as "contracts" that define how different parts of a system interact. They enable disparate groups of developers to work on their code independently without needing to understand the implementation details of other components. For instance, in a futuristic scenario where autonomous cars are driven by software, automobile manufacturers would create software to control the car, while guidance system manufacturers would develop software to interact with the car's control systems through a published interface.</p>
    </section>

    <section>
        <h2>Java Interfaces Explained</h2>
        <p>In Java, an interface is a reference type, akin to a class, but it can only include constants, method signatures, default methods, static methods, and nested types. Interfaces cannot be instantiated directly. Instead, they are implemented by classes or extended by other interfaces.</p>
        <p>Here’s how you define an interface:</p>
        <pre><code>public interface OperateCar &#123;
    int turn(Direction direction, double radius, double startSpeed, double endSpeed);
    int changeLanes(Direction direction, double startSpeed, double endSpeed);
    int signalTurn(Direction direction, boolean signalOn);
    int getRadarFront(double distanceToCar, double speedOfCar);
    int getRadarRear(double distanceToCar, double speedOfCar);
&#125;</code></pre>
        <p>Method signatures in interfaces do not include bodies and end with a semicolon.</p>
    </section>

    <section>
        <h2>Implementing an Interface</h2>
        <p>To use an interface, a class must implement it. This involves providing method bodies for each method declared in the interface. For example:</p>
        <pre><code>public class OperateBMW760i implements OperateCar &#123;
    public int signalTurn(Direction direction, boolean signalOn) &#123;
        // Code to control BMW's turn indicator lights
    &#125;
    // Other methods and members as needed
&#125;</code></pre>
        <p>In this example, each car manufacturer will provide its own implementation of the <code>OperateCar</code> interface, adhering to the same method signatures.</p>
    </section>

    <section>
        <h2>Defining an Interface</h2>
        <p>An interface declaration includes modifiers, the <code>interface</code> keyword, the interface name, any parent interfaces, and the interface body. Here’s an example:</p>
        <pre><code>public interface GroupedInterface extends Interface1, Interface2, Interface3 &#123;
    double E = 2.718282; // Constant declaration
    void doSomething(int i, double x);
    int doSomethingElse(String s);
&#125;</code></pre>
        <p>Interfaces can extend other interfaces and include abstract methods, default methods, and static methods. Abstract methods do not have a body and end with a semicolon. Default and static methods can have a body and use the <code>default</code> and <code>static</code> keywords, respectively. All methods in an interface are implicitly public, so you can omit the <code>public</code> modifier.</p>
        <p>All constants in an interface are implicitly public, static, and final.</p>
    </section>
</div>
<Footer />
</>
    );
}