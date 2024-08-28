import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaNestedClass() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Overview of Nested Classes</h2>
            <p>In Java, you can define a class within another class, known as a nested class. Here’s a basic example:</p>
            <pre><code>class OuterClass &#125;
    ...
    class NestedClass &#125;
        ...
    &#125;
&#125;
</code></pre>
            <p>Nested classes are categorized into two types: non-static and static. Non-static nested classes are referred to as inner classes, while static nested classes are simply called static nested classes.</p>
            <pre><code>class OuterClass &#125;
    ...
    class InnerClass &#125;
        ...
    &#125;
    static class StaticNestedClass &#125;
        ...
    &#125;
&#125;
</code></pre>
        </section>
        
        <section>
            <h2>Access and Visibility</h2>
            <p>A nested class is a member of its enclosing class. Inner classes, being non-static, can access all members of their enclosing class, including private members. On the other hand, static nested classes do not have direct access to the instance members of their enclosing class. Nested classes can be declared with various access levels: private, public, protected, or package-private. However, outer classes can only be public or package-private.</p>
        </section>
        
        <section>
            <h2>Why Use Nested Classes?</h2>
            <p>Using nested classes offers several advantages:</p>
            <ul>
                <li><strong>Logical Grouping:</strong> Nesting classes that are only used by a specific class helps in organizing and grouping them logically, thus keeping the package clean.</li>
                <li><strong>Enhanced Encapsulation:</strong> If one class needs to access private members of another class, nesting it within the other class enables this access while keeping the inner class hidden from the outside.</li>
                <li><strong>Improved Code Readability:</strong> Keeping helper classes close to their usage within the outer class can make the code more readable and maintainable.</li>
            </ul>
        </section>
        
        <section>
            <h2>Inner Classes</h2>
            <p>Inner classes are associated with an instance of their enclosing class and can access its instance methods and fields directly. Since an inner class is tied to an instance, it cannot have static members.</p>
            <p>Instances of an inner class exist within an instance of the outer class. Here’s how you create an instance of an inner class:</p>
            <pre><code>OuterClass outerObject = new OuterClass();
OuterClass.InnerClass innerObject = outerObject.new InnerClass();
</code></pre>
            <p>There are two specific types of inner classes: local classes and anonymous classes.</p>
        </section>
        
        <section>
            <h2>Static Nested Classes</h2>
            <p>Static nested classes, like static class methods, do not have direct access to the instance members of their outer class. They can only interact with them through object references. Here’s how you instantiate a static nested class:</p>
            <pre><code>StaticNestedClass staticNestedObject = new StaticNestedClass();
</code></pre>
        </section>
        
        <section>
            <h2>Example: Inner Class vs. Static Nested Class</h2>
            <p>The following example demonstrates the access capabilities of inner and static nested classes:</p>
            <pre><code>// OuterClass.java
public class OuterClass &#125;
    String outerField = "Outer field";
    static String staticOuterField = "Static outer field";

    class InnerClass &#125;
        void accessMembers() &#125;
            System.out.println(outerField);
            System.out.println(staticOuterField);
        &#125;
    &#125;

    static class StaticNestedClass &#125;
        void accessMembers(OuterClass outer) &#125;
            // Compiler error: Cannot make a static reference to the non-static
            //     field outerField
            // System.out.println(outerField);
            System.out.println(outer.outerField);
            System.out.println(staticOuterField);
        &#125;
    &#125;

    public static void main(String[] args) &#125;
        System.out.println("Inner class:");
        System.out.println("------------");
        OuterClass outerObject = new OuterClass();
        OuterClass.InnerClass innerObject = outerObject.new InnerClass();
        innerObject.accessMembers();

        System.out.println("\nStatic nested class:");
        System.out.println("--------------------");
        StaticNestedClass staticNestedObject = new StaticNestedClass();
        staticNestedObject.accessMembers(outerObject);

        System.out.println("\nTop-level class:");
        System.out.println("--------------------");
        TopLevelClass topLevelObject = new TopLevelClass();
        topLevelObject.accessMembers(outerObject);
    &#125;
&#125;

// TopLevelClass.java
public class TopLevelClass &#125;
    void accessMembers(OuterClass outer) &#125;
        // Compiler error: Cannot make a static reference to the non-static
        //     field OuterClass.outerField
        // System.out.println(OuterClass.outerField);
        System.out.println(outer.outerField);
        System.out.println(OuterClass.staticOuterField);
    &#125;
&#125;
</code></pre>
            <p><strong>Output:</strong></p>
            <pre><code>Inner class:
------------
Outer field
Static outer field

Static nested class:
--------------------
Outer field
Static outer field

Top-level class:
--------------------
Outer field
Static outer field
</code></pre>
            <p>Note that a static nested class can interact with the instance members of its outer class just like a top-level class. Direct access to instance variables like <code>outerField</code> from a static nested class results in a compiler error. Access instance variables through object references instead.</p>
        </section>
        
        <section>
            <h2>Shadowing</h2>
            <p>Shadowing occurs when a variable declaration in a scope has the same name as another declaration in an enclosing scope. The inner scope's declaration shadows the outer scope's declaration. You cannot refer to the shadowed variable directly. For example:</p>
            <pre><code>public class ShadowTest &#125;
    public int x = 0;

    class FirstLevel &#125;
        public int x = 1;

        void methodInFirstLevel(int x) &#125;
            System.out.println("x = " + x);
            System.out.println("this.x = " + this.x);
            System.out.println("ShadowTest.this.x = " + ShadowTest.this.x);
        &#125;
    &#125;

    public static void main(String... args) &#125;
        ShadowTest st = new ShadowTest();
        ShadowTest.FirstLevel fl = st.new FirstLevel();
        fl.methodInFirstLevel(23);
    &#125;
&#125;
</code></pre>
            <p><strong>Output:</strong></p>
            <pre><code>x = 23
this.x = 1
ShadowTest.this.x = 0
</code></pre>
            <p>The variable <code>x</code> defined as a method parameter shadows the <code>x</code> variable of the inner class <code>FirstLevel</code>. Use <code>this</code> to refer to the inner class's member variable, and <code>ShadowTest.this</code> to refer to the outer class's member variable.</p>
        </section>
        
        <section>
            <h2>Serialization</h2>
            <p>Serialization of inner classes, including local and anonymous classes, is generally discouraged. This is because Java compilers create synthetic constructs for inner classes, which might not be compatible across different Java compiler implementations, leading to potential serialization issues.</p>
        </section>
    </div>
    <Footer />
    </>
    );
}