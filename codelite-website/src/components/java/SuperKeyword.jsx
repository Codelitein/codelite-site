import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaSuperKeyword() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Accessing Superclass Members</h2>
            <p>When a method overrides one from its superclass, you can invoke the overridden method using the <code>super</code> keyword. Additionally, <code>super</code> can be used to refer to a hidden field, although hiding fields is not recommended. Consider the following example:</p>
            <pre><code>public class Superclass &#123;
    public void printMethod() &#123;
        System.out.println("Printed in Superclass.");
    &#125;
&#125;</code></pre>
            <p>Here’s a subclass, <code>Subclass</code>, that overrides the <code>printMethod()</code>:</p>
            <pre><code>public class Subclass extends Superclass &#123;
    // Overrides printMethod in Superclass
    public void printMethod() &#123;
        super.printMethod();
        System.out.println("Printed in Subclass");
    &#125;
    public static void main(String[] args) &#123;
        Subclass s = new Subclass();
        s.printMethod();    
    &#125;
&#125;</code></pre>
            <p>In <code>Subclass</code>, the method <code>printMethod()</code> refers to the version in <code>Subclass</code>, which overrides the version in <code>Superclass</code>. To call <code>printMethod()</code> from <code>Superclass</code>, use <code>super</code>. Compiling and executing <code>Subclass</code> will produce:</p>
            <pre><code>Printed in Superclass.
Printed in Subclass</code></pre>
        </section>

        <section>
            <h2>Subclass Constructors</h2>
            <p>The <code>super</code> keyword can also be used to call a superclass’s constructor. Consider the following example where <code>MountainBike</code> is a subclass of <code>Bicycle</code>:</p>
            <pre><code>public MountainBike(int startHeight, 
                    int startCadence,
                    int startSpeed,
                    int startGear) &#123;
    super(startCadence, startSpeed, startGear);
    seatHeight = startHeight;
&#125;</code></pre>
            <p>In this example, the superclass constructor is called first, followed by the subclass initialization code. The syntax for invoking a superclass constructor is:</p>
            <pre><code>super();
or
super(parameter list);</code></pre>
            <p><code>super()</code> calls the no-argument constructor of the superclass, while <code>super(parameter list)</code> calls the constructor with the matching parameters.</p>
            <p>Note: If a constructor does not explicitly call a superclass constructor, the Java compiler automatically inserts a call to the no-argument constructor of the superclass. If the superclass lacks a no-argument constructor, a compile-time error occurs. Since <code>Object</code> is the ultimate superclass, this generally does not cause issues.</p>
            <p>When a subclass constructor calls a superclass constructor, whether explicitly or implicitly, it triggers a chain of constructor calls up to <code>Object</code>. This process is known as constructor chaining, which is important to understand when dealing with complex class hierarchies.</p>
        </section>
    </div>
    <Footer />
    </>
    );
}