import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaInterfaceMethods() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction</h2>
            <p>In Java, default and abstract methods within interfaces are inherited similarly to instance methods. When multiple default methods with the same signature exist in the supertypes of a class or interface, Java's inheritance rules help resolve conflicts. These rules are guided by two main principles:</p>
            <ul>
                <li>Instance methods take precedence over interface default methods.</li>
                <li>If there are conflicts between default methods or between a default method and an abstract method, the compiler will generate an error unless the method is explicitly overridden.</li>
            </ul>
        </section>

        <section>
            <h2>Example: Resolving Method Conflicts</h2>
            <p>Consider the following classes and interfaces:</p>
            <pre><code>public class Horse &#123;
    public String identifyMyself() &#123;
        return "I am a horse.";
    &#125;
&#125;

public interface Flyer &#123;
    default public String identifyMyself() &#123;
        return "I am able to fly.";
    &#125;
&#125;

public interface Mythical &#123;
    default public String identifyMyself() &#123;
        return "I am a mythical creature.";
    &#125;
&#125;

public class Pegasus extends Horse implements Flyer, Mythical &#123;
    public static void main(String... args) &#123;
        Pegasus myApp = new Pegasus();
        System.out.println(myApp.identifyMyself());
    &#125;
&#125;
</code></pre>
            <p>The <code>identifyMyself()</code> method in <code>Pegasus</code> returns "I am a horse." because instance methods are preferred over interface default methods.</p>
        </section>

        <section>
            <h2>Example: Ignoring Already Overridden Methods</h2>
            <p>In cases where multiple supertypes share a common ancestor, methods that are overridden by other supertypes are ignored. Consider the following interfaces and classes:</p>
            <pre><code>public interface Animal &#123;
    default public String identifyMyself() &#123;
        return "I am an animal.";
    &#125;
&#125;

public interface EggLayer extends Animal &#123;
    default public String identifyMyself() &#123;
        return "I am able to lay eggs.";
    &#125;
&#125;

public interface FireBreather extends Animal &#123; &#125;

public class Dragon implements EggLayer, FireBreather &#123;
    public static void main(String... args) &#123;
        Dragon myApp = new Dragon();
        System.out.println(myApp.identifyMyself());
    &#125;
&#125;
</code></pre>
            <p>The <code>identifyMyself()</code> method in <code>Dragon</code> returns "I am able to lay eggs." because the default implementation from <code>EggLayer</code> takes precedence.</p>
        </section>

        <section>
            <h2>Example: Explicit Method Overriding</h2>
            <p>When two or more interfaces provide conflicting default methods, or a default method conflicts with an abstract method, you must explicitly override the method in your class. For instance:</p>
            <pre><code>public interface OperateCar &#123;
    default public int startEngine(EncryptedKey key) &#123;
        // Implementation
    &#125;
&#125;

public interface FlyCar &#123;
    default public int startEngine(EncryptedKey key) &#123;
        // Implementation
    &#125;
&#125;

public class FlyingCar implements OperateCar, FlyCar &#123;
    public int startEngine(EncryptedKey key) &#123;
        FlyCar.super.startEngine(key);
        OperateCar.super.startEngine(key);
    &#125;
&#125;
</code></pre>
            <p>The <code>FlyingCar</code> class overrides <code>startEngine()</code> to handle the conflict between the two interface default implementations. The <code>super</code> keyword is used to specify which default method implementation to invoke.</p>
        </section>

        <section>
            <h2>Example: Inherited Instance Methods</h2>
            <p>Instance methods from classes can override abstract methods from interfaces. For example:</p>
            <pre><code>public interface Mammal &#123;
    String identifyMyself();
&#125;

public class Horse &#123;
    public String identifyMyself() &#123;
        return "I am a horse.";
    &#125;
&#125;

public class Mustang extends Horse implements Mammal &#123;
    public static void main(String... args) &#123;
        Mustang myApp = new Mustang();
        System.out.println(myApp.identifyMyself());
    &#125;
&#125;
</code></pre>
            <p>The <code>identifyMyself()</code> method in <code>Mustang</code> returns "I am a horse." because it inherits the method from the <code>Horse</code> class, which overrides the abstract method in the <code>Mammal</code> interface.</p>
        </section>

        <section>
            <h2>Note on Static Methods</h2>
            <p>It is important to note that static methods in interfaces are not inherited. They belong to the interface itself and cannot be accessed via instances.</p>
        </section>
    </div>
    <Footer />
    </>
    );
}