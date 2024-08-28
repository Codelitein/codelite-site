import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";
import PreviousPageButton from "../reuse/PreviousPageButton";
import NextPageButton from "../reuse/NextPageButton";


export default function JavaSetupEnviron() {

    return(
        <>
        <Header />
        <div class="container">
    <section>
    <h2>Step 1: Installing the Java Development Kit (JDK)</h2>
    <p>To get started with Java development, you need to install the Java Development Kit (JDK). This kit includes the Java Runtime Environment (JRE) and various development tools like the Java compiler and debugger.</p>

    <h3>Installation Steps:</h3>
    <ul>
        <li>Navigate to the official Oracle website.</li>
        <li>Download the latest version of the JDK suitable for your operating system.</li>
        <li>Run the downloaded installer and follow the on-screen instructions to complete the installation.</li>
        <li>After installation, set the <code>JAVA_HOME</code> environment variable to point to the JDK installation directory.</li>
    </ul>
    </section>
    <section>
    <h2>Step 2: Configuring the JAVA_HOME Environment Variable</h2>
    <h3>Identify the JDK Installation Path</h3>
    <p>Before setting the <code>JAVA_HOME</code> environment variable, you need to determine the exact path where the JDK is installed on your system.</p>

    <h3>Accessing Environment Variables</h3>
    <p>To access environment variables, follow these instructions based on your operating system:</p>

    <h4>Windows:</h4>
    <p>Right-click on "This PC" or "My Computer" on your desktop or in File Explorer and choose "Properties." In the System window, click on "Advanced system settings" on the left side. From there, you can access the environment variables.</p>

    <h4>macOS:</h4>
    <p>Go to "System Preferences" and select "Security & Privacy." Then, navigate to the "Privacy" tab, select "Full Disk Access" from the list on the left, and click the lock icon to make changes.</p>

    <h3>Setting the JAVA_HOME Environment Variable</h3>
    <p>Depending on your operating system, follow these steps:</p>

    <h4>Windows:</h4>
    <ol>
        <li>In the System Properties window, click on "Environment Variables."</li>
        <li>Under "System Variables," click "New."</li>
        <li>Set the "Variable name" as <code>JAVA_HOME</code>.</li>
        <li>In the "Variable value" field, enter the path to the JDK installation directory. For example, <code>C:\Program Files\Java\jdk1.8.0_XXX</code> where XXX is your specific version.</li>
        <li>Click "OK" to save.</li>
    </ol>

    <h4>macOS:</h4>
    <ol>
        <li>In System Preferences, go to "Security & Privacy" and open the "Privacy" tab.</li>
        <li>Scroll to "Full Disk Access," click the "+" button, and add the "Terminal" app from Applications &#62; Utilities.</li>
        <li>In Terminal, enter the following command:
            <pre><code>echo export JAVA_HOME=/Library/Java/JavaVirtualMachines/&#123;JDK_VERSION&#125;/Contents/Home &#62;&#62; ~/.bash_profile</code></pre>
            Replace <code>&#123;JDK_VERSION&#125;</code> with your JDK version.
        </li>
    </ol>
    </section>
    <section>
    <h2>Step 3: Verifying the JAVA_HOME Environment Variable</h2>
    <p>To confirm that <code>JAVA_HOME</code> is set up correctly, open a new terminal or command prompt and enter:</p>

    <h4>Windows:</h4>
    <pre><code>echo %JAVA_HOME%</code></pre>

    <h4>macOS:</h4>
    <pre><code>echo $JAVA_HOME</code></pre>

    <p>The command should display the path to the JDK installation directory.</p>
    </section>
    <section>
    <h2>Step 4: Selecting an Integrated Development Environment (IDE)</h2>
    <p>An Integrated Development Environment (IDE) streamlines coding by providing tools for editing, debugging, and managing projects. IntelliJ IDEA is a popular choice due to its powerful refactoring tools and user-friendly interface.</p>

    <p>You can download the Community or Ultimate Edition of IntelliJ IDEA based on your needs. Follow the setup instructions, including selecting plugins and themes. If you're a student, consider getting the GitHub Student Pack for additional resources.</p>
    </section>
    <section>
    <h2>Step 5: Configuring Your IDE</h2>
    <p>Once IntelliJ IDEA is installed, you can customize it to suit your development workflow.</p>
    </section>
</div>
<PreviousPageButton path={"/java/introduction"} />
<NextPageButton path={"/java/variables"} />
<Footer />
</>
    );
}