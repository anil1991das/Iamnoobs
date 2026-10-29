import type { CourseConfig } from "../types";

export const javaCourse: CourseConfig = {
  "slug": "java",
  "language": "Java",
  "title": "Learn Java: Beginner to Advanced",
  "icon": "☕",
  "levelLabel": "Beginner to advanced",
  "description": "Learn Java from the fundamentals through object-oriented design, collections, exceptions, files, modern functional features, concurrency, testing, and project design with concise lessons, guided examples, quizzes, and a capstone.",
  "metaDescription": "A comprehensive Java programming course covering the JVM, syntax, variables, types, control flow, methods, arrays, strings, object-oriented programming, inheritance, interfaces, collections, generics, exceptions, file I/O, lambdas, streams, Optional, concurrency, testing, and build tools.",
  "audience": "Beginners and developers preparing to build maintainable Java applications, backend services, automation tools, or Android-adjacent foundations.",
  "prerequisites": "No previous Java experience is required. Examples use broadly available modern Java syntax, with newer features such as records and switch expressions noted where relevant. Code examples are educational and are not compiled or executed on this website.",
  "modules": [
    {
      "id": "java-getting-started",
      "title": "Meet Java and the JVM",
      "level": "Beginner",
      "description": "Understand Java source code, the JDK, compilation, and the edit-compile-run workflow.",
      "outcomes": [
        "Distinguish the JDK, JVM, and Java compiler.",
        "Create and run a small Java application.",
        "Read basic compiler messages and console output."
      ],
      "lessons": [
        {
          "id": "getting-started-lesson-1",
          "title": "Java, the JDK, and the JVM",
          "summary": "Java source is compiled to bytecode that runs on a Java Virtual Machine.",
          "content": [
            "Java is a statically typed, class-based language. Developers typically write source files ending in .java; the Java compiler produces .class bytecode that a compatible JVM can execute.",
            "The JDK includes development tools such as javac and java. The JVM executes bytecode, while the broader Java platform supplies standard libraries and runtime services."
          ],
          "example": "// Save as Main.java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}\n\n// Compile and run:\n// javac Main.java\n// java Main",
          "quest": {
            "prompt": "Which tool compiles a .java source file into bytecode?",
            "choices": [
              "java",
              "javac",
              "javadoc"
            ],
            "answer": 1,
            "explanation": "javac is the Java compiler. The java launcher starts a program on the JVM."
          }
        },
        {
          "id": "getting-started-lesson-2",
          "title": "The shape of a Java program",
          "summary": "A class groups code, and main is a common application entry point.",
          "content": [
            "A Java application commonly begins in a public class whose name matches the source filename. The main method shown here is the conventional entry point for a basic command-line application.",
            "Java is case-sensitive: Main, main, and MAIN are different identifiers. Braces delimit blocks, and statements typically end with semicolons."
          ],
          "example": "public class Welcome {\n    public static void main(String[] args) {\n        System.out.println(\"Welcome to learning Java\");\n    }\n}",
          "quest": {
            "prompt": "Which method signature is the conventional entry point in a simple Java application?",
            "choices": [
              "public static void main(String[] args)",
              "public void start(String args)",
              "static int JavaMain()"
            ],
            "answer": 0,
            "explanation": "The conventional signature is public static void main(String[] args)."
          }
        },
        {
          "id": "getting-started-lesson-3",
          "title": "Variables and console output",
          "summary": "Variables name values, and print methods display information for debugging or users.",
          "content": [
            "Use System.out.println to print a value followed by a newline, or System.out.print to stay on the same line. String literals use double quotes, while character literals use single quotes.",
            "Choose meaningful names and keep statements simple while learning. Compiler errors often include a line number and a description; begin with the first relevant error because later errors can be consequences."
          ],
          "example": "String learner = \"Asha\";\nint lessons = 3;\nSystem.out.println(learner + \" completed \" + lessons + \" lessons.\");",
          "quest": {
            "prompt": "Which call prints a value followed by a newline?",
            "choices": [
              "System.out.print(value)",
              "System.out.println(value)",
              "System.in.println(value)"
            ],
            "answer": 1,
            "explanation": "println writes the value and then a line terminator."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Java program using meet java and the jvm. Test a normal case, a boundary case, and an invalid or unexpected input; explain why the result is correct."
    },
    {
      "id": "java-types-variables",
      "title": "Types, variables, and expressions",
      "level": "Beginner",
      "description": "Work with Java primitive types, reference variables, conversions, and constants.",
      "outcomes": [
        "Choose suitable primitive types for common values.",
        "Declare and initialize variables with meaningful names.",
        "Use constants and understand basic conversion rules."
      ],
      "lessons": [
        {
          "id": "types-variables-lesson-1",
          "title": "Primitive data types",
          "summary": "Java primitives represent simple numeric, character, and boolean values.",
          "content": [
            "Common primitive types include int for whole numbers, long for larger integer ranges, double for floating-point values, boolean for true or false, and char for a UTF-16 code unit. A variable must be declared with a type before use.",
            "Choose a type based on the value range and meaning. Integer literals are usually int; add L for a long literal when needed. Floating-point literals are double by default."
          ],
          "example": "int age = 30;\nlong population = 8_000_000_000L;\ndouble temperature = 24.5;\nboolean active = true;\nchar grade = 'A';",
          "quest": {
            "prompt": "Which primitive type stores true or false?",
            "choices": [
              "boolean",
              "char",
              "double"
            ],
            "answer": 0,
            "explanation": "boolean is the primitive type for logical truth values."
          }
        },
        {
          "id": "types-variables-lesson-2",
          "title": "Reference types and strings",
          "summary": "Reference variables can refer to objects such as String instances.",
          "content": [
            "Primitive variables contain primitive values; reference variables hold references to objects. String is a class, not a primitive type, and strings are immutable: operations produce new string values instead of changing the existing object.",
            "Use equals to compare String contents. The == operator compares primitive values, but for object references it checks whether both references refer to the same object."
          ],
          "example": "String first = \"Java\";\nString second = new String(\"Java\");\nSystem.out.println(first.equals(second)); // true\nSystem.out.println(first == second);       // usually false",
          "quest": {
            "prompt": "Which method compares String contents?",
            "choices": [
              "==",
              "equals()",
              "compareAddress()"
            ],
            "answer": 1,
            "explanation": "String.equals compares the character sequence; == compares references for objects."
          }
        },
        {
          "id": "types-variables-lesson-3",
          "title": "Constants and type conversion",
          "summary": "final marks a variable as assignable only once after initialization.",
          "content": [
            "Use final for a value that should not be reassigned. A constant shared at class level is often declared static final, with an uppercase name by convention.",
            "Java permits certain widening conversions automatically, such as int to long. Narrowing conversions may lose information and require an explicit cast. Use casts deliberately and validate values when precision matters."
          ],
          "example": "final double TAX_RATE = 0.08;\nint count = 7;\nlong totalCount = count;       // widening\ndouble price = 19.99;\nint wholePrice = (int) price;  // becomes 19",
          "quest": {
            "prompt": "What is the purpose of final on a local variable?",
            "choices": [
              "It prevents reassignment after initialization",
              "It makes the value change automatically",
              "It converts every value to a String"
            ],
            "answer": 0,
            "explanation": "A final local variable may be assigned once and cannot subsequently be reassigned."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Java program using types, variables, and expressions. Test a normal case, a boundary case, and an invalid or unexpected input; explain why the result is correct."
    },
    {
      "id": "java-operators-control-flow",
      "title": "Operators and decisions",
      "level": "Beginner",
      "description": "Use arithmetic, comparisons, logical operators, conditionals, and switch expressions.",
      "outcomes": [
        "Evaluate arithmetic and comparison expressions.",
        "Build branches with if, else, and switch.",
        "Combine conditions with short-circuit logical operators."
      ],
      "lessons": [
        {
          "id": "operators-control-flow-lesson-1",
          "title": "Arithmetic and comparison operators",
          "summary": "Operators compute values or compare them to produce a boolean result.",
          "content": [
            "Java supports arithmetic operators such as +, -, *, /, and %. For integer operands, division discards the fractional part. Comparison operators include ==, !=, <, <=, >, and >=.",
            "Be careful when mixing integer and floating-point values. Parentheses make intent clearer, particularly when an expression contains multiple operators with different precedence."
          ],
          "example": "int quotient = 7 / 2;       // 3\nint remainder = 7 % 2;     // 1\nboolean passing = quotient >= 3;\nSystem.out.println(passing);",
          "quest": {
            "prompt": "What is the result of 7 / 2 when both operands are int?",
            "choices": [
              "3.5",
              "3",
              "4"
            ],
            "answer": 1,
            "explanation": "Integer division truncates the fractional portion, producing 3."
          }
        },
        {
          "id": "operators-control-flow-lesson-2",
          "title": "if, else, and boolean logic",
          "summary": "Conditional branches execute only when their boolean condition is satisfied.",
          "content": [
            "Use if and else if to handle different cases. A Java if condition must be boolean; Java does not treat arbitrary numbers or objects as truthy or falsy.",
            "The && operator short-circuits when its left operand is false, and || short-circuits when the left operand is true. This can prevent unnecessary work or avoid accessing a value before checking a precondition."
          ],
          "example": "int score = 82;\nif (score >= 90) {\n    System.out.println(\"A\");\n} else if (score >= 75) {\n    System.out.println(\"B\");\n} else {\n    System.out.println(\"Keep practicing\");\n}",
          "quest": {
            "prompt": "What type must an if condition evaluate to in Java?",
            "choices": [
              "boolean",
              "int",
              "String"
            ],
            "answer": 0,
            "explanation": "Java requires a boolean condition in if statements."
          }
        },
        {
          "id": "operators-control-flow-lesson-3",
          "title": "switch statements and expressions",
          "summary": "switch selects among cases based on the value of an expression.",
          "content": [
            "A switch statement is useful when one value is matched against several alternatives. Traditional arrow-free cases can fall through unless terminated by break or another control-flow transfer.",
            "Modern Java also supports switch expressions with arrow labels, which can produce a value and avoid accidental fall-through. Use a form supported by your project JDK."
          ],
          "example": "int day = 6;\nString kind = switch (day) {\n    case 6, 7 -> \"Weekend\";\n    default -> \"Weekday\";\n};\nSystem.out.println(kind);",
          "quest": {
            "prompt": "What is an advantage of arrow labels in a switch expression?",
            "choices": [
              "They prevent accidental case fall-through",
              "They turn all values into strings",
              "They automatically repeat the switch"
            ],
            "answer": 0,
            "explanation": "Arrow-style cases do not fall through into the next case."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Java program using operators and decisions. Test a normal case, a boundary case, and an invalid or unexpected input; explain why the result is correct."
    },
    {
      "id": "java-loops",
      "title": "Loops and iteration",
      "level": "Beginner",
      "description": "Repeat operations with for, while, do-while, nested loops, and safe loop control.",
      "outcomes": [
        "Select a loop suited to the task.",
        "Trace loop conditions and updates.",
        "Use break and continue while avoiding infinite loops."
      ],
      "lessons": [
        {
          "id": "loops-lesson-1",
          "title": "for loops",
          "summary": "A for loop groups initialization, a continuation test, and an update.",
          "content": [
            "Use for when the iteration pattern is clear, such as counting through a range or visiting indexes. The loop condition is checked before each iteration.",
            "Arrays use zero-based indexes, so an array of length n has valid indexes from 0 through n - 1. A condition such as i < values.length is a common safe pattern."
          ],
          "example": "for (int i = 0; i < 4; i++) {\n    System.out.println(i);\n}",
          "quest": {
            "prompt": "How many times does this loop run: for (int i = 0; i < 4; i++)?",
            "choices": [
              "3",
              "4",
              "5"
            ],
            "answer": 1,
            "explanation": "The body runs with i equal to 0, 1, 2, and 3: four iterations."
          }
        },
        {
          "id": "loops-lesson-2",
          "title": "while and do-while",
          "summary": "while tests before running; do-while tests after running the body.",
          "content": [
            "Use while when repetition depends on a condition that can change during the loop. If the condition is false initially, a while body runs zero times.",
            "A do-while loop always executes its body at least once because its condition is checked afterward. Ensure the loop updates state needed for termination."
          ],
          "example": "int remaining = 3;\nwhile (remaining > 0) {\n    System.out.println(remaining);\n    remaining--;\n}\ndo {\n    System.out.println(\"Runs once\");\n} while (false);",
          "quest": {
            "prompt": "Which loop always executes its body at least once?",
            "choices": [
              "while",
              "for",
              "do-while"
            ],
            "answer": 2,
            "explanation": "A do-while checks its condition after the first execution of the body."
          }
        },
        {
          "id": "loops-lesson-3",
          "title": "Nested loops and loop control",
          "summary": "Nested loops process combinations, while break and continue alter iteration flow.",
          "content": [
            "A loop inside another loop is useful for grids, tables, and pairwise comparisons. The inner loop completes its iterations for each outer-loop iteration unless control flow changes.",
            "break exits the nearest loop or switch, while continue skips the rest of the current iteration and proceeds to the next one. Avoid unnecessary control-flow jumps when a clear condition would be easier to read."
          ],
          "example": "for (int row = 0; row < 2; row++) {\n    for (int col = 0; col < 3; col++) {\n        System.out.println(row + \",\" + col);\n    }\n}",
          "quest": {
            "prompt": "How many pairs are printed by a 2-iteration outer loop with a 3-iteration inner loop?",
            "choices": [
              "5",
              "6",
              "9"
            ],
            "answer": 1,
            "explanation": "The inner body runs 2 × 3 = 6 times."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Java program using loops and iteration. Test a normal case, a boundary case, and an invalid or unexpected input; explain why the result is correct."
    },
    {
      "id": "java-methods",
      "title": "Methods, parameters, and scope",
      "level": "Beginner",
      "description": "Design reusable methods, pass arguments, return values, and understand scope and overloading.",
      "outcomes": [
        "Declare methods with parameter and return types.",
        "Understand Java pass-by-value semantics.",
        "Use overloads and scope intentionally."
      ],
      "lessons": [
        {
          "id": "methods-lesson-1",
          "title": "Declaring and calling methods",
          "summary": "Methods package reusable behavior behind a name and a defined parameter list.",
          "content": [
            "A method declaration includes modifiers, a return type, a name, parameters, and a body. A void method does not return a value; a non-void method must return a compatible value along every normal path.",
            "Keep methods focused on one clear task. Parameters make dependencies explicit, and return values let callers use results without relying on hidden global state."
          ],
          "example": "static int square(int value) {\n    return value * value;\n}\n\nint result = square(5); // 25",
          "quest": {
            "prompt": "What does void mean in a method declaration?",
            "choices": [
              "The method returns no value",
              "The method accepts no parameters",
              "The method can never run"
            ],
            "answer": 0,
            "explanation": "void indicates that the method does not return a value."
          }
        },
        {
          "id": "methods-lesson-2",
          "title": "Parameters and pass-by-value",
          "summary": "Java passes arguments by value, including copies of object references.",
          "content": [
            "For a primitive argument, the method receives a copy of the primitive value. Reassigning that parameter does not change the caller variable.",
            "For an object argument, the method receives a copy of the reference. It can use that reference to mutate the object when the object is mutable, but assigning the parameter to a different object does not reassign the caller variable."
          ],
          "example": "static void change(int number) {\n    number = 99;\n}\nint value = 7;\nchange(value);\nSystem.out.println(value); // 7",
          "quest": {
            "prompt": "Does Java pass object arguments by reference?",
            "choices": [
              "Yes, always",
              "No; the reference value is passed by value",
              "Objects are copied in every method call"
            ],
            "answer": 1,
            "explanation": "Java always passes arguments by value; for objects, the value is a reference."
          }
        },
        {
          "id": "methods-lesson-3",
          "title": "Scope and method overloading",
          "summary": "Scope determines where a name can be used, and overloading provides related method signatures.",
          "content": [
            "Local variables are visible only within their declared scope. Avoid shadowing names unnecessarily, and initialize local variables before reading them because Java does not provide default values for local variables.",
            "Methods can share a name when their parameter lists differ. Return type alone is not enough to distinguish overloads. The compiler selects the applicable overload based on argument types and method resolution rules."
          ],
          "example": "static int add(int a, int b) { return a + b; }\nstatic double add(double a, double b) { return a + b; }\nSystem.out.println(add(2, 3));\nSystem.out.println(add(2.5, 3.0));",
          "quest": {
            "prompt": "Can two methods be overloaded by changing only their return types?",
            "choices": [
              "Yes",
              "No",
              "Only when both are static"
            ],
            "answer": 1,
            "explanation": "Overloads must differ in their parameter lists; return type alone does not distinguish them."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Java program using methods, parameters, and scope. Test a normal case, a boundary case, and an invalid or unexpected input; explain why the result is correct."
    },
    {
      "id": "java-arrays-strings",
      "title": "Arrays, strings, and data handling",
      "level": "Beginner",
      "description": "Store ordered data, use multidimensional arrays, and work safely with String operations.",
      "outcomes": [
        "Create, access, and traverse arrays.",
        "Use String methods and understand immutability.",
        "Choose arrays or collections based on the problem."
      ],
      "lessons": [
        {
          "id": "arrays-strings-lesson-1",
          "title": "Arrays and array traversal",
          "summary": "An array stores a fixed number of elements of one declared type.",
          "content": [
            "An array has a fixed length after creation. Its length is available through the length field, and index access outside the valid range throws ArrayIndexOutOfBoundsException.",
            "Arrays of primitives contain primitive values; arrays of reference types contain references. Newly created array elements receive default values such as 0, false, or null."
          ],
          "example": "int[] scores = {80, 92, 75};\nint total = 0;\nfor (int score : scores) {\n    total += score;\n}\nSystem.out.println(total);",
          "quest": {
            "prompt": "How do you obtain an array named values length?",
            "choices": [
              "values.size()",
              "values.length",
              "length(values)"
            ],
            "answer": 1,
            "explanation": "Java arrays expose their size through the length field."
          }
        },
        {
          "id": "arrays-strings-lesson-2",
          "title": "Multidimensional arrays",
          "summary": "A two-dimensional array is an array whose elements are themselves arrays.",
          "content": [
            "Java multidimensional arrays can be jagged: each row may have a different length. Use matrix.length for the number of rows and matrix[row].length for a row length.",
            "Nested loops are a common way to visit each element. Check row and column bounds independently, especially when rows may have different lengths."
          ],
          "example": "int[][] grid = { {1, 2}, {3, 4, 5} };\nfor (int[] row : grid) {\n    for (int item : row) {\n        System.out.println(item);\n    }\n}",
          "quest": {
            "prompt": "Can every row in a Java two-dimensional array have a different length?",
            "choices": [
              "Yes",
              "No",
              "Only for int arrays"
            ],
            "answer": 0,
            "explanation": "A two-dimensional Java array is an array of arrays, so row lengths can differ."
          }
        },
        {
          "id": "arrays-strings-lesson-3",
          "title": "String operations",
          "summary": "String provides methods for searching, extracting, comparing, and transforming text.",
          "content": [
            "Strings are immutable, so methods such as toUpperCase and replace return a String result rather than modifying the original object. Use equals for content comparisons and startsWith or contains for common checks.",
            "For repeated concatenation in a loop, StringBuilder can reduce the creation of many temporary string objects. Be mindful that indexes are UTF-16 code-unit indexes and may not correspond one-to-one with Unicode code points."
          ],
          "example": "String name = \"Java Basics\";\nSystem.out.println(name.toUpperCase());\nSystem.out.println(name.contains(\"Basics\"));\nStringBuilder text = new StringBuilder();\ntext.append(\"Hello\").append(\" Java\");",
          "quest": {
            "prompt": "Why is StringBuilder often useful for repeated string concatenation?",
            "choices": [
              "It makes strings mutable while building text",
              "It stores only numeric values",
              "It automatically escapes all input"
            ],
            "answer": 0,
            "explanation": "StringBuilder supports mutable sequences of characters and can avoid repeated intermediate strings."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Java program using arrays, strings, and data handling. Test a normal case, a boundary case, and an invalid or unexpected input; explain why the result is correct."
    },
    {
      "id": "java-oop-classes",
      "title": "Object-oriented programming",
      "level": "Intermediate",
      "description": "Model domain concepts with classes, objects, constructors, encapsulation, and records.",
      "outcomes": [
        "Define classes, fields, constructors, and methods.",
        "Encapsulate state and validate object invariants.",
        "Choose between classes and records for data models."
      ],
      "lessons": [
        {
          "id": "oop-classes-lesson-1",
          "title": "Classes and objects",
          "summary": "A class defines a type; an object is an instance of that type.",
          "content": [
            "Fields represent state and methods represent behavior. Create objects with new, then use accessible members through the reference. Classes can define invariants that keep their instances in valid states.",
            "Prefer private fields with purposeful methods or properties exposed through getters when needed. Avoid exposing mutable internal collections directly because callers could bypass validation."
          ],
          "example": "class Counter {\n    private int value;\n    public void increment() { value++; }\n    public int getValue() { return value; }\n}\nCounter counter = new Counter();\ncounter.increment();",
          "quest": {
            "prompt": "What is an object in Java?",
            "choices": [
              "An instance of a class",
              "A compiler warning",
              "A package declaration"
            ],
            "answer": 0,
            "explanation": "An object is a runtime instance of a class."
          }
        },
        {
          "id": "oop-classes-lesson-2",
          "title": "Constructors and encapsulation",
          "summary": "Constructors initialize objects, while access modifiers control visibility.",
          "content": [
            "A constructor has the class name and no return type. It establishes the initial state of a new object. If no constructor is declared, Java may provide a default no-argument constructor.",
            "Encapsulation keeps state private and exposes operations that preserve invariants. Constructors can reject invalid values with exceptions rather than allowing inconsistent objects."
          ],
          "example": "class Person {\n    private final String name;\n    public Person(String name) {\n        if (name == null || name.isBlank()) throw new IllegalArgumentException(\"name required\");\n        this.name = name;\n    }\n    public String name() { return name; }\n}",
          "quest": {
            "prompt": "Which keyword commonly restricts a field to access from within its declaring class?",
            "choices": [
              "public",
              "private",
              "static"
            ],
            "answer": 1,
            "explanation": "private limits direct access to the declaring class."
          }
        },
        {
          "id": "oop-classes-lesson-3",
          "title": "Records, enums, and data modeling",
          "summary": "Records and enums provide concise ways to represent structured data and fixed choices.",
          "content": [
            "A record is useful for a transparent data carrier; its components define fields and accessors, and the compiler supplies common methods such as equals, hashCode, and toString. Records are implicitly final.",
            "Use enums for a fixed set of named constants, such as status values. A record does not guarantee deep immutability if a component refers to a mutable object, so think about defensive copying when necessary."
          ],
          "example": "record Point(int x, int y) {}\nenum Status { NEW, IN_PROGRESS, DONE }\nPoint origin = new Point(0, 0);\nStatus current = Status.NEW;",
          "quest": {
            "prompt": "Which type best represents a fixed set of named states?",
            "choices": [
              "String concatenation",
              "enum",
              "double"
            ],
            "answer": 1,
            "explanation": "An enum defines a finite set of named constants."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Java program using object-oriented programming. Test a normal case, a boundary case, and an invalid or unexpected input; explain why the result is correct."
    },
    {
      "id": "java-inheritance-polymorphism",
      "title": "Inheritance, interfaces, and polymorphism",
      "level": "Intermediate",
      "description": "Build extensible designs using inheritance, interfaces, overriding, and composition.",
      "outcomes": [
        "Use inheritance and method overriding appropriately.",
        "Define and implement interfaces.",
        "Prefer composition when it models relationships more clearly."
      ],
      "lessons": [
        {
          "id": "inheritance-polymorphism-lesson-1",
          "title": "Inheritance and overriding",
          "summary": "Inheritance lets a subclass specialize behavior inherited from a superclass.",
          "content": [
            "A subclass uses extends to inherit accessible members. It can override an inherited instance method with a compatible signature; use @Override so the compiler checks your intention.",
            "Constructors are not inherited. Use super to call a superclass constructor or implementation when appropriate. Keep inheritance for genuine “is-a” relationships rather than reusing code for convenience alone."
          ],
          "example": "class Animal {\n    void speak() { System.out.println(\"sound\"); }\n}\nclass Dog extends Animal {\n    @Override void speak() { System.out.println(\"woof\"); }\n}",
          "quest": {
            "prompt": "Which annotation asks the compiler to verify a method override?",
            "choices": [
              "@Inherited",
              "@Override",
              "@Overload"
            ],
            "answer": 1,
            "explanation": "@Override lets the compiler check that a method actually overrides an inherited method."
          }
        },
        {
          "id": "inheritance-polymorphism-lesson-2",
          "title": "Interfaces and abstract classes",
          "summary": "Interfaces define contracts; abstract classes can share partial implementation and state.",
          "content": [
            "A class implements an interface and provides implementations for its abstract methods unless the class itself remains abstract. A type can implement multiple interfaces, which supports flexible abstractions.",
            "Use an abstract class when related types need shared state or protected implementation. Use an interface to express a capability or role that unrelated classes can share."
          ],
          "example": "interface Payable {\n    double amountDue();\n}\nclass Invoice implements Payable {\n    public double amountDue() { return 125.0; }\n}",
          "quest": {
            "prompt": "How many classes can a Java class extend directly?",
            "choices": [
              "One",
              "Two",
              "Unlimited"
            ],
            "answer": 0,
            "explanation": "Java classes have single direct class inheritance, though they can implement multiple interfaces."
          }
        },
        {
          "id": "inheritance-polymorphism-lesson-3",
          "title": "Polymorphism and composition",
          "summary": "Polymorphism lets code use a common type while runtime objects supply specialized behavior.",
          "content": [
            "A variable typed as an interface or superclass can refer to an instance of an implementing class or subclass. Overridden instance methods are selected based on the runtime object type.",
            "Composition models “has-a” relationships by putting collaborating objects inside another object. It can make behavior easier to replace and test without creating deep inheritance hierarchies."
          ],
          "example": "interface Notifier { void send(String message); }\nclass AlertService {\n    private final Notifier notifier;\n    AlertService(Notifier notifier) { this.notifier = notifier; }\n    void alert() { notifier.send(\"Attention\"); }\n}",
          "quest": {
            "prompt": "What design relationship does composition usually represent?",
            "choices": [
              "Has-a",
              "Is-a",
              "Compiles-to"
            ],
            "answer": 0,
            "explanation": "Composition models a type containing or collaborating with another object: a has-a relationship."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Java program using inheritance, interfaces, and polymorphism. Test a normal case, a boundary case, and an invalid or unexpected input; explain why the result is correct."
    },
    {
      "id": "java-collections-generics",
      "title": "Collections and generics",
      "level": "Intermediate",
      "description": "Choose collection types, work with generics, and compare elements safely.",
      "outcomes": [
        "Select List, Set, Map, and Queue for common tasks.",
        "Use generic types to catch type errors at compile time.",
        "Implement equality and ordering consistently."
      ],
      "lessons": [
        {
          "id": "collections-generics-lesson-1",
          "title": "Lists, sets, and maps",
          "summary": "The Collections Framework provides reusable data structures for common operations.",
          "content": [
            "List preserves element order and allows duplicates; Set models unique elements; Map associates keys with values. ArrayList is a common default List, while HashSet and HashMap offer hash-based implementations.",
            "Choose based on required behavior, not only familiarity. Hash-based collections rely on consistent equals and hashCode implementations, and iteration order is not guaranteed for HashMap."
          ],
          "example": "List<String> names = new ArrayList<>();\nnames.add(\"Mira\");\nSet<String> unique = new HashSet<>(names);\nMap<String, Integer> ages = new HashMap<>();\nages.put(\"Mira\", 28);",
          "quest": {
            "prompt": "Which collection type associates keys with values?",
            "choices": [
              "List",
              "Set",
              "Map"
            ],
            "answer": 2,
            "explanation": "Map stores key-value associations."
          }
        },
        {
          "id": "collections-generics-lesson-2",
          "title": "Generics and type safety",
          "summary": "Generics let collections and classes express element types at compile time.",
          "content": [
            "A List<String> states that the list is intended to contain String values. Generics reduce casts and let the compiler detect incompatible use before the program runs.",
            "Java generics use type parameters such as T or K, V. Primitive types cannot be supplied directly as type arguments; use wrapper types such as Integer, with boxing and unboxing handled by the language where applicable."
          ],
          "example": "List<Integer> values = new ArrayList<>();\nvalues.add(10);\nint first = values.get(0); // unboxing",
          "quest": {
            "prompt": "What is a key benefit of List<String> over a raw List?",
            "choices": [
              "Compile-time element type checking",
              "Guaranteed sorted order",
              "Automatic persistence to disk"
            ],
            "answer": 0,
            "explanation": "Generic type information catches many type mismatches at compile time."
          }
        },
        {
          "id": "collections-generics-lesson-3",
          "title": "Equality, sorting, and iterators",
          "summary": "Consistent equality and ordering rules make collection behavior predictable.",
          "content": [
            "Override equals and hashCode together when objects should compare by logical value. Sorting can use Comparable for a natural order or Comparator for an external/custom order.",
            "Use enhanced for loops for simple traversal. Use an Iterator when traversal requires iterator-supported removal; structurally modifying a collection through another path during iteration can cause ConcurrentModificationException with many standard implementations."
          ],
          "example": "List<String> names = new ArrayList<>(List.of(\"Ravi\", \"Asha\", \"Mira\"));\nnames.sort(Comparator.naturalOrder());\nSystem.out.println(names);",
          "quest": {
            "prompt": "When overriding equals for a class used as a HashMap key, which method should normally also be overridden consistently?",
            "choices": [
              "finalize",
              "hashCode",
              "toString"
            ],
            "answer": 1,
            "explanation": "Hash-based collections rely on equal objects having equal hash codes."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Java program using collections and generics. Test a normal case, a boundary case, and an invalid or unexpected input; explain why the result is correct."
    },
    {
      "id": "java-exceptions-io",
      "title": "Exceptions and input/output",
      "level": "Intermediate",
      "description": "Handle failures intentionally and work with console input, files, and resource lifetimes.",
      "outcomes": [
        "Distinguish checked and unchecked exceptions.",
        "Use try-with-resources for closeable resources.",
        "Read and write text files with explicit error handling."
      ],
      "lessons": [
        {
          "id": "exceptions-io-lesson-1",
          "title": "Exceptions and error handling",
          "summary": "Exceptions report abnormal conditions and allow a program to handle or propagate failures.",
          "content": [
            "Use try and catch to handle exceptions that can be meaningfully recovered from. Checked exceptions must be caught or declared; unchecked exceptions include RuntimeException and its subclasses.",
            "Do not catch Exception broadly just to hide a problem. Add useful context, preserve the cause when wrapping errors, and avoid using exceptions as ordinary control flow when a simple condition is appropriate."
          ],
          "example": "try {\n    int value = Integer.parseInt(\"42\");\n    System.out.println(value);\n} catch (NumberFormatException ex) {\n    System.out.println(\"Enter a valid integer.\");\n}",
          "quest": {
            "prompt": "Which exception is typically thrown by Integer.parseInt(\"hello\")?",
            "choices": [
              "NumberFormatException",
              "IOException",
              "IndexOutOfBoundsException"
            ],
            "answer": 0,
            "explanation": "The input text is not a valid representation of an integer, so parsing throws NumberFormatException."
          }
        },
        {
          "id": "exceptions-io-lesson-2",
          "title": "Console input and validation",
          "summary": "Input validation checks whether external values meet the program’s expectations.",
          "content": [
            "Scanner is convenient for introductory console input, while BufferedReader can read whole lines efficiently. Parse input explicitly when you need to distinguish malformed values from valid ones.",
            "Validation should happen at the system boundary. Check ranges, empty text, and required fields before passing data into the core logic; give users actionable error messages instead of silently substituting values."
          ],
          "example": "Scanner scanner = new Scanner(System.in);\nSystem.out.print(\"Age: \");\nString input = scanner.nextLine();\ntry {\n    int age = Integer.parseInt(input.trim());\n    if (age < 0) throw new IllegalArgumentException(\"Age cannot be negative\");\n} catch (NumberFormatException ex) {\n    System.out.println(\"Enter a whole number.\");\n}",
          "quest": {
            "prompt": "Why validate user input before using it in application logic?",
            "choices": [
              "To ensure values satisfy expected format and rules",
              "To remove the need for tests",
              "To make every input valid automatically"
            ],
            "answer": 0,
            "explanation": "Validation prevents malformed or out-of-range input from violating program assumptions."
          }
        },
        {
          "id": "exceptions-io-lesson-3",
          "title": "File I/O and try-with-resources",
          "summary": "Java provides stream and NIO APIs for working with files and other I/O resources.",
          "content": [
            "For straightforward text files, Files.readString, Files.readAllLines, and Files.writeString can be convenient. For larger files or streaming work, buffered readers and writers can avoid loading everything into memory.",
            "Use try-with-resources for resources that implement AutoCloseable, such as readers and writers. It closes resources even if an exception occurs; handle IOException at a boundary that can report or recover from the failure."
          ],
          "example": "Path path = Path.of(\"notes.txt\");\ntry {\n    Files.writeString(path, \"Study Java\\n\");\n    String text = Files.readString(path);\n    System.out.println(text);\n} catch (IOException ex) {\n    System.err.println(\"File operation failed: \" + ex.getMessage());\n}",
          "quest": {
            "prompt": "Which exception family is commonly used to report file I/O failures?",
            "choices": [
              "IOException",
              "ArithmeticException",
              "ClassCastException"
            ],
            "answer": 0,
            "explanation": "IOException represents failures during input/output operations."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Java program using exceptions and input/output. Test a normal case, a boundary case, and an invalid or unexpected input; explain why the result is correct."
    },
    {
      "id": "java-lambdas-streams",
      "title": "Lambdas, streams, and modern Java",
      "level": "Advanced",
      "description": "Use functional interfaces, lambda expressions, method references, streams, and Optional thoughtfully.",
      "outcomes": [
        "Write lambdas for functional interfaces.",
        "Process collections using stream pipelines.",
        "Use Optional to model potentially absent results without overusing it."
      ],
      "lessons": [
        {
          "id": "lambdas-streams-lesson-1",
          "title": "Lambdas and functional interfaces",
          "summary": "A lambda expression provides an implementation for a functional interface.",
          "content": [
            "A functional interface has one abstract method, such as Runnable or Predicate<T>. Lambdas allow behavior to be passed as a value without writing a separate named class for every small operation.",
            "Keep lambdas short and avoid hidden side effects. A method reference such as String::toUpperCase can make simple forwarding logic clearer when its meaning is obvious."
          ],
          "example": "List<String> names = List.of(\"mira\", \"asha\");\nnames.forEach(name -> System.out.println(name));\nPredicate<String> nonEmpty = text -> !text.isEmpty();",
          "quest": {
            "prompt": "What does a lambda commonly provide?",
            "choices": [
              "An implementation for a functional interface",
              "A new Java compiler",
              "A mandatory database connection"
            ],
            "answer": 0,
            "explanation": "A lambda supplies behavior compatible with a functional interface."
          }
        },
        {
          "id": "lambdas-streams-lesson-2",
          "title": "Streams and collectors",
          "summary": "Streams process data through pipeline operations such as filter, map, and collect.",
          "content": [
            "Intermediate operations like filter and map are generally lazy; a terminal operation such as collect, count, or forEach triggers pipeline processing. Streams do not themselves store elements.",
            "Prefer readable pipelines, avoid modifying the source during processing, and remember that parallel streams are not automatically faster. Use collectors to gather results and choose the right data structure for the output."
          ],
          "example": "List<String> names = List.of(\"Mira\", \"Asha\", \"Manu\");\nList<String> longNames = names.stream()\n    .filter(name -> name.length() > 4)\n    .map(String::toUpperCase)\n    .toList();",
          "quest": {
            "prompt": "Which operation typically triggers evaluation of a stream pipeline?",
            "choices": [
              "filter",
              "map",
              "toList"
            ],
            "answer": 2,
            "explanation": "toList is a terminal operation, so it triggers evaluation and gathers the results."
          }
        },
        {
          "id": "lambdas-streams-lesson-3",
          "title": "Optional and functional style",
          "summary": "Optional makes the possible absence of a returned value explicit.",
          "content": [
            "Optional<T> can represent a result that may be present or absent. Methods such as map, flatMap, filter, orElse, and orElseGet allow callers to transform or provide a fallback.",
            "Avoid using Optional indiscriminately for every field or method parameter. It is most commonly used as a return type when absence is a normal outcome; choose a clear fallback and do not call get without checking presence."
          ],
          "example": "Optional<String> nickname = Optional.ofNullable(null);\nString label = nickname.orElse(\"Guest\");\nSystem.out.println(label);",
          "quest": {
            "prompt": "What value does Optional.empty() represent?",
            "choices": [
              "A missing value",
              "An empty String only",
              "A compilation failure"
            ],
            "answer": 0,
            "explanation": "Optional.empty represents the absence of a value."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Java program using lambdas, streams, and modern java. Test a normal case, a boundary case, and an invalid or unexpected input; explain why the result is correct."
    },
    {
      "id": "java-concurrency",
      "title": "Concurrency and asynchronous work",
      "level": "Advanced",
      "description": "Learn threads, executors, synchronization, concurrent collections, and CompletableFuture basics.",
      "outcomes": [
        "Explain the difference between a task and a thread.",
        "Use executors to manage submitted work.",
        "Recognize shared-state races and coordinate access safely."
      ],
      "lessons": [
        {
          "id": "concurrency-lesson-1",
          "title": "Threads and tasks",
          "summary": "A thread is an execution path, while a task is work that can be scheduled.",
          "content": [
            "You can create a thread directly, but production applications often use executors to separate task submission from the policy for running tasks. Starting independent work concurrently can improve responsiveness, though it adds complexity.",
            "Do not assume that thread execution order is deterministic. Coordinate results explicitly and use concurrency when it serves a measurable need rather than adding it to simple sequential work."
          ],
          "example": "Thread worker = new Thread(() -> System.out.println(\"Running task\"));\nworker.start();\ntry {\n    worker.join();\n} catch (InterruptedException ex) {\n    Thread.currentThread().interrupt();\n}",
          "quest": {
            "prompt": "Which method starts a new Thread’s execution?",
            "choices": [
              "run() called directly",
              "start()",
              "join()"
            ],
            "answer": 1,
            "explanation": "start asks the JVM to schedule the new thread; calling run directly executes it in the current thread."
          }
        },
        {
          "id": "concurrency-lesson-2",
          "title": "Executors and futures",
          "summary": "Executors manage task execution, while futures represent results that may arrive later.",
          "content": [
            "ExecutorService can run submitted tasks using a pool of worker threads. Future.get retrieves a result and may block until it is available; tasks should be shut down so they do not keep the application alive unnecessarily.",
            "Prefer bounded pools and explicit lifecycle management in long-running applications. Handle exceptions and cancellation, and avoid waiting synchronously in a way that starves the same executor of the work needed to finish."
          ],
          "example": "ExecutorService executor = Executors.newFixedThreadPool(2);\ntry {\n    Future<Integer> result = executor.submit(() -> 6 * 7);\n    System.out.println(result.get());\n} catch (InterruptedException ex) {\n    Thread.currentThread().interrupt();\n} catch (ExecutionException ex) {\n    throw new RuntimeException(ex.getCause());\n} finally {\n    executor.shutdown();\n}",
          "quest": {
            "prompt": "What does Future.get() do if the result is not ready?",
            "choices": [
              "It may wait for the result",
              "It always returns zero",
              "It always cancels the task"
            ],
            "answer": 0,
            "explanation": "get may block until the result is available and can report a task failure through ExecutionException."
          }
        },
        {
          "id": "concurrency-lesson-3",
          "title": "Shared state and synchronization",
          "summary": "Synchronization coordinates access to shared mutable state between threads.",
          "content": [
            "A race condition can happen when the result depends on timing between concurrent operations. synchronized blocks or methods provide mutual exclusion and memory-visibility guarantees for the same monitor.",
            "Use thread-safe data structures or immutable data where practical. Atomic classes suit certain independent updates, but they do not automatically make multi-step business operations atomic. Preserve interrupt status when catching InterruptedException unless the interruption is handled by a higher-level policy."
          ],
          "example": "private final Object lock = new Object();\nprivate int count;\nvoid increment() {\n    synchronized (lock) {\n        count++;\n    }\n}",
          "quest": {
            "prompt": "Why might count++ be unsafe when several threads update the same ordinary int?",
            "choices": [
              "It is a multi-step operation and can race",
              "Java forbids incrementing ints",
              "It automatically makes count a String"
            ],
            "answer": 0,
            "explanation": "A read-modify-write increment can interleave across threads, causing lost updates without coordination."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Java program using concurrency and asynchronous work. Test a normal case, a boundary case, and an invalid or unexpected input; explain why the result is correct."
    },
    {
      "id": "java-project-quality",
      "title": "Testing, build tools, and application design",
      "level": "Advanced",
      "description": "Structure projects, write tests, use build tools, understand packages and debugging, and deliver a maintainable application.",
      "outcomes": [
        "Organize classes into packages and source directories.",
        "Write focused unit tests and debug failures systematically.",
        "Use build tools and document a dependable application workflow."
      ],
      "lessons": [
        {
          "id": "project-quality-lesson-1",
          "title": "Packages and project structure",
          "summary": "Packages organize related types and help avoid naming conflicts.",
          "content": [
            "A package declaration conventionally appears at the top of a source file. Keep package names lowercase and use a directory structure matching the package hierarchy. Access modifiers define which types and members can be used from other locations.",
            "Separate application code from tests and resources. Keep classes cohesive and dependencies explicit; avoid placing all behavior into one giant main method."
          ],
          "example": "package com.example.study;\n\npublic class StudySession {\n    private final String topic;\n    public StudySession(String topic) { this.topic = topic; }\n    public String topic() { return topic; }\n}",
          "quest": {
            "prompt": "Why use packages in a Java project?",
            "choices": [
              "To organize types and avoid naming conflicts",
              "To make every method public",
              "To disable the compiler"
            ],
            "answer": 0,
            "explanation": "Packages organize classes and provide namespaces for type names."
          }
        },
        {
          "id": "project-quality-lesson-2",
          "title": "Unit testing and debugging",
          "summary": "Tests verify behavior, while debugging and logging help explain failures.",
          "content": [
            "A unit test checks a focused piece of behavior under known inputs. Assertions should verify observable outcomes, including boundary cases and expected failures. Frameworks such as JUnit are commonly used in Java projects.",
            "When a test fails, reproduce the failure and inspect the assertion, stack trace, and smallest relevant code path. Test empty input, invalid values, boundaries, and error cases rather than only the happy path."
          ],
          "example": "static int add(int a, int b) { return a + b; }\n// A unit test assertion could verify:\n// assertEquals(5, add(2, 3));",
          "quest": {
            "prompt": "What is a unit test primarily intended to verify?",
            "choices": [
              "A small unit of behavior",
              "The color of the editor theme",
              "The internet connection speed"
            ],
            "answer": 0,
            "explanation": "A unit test targets focused behavior and checks the result against expected behavior."
          }
        },
        {
          "id": "project-quality-lesson-3",
          "title": "Build tools and release readiness",
          "summary": "Build tools automate compiling, testing, dependency management, and packaging.",
          "content": [
            "Maven and Gradle are widely used Java build tools. They define project dependencies and tasks so developers and CI systems can build the same project consistently.",
            "Before release, run tests, inspect compiler warnings, document required Java versions, avoid committing secrets, and handle configuration outside source code when appropriate. A reproducible build and clear README reduce friction for new contributors."
          ],
          "example": "// Example Maven commands:\n// mvn test\n// mvn package\n\n// Example Gradle commands:\n// ./gradlew test\n// ./gradlew build",
          "quest": {
            "prompt": "What is a key role of Maven or Gradle?",
            "choices": [
              "Automate builds and dependency management",
              "Replace the JVM with a text editor",
              "Guarantee that code has no bugs"
            ],
            "answer": 0,
            "explanation": "Build tools coordinate compilation, testing, dependencies, and packaging; they cannot guarantee bug-free code."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Java program using testing, build tools, and application design. Test a normal case, a boundary case, and an invalid or unexpected input; explain why the result is correct."
    }
  ],
  "capstone": {
    "title": "Java capstone: Personal study tracker",
    "brief": "Build a command-line study tracker that records learning sessions, topics, durations, and dates. Apply classes or records to model data, collections to manage entries, validation to protect data quality, file I/O to save and reload sessions, and tests to verify important behavior.",
    "milestones": [
      "Define a StudySession model with topic, date, and duration; validate required fields and non-negative duration.",
      "Create a menu that adds, lists, searches, and removes sessions using focused methods and clear input validation.",
      "Store sessions in a suitable collection and calculate total study time and totals grouped by topic.",
      "Add save and load functionality with explicit file paths, error handling, and a documented data format.",
      "Write tests for empty data, invalid input, zero duration, missing files, duplicate records, and summary calculations; document build and run instructions."
    ]
  }
};
export default javaCourse;