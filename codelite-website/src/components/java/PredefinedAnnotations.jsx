import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaPredefinedAnnotations() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction</h2>
            <p>Java provides a set of predefined annotation types within its SE API. Some of these annotations are utilized by the Java compiler, while others are used in conjunction with other annotations.</p>
        </section>
        
        <section>
            <h2>Annotation Types Used by the Java Language</h2>
            <p>Predefined annotation types in the <code>java.lang</code> package include <code>@Deprecated</code>, <code>@Override</code>, and <code>@SuppressWarnings</code>.</p>
        </section>

        <section>
            <h2>@Deprecated</h2>
            <p>The <code>@Deprecated</code> annotation signifies that the marked element is outdated and should not be used. The compiler will issue a warning whenever this element is used. Additionally, deprecated elements should be documented with the Javadoc <code>@deprecated</code> tag, which follows the same conceptual principle as the annotation itself. Note that while the Javadoc tag begins with a lowercase <code>d</code>, the annotation starts with an uppercase <code>D</code>.</p>
            <pre><code>// Javadoc comment example
/**
 * @deprecated
 * Explanation of why it was deprecated
 */
@Deprecated
static void deprecatedMethod() &#123; &#125;
</code></pre>
            <p>Starting from Java SE 9, the <code>forRemoval</code> attribute was introduced to the <code>@Deprecated</code> annotation, indicating whether the element may be removed in a future release. By default, this attribute is set to <code>false</code>.</p>
        </section>

        <section>
            <h2>@Override</h2>
            <p>The <code>@Override</code> annotation alerts the compiler that a method is intended to override a method from its superclass. This annotation is optional but helps prevent errors by ensuring that the method correctly overrides a superclass method. If the method does not override a method in the superclass, the compiler will generate an error.</p>
            <pre><code>// Example of overriding a method
@Override
int overriddenMethod() &#123; &#125;
</code></pre>
        </section>

        <section>
            <h2>@SuppressWarnings</h2>
            <p>The <code>@SuppressWarnings</code> annotation instructs the compiler to ignore specific warnings that would otherwise be generated. For example, if a deprecated method is used, normally the compiler would issue a warning, but with this annotation, the warning is suppressed.</p>
            <pre><code>// Suppressing a deprecation warning
@SuppressWarnings("deprecation")
void useDeprecatedMethod() &#123;
    // Deprecated method usage
    objectOne.deprecatedMethod();
&#125;
</code></pre>
            <p>Warnings are categorized, with the Java Language Specification listing two primary categories: <code>deprecation</code> and <code>unchecked</code>. The <code>unchecked</code> warning typically appears when dealing with legacy code prior to generics. To suppress multiple warning categories, use:</p>
            <pre><code>@SuppressWarnings(&#123;"unchecked", "deprecation"&#125;)
</code></pre>
        </section>

        <section>
            <h2>@SafeVarargs</h2>
            <p>The <code>@SafeVarargs</code> annotation, when applied to a method or constructor, assures that the code does not perform unsafe operations on its varargs parameter. This annotation suppresses unchecked warnings related to varargs usage.</p>
        </section>

        <section>
            <h2>@FunctionalInterface</h2>
            <p>Introduced in Java SE 8, the <code>@FunctionalInterface</code> annotation indicates that a type declaration is intended to be a functional interface, as specified by the Java Language Specification.</p>
        </section>

        <section>
            <h2>Meta-Annotations</h2>
            <p>Meta-annotations are annotations that apply to other annotations. Several meta-annotation types are defined in <code>java.lang.annotation</code>.</p>
        </section>

        <section>
            <h2>@Retention</h2>
            <p>The <code>@Retention</code> annotation specifies the retention policy of the annotated annotation:</p>
            <ul>
                <li><code>RetentionPolicy.SOURCE</code> – The annotation is retained only in the source code and ignored by the compiler.</li>
                <li><code>RetentionPolicy.CLASS</code> – The annotation is retained by the compiler but ignored by the JVM.</li>
                <li><code>RetentionPolicy.RUNTIME</code> – The annotation is retained by the JVM for use during runtime.</li>
            </ul>
        </section>

        <section>
            <h2>@Documented</h2>
            <p>The <code>@Documented</code> annotation indicates that whenever the specified annotation is used, the annotated elements should be included in the Javadoc documentation. By default, annotations are not included in Javadoc.</p>
        </section>

        <section>
            <h2>@Target</h2>
            <p>The <code>@Target</code> annotation specifies the types of Java elements to which an annotation can be applied. Possible element types include:</p>
            <ul>
                <li><code>ElementType.ANNOTATION_TYPE</code> – Applied to annotation types.</li>
                <li><code>ElementType.CONSTRUCTOR</code> – Applied to constructors.</li>
                <li><code>ElementType.FIELD</code> – Applied to fields or properties.</li>
                <li><code>ElementType.LOCAL_VARIABLE</code> – Applied to local variables.</li>
                <li><code>ElementType.METHOD</code> – Applied to methods.</li>
                <li><code>ElementType.MODULE</code> – Applied to module declarations.</li>
                <li><code>ElementType.PACKAGE</code> – Applied to package declarations.</li>
                <li><code>ElementType.PARAMETER</code> – Applied to method parameters.</li>
                <li><code>ElementType.RECORD_COMPONENT</code> – Applied to record components.</li>
                <li><code>ElementType.TYPE</code> – Applied to class, abstract class, interface, annotation interface, enumeration, or record declarations.</li>
                <li><code>ElementType.TYPE_PARAMETER</code> – Applied to type parameters.</li>
                <li><code>ElementType.TYPE_USE</code> – Applied where a type is used, such as on field declarations.</li>
            </ul>
        </section>

        <section>
            <h2>@Inherited</h2>
            <p>The <code>@Inherited</code> annotation signifies that the annotation type can be inherited from a superclass. This is not the default behavior. When querying for an annotation type, if the class does not have the annotation, its superclass is checked. This annotation only applies to class declarations.</p>
        </section>

        <section>
            <h2>@Repeatable</h2>
            <p>Introduced in Java SE 8, the <code>@Repeatable</code> annotation allows the annotated annotation to be applied multiple times to the same declaration or type use.</p>
        </section>
    </div>
    <Footer />
    </>
    );
}