import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaPassingInfoMethodConstructor() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Overview</h2>
            <p>When defining a method or constructor in Java, you specify the number and types of arguments that it will accept. For instance, the method shown below calculates the monthly payments for a home loan based on the loan amount, interest rate, loan duration, and the loan's future value:</p>
            <pre><code>public double computePayment(
                  double loanAmt,
                  double rate,
                  double futureValue,
                  int numPeriods) &#123;
    double interest = rate / 100.0;
    double partial1 = Math.pow((1 + interest), 
                    - numPeriods);
    double denominator = (1 - partial1) / interest;
    double answer = (-loanAmt / denominator)
                    - ((futureValue * partial1) / denominator);
    return answer;
&#125;</code></pre>
            <p>This method includes four parameters: the loan amount, the interest rate, the future value, and the number of periods. The first three are double-precision floating point numbers, and the fourth is an integer. The parameters are utilized within the method body and will assume the values of the arguments provided during runtime.</p>
            <p><strong>Note:</strong> Parameters refer to the variables listed in a method declaration, while arguments are the actual values provided when invoking the method. Arguments must correspond to the parameters in type and order.</p>
        </section>
        
        <section>
            <h2>Types of Parameters</h2>
            <p>Parameters in methods or constructors can be of any data type, including primitive types like doubles, floats, and integers, as demonstrated in the <code>computePayment()</code> method, or reference types like objects and arrays.</p>
            <p>For example, the following method accepts an array as an argument. This method creates a new <code>Polygon</code> object initialized from an array of <code>Point</code> objects (assuming <code>Point</code> is a class representing x and y coordinates):</p>
            <pre><code>public Polygon polygonFrom(Point[] corners) &#123;
    // method body goes here
&#125;</code></pre>
        </section>
        
        <section>
            <h2>Handling Arbitrary Numbers of Arguments</h2>
            <p>Java allows you to use varargs to handle a variable number of arguments. Varargs simplifies the process of passing a variable number of arguments to a method. Instead of manually creating an array, varargs lets you pass any number of arguments, including none.</p>
            <p>To use varargs, append an ellipsis (<code>...</code>) after the type of the last parameter, followed by a space and the parameter name. The method can then be invoked with any number of these arguments:</p>
            <pre><code>public Polygon polygonFrom(Point... corners) &#123;
    int numberOfSides = corners.length;
    double squareOfSide1, lengthOfSide1;
    squareOfSide1 = (corners[1].x - corners[0].x)
                     * (corners[1].x - corners[0].x) 
                     + (corners[1].y - corners[0].y)
                     * (corners[1].y - corners[0].y);
    lengthOfSide1 = Math.sqrt(squareOfSide1);

    // more method body code follows that creates and returns a 
    // polygon connecting the Points
&#125;</code></pre>
            <p>Inside the method, <code>corners</code> is treated as an array. This method can be called with an array or a sequence of arguments, and in both cases, the parameter is handled as an array.</p>
            <p>Varargs are commonly used with printing methods, such as <code>printf()</code>:</p>
            <pre><code>public PrintStream printf(String format, Object... args)</code></pre>
            <p>This method can be invoked with varying numbers of arguments:</p>
            <pre><code>System.out.printf("%s: %d, %s%n", name, idnum, address);
System.out.printf("%s: %d, %s, %s, %s%n", name, idnum, address, phone, email);</code></pre>
        </section>
        
        <section>
            <h2>Parameter Naming</h2>
            <p>When declaring parameters in methods or constructors, each parameter is assigned a name used within the method body to refer to the corresponding argument.</p>
            <p>The name of a parameter must be unique within its scope. It cannot duplicate another parameter name within the same method or constructor, nor can it be the same as a local variable's name within the method or constructor.</p>
            <p>It is permissible for a parameter to have the same name as a class field. In such cases, the parameter is said to shadow the field. Shadowing can make code harder to read and is generally used only in constructors or methods designed to set specific fields. Consider the following <code>Circle</code> class and its <code>setOrigin()</code> method:</p>
            <pre><code>public class Circle &#123;
    private int x, y, radius;
    public void setOrigin(int x, int y) &#123;
        ...
    &#125;
&#125;</code></pre>
            <p>In this class, the <code>setOrigin()</code> method parameters <code>x</code> and <code>y</code> shadow the class fields of the same names. Within the method, references to <code>x</code> and <code>y</code> refer to the parameters, not the fields. Accessing the fields requires a qualified name, which will be discussed in the section on using the <code>this</code> keyword.</p>
        </section>
        
        <section>
            <h2>Passing Primitive Data Type Arguments</h2>
            <p>Arguments of primitive types, such as <code>int</code> or <code>double</code>, are passed to methods by value. This means any modifications to these parameter values only affect the method's scope. Once the method completes, these changes are discarded. Here’s an example:</p>
            <pre><code>public class PassPrimitiveByValue &#123;

    public static void main(String[] args) &#123;
        int x = 3;
        passMethod(x);
        System.out.println("After invoking passMethod, x = " + x);
    &#125;
        
    public static void passMethod(int p) &#123;
        p = 10;
    &#125;
&#125;</code></pre>
            <p>Running this program will output:</p>
            <pre><code>After invoking passMethod, x = 3</code></pre>
        </section>
        
        <section>
            <h2>Passing Reference Data Type Arguments</h2>
            <p>Reference data type arguments, such as objects, are also passed by value. This means the reference remains unchanged, pointing to the same object after the method returns. However, changes to the object’s fields within the method will persist, provided they have the correct access level.</p>
            <p>Consider the following method that moves <code>Circle</code> objects:</p>
            <pre><code>public void moveCircle(Circle circle, int deltaX, int deltaY) &#123;
    circle.setX(circle.getX() + deltaX);
    circle.setY(circle.getY() + deltaY);
    circle = new Circle(0, 0);
&#125;</code></pre>
            <p>If invoked as <code>moveCircle(myCircle, 23, 56)</code>, the <code>circle</code> reference initially points to <code>myCircle</code>. The method updates the x and y coordinates of the <code>myCircle</code> object by 23 and 56, respectively. These updates will persist after the method completes. However, assigning a new <code>Circle</code> object to <code>circle</code> does not alter the original <code>myCircle</code> reference; it remains unchanged outside the method.</p>
        </section>
    </div>
    <Footer />
    </>
    );
}