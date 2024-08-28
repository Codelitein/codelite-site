import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaPackageNaming() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction</h2>
            <p>When developing Java applications, it's common for multiple developers to use the same class names. For example, the term <code>Rectangle</code> may be used in different packages, such as <code>graphics.Rectangle</code> and <code>java.awt.Rectangle</code>. This is possible because the full name of each class includes its package name, thus avoiding naming conflicts.</p>
        </section>
        
        <section>
            <h2>Package Naming Conventions</h2>
            <p>To prevent naming conflicts and ensure uniqueness, certain conventions are followed when naming packages in Java:</p>
            <ul>
                <li><strong>Use Lowercase:</strong> Package names are written in all lowercase letters to distinguish them from class and interface names.</li>
                <li><strong>Reverse Domain Names:</strong> Companies typically start their package names with their reversed Internet domain name. For instance, a package named <code>mypackage</code> created by <code>example.com</code> might be <code>com.example.mypackage</code>.</li>
                <li><strong>Handling Name Collisions:</strong> Within a single organization, if name collisions occur, conventions such as including a region or project name after the company name can be used. For example, <code>com.example.region.mypackage</code>.</li>
                <li><strong>Java Language Packages:</strong> Packages within the Java language itself start with <code>java.</code> or <code>javax.</code>.</li>
            </ul>
        </section>
        
        <section>
            <h2>Handling Invalid Package Names</h2>
            <p>Sometimes, domain names may not be valid as package names due to special characters or reserved keywords. In such cases, the convention is to modify the package name to fit Java's naming rules. For example:</p>
            <table border="1" cell-padding="5">
                <thead>
                    <tr>
                        <th>Domain Name</th>
                        <th>Package Name Prefix</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>hyphenated-name.example.org</td>
                        <td>org.example.hyphenated_name</td>
                    </tr>
                    <tr>
                        <td>example.int</td>
                        <td>int_.example</td>
                    </tr>
                    <tr>
                        <td>123name.example.com</td>
                        <td>com.example._123name</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
    <Footer />
    </>
    );
}