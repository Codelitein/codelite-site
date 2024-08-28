import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaVariables() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction</h2>
            <p>In Java, variables are data containers that hold data values during program execution. Each variable is associated with a data type that defines the type and size of the data it can store. Essentially, a variable serves as a named memory location for data.</p>
        </section>
        
        <section>
            <h2>Variables in Java</h2>
            <p>A variable in Java is essentially a name assigned to a memory location. It represents the fundamental unit of storage within a program.</p>
            <ul>
                <li><strong>Variable Value Changes:</strong> The value contained in a variable can be altered throughout the program’s execution.</li>
                <li><strong>Declaration Requirement:</strong> All variables in Java must be declared before they can be used.</li>
            </ul>
        </section>
        
        <section>
            <h2>Declaring Variables in Java</h2>
            <p>Variables in Java are declared with two main components:</p>
            <ul>
                <li><strong>Data Type:</strong> Defines the kind of data the variable can store.</li>
                <li><strong>Variable Name:</strong> The identifier for the variable.</li>
            </ul>
            <p>Variables can be initialized in two primary ways:</p>
            <ul>
                <li><strong>Direct Initialization:</strong> Assigning a value during declaration.</li>
                <li><strong>Input Assignment:</strong> Assigning a value based on user input or other sources.</li>
            </ul>
            <p><strong>Syntax for Declaring Variables:</strong></p>
            <pre><code>// Declaring a float variable
float simpleInterest;

// Declaring and initializing integer variables
int time = 10, speed = 20;

// Declaring and initializing a character variable
char var = 'h';</code></pre>
        </section>
        
        <section>
            <h2>Types of Variables in Java</h2>
            <p>Java variables fall into three main categories:</p>
            <ol>
                <li><a href="#local-variables">Local Variables</a></li>
                <li><a href="#instance-variables">Instance Variables</a></li>
                <li><a href="#static-variables">Static Variables</a></li>
            </ol>
        </section>
        
        <section id="local-variables">
            <h3>Local Variables</h3>
            <p>Local variables are defined within a method, block, or constructor.</p>
            <ul>
                <li><strong>Lifecycle:</strong> Created when declared and destroyed when the block or method exits.</li>
                <li><strong>Scope:</strong> Limited to the block or method where declared.</li>
                <li><strong>Initialization:</strong> Must be initialized before use.</li>
            </ul>
            <p><strong>Example:</strong></p>
            <div class="example">
                <pre><code>public class Main &#123;
    public static void main(String[] args) &#123;
        // Declaring a local variable
        int var = 10;
        System.out.println("Local Variable: " + var);
    &#125;
&#125;
</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>Local Variable: 10</code></pre>
            </div>
            <p><strong>Example with Multiple Local Variables:</strong></p>
            <div class="example">
                <pre><code>public class Main &#123;
    public static void main(String[] args) &#123;
        int x = 10;
        String message = "Hello, world!";
        System.out.println("x = " + x);
        System.out.println("message = " + message);

        if (x &#62; 5) &#123;
            String result = "x is greater than 5";
            System.out.println(result);
        &#125;

        for (int i = 0; i &#60; 3; i++) &#123;
            String loopMessage = "Iteration " + i;
            System.out.println(loopMessage);
        &#125;
    &#125;
&#125;
</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>x = 10
message = Hello, world!
x is greater than 5
Iteration 0
Iteration 1
Iteration 2</code></pre>
            </div>
        </section>
        
        <section id="instance-variables">
            <h3>Instance Variables</h3>
            <p>Instance variables are non-static variables declared in a class outside any method or block.</p>
            <ul>
                <li><strong>Lifecycle:</strong> Created when an object is instantiated and destroyed when the object is garbage collected.</li>
                <li><strong>Initialization:</strong> Not mandatory; defaults vary by type (e.g., <code>null</code> for objects, <code>0</code> for integers).</li>
            </ul>
            <p><strong>Example:</strong></p>
            <div class="example">
                <pre><code>public class Main &#123;
    public String a;
    public int i;
    public Integer I;

    public Main() &#123;
        this.geek = "User 1";
    &#125;

    public static void main(String[] args) &#123;
        Main name = new Main();
        System.out.println("User name is: " + name.geek);
        System.out.println("Default value for int is " + name.i);
        System.out.println("Default value for Integer is " + name.I);
    &#125;
&#125;
</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>User name is: User 1
Default value for int is 0
Default value for Integer is null</code></pre>
            </div>
        </section>
        
        <section id="static-variables">
            <h3>Static Variables</h3>
            <p>Static variables, also known as class variables, are declared with the <code>static</code> keyword.</p>
            <ul>
                <li><strong>Lifecycle:</strong> Created when the program starts and destroyed when it ends.</li>
                <li><strong>Initialization:</strong> Not mandatory; defaults vary by type (e.g., <code>null</code> for objects, <code>0</code> for integers).</li>
                <li><strong>Access:</strong> Should be accessed using the class name.</li>
            </ul>
            <p><strong>Example:</strong></p>
            <div class="example">
                <pre><code>public class Main &#123;
    public static String name = "Hello user";

    public static void main(String[] args) &#123;
        System.out.println("User Name is : " + Main.name);
    &#125;
&#125;
</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>User Name is : Hello user</code></pre>
            </div>
        </section>
        
        <section>
            <h2>Differences Between Instance and Static Variables</h2>
            <ul>
                <li><strong>Instance Variables:</strong> Each object has its own copy; changes in one do not affect others. Accessed via object references.</li>
                <li><strong>Static Variables:</strong> Only one copy per class; changes affect all instances. Accessed via the class name.</li>
            </ul>
            <p><strong>Syntax Comparison:</strong></p>
            <pre><code>public class Main &#123;
    // Static variable
    static int a;
    
    // Instance variable
    int b;
&#125;
</code></pre>
        </section>
    </div>
    <Footer />
    </>
    );
}