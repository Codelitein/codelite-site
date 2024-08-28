import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaAnonymousClass() {
    return(
        <>
        <Header />
        <div class="container">
    <section>
        <h2>Introduction to Anonymous Classes</h2>
        <p>Anonymous classes in Java help streamline your code by allowing you to declare and instantiate a class in one go. Unlike local classes, anonymous classes do not have a name. They are particularly useful when a local class is needed only once.</p>
    </section>

    <section>
        <h2>Declaring Anonymous Classes</h2>
        <p>Anonymous classes are essentially expressions rather than declarations. This means you define the class as part of an expression. For example, the <code>HelloWorldAnonymousClasses</code> class demonstrates the use of anonymous classes for initializing the <code>frenchGreeting</code> and <code>spanishGreeting</code> variables, while a local class is used for <code>englishGreeting</code>.</p>
        <pre><code>public class AnonymousClasses &#123;
    interface MyInterface &#123;
        public void greet();
        public void greetSomeone(String someone);
    &#125;

    public void sayHello() &#123;
        class EnglishGreeting implements MyInterface &#123;
            String name = "world";
            public void greet() &#123;
                greetSomeone("world");
            &#125;
            public void greetSomeone(String someone) &#123;
                name = someone;
                System.out.println("Hello " + name);
            &#125;
        &#125;

        MyInterface englishGreeting = new EnglishGreeting();

        MyInterface frenchGreeting = new MyInterface() &#123;
            String name = "tout le monde";
            public void greet() &#123;
                greetSomeone("tout le monde");
            &#125;
            public void greetSomeone(String someone) &#123;
                name = someone;
                System.out.println("Salut " + name);
            &#125;
        &#125;;

        MyInterface spanishGreeting = new MyInterface() &#123;
            String name = "mundo";
            public void greet() &#123;
                greetSomeone("mundo");
            &#125;
            public void greetSomeone(String someone) &#123;
                name = someone;
                System.out.println("Hola, " + name);
            &#125;
        &#125;;

        englishGreeting.greet();
        frenchGreeting.greetSomeone("Fred");
        spanishGreeting.greet();
    &#125;

    public static void main(String... args) &#123;
        AnonymousClasses app = new AnonymousClasses();
        app.sayHello();
    &#125;
&#125;</code></pre>
    </section>

    <section>
        <h2>Syntax of Anonymous Classes</h2>
        <p>An anonymous class is an expression, not a declaration. Its syntax resembles that of a constructor invocation, but includes a class definition in a block of code. For instance, the <code>frenchGreeting</code> object is instantiated as follows:</p>
        <pre><code>MyInterface frenchGreeting = new MyInterface() &#123;
    String name = "tout le monde";
    public void greet() &#123;
        greetSomeone("tout le monde");
    &#125;
    public void greetSomeone(String someone) &#123;
        name = someone;
        System.out.println("Salut " + name);
    &#125;
&#125;;</code></pre>
        <p>The components of an anonymous class expression include:</p>
        <ul>
            <li>The <code>new</code> operator</li>
            <li>The name of an interface or class to extend or implement</li>
            <li>Parentheses for constructor arguments (empty for interfaces)</li>
            <li>A body with method declarations but no statements</li>
        </ul>
        <p>Since anonymous class definitions are expressions, they must be part of a statement, which is why there is a semicolon after the closing brace.</p>
    </section>

    <section>
        <h2>Accessing Local Variables and Members</h2>
        <p>Similar to local classes, anonymous classes can access local variables of the enclosing scope. However, they can only access local variables that are final or effectively final. Additionally:</p>
        <ul>
            <li>An anonymous class can access the members of its enclosing class.</li>
            <li>Anonymous classes cannot declare static initializers or member interfaces, though they can have static constants.</li>
            <li>They can declare fields, extra methods, instance initializers, and local classes, but not constructors.</li>
        </ul>
    </section>
</div>
<Footer />
</>
    );
}