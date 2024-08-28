import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaAnnotations() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Overview of Annotations</h2>
            <p>Annotations in Java are versatile tools with several applications:</p>
            <ul>
                <li><strong>Compiler Information:</strong> Annotations can be utilized by the compiler to identify errors or suppress warnings.</li>
                <li><strong>Compile-Time and Deployment-Time Processing:</strong> Tools can leverage annotation information to generate code, XML files, and more.</li>
                <li><strong>Runtime Processing:</strong> Some annotations are accessible and can be inspected at runtime.</li>
            </ul>
            <p>This section covers the application of annotations, their formats, predefined annotation types in the Java SE API, the use of type annotations with pluggable type systems for enhanced type checking, and the implementation of repeating annotations.</p>
        </section>
        
        <section>
            <h2>Annotation Format</h2>
            <p>Annotations are denoted by the at sign (<code>@</code>) followed by the annotation name. Here’s a basic example:</p>
            <pre><code>@Entity</code></pre>
            <p>For instance, the <code>Override</code> annotation is used as follows:</p>
            <pre><code>@Override
void myParentMethod() &#123; ... &#125;</code></pre>
            <p>Annotations can also include elements, which may be named or unnamed. Here’s an example with named elements:</p>
            <pre><code>@Author(
   name = "CodeLite user",
   date = "01/01/2022"
)
class MyClass &#123; ... &#125;</code></pre>
            <p>Or with unnamed elements:</p>
            <pre><code>@SuppressWarnings("unchecked")
void myMethod() &#123; ... &#125;</code></pre>
            <p>If an annotation contains only one element named <code>value</code>, the name can be omitted:</p>
            <pre><code>@SuppressWarnings("unchecked")
void myMethod() &#123; ... &#125;</code></pre>
            <p>Annotations with no elements can omit the parentheses:</p>
            <pre><code>@Override
void myParentMethod() &#123; ... &#125;</code></pre>
            <p>Multiple annotations can be applied to the same declaration:</p>
            <pre><code>@Author(name = "User 1")
@EBook
class MyClass &#123; ... &#125;</code></pre>
            <p>Annotations of the same type can be repeated, a feature supported since Java SE 8:</p>
            <pre><code>@Author(name = "User 1")
@Author(name = "User 2")
class MyClass &#123; ... &#125;</code></pre>
            <p>Annotations can be of predefined types from the <code>java.lang</code> or <code>java.lang.annotation</code> packages or custom-defined types.</p>
        </section>
        
        <section>
            <h2>Where Annotations Can Be Applied</h2>
            <p>Annotations can be applied to various declarations including classes, fields, methods, and other program elements. Typically, each annotation appears on its own line:</p>
            <p>With Java SE 8 and later, annotations can also be applied to type uses. Examples include:</p>
            <ul>
                <li><strong>Class Instance Creation:</strong> <code>new @Interned MyObject();</code></li>
                <li><strong>Type Cast:</strong> <code>myString = (@NonNull String) str;</code></li>
                <li><strong>Implements Clause:</strong> <code>class UnmodifiableList&lt;T&gt; implements @Readonly List&lt;@Readonly T&gt; &#123; ... &#125;</code></li>
                <li><strong>Thrown Exception Declaration:</strong> <code>void monitorTemperature() throws @Critical TemperatureException &#123; ... &#125;</code></li>
            </ul>
            <p>Such usage is referred to as a type annotation.</p>
        </section>
        
        <section>
            <h2>Defining an Annotation Type</h2>
            <p>Annotations often replace comments that provide metadata. To include such metadata using annotations, define a custom annotation type. For example, consider a class with comments:</p>
            <pre><code>public class Child extends Parent &#123;

   // class code goes here
&#125;
</code></pre>
            <p>This can be represented with an annotation:</p>
            <pre><code>public @interface ClassObject &#123;
   String author();
   String date();
   int currentRevision() default 1;
   String lastModified() default "N/A";
   String lastModifiedBy() default "N/A";
   String[] reviewers();
&#125;
</code></pre>
            <p>Once defined, you can use the annotation like this:</p>
            <pre><code>@ClassObject(
   author = "CodeLite"
)
public class Child extends Parent &#123;
// class code goes here
&#125;
</code></pre>
            <p>To include annotation information in Javadoc-generated documentation, annotate the annotation type definition with <code>@Documented</code>:</p>
            <pre><code>import java.lang.annotation.*;

@Documented
public @interface ClassObject &#123;
// Annotation element definitions
&#125;
</code></pre>
        </section>
    </div>
    <Footer />
    </>
    );
}