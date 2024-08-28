import { Route, Routes } from 'react-router-dom';
import './App.css';
import JavaDoWhileLoop from './components/java/DoWhileLoop';
import JavaIntroduction from './components/java/Introduction';
import JavaWrapperClass from './components/java/WrapperClass';
import Header from './components/reuse/Header';
import JavaAbstractClassInterface from './components/java/AbstractClassInterface';
import JavaAnnotations from './components/java/Annotations';
import JavaAnonymousClass from './components/java/AnonymousClass';
import JavaArrays from './components/java/Arrays';
import JavaBasics from './components/java/Basics';
import JavaBreakKeyword from './components/java/BreakKeyword';
import JavaBufferedReader from './components/java/BufferedReader';
import JavaCatchingException from './components/java/CatchingException';
import JavaClass from './components/java/Class';
import JavaClassMembers from './components/java/ClassMembers';
import JavaConstructor from './components/java/Constructor';
import JavaContinueKeyword from './components/java/ContinueKeyword';
import JavaCreatingObjects from './components/java/CreatingObjects';
import JavaDatatypes from './components/java/Datatypes';
import JavaEnums from './components/java/Enums';
import JavaExceptions from './components/java/Exceptions';
import JavaForEachLoop from './components/java/ForEachLoop';
import JavaForLoop from './components/java/ForLoop';
import JavaGarbageCollector from './components/java/GarbageCollector';
import JavaGenerics from './components/java/Generics';
import JavaHandlingException from './components/java/HandlingException';
import JavaIdentifiers from './components/java/Identifiers';
import JavaIfElse from './components/java/IfElse';
import JavaIfElseIf from './components/java/IfElseIf';
import JavaIfStatement from './components/java/IfStatement';
import JavaInheritance from './components/java/Inheritance';
import JavaInheritanceOverview from './components/java/InheritanceOverview';
import JavaInnerClass from './components/java/InnerClass';
import JavaInterface from './components/java/Interface';
import JavaInterfaceImpl from './components/java/InterfaceImpl';
import JavaInterfaceMethods from './components/java/InterfaceMethods';
import JavaLoops from './components/java/Loops';
import JavaMethods from './components/java/Methods';
import JavaMultiDimensionalArray from './components/java/MultidimensionalArray';
import JavaMultipleInheritance from './components/java/MultipleInheritance';
import JavaNestedClass from './components/java/NestedClass';
import JavaObjects from './components/java/Objects';
import JavaOperators from './components/java/Operators';
import JavaPackage from './components/java/Package';
import JavaPackageNaming from './components/java/PackageNaming';
import JavaPassingInfoMethodConstructor from './components/java/PassingInfoMethodConstructor';
import JavaPolymorphism from './components/java/Polymorphism';
import JavaPredefinedAnnotations from './components/java/PredefinedAnnotations';
import JavaReturnKeyword from './components/java/ReturnKeyword';
import JavaScannerClass from './components/java/ScannerClass';
import JavaSetupEnviron from './components/java/SetupEnviron';
import JavaSout from './components/java/Sout';
import JavaString from './components/java/String';
import JavaStringBuffer from './components/java/StringBuffer';
import JavaStringBuilder from './components/java/StringBuilder';
import JavaStringJoiner from './components/java/StringJoiner';
import JavaStringTokenizer from './components/java/StringTokenizer';
import JavaSuperKeyword from './components/java/SuperKeyword';
import JavaThisKeyword from './components/java/ThisKeyword';
import JavaUsingObjects from './components/java/UsingObjects';
import JavaVariables from './components/java/Variables';
import JavaWhileLoop from './components/java/WhileLoop';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<JavaIntroduction />} />
        <Route path='/java/abstract-class-interface' element={<JavaAbstractClassInterface />} />
        <Route path='/java/annotation' element={<JavaAnnotations />} />
        <Route path='/java/anonymous-class' element={<JavaAnonymousClass />} />
        <Route path='/java/array' element={<JavaArrays />} />
        <Route path='/java/basics' element={<JavaBasics />} />
        <Route path='/java/break-keyword' element={<JavaBreakKeyword />} />
        <Route path='/java/buffered-reader-class' element={<JavaBufferedReader />} />
        <Route path='/java/catch-exception' element={<JavaCatchingException />} />
        <Route path='/java/class' element={<JavaClass />} />
        <Route path='/java/class-members' element={<JavaClassMembers />} />
        <Route path='/java/constructor' element={<JavaConstructor />} />
        <Route path='/java/continue-keyword' element={<JavaContinueKeyword />} />
        <Route path='/java/creating-objects' element={<JavaCreatingObjects />} />
        <Route path='/java/datatypes' element={<JavaDatatypes />} />
        <Route path='/java/do-while' element={<JavaDoWhileLoop />} />
        <Route path='/java/enum' element={<JavaEnums />} />
        <Route path='/java/exception' element={<JavaExceptions />} />
        <Route path='/java/for-each' element={<JavaForEachLoop />} />
        <Route path='/java/for-loop' element={<JavaForLoop />} />
        <Route path='/java/garbage-collection' element={<JavaGarbageCollector />} />
        <Route path='/java/generics' element={<JavaGenerics />} />
        <Route path='/java/handling-exception' element={<JavaHandlingException />} />
        <Route path='/java/identifiers' element={<JavaIdentifiers />} />
        <Route path='/java/if-else' element={<JavaIfElse />} />
        <Route path='/java/if-else-if' element={<JavaIfElseIf />} />
        <Route path='/java/if-statement' element={<JavaIfStatement />} />
        <Route path='/java/inheritance' element={<JavaInheritance />} />
        <Route path='/java/inheritance-overview' element={<JavaInheritanceOverview />} />
        <Route path='/java/inner-class' element={<JavaInnerClass />} />
        <Route path='/java/interface' element={<JavaInterface />} />
        <Route path='/java/interface-implementation' element={<JavaInterfaceImpl />} />
        <Route path='/java/interface-methods' element={<JavaInterfaceMethods />} />
        <Route path='/java/introduction' element={<JavaIntroduction />} />
        <Route path='/java/loops' element={<JavaLoops />} />
        <Route path='/java/method' element={<JavaMethods />} />
        <Route path='/java/multidimensional-array' element={<JavaMultiDimensionalArray />} />
        <Route path='/java/multiple-inheritance' element={<JavaMultipleInheritance />} />
        <Route path='/java/nested-class' element={<JavaNestedClass />} />
        <Route path='/java/object' element={<JavaObjects />} />
        <Route path='/java/operators' element={<JavaOperators />} />
        <Route path='/java/package' element={<JavaPackage />} />
        <Route path='/java/package-naming' element={<JavaPackageNaming />} />
        <Route path='/java/method-constructor' element={<JavaPassingInfoMethodConstructor />} />
        <Route path='/java/polymorphism' element={<JavaPolymorphism />} />
        <Route path='/java/predefined-annotations' element={<JavaPredefinedAnnotations />} />
        <Route path='/java/return-keyword' element={<JavaReturnKeyword />} />
        <Route path='/java/scanner-class' element={<JavaScannerClass />} />
        <Route path='/java/environment-setup' element={<JavaSetupEnviron />} />
        <Route path='/java/system-out' element={<JavaSout />} />
        <Route path='/java/string' element={<JavaString />} />
        <Route path='/java/string-buffer' element={<JavaStringBuffer />} />
        <Route path='/java/string-builder' element={<JavaStringBuilder />} />
        <Route path='/java/string-joiner' element={<JavaStringJoiner />} />
        <Route path='/java/string-tokenizer' element={<JavaStringTokenizer />} />
        <Route path='/java/super-keyword' element={<JavaSuperKeyword />} />
        <Route path='/java/this-keyword' element={<JavaThisKeyword />} />
        <Route path='/java/using-objects' element={<JavaUsingObjects />} />
        <Route path='/java/variables' element={<JavaVariables />} />
        <Route path='/java/while-loop' element={<JavaWhileLoop />} />
        <Route path='/java/wrapper-class' element={<JavaWrapperClass />} />
      </Routes>
    </>
  );
}

export default App;
