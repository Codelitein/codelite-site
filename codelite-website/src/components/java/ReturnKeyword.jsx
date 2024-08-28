import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaReturnKeyword() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction</h2>
            <p>The <code>return</code> keyword in Java is a reserved term and cannot be used as an identifier. It serves the purpose of exiting a method and can optionally return a value. There are two primary cases where the <code>return</code> keyword is used:</p>
            <ol>
                <li>Methods that return a value</li>
                <li>Methods that do not return a value</li>
            </ol>
        </section>

        <section>
            <h2>Case 1: Methods Returning a Value</h2>
            <p>For methods that have a return type specified, the <code>return</code> statement must be followed by a value of that type.</p>
            <h3>Example:</h3>
            <pre><code>
public class Main &#123;

    // Method 1
    double RR(double a, double b) &#123;
        double sum = (a + b) / 2.0;
        return sum;
    &#125;

    // Main method
    public static void main(String[] args) &#123;
        System.out.println(new Main().RR(5.5, 6.5));
    &#125;
&#125;
            </code></pre>
            <p><strong>Output:</strong> 6.0</p>
            <p><strong>Explanation:</strong> The <code>RR</code> method returns the value of <code>sum</code>, which is then displayed on the console.</p>
        </section>

        <section>
            <h2>Case 2: Methods Not Returning a Value</h2>
            <p>In methods that do not return a value, the <code>return</code> statement can be omitted. There are two scenarios to consider:</p>
            <ol>
                <li>Methods without a <code>return</code> statement in a <code>void</code> function</li>
                <li>Methods with a <code>void</code> return type</li>
            </ol>

            <h3>#1: Methods Without a <code>return</code> Statement in a <code>void</code> Function</h3>
            <p>For <code>void</code> methods, the <code>return</code> statement is not necessary but can be used.</p>
            <h4>Example:</h4>
            <pre><code>
public class Main &#123;

    void demoSum(int a, int b) &#123;
        int sum = (a + b) / 10;
        System.out.println(sum);
    &#125;

    public static void main(String[] args) &#123;
        new Main().demoSum(5, 5);
        System.out.print("No return keyword is used and program executed successfully");
    &#125;
&#125;
            </code></pre>
            <p><strong>Output:</strong> 1</p>
            <p><strong>Note:</strong> While the <code>return</code> statement is not required, you can use <code>return;</code> to exit the method early.</p>

            <h3>#2: Methods with <code>void</code> Return Type</h3>
            <p>Even in <code>void</code> methods, the <code>return</code> statement can be used without returning a value.</p>
            <h4>Example 1-A:</h4>
            <pre><code>
public class Main &#123;

    void demofunction(double j) &#123;
        if (j &#60; 9)
            return;
        ++j;
    &#125;

    public static void main(String[] args) &#123;
        Main obj = new Main();
        obj.demofunction(5.5);
        System.out.println("Program executed successfully");
    &#125;
&#125;
            </code></pre>
            <p><strong>Output:</strong> Program executed successfully</p>
            <p><strong>Explanation:</strong> If <code>j &#60; 9</code> evaluates to true, the method exits early, skipping any subsequent statements.</p>

            <h4>Example 1-B:</h4>
            <pre><code>
public class Main &#123;

    void demofunction(double i) &#123;
        if (i &#60; 9)
            return;
        else
            ++i;
    &#125;

    public static void main(String[] args) &#123;
        new Main().demofunction(7);
        System.out.println("Program executed successfully");
    &#125;
&#125;
            </code></pre>
            <p><strong>Output:</strong> Program executed successfully</p>
        </section>
    </div>
    <Footer />
    </>
    );
}