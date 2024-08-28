import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaMethods() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Defining a Method</h2>
            <p>Here is an example of a standard method declaration:</p>
            <pre><code>public double calculateAnswer(double wingSpan, int numberOfEngines,
                              double length, double grossTons) &#123;
    // Perform the calculation here
&#125;</code></pre>
            <p>The essential components of a method declaration include the return type, method name, parentheses, and a method body enclosed in braces. More specifically, method declarations consist of six components:</p>
            <ul>
                <li><strong>Modifiers</strong>—such as <code>public</code>, <code>private</code>, etc.</li>
                <li><strong>Return Type</strong>—the data type of the value returned by the method, or <code>void</code> if no value is returned.</li>
                <li><strong>Method Name</strong>—follows similar rules as field names, with some conventions.</li>
                <li><strong>Parameter List</strong>—a comma-separated list of input parameters with their data types, enclosed in parentheses. Empty parentheses are used if no parameters are present.</li>
                <li><strong>Exception List</strong>—discussed in a later section.</li>
                <li><strong>Method Body</strong>—the code of the method, including local variable declarations, enclosed in braces.</li>
            </ul>
            <p>The method signature is comprised of the method's name and parameter types. For instance, the signature of the method <code>calculateAnswer</code> is:</p>
            <pre><code>calculateAnswer(double, int, double, double)</code></pre>
        </section>

        <section>
            <h2>Naming a Method</h2>
            <p>While method names can technically be any valid identifier, conventions suggest that they should be a verb in lowercase or a multi-word name starting with a lowercase verb followed by adjectives or nouns. Each new word in a multi-word name should start with a capital letter. Examples include:</p>
            <ul>
                <li><code>run</code></li>
                <li><code>runFast</code></li>
                <li><code>getBackground</code></li>
                <li><code>getFinalData</code></li>
                <li><code>compareTo</code></li>
                <li><code>setX</code></li>
                <li><code>isEmpty</code></li>
            </ul>
            <p>Method names should be unique within their class, although method overloading allows methods with the same name if they have different parameter lists.</p>
        </section>

        <section>
            <h2>Overloading Methods</h2>
            <p>Java supports method overloading, which means you can have multiple methods with the same name within a class, provided they have different parameter lists. This allows for methods that perform similar functions but with different inputs. For instance:</p>
            <pre><code>public class DataArtist &#123;
    // Overloaded methods
    public void draw(String s) &#123;
        // Implementation
    &#125;
    public void draw(int i) &#123;
        // Implementation
    &#125;
    public void draw(double f) &#123;
        // Implementation
    &#125;
    public void draw(int i, double f) &#123;
        // Implementation
    &#125;
&#125;</code></pre>
            <p>Methods are distinguished by their parameter types and number of arguments. Methods with the same name and parameter list are not allowed, as the compiler cannot differentiate between them based on return type alone.</p>
            <p>Note: Use overloaded methods judiciously, as excessive overloading can lead to reduced code readability.</p>
        </section>
    </div>
    <Footer />
    </>
    );
}