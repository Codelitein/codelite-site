import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaPolymorphism() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>What is Polymorphism?</h2>
            <p>In a general sense, polymorphism refers to the ability of a single entity to take on different forms. This concept, rooted in biology, is also applied in object-oriented programming languages such as Java. Polymorphism allows subclasses to exhibit unique behaviors while still maintaining shared functionality from their parent class.</p>
        </section>

        <section>
            <h2>Implementing Polymorphism in Java</h2>
            <p>Consider the <code>Bicycle</code> class, which can be enhanced to demonstrate polymorphism. By adding a <code>printDescription()</code> method, we can output details about the instance's current state.</p>
            
            <pre><code>public void printDescription()&#123;
    System.out.println("\nBike is " + "in gear " + this.gear
        + " with a cadence of " + this.cadence +
        " and travelling at a speed of " + this.speed + ". ");
&#125;
</code></pre>
        </section>

        <section>
            <h2>Extending the Bicycle Class</h2>
            <p>To showcase polymorphic features, let's extend the <code>Bicycle</code> class to include <code>MountainBike</code> and <code>RoadBike</code> classes.</p>

            <h3>MountainBike Class</h3>
            <p>The <code>MountainBike</code> class introduces a <code>suspension</code> attribute, representing the type of suspension system.</p>

            <pre><code>public class MountainBike extends Bicycle &#123;
    private String suspension;

    public MountainBike(
               int startCadence,
               int startSpeed,
               int startGear,
               String suspensionType)&#123;
        super(startCadence,
              startSpeed,
              startGear);
        this.setSuspension(suspensionType);
    &#125;

    public String getSuspension()&#123;
      return this.suspension;
    &#125;

    public void setSuspension(String suspensionType) &#123;
        this.suspension = suspensionType;
    &#125;

    public void printDescription() &#123;
        super.printDescription();
        System.out.println("The " + "MountainBike has a" +
            getSuspension() + " suspension.");
    &#125;
&#125;
</code></pre>

            <h3>RoadBike Class</h3>
            <p>The <code>RoadBike</code> class adds an attribute for <code>tireWidth</code>, tracking the width of the bike's tires in millimeters.</p>

            <pre><code>public class RoadBike extends Bicycle&#123;
    private int tireWidth;

    public RoadBike(int startCadence,
                    int startSpeed,
                    int startGear,
                    int newTireWidth)&#123;
        super(startCadence,
              startSpeed,
              startGear);
        this.setTireWidth(newTireWidth);
    &#125;

    public int getTireWidth()&#123;
      return this.tireWidth;
    &#125;

    public void setTireWidth(int newTireWidth)&#123;
        this.tireWidth = newTireWidth;
    &#125;

    public void printDescription()&#123;
        super.printDescription();
        System.out.println("The RoadBike" + " has " + getTireWidth() +
            " MM tires.");
    &#125;
&#125;
</code></pre>
        </section>

        <section>
            <h2>Testing Polymorphism</h2>
            <p>Below is a test program that creates instances of the <code>Bicycle</code>, <code>MountainBike</code>, and <code>RoadBike</code> classes, demonstrating polymorphism by calling the overridden <code>printDescription()</code> method.</p>

            <pre><code>public class TestBikes &#123;
  public static void main(String[] args)&#123;
    Bicycle bike01, bike02, bike03;

    bike01 = new Bicycle(20, 10, 1);
    bike02 = new MountainBike(20, 10, 5, "Dual");
    bike03 = new RoadBike(40, 20, 8, 23);

    bike01.printDescription();
    bike02.printDescription();
    bike03.printDescription();
  &#125;
&#125;
</code></pre>

            <p>The output from this program would be:</p>

            <pre><code>Bike is in gear 1 with a cadence of 20 and travelling at a speed of 10. 

Bike is in gear 5 with a cadence of 20 and travelling at a speed of 10. 
The MountainBike has a Dual suspension.

Bike is in gear 8 with a cadence of 40 and travelling at a speed of 20. 
The RoadBike has 23 MM tires.
</code></pre>

            <p>This output demonstrates how the Java Virtual Machine (JVM) uses virtual method invocation to call the appropriate method for each object, regardless of the variable's type, highlighting the core feature of polymorphism in Java.</p>
        </section>
    </div>
    <Footer />
    </>
    );
}