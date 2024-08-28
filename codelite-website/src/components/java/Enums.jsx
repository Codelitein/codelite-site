import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaEnums() {
    return(
        <>
        <Header />
        <div class="container">
    <section>
        <h2>What are Enums?</h2>
        <p>Enums, short for "enumerations," are special classes in Java where all possible values are known at compile-time. They are useful for defining types that can only have a limited set of predefined values.</p>
        <p>Enums are declared similarly to classes but use the <code>enum</code> keyword. Inside the enum, you list the constants separated by commas. You cannot create instances of an enum beyond these constants.</p>
        <pre><code>public enum DayOfWeek &#123;
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
&#125;</code></pre>
        <p>All enums implicitly extend <code>java.lang.Enum</code> and cannot be subclassed.</p>
    </section>

    <section>
        <h2>Accessing, Evaluating, and Comparing Enums</h2>
        <p>The values of an enum can be utilized as constants. To compare two enum values, use the <code>==</code> operator.</p>
        <pre><code>DayOfWeek weekStart = DayOfWeek.MONDAY;

if (weekStart == DayOfWeek.MONDAY) &#123;
    System.out.println("The week starts on Monday.");
&#125;</code></pre>
        <p>Enums can also be used in <code>switch</code> statements for conditional logic based on their values.</p>
        <pre><code>DayOfWeek someDay = DayOfWeek.FRIDAY;

switch (someDay) &#123;
    case MONDAY -&#62;
        System.out.println("The week just started.");
    case TUESDAY, WEDNESDAY, THURSDAY -&#62;
        System.out.println("We are somewhere in the middle of the week.");
    case FRIDAY -&#62;
        System.out.println("The weekend is near.");
    case SATURDAY, SUNDAY -&#62;
        System.out.println("Weekend");
    default -&#62;
        throw new AssertionError("Should not happen");
&#125;</code></pre>
        <p>With <code>switch</code> expressions, the compiler checks for completeness, ensuring all enum values are handled, a feature also supported by JEP 409: Sealed Classes.</p>
        <pre><code>DayOfWeek someDay = DayOfWeek.FRIDAY;

String text = switch (someDay) &#123;
    case MONDAY -&#62; "The week just started.";
    case TUESDAY, WEDNESDAY, THURSDAY -&#62; "We are somewhere in the middle of the week.";
    case FRIDAY -&#62; "The weekend is near.";
    case SATURDAY, SUNDAY -&#62; "Weekend";
&#125;;

System.out.println(text);</code></pre>
    </section>

    <section>
        <h2>Adding Members to Enums</h2>
        <p>Enums, like classes, can have constructors, methods, and fields. To add these, place a semicolon after the list of enum constants, and define constructor arguments as needed.</p>
        <pre><code>public enum DayOfWeek &#123;
    MONDAY("MON"), TUESDAY("TUE"), WEDNESDAY("WED"), THURSDAY("THU"), FRIDAY("FRI"), SATURDAY("SAT"), SUNDAY("SUN");

    private final String abbreviation;

    DayOfWeek(String abbreviation) &#123;
        this.abbreviation = abbreviation;
    &#125;

    public String getAbbreviation() &#123;
        return abbreviation;
    &#125;
&#125;</code></pre>
    </section>

    <section>
        <h2>Special Methods</h2>
        <p>Enums come with built-in methods. For instance, the <code>name()</code> method returns the name of the enum constant, while <code>ordinal()</code> returns its position in the enum declaration.</p>
        <pre><code>System.out.println(DayOfWeek.MONDAY.name());    // prints "MONDAY"
System.out.println(DayOfWeek.MONDAY.ordinal()); // prints "0" because MONDAY is the first constant in the DayOfWeek enum</code></pre>
        <p>Enums also include static methods like <code>values()</code>, which returns all instances of the enum, and <code>valueOf(String)</code>, which retrieves a specific instance by name.</p>
        <pre><code>DayOfWeek[] days = DayOfWeek.values(); // all days of the week
DayOfWeek monday = DayOfWeek.valueOf("MONDAY");</code></pre>
        <p>Enums implement the <code>Comparable</code> interface, allowing for comparisons based on their ordinal values, useful for sorting and searching.</p>
        <pre><code>public void compareDayOfWeek(DayOfWeek dayOfWeek) &#123;
    int comparison = dayOfWeek.compareTo(DayOfWeek.WEDNESDAY);
    if (comparison &#60; 0) &#123;
        System.out.println("It's before the middle of the work week.");
    &#125; else if (comparison &#62; 0) &#123;
        System.out.println("It's after the middle of the work week.");
    &#125; else &#123;
        System.out.println("It's the middle of the work week.");
    &#125;
&#125;
List&#60;DayOfWeek&#62; days = new ArrayList&#60;&#62;(List.of(DayOfWeek.FRIDAY, DayOfWeek.TUESDAY, DayOfWeek.SATURDAY));
Collections.sort(days);</code></pre>
    </section>

    <section>
        <h2>Using Enums as Singletons</h2>
        <p>Enums can also serve as singletons by defining an enum with only one constant.</p>
        <pre><code>public enum Singleton &#123;
    INSTANCE;
&#125;</code></pre>
    </section>

    <section>
        <h2>Abstract Methods in Enums</h2>
        <p>Although enums cannot be subclassed, they can have abstract methods, which must be implemented by each enum constant.</p>
        <pre><code>enum MyEnum &#123;
    A() &#123;
        @Override
        void doSomething() &#123;
            System.out.println("a");
        &#125;
    &#125;,
    B() &#123;
        @Override
        void doSomething() &#123;
            System.out.println("b");
        &#125;
    &#125;;

    abstract void doSomething();
&#125;</code></pre>
    </section>
</div>
<Footer />
</>
    );
}