import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaThisKeyword() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction</h2>
            <p>In Java, the <code>this</code> keyword refers to the current object—the instance whose method or constructor is being executed. It is used within instance methods or constructors to refer to the members of the current object.</p>
        </section>
        
        <section>
            <h2>Using <code>this</code> with Fields</h2>
            <p>The <code>this</code> keyword is commonly used when a field is shadowed by a method or constructor parameter. For instance, consider the following <code>Point</code> class:</p>
            <div class="example">
                <pre><code>public class Point &#123;
    public int x = 0;
    public int y = 0;
    
    // Constructor
    public Point(int a, int b) &#123;
        x = a;
        y = b;
    &#125;
&#125;
</code></pre>
            </div>
            <p>In this version, the constructor parameters shadow the class fields. To distinguish between the field and the parameter, <code>this</code> is used:</p>
            <div class="example">
                <pre><code>public class Point &#123;
    public int x = 0;
    public int y = 0;
    
    // Constructor
    public Point(int x, int y) &#123;
        this.x = x;
        this.y = y;
    &#125;
&#125;
</code></pre>
            </div>
            <p>Here, <code>this.x</code> refers to the field <code>x</code> of the <code>Point</code> class, while <code>x</code> refers to the constructor parameter.</p>
        </section>
        
        <section>
            <h2>Using <code>this</code> with Constructors</h2>
            <p>Within a constructor, the <code>this</code> keyword can also be used to invoke another constructor within the same class, a process known as explicit constructor invocation. Consider the following <code>Rectangle</code> class:</p>
            <div class="example">
                <pre><code>public class Rectangle &#123;
    private int x, y;
    private int width, height;
    
    public Rectangle() &#123;
        this(0, 0, 1, 1);
    &#125;
    
    public Rectangle(int width, int height) &#123;
        this(0, 0, width, height);
    &#125;
    
    public Rectangle(int x, int y, int width, int height) &#123;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    &#125;
&#125;
</code></pre>
            </div>
            <p>In this example, constructors are defined to initialize various combinations of the rectangle's attributes. The no-argument constructor initializes a 1x1 rectangle at coordinates (0,0), while the two-argument constructor sets the dimensions but uses default coordinates (0,0). The explicit constructor invocation ensures that the most specific constructor is called based on the provided arguments.</p>
            <p>Note that if you use this keyword to call another constructor, it must be the first statement in the constructor.</p>
        </section>
    </div>
    <Footer />
    </>
    );
}