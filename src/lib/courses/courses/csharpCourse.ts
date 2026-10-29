import type { CourseConfig } from "../types";

export const csharpCourse: CourseConfig = {
  "slug": "csharp",
  "language": "C#",
  "title": "Learn C#: Beginner to Advanced",
  "icon": "🔷",
  "levelLabel": "Beginner to advanced",
  "description": "Learn C# and .NET from the first console program through object-oriented design, collections, LINQ, file handling, asynchronous programming, testing, and application architecture with guided lessons, code examples, quizzes, checkpoints, and a capstone.",
  "metaDescription": "A complete C# programming course covering .NET, types, variables, operators, branching, loops, methods, arrays, strings, collections, classes, inheritance, interfaces, generics, LINQ, exceptions, nullable references, files, JSON, delegates, events, async/await, testing, and publishing.",
  "audience": "Beginners and developers who want to build .NET console applications, desktop software, web services, automation tools, or games and learn modern C# practices.",
  "prerequisites": "No previous C# experience is required. Examples use modern C# and .NET concepts; availability of some language features depends on the configured target framework and language version. Code examples are educational and are not compiled or executed on this website.",
  "modules": [
    {
      "id": "csharp-getting-started",
      "title": "Meet C# and the .NET platform",
      "level": "Beginner",
      "description": "Understand C#, .NET, the SDK, project files, and the first program.",
      "outcomes": [
        "Explain how C# source code is built and run on .NET.",
        "Create and run a small console application.",
        "Recognize namespaces, classes, and the program entry point."
      ],
      "lessons": [
        {
          "id": "csharp-getting-started-csharp-dotnet",
          "title": "C#, .NET, and the runtime",
          "summary": "C# is a language; .NET provides runtime services and libraries.",
          "content": [
            "C# is a statically typed, general-purpose language commonly used for console apps, desktop software, web APIs, games, and cloud services. Source code is compiled to intermediate language and executed by the .NET runtime.",
            "The .NET SDK includes the command-line tools and build tasks used to create, build, test, and publish projects. Keep the language, SDK, runtime, and libraries conceptually separate."
          ],
          "example": "// Create a project, then run it:\n// dotnet new console -n HelloCSharp\n// cd HelloCSharp\n// dotnet run\nConsole.WriteLine(\"Hello, C#!\");",
          "quest": {
            "prompt": "What does the .NET SDK primarily provide?",
            "choices": [
              "Tools to create, build, test, and publish .NET applications",
              "Only a text editor",
              "Only the C# language syntax"
            ],
            "answer": 0,
            "explanation": "The SDK supplies the development tools and build workflows; the runtime executes applications."
          }
        },
        {
          "id": "csharp-getting-started-program-shape",
          "title": "The shape of a C# program",
          "summary": "A small console application can use top-level statements.",
          "content": [
            "Modern console templates may use top-level statements, letting executable statements appear directly in Program.cs. Traditional projects can instead define a class containing a static Main method.",
            "C# is case-sensitive. Statements and blocks must follow the syntax of the language version used by the project. Read compiler diagnostics carefully and fix the first meaningful error before chasing later messages."
          ],
          "example": "Console.WriteLine(\"Welcome to C#\");\nint lessonsCompleted = 1;\nConsole.WriteLine($\"Lessons completed: {lessonsCompleted}\");",
          "quest": {
            "prompt": "Which method is the traditional entry point for a C# console app?",
            "choices": [
              "Main",
              "StartProgram",
              "RunNow"
            ],
            "answer": 0,
            "explanation": "The conventional entry point is Main, commonly declared as static Main in a Program class."
          }
        },
        {
          "id": "csharp-getting-started-build-run",
          "title": "Build, run, and read errors",
          "summary": "The dotnet CLI supports the everyday development cycle.",
          "content": [
            "Use dotnet new to scaffold a project, dotnet build to compile it, and dotnet run to build and run it. The project file records target frameworks and dependencies.",
            "A build error usually points to a file and line. A warning is not always fatal, but warnings can reveal risky assumptions. Treat messages as information, not merely obstacles to silence."
          ],
          "example": "// In a project directory:\n// dotnet build\n// dotnet run\n// dotnet --info",
          "quest": {
            "prompt": "Which command normally runs a .NET project from its source?",
            "choices": [
              "dotnet run",
              "dotnet delete",
              "dotnet format-run"
            ],
            "answer": 0,
            "explanation": "dotnet run builds as needed and launches the application."
          }
        }
      ],
      "checkpoint": "Create a console project, print a greeting and a calculated value, then build and run it. Intentionally misspell an identifier and use the compiler message to locate the problem."
    },
    {
      "id": "csharp-types-variables",
      "title": "Variables, types, and expressions",
      "level": "Beginner",
      "description": "Work confidently with C# value types, reference types, inference, constants, and conversions.",
      "outcomes": [
        "Declare variables with suitable types and names.",
        "Distinguish value types from reference types at a basic level.",
        "Use constants and explicit conversions where appropriate."
      ],
      "lessons": [
        {
          "id": "csharp-types-variables-declarations",
          "title": "Variables and type inference",
          "summary": "Declarations give names to values, and var infers a local variable type.",
          "content": [
            "C# is statically typed. A declaration such as int count = 3; gives count the type int. With var, the compiler infers the type from the initializer; var does not make the variable dynamically typed.",
            "Prefer descriptive names and initialize variables deliberately. A local var declaration needs an initializer from which the compiler can infer a type."
          ],
          "example": "int count = 3;\nvar courseName = \"C# Fundamentals\";\nvar isPublished = true;\nConsole.WriteLine($\"{courseName}: {count}, {isPublished}\");",
          "quest": {
            "prompt": "What does var do in a local variable declaration?",
            "choices": [
              "It asks the compiler to infer the variable type from the initializer",
              "It makes the variable change type at runtime",
              "It means the variable is always nullable"
            ],
            "answer": 0,
            "explanation": "var is compile-time type inference; the variable still has a specific static type."
          }
        },
        {
          "id": "csharp-types-variables-built-in-types",
          "title": "Built-in types and literals",
          "summary": "Built-in types represent numbers, text, characters, booleans, and more.",
          "content": [
            "Common types include int, long, double, decimal, bool, char, and string. Use decimal for many financial calculations where base-10 decimal arithmetic is important, and choose numeric ranges deliberately.",
            "String literals use double quotes and char literals use single quotes. Numeric suffixes such as L, f, and m can specify literal types."
          ],
          "example": "int age = 34;\nlong distance = 8_000_000_000L;\ndouble temperature = 24.5;\ndecimal price = 199.99m;\nbool active = true;\nchar grade = 'A';\nstring language = \"C#\";",
          "quest": {
            "prompt": "Which type is commonly preferred for decimal monetary amounts?",
            "choices": [
              "decimal",
              "char",
              "bool"
            ],
            "answer": 0,
            "explanation": "decimal is designed for decimal arithmetic and is commonly chosen for money, though application requirements still matter."
          }
        },
        {
          "id": "csharp-types-variables-constants-conversions",
          "title": "Constants and conversions",
          "summary": "Constants and conversions make intent explicit.",
          "content": [
            "Use const for compile-time constants whose values do not change. Use readonly for fields that can be assigned at declaration or in a constructor. C# allows some implicit conversions and requires explicit casts for others.",
            "A cast can lose information, such as when converting a floating-point number to an integer. For user input, prefer parsing methods that report failure when malformed text is possible."
          ],
          "example": "const double Pi = 3.141592653589793;\ndouble radius = 2.0;\nint roundedDown = (int)radius;\nstring input = \"42\";\nif (int.TryParse(input, out int value))\n{\n    Console.WriteLine(value);\n}",
          "quest": {
            "prompt": "What is a benefit of int.TryParse for user-provided text?",
            "choices": [
              "It reports whether conversion succeeded without requiring an exception for bad input",
              "It always converts any text to zero",
              "It automatically validates business rules"
            ],
            "answer": 0,
            "explanation": "TryParse returns a Boolean success indicator, allowing invalid input to be handled explicitly."
          }
        }
      ],
      "checkpoint": "Write a small unit-conversion program with descriptive variables. Try valid and invalid text input, and explain why each conversion succeeds or fails."
    },
    {
      "id": "csharp-operators-control-flow",
      "title": "Operators and decisions",
      "level": "Beginner",
      "description": "Build expressions and use branching to express program rules.",
      "outcomes": [
        "Use arithmetic, comparison, and logical operators.",
        "Write if/else and switch decisions.",
        "Understand precedence and boolean conditions."
      ],
      "lessons": [
        {
          "id": "csharp-operators-control-flow-operators",
          "title": "Arithmetic and comparison operators",
          "summary": "Operators combine values into expressions.",
          "content": [
            "Arithmetic operators include +, -, *, /, and %. Comparisons such as ==, !=, <, and >= produce Boolean results. Integer division discards the fractional part when both operands are integers.",
            "Use parentheses when precedence might be unclear. For equality, value types generally compare values, while reference-type equality behavior depends on the type and operator overloads."
          ],
          "example": "int total = 17;\nint people = 5;\nConsole.WriteLine(total / people); // 3\nConsole.WriteLine(total % people); // 2\nConsole.WriteLine(total >= 10);",
          "quest": {
            "prompt": "What is the result of 17 / 5 when both operands are int?",
            "choices": [
              "3",
              "3.4",
              "2"
            ],
            "answer": 0,
            "explanation": "Integer division produces 3; the remainder 2 is obtained with the modulo operator."
          }
        },
        {
          "id": "csharp-operators-control-flow-if-else",
          "title": "Branch with if and else",
          "summary": "if and else choose a path based on a Boolean condition.",
          "content": [
            "Use if, else if, and else for related decisions. Conditions must evaluate to bool; unlike C, a number cannot be used directly as a condition.",
            "Use braces consistently, even for short branches. A readable condition and explicit handling of boundary values reduce mistakes."
          ],
          "example": "int score = 82;\nif (score >= 90)\n{\n    Console.WriteLine(\"A\");\n}\nelse if (score >= 75)\n{\n    Console.WriteLine(\"B\");\n}\nelse\n{\n    Console.WriteLine(\"Keep practising\");\n}",
          "quest": {
            "prompt": "What type must an if condition evaluate to in C#?",
            "choices": [
              "bool",
              "int",
              "string"
            ],
            "answer": 0,
            "explanation": "C# requires a Boolean condition for if."
          }
        },
        {
          "id": "csharp-operators-control-flow-switch-patterns",
          "title": "Switch statements and expressions",
          "summary": "Switch is useful when one value maps to several alternatives.",
          "content": [
            "A switch statement selects a matching case. Modern C# also supports switch expressions, which produce a value and can use patterns and guards. The exact features available depend on the target language version.",
            "Include a default arm or otherwise account for unexpected input when it is important for correctness. Do not use switch merely to hide a complex rule that deserves a separate method."
          ],
          "example": "string label = score switch\n{\n    >= 90 => \"Excellent\",\n    >= 70 => \"Good\",\n    >= 50 => \"Pass\",\n    _ => \"Retry\"\n};\nConsole.WriteLine(label);",
          "quest": {
            "prompt": "In a switch expression, what does the _ pattern commonly represent?",
            "choices": [
              "A fallback match for remaining cases",
              "A comment",
              "A loop counter"
            ],
            "answer": 0,
            "explanation": "The discard pattern _ matches values not caught by earlier arms."
          }
        }
      ],
      "checkpoint": "Create a simple grade calculator. Test values just below, at, and above each threshold, and make sure every possible score has a defined result."
    },
    {
      "id": "csharp-loops-arrays",
      "title": "Loops, arrays, and iteration",
      "level": "Beginner",
      "description": "Repeat work safely and work with indexed collections.",
      "outcomes": [
        "Choose between for, foreach, while, and do/while.",
        "Create and iterate over arrays.",
        "Avoid invalid indexes and infinite loops."
      ],
      "lessons": [
        {
          "id": "csharp-loops-arrays-for-loop",
          "title": "Count with for",
          "summary": "A for loop keeps setup, condition, and update together.",
          "content": [
            "Use for when the iteration pattern is count-based or when an index is needed. The condition is checked before each iteration, so bounds such as i < length are common.",
            "An off-by-one error can skip an item or access outside an array. Trace the first and last iteration to check loop boundaries."
          ],
          "example": "for (int i = 0; i < 4; i++)\n{\n    Console.WriteLine(i);\n}",
          "quest": {
            "prompt": "How many times does this loop run when i starts at 0 and continues while i < 4?",
            "choices": [
              "3",
              "4",
              "5"
            ],
            "answer": 1,
            "explanation": "It runs for i values 0, 1, 2, and 3, for four iterations."
          }
        },
        {
          "id": "csharp-loops-arrays-foreach-loop",
          "title": "Visit each item with foreach",
          "summary": "foreach iterates through elements without manual index updates.",
          "content": [
            "Use foreach when code needs each element rather than its numeric position. It reduces index-management code and works with arrays and many collections implementing IEnumerable.",
            "Do not modify a collection in ways that invalidate its enumerator while iterating. When you need positions or in-place replacement, a for loop may be more appropriate."
          ],
          "example": "string[] tools = { \"dotnet\", \"git\", \"editor\" };\nforeach (string tool in tools)\n{\n    Console.WriteLine(tool);\n}",
          "quest": {
            "prompt": "What is a typical advantage of foreach?",
            "choices": [
              "It visits collection elements without manually maintaining an index",
              "It sorts elements automatically",
              "It permits every collection to be modified during iteration"
            ],
            "answer": 0,
            "explanation": "foreach manages iteration over elements and avoids manual index maintenance."
          }
        },
        {
          "id": "csharp-loops-arrays-arrays",
          "title": "Arrays and bounds",
          "summary": "An array stores a fixed number of elements of one element type.",
          "content": [
            "C# arrays are zero-indexed and expose Length. A valid index is from zero through Length - 1; an invalid index causes an exception rather than valid data access.",
            "Initialize arrays explicitly when it improves clarity. For a collection whose size changes frequently, List<T> is often more convenient than resizing arrays manually."
          ],
          "example": "int[] values = { 4, 8, 12 };\nfor (int i = 0; i < values.Length; i++)\n{\n    Console.WriteLine(values[i]);\n}",
          "quest": {
            "prompt": "For an array with 5 elements, what is the largest valid index?",
            "choices": [
              "4",
              "5",
              "6"
            ],
            "answer": 0,
            "explanation": "Five elements are indexed 0 through 4."
          }
        }
      ],
      "checkpoint": "Calculate the sum and average of an array. Test an empty array, a single-item array, and a larger array, and prevent division by zero."
    },
    {
      "id": "csharp-methods",
      "title": "Methods, parameters, and scope",
      "level": "Beginner",
      "description": "Organize code into reusable methods with understandable inputs and outputs.",
      "outcomes": [
        "Declare and call methods with parameters and return types.",
        "Understand value parameters and ref/out/in modifiers.",
        "Use optional parameters, overloads, and local scope deliberately."
      ],
      "lessons": [
        {
          "id": "csharp-methods-method-basics",
          "title": "Declare and call methods",
          "summary": "Methods give a reusable name to a unit of behavior.",
          "content": [
            "A method signature includes its name and parameter types, while the return type states what it produces. A void method performs an action without returning a value.",
            "Keep methods focused on one task and name them with verbs when they perform actions. Return results instead of relying on hidden global state when practical."
          ],
          "example": "static int Square(int value)\n{\n    return value * value;\n}\nConsole.WriteLine(Square(6));",
          "quest": {
            "prompt": "What does a method return type of void mean?",
            "choices": [
              "The method does not return a value to its caller",
              "The method cannot have parameters",
              "The method cannot execute statements"
            ],
            "answer": 0,
            "explanation": "void indicates that the method has no return value."
          }
        },
        {
          "id": "csharp-methods-parameters",
          "title": "Parameters and argument passing",
          "summary": "C# passes arguments by value by default.",
          "content": [
            "For value types, the parameter receives a copy of the value. For reference types, the reference itself is copied, so the method can mutate the referenced object but cannot replace the caller’s variable just by assigning the local parameter.",
            "The ref, out, and in modifiers change parameter-passing rules and should be used when their contract is useful. out is common for APIs that produce a result alongside a success indicator."
          ],
          "example": "static void AddOne(ref int value)\n{\n    value++;\n}\nint count = 4;\nAddOne(ref count);\nConsole.WriteLine(count); // 5",
          "quest": {
            "prompt": "What does ref allow a method to do?",
            "choices": [
              "Read and assign the caller variable through the parameter",
              "Make the parameter a global variable",
              "Skip type checking"
            ],
            "answer": 0,
            "explanation": "ref passes the variable by reference, so assignments affect the caller variable."
          }
        },
        {
          "id": "csharp-methods-overloads-scope",
          "title": "Overloads, optional parameters, and scope",
          "summary": "Related method signatures can share a name.",
          "content": [
            "Method overloading allows multiple methods with the same name but different parameter lists. Optional parameter values can reduce repetitive calls, but overloads should remain easy to distinguish.",
            "A local variable is visible only within its scope. Avoid reusing names in ways that confuse readers, and keep state close to where it is used."
          ],
          "example": "static int Add(int a, int b) => a + b;\nstatic double Add(double a, double b) => a + b;\nConsole.WriteLine(Add(2, 3));\nConsole.WriteLine(Add(2.5, 3.1));",
          "quest": {
            "prompt": "Which feature lets methods share a name while accepting different parameter lists?",
            "choices": [
              "Method overloading",
              "Array indexing",
              "Namespace aliasing"
            ],
            "answer": 0,
            "explanation": "Overloads have the same method name but different parameter signatures."
          }
        }
      ],
      "checkpoint": "Refactor a calculator into separate methods. Try normal values, negative values, and invalid operations, and document each method’s expected inputs."
    },
    {
      "id": "csharp-strings-collections",
      "title": "Strings, collections, and data modeling",
      "level": "Intermediate",
      "description": "Represent and transform text and collections using common .NET types.",
      "outcomes": [
        "Use string operations and interpolation safely.",
        "Choose arrays, List<T>, Dictionary<TKey,TValue>, and HashSet<T> appropriately.",
        "Represent related values with enums, tuples, and records."
      ],
      "lessons": [
        {
          "id": "csharp-strings-collections-strings",
          "title": "Strings and interpolation",
          "summary": "Strings represent text and are immutable.",
          "content": [
            "A string operation creates a resulting string rather than changing the original string instance. Interpolation with $\"...\" makes it easier to place expressions inside formatted text.",
            "For repeated text concatenation in performance-sensitive loops, consider StringBuilder. For user-facing text, be explicit about culture-sensitive formatting when numbers or dates must follow a known convention."
          ],
          "example": "string name = \"Mira\";\nint completed = 4;\nstring message = $\"{name} completed {completed} modules.\";\nConsole.WriteLine(message);",
          "quest": {
            "prompt": "Are C# strings mutable?",
            "choices": [
              "No, string instances are immutable",
              "Yes, every character assignment mutates the same string",
              "Only strings shorter than 10 characters are immutable"
            ],
            "answer": 0,
            "explanation": "String is immutable; operations produce new strings."
          }
        },
        {
          "id": "csharp-strings-collections-collections",
          "title": "Lists, dictionaries, and sets",
          "summary": "Choose a collection based on how data is accessed.",
          "content": [
            "List<T> stores an ordered sequence that can grow. Dictionary<TKey,TValue> maps keys to values, and HashSet<T> stores unique values according to its equality rules.",
            "Use generic types to state which element and key types are allowed. Check whether a dictionary key exists before relying on it, or use TryGetValue when absence is expected."
          ],
          "example": "var names = new List<string> { \"Ava\", \"Mira\" };\nvar scores = new Dictionary<string, int> { [\"Ava\"] = 91 };\nvar tags = new HashSet<string> { \"dotnet\", \"csharp\", \"dotnet\" };\nConsole.WriteLine(names.Count);\nConsole.WriteLine(tags.Count);",
          "quest": {
            "prompt": "Which collection is designed to store unique items?",
            "choices": [
              "HashSet<T>",
              "List<T> only",
              "StringBuilder"
            ],
            "answer": 0,
            "explanation": "HashSet<T> stores unique elements according to its equality comparer."
          }
        },
        {
          "id": "csharp-strings-collections-records-enums-tuples",
          "title": "Enums, tuples, and records",
          "summary": "Lightweight types can make data intent clearer.",
          "content": [
            "An enum names a set of related constants. Tuples group a small number of values without declaring a dedicated named type, while records are useful for data-centric types and value-based equality semantics.",
            "Choose named classes or records when a concept has meaningful identity or a public contract. Tuples are most readable for small, local results with obvious field names."
          ],
          "example": "enum OrderStatus { New, Paid, Shipped }\nvar point = (X: 3, Y: 7);\nConsole.WriteLine(point.X);\nrecord User(string Name, int Id);",
          "quest": {
            "prompt": "What is a typical use for an enum?",
            "choices": [
              "Representing a named set of related constant values",
              "Storing arbitrary binary files",
              "Replacing every class"
            ],
            "answer": 0,
            "explanation": "Enums give names to a finite set of constant values."
          }
        }
      ],
      "checkpoint": "Build a small inventory model using a list of items and a dictionary keyed by product code. Explain why each chosen collection fits its role."
    },
    {
      "id": "csharp-classes-oop",
      "title": "Classes and object-oriented programming",
      "level": "Intermediate",
      "description": "Model application concepts with classes, objects, properties, and constructors.",
      "outcomes": [
        "Define classes and create instances.",
        "Use properties and constructors to protect valid state.",
        "Apply encapsulation and static members appropriately."
      ],
      "lessons": [
        {
          "id": "csharp-classes-oop-classes-objects",
          "title": "Classes and objects",
          "summary": "A class defines a type; an object is an instance of that type.",
          "content": [
            "Classes can combine state and behavior. A field stores implementation data, while a property provides controlled access to a value through get and set or init accessors.",
            "Encapsulation keeps implementation details behind a public contract. Expose the operations callers need, not every internal field."
          ],
          "example": "class Counter\n{\n    public int Value { get; private set; }\n    public void Increment() => Value++;\n}\nvar counter = new Counter();\ncounter.Increment();\nConsole.WriteLine(counter.Value);",
          "quest": {
            "prompt": "What is an object in object-oriented programming?",
            "choices": [
              "An instance of a type such as a class",
              "A compiler warning",
              "A namespace declaration"
            ],
            "answer": 0,
            "explanation": "An object is an instance of a type with its own state and behavior."
          }
        },
        {
          "id": "csharp-classes-oop-constructors-properties",
          "title": "Constructors and properties",
          "summary": "Constructors establish an object’s initial state.",
          "content": [
            "A constructor runs when an instance is created. Properties can validate assignments or prevent outside code from changing a value directly; init-only properties are useful for initialization-focused models.",
            "Avoid constructors that perform surprising I/O or extensive unrelated work. Validate arguments at the object boundary so invalid state is not accidentally stored."
          ],
          "example": "class Product\n{\n    public string Name { get; }\n    public decimal Price { get; }\n    public Product(string name, decimal price)\n    {\n        if (price < 0) throw new ArgumentOutOfRangeException(nameof(price));\n        Name = name; Price = price;\n    }\n}",
          "quest": {
            "prompt": "When is a constructor normally executed?",
            "choices": [
              "When an object is created",
              "Every time any property is read",
              "Only when an application exits"
            ],
            "answer": 0,
            "explanation": "A constructor initializes the instance during object creation."
          }
        },
        {
          "id": "csharp-classes-oop-static-members",
          "title": "Static members and object lifetime",
          "summary": "Static members belong to the type rather than one instance.",
          "content": [
            "A static field or method is accessed through the type and is shared rather than copied into each instance. Instance members operate on a particular object and may read or update its state.",
            "Avoid using mutable static state as a substitute for explicit dependencies. Shared mutable state can make code harder to test and unsafe under concurrent access."
          ],
          "example": "class Temperature\n{\n    public static double FreezingCelsius => 0.0;\n    public double Celsius { get; set; }\n}\nConsole.WriteLine(Temperature.FreezingCelsius);",
          "quest": {
            "prompt": "How is a static member normally accessed?",
            "choices": [
              "Through the type name",
              "Only through a newly created instance",
              "By using the new keyword before the member"
            ],
            "answer": 0,
            "explanation": "Static members belong to the type and are commonly accessed by its name."
          }
        }
      ],
      "checkpoint": "Design a BankAccount class with a constructor, a read-only balance property, and deposit/withdraw methods that reject invalid amounts."
    },
    {
      "id": "csharp-inheritance-interfaces",
      "title": "Inheritance, interfaces, and polymorphism",
      "level": "Intermediate",
      "description": "Use inheritance and interfaces to model substitutable behavior without excessive coupling.",
      "outcomes": [
        "Use inheritance for genuine is-a relationships.",
        "Define and implement interfaces.",
        "Apply overriding and polymorphism with clear contracts."
      ],
      "lessons": [
        {
          "id": "csharp-inheritance-interfaces-inheritance",
          "title": "Inheritance and protected members",
          "summary": "Inheritance shares behavior through a base and derived type relationship.",
          "content": [
            "A derived class inherits accessible members from a base class and can add specialized behavior. Use inheritance when the derived type can reasonably be used wherever the base type is expected.",
            "Prefer composition when a type merely uses another object rather than being a specialized form of it. Deep inheritance trees can make behavior difficult to follow."
          ],
          "example": "class Animal\n{\n    public virtual string Speak() => \"Sound\";\n}\nclass Dog : Animal\n{\n    public override string Speak() => \"Woof\";\n}",
          "quest": {
            "prompt": "Which keyword commonly marks a base-class method as replaceable by a derived override?",
            "choices": [
              "virtual",
              "using",
              "sealed"
            ],
            "answer": 0,
            "explanation": "A virtual method allows a derived class to override its behavior."
          }
        },
        {
          "id": "csharp-inheritance-interfaces-interfaces",
          "title": "Interfaces and implementation contracts",
          "summary": "Interfaces describe capabilities that types agree to provide.",
          "content": [
            "An interface defines members that implementing types must supply, subject to the language’s interface features. Code that depends on an interface can work with multiple implementations without needing their concrete classes.",
            "Keep interfaces focused on a coherent capability. Injecting an interface into a service can simplify testing by allowing a fake or alternative implementation."
          ],
          "example": "interface INotifier\n{\n    void Send(string message);\n}\nclass ConsoleNotifier : INotifier\n{\n    public void Send(string message) => Console.WriteLine(message);\n}",
          "quest": {
            "prompt": "What is a central benefit of programming against an interface?",
            "choices": [
              "Callers can depend on a contract rather than one concrete implementation",
              "It forces all implementations to use identical internal code",
              "It removes the need for method signatures"
            ],
            "answer": 0,
            "explanation": "Interfaces separate the contract from the implementation."
          }
        },
        {
          "id": "csharp-inheritance-interfaces-polymorphism",
          "title": "Overriding and polymorphism",
          "summary": "Polymorphism lets code call behavior through a shared base or interface.",
          "content": [
            "When an overridden virtual method is called through a base reference, the runtime dispatches to the implementation for the actual object type. This allows new implementations to be introduced with fewer changes to calling code.",
            "Do not hide methods accidentally when the intent is to override. Use override to indicate replacement of a virtual or abstract base member and preserve the expectations of the base contract."
          ],
          "example": "Animal pet = new Dog();\nConsole.WriteLine(pet.Speak()); // Woof",
          "quest": {
            "prompt": "What determines which overridden virtual method runs?",
            "choices": [
              "The actual runtime type of the object",
              "The variable name alone",
              "The order of using directives"
            ],
            "answer": 0,
            "explanation": "Virtual dispatch selects the override belonging to the object’s runtime type."
          }
        }
      ],
      "checkpoint": "Create an interface for a notification sender and implement console and in-memory versions. Write caller code that can use either implementation."
    },
    {
      "id": "csharp-exceptions-nullability",
      "title": "Exceptions, nullability, and debugging",
      "level": "Intermediate",
      "description": "Handle failures deliberately, express nullable intent, and investigate defects.",
      "outcomes": [
        "Use try/catch/finally for exceptional failures.",
        "Understand nullable reference annotations and null checks.",
        "Debug with focused observations and boundary tests."
      ],
      "lessons": [
        {
          "id": "csharp-exceptions-nullability-exceptions",
          "title": "Exceptions and error handling",
          "summary": "Exceptions represent failures that disrupt normal control flow.",
          "content": [
            "Use try/catch when you can handle or meaningfully translate an exceptional condition. finally is suited to cleanup that must occur whether an operation succeeds or fails; using declarations are preferred for many disposable resources.",
            "Avoid catching every exception and silently continuing. Do not use exceptions for ordinary expected branching when a simple result such as TryParse communicates the outcome more clearly."
          ],
          "example": "try\n{\n    int value = int.Parse(\"not-a-number\");\n}\ncatch (FormatException ex)\n{\n    Console.WriteLine($\"Invalid number: {ex.Message}\");\n}",
          "quest": {
            "prompt": "What is a reasonable use of a catch block?",
            "choices": [
              "Handle an exception the code can meaningfully recover from",
              "Ignore every exception regardless of cause",
              "Replace input validation in all cases"
            ],
            "answer": 0,
            "explanation": "Catch exceptions when there is a useful recovery, translation, or reporting action."
          }
        },
        {
          "id": "csharp-exceptions-nullability-nullable-reference-types",
          "title": "Nullable references and null checks",
          "summary": "Nullable annotations help communicate when a reference may be absent.",
          "content": [
            "With nullable reference types enabled, string indicates the intended non-null state and string? indicates that null is allowed. This feature adds compiler analysis; it does not automatically prevent all null values at runtime.",
            "Validate data at boundaries and use null-conditional or null-coalescing operators when they express intent. Avoid suppressing nullable warnings with ! unless an invariant truly guarantees non-null data."
          ],
          "example": "string? nickname = GetNickname();\nstring displayName = nickname ?? \"Guest\";\nConsole.WriteLine(displayName);\n\nstatic string? GetNickname() => null;",
          "quest": {
            "prompt": "What does string? communicate in a nullable-enabled project?",
            "choices": [
              "The reference may be null",
              "The value is always an empty string",
              "The type is dynamically typed"
            ],
            "answer": 0,
            "explanation": "The question mark marks a nullable reference annotation."
          }
        },
        {
          "id": "csharp-exceptions-nullability-debugging-tests",
          "title": "Debugging and boundary testing",
          "summary": "Small, repeatable tests make defects easier to isolate.",
          "content": [
            "Debug by reducing a problem to the smallest reproducible case, inspecting relevant values, and stepping through the path that fails. Compiler messages, breakpoints, logs, and tests provide different kinds of evidence.",
            "Test ordinary values as well as empty, minimum, maximum, missing, and malformed inputs. Fix the underlying condition instead of only masking the observed symptom."
          ],
          "example": "static int SafeDivide(int a, int b)\n{\n    if (b == 0) throw new ArgumentException(\"Divisor cannot be zero\", nameof(b));\n    return a / b;\n}",
          "quest": {
            "prompt": "Why test boundary cases?",
            "choices": [
              "They reveal assumptions that typical inputs may not expose",
              "They guarantee code has no defects",
              "They remove the need for debugging"
            ],
            "answer": 0,
            "explanation": "Boundary cases exercise edge conditions where off-by-one and invalid-state defects often appear."
          }
        }
      ],
      "checkpoint": "Add validation and error handling to a text-input calculator. Test blank input, malformed numbers, zero division, and normal calculations."
    },
    {
      "id": "csharp-generics-linq",
      "title": "Generics, LINQ, and data processing",
      "level": "Intermediate",
      "description": "Write reusable generic code and express data transformations with LINQ.",
      "outcomes": [
        "Understand generic types and methods.",
        "Use LINQ filtering, projection, ordering, and aggregation.",
        "Know when deferred query execution matters."
      ],
      "lessons": [
        {
          "id": "csharp-generics-linq-generics",
          "title": "Generics and type safety",
          "summary": "Generics let types and methods work with specified data types.",
          "content": [
            "A List<int> stores integers and a Dictionary<string, decimal> maps text keys to decimal values. Generics provide compile-time type safety and avoid many casts in ordinary collection usage.",
            "Generic methods can express reusable algorithms while retaining information about element types. Constraints can restrict which types are accepted when the implementation needs particular capabilities."
          ],
          "example": "static T FirstOrDefaultValue<T>(T[] items)\n{\n    return items.Length > 0 ? items[0] : default!;\n}\nvar scores = new List<int> { 8, 9, 10 };",
          "quest": {
            "prompt": "What is a major benefit of generics?",
            "choices": [
              "Reusable code with compile-time type information",
              "Automatic database connection pooling",
              "Eliminating all runtime errors"
            ],
            "answer": 0,
            "explanation": "Generics enable reusable implementations while preserving type information and checking."
          }
        },
        {
          "id": "csharp-generics-linq-linq-basics",
          "title": "Filter and transform with LINQ",
          "summary": "LINQ expresses common collection queries clearly.",
          "content": [
            "Where filters elements, Select projects them into a new shape, OrderBy sorts, and aggregate methods such as Sum combine values. LINQ can be used with in-memory collections and other providers such as databases.",
            "Be aware of deferred execution: many queries do not run until enumerated. Materialize with ToList when you need a snapshot, but avoid unnecessary materialization for simple one-pass use."
          ],
          "example": "int[] scores = { 55, 91, 73, 40 };\nvar passing = scores\n    .Where(score => score >= 60)\n    .OrderBy(score => score)\n    .ToList();",
          "quest": {
            "prompt": "Which LINQ method filters elements using a predicate?",
            "choices": [
              "Where",
              "Select",
              "ToDictionary"
            ],
            "answer": 0,
            "explanation": "Where retains elements whose predicate evaluates to true."
          }
        },
        {
          "id": "csharp-generics-linq-query-design",
          "title": "Query design and execution",
          "summary": "Readability and predictable execution matter in data pipelines.",
          "content": [
            "A query can be written with method syntax or query syntax. Both can express filtering, projection, grouping, and ordering; select the form that makes the transformation easiest to understand.",
            "Repeated enumeration can repeat work or observe changed data. Use a clear variable name for intermediate queries and materialize only when needed for correctness or performance."
          ],
          "example": "var result = orders\n    .Where(order => order.Total >= 100m)\n    .Select(order => order.Id)\n    .ToArray();",
          "quest": {
            "prompt": "When might ToList or ToArray be useful on a LINQ query?",
            "choices": [
              "To execute and materialize the results as a collection",
              "To turn every value into a string automatically",
              "To disable type checking"
            ],
            "answer": 0,
            "explanation": "Materialization enumerates the query and stores its current results in a collection."
          }
        }
      ],
      "checkpoint": "Given a list of expenses, use LINQ to filter a category, order by amount, project a report-friendly shape, and calculate the total."
    },
    {
      "id": "csharp-files-json",
      "title": "Files, streams, and JSON",
      "level": "Intermediate",
      "description": "Read and write local data while handling resource lifetime and serialization.",
      "outcomes": [
        "Use file APIs to read and write text.",
        "Manage streams and disposable resources.",
        "Serialize and deserialize JSON with validation."
      ],
      "lessons": [
        {
          "id": "csharp-files-json-file-text",
          "title": "Read and write files",
          "summary": "File APIs allow programs to persist data between runs.",
          "content": [
            "File.ReadAllText and File.WriteAllText suit small text files that can comfortably fit in memory. For large files, stream data to avoid allocating the entire content at once.",
            "Paths, permissions, missing directories, and I/O errors can cause operations to fail. Decide whether to create directories and whether output should overwrite or append before writing."
          ],
          "example": "string path = \"notes.txt\";\nFile.WriteAllText(path, \"Study C#\nPractice LINQ\");\nstring contents = File.ReadAllText(path);\nConsole.WriteLine(contents);",
          "quest": {
            "prompt": "What is an important concern when writing a file?",
            "choices": [
              "Whether the path and permissions are valid and whether overwriting is intended",
              "Whether the file name has exactly four letters",
              "Whether every file contains JSON"
            ],
            "answer": 0,
            "explanation": "File I/O should account for paths, permissions, failures, and overwrite behavior."
          }
        },
        {
          "id": "csharp-files-json-streams-disposal",
          "title": "Streams and resource disposal",
          "summary": "Streams support incremental processing of data.",
          "content": [
            "Streams represent flows of bytes and are used for files, network data, and other sources. StreamReader and StreamWriter add text handling to byte streams.",
            "Dispose resources deterministically using using declarations or using statements. Many I/O classes implement IDisposable, which releases associated operating-system resources even if an exception occurs."
          ],
          "example": "using var writer = new StreamWriter(\"log.txt\", append: true);\nwriter.WriteLine(\"Application started\");",
          "quest": {
            "prompt": "What does a using declaration help ensure?",
            "choices": [
              "The disposable resource is disposed when its scope ends",
              "The file is always encrypted",
              "The stream can never throw an exception"
            ],
            "answer": 0,
            "explanation": "The using declaration arranges disposal at the end of its scope."
          }
        },
        {
          "id": "csharp-files-json-json-serialization",
          "title": "JSON serialization",
          "summary": "Serialization converts objects to a format that can be stored or transmitted.",
          "content": [
            "System.Text.Json can serialize supported .NET types into JSON and deserialize JSON back into objects. Serialization does not replace validation of data received from an untrusted source.",
            "Handle malformed JSON and missing or unexpected fields according to the application contract. Be careful not to store secrets in plain text files unless the storage design protects them appropriately."
          ],
          "example": "using System.Text.Json;\nvar settings = new AppSettings { Theme = \"dark\" };\nstring json = JsonSerializer.Serialize(settings);\nvar restored = JsonSerializer.Deserialize<AppSettings>(json);\n\nclass AppSettings { public string? Theme { get; set; } }",
          "quest": {
            "prompt": "Which .NET namespace contains System.Text.Json?",
            "choices": [
              "System.Text.Json",
              "System.IO.JsonOnly",
              "Microsoft.Json.Runtime"
            ],
            "answer": 0,
            "explanation": "System.Text.Json is the built-in namespace commonly used for JSON serialization in modern .NET."
          }
        }
      ],
      "checkpoint": "Build a small settings store that loads and saves JSON. Test missing files, invalid JSON, and an expected successful round trip."
    },
    {
      "id": "csharp-modern-features",
      "title": "Delegates, events, lambdas, and async/await",
      "level": "Advanced",
      "description": "Use functions as values, event-driven patterns, and asynchronous operations.",
      "outcomes": [
        "Explain delegates, lambda expressions, and events.",
        "Use Task and async/await for asynchronous work.",
        "Avoid blocking asynchronous calls and handle cancellation when appropriate."
      ],
      "lessons": [
        {
          "id": "csharp-modern-features-delegates-lambdas",
          "title": "Delegates and lambda expressions",
          "summary": "A delegate represents a method signature that can be invoked through a variable.",
          "content": [
            "Built-in types such as Action and Func represent common delegate shapes. Lambda expressions provide compact inline functions for callbacks, predicates, projections, and other behavior.",
            "Capture of local variables in a lambda can extend the variable’s lifetime. Keep closures understandable and avoid unintentionally capturing mutable state in long-lived callbacks."
          ],
          "example": "Func<int, int> square = value => value * value;\nAction<string> print = message => Console.WriteLine(message);\nprint(square(5).ToString());",
          "quest": {
            "prompt": "What does Func<int, int> represent?",
            "choices": [
              "A function taking an int and returning an int",
              "A class that stores only strings",
              "A file stream"
            ],
            "answer": 0,
            "explanation": "Func uses its final generic type argument as the return type; preceding arguments are parameter types."
          }
        },
        {
          "id": "csharp-modern-features-events",
          "title": "Events and publishers/subscribers",
          "summary": "Events let one object notify other objects that something happened.",
          "content": [
            "An event exposes a notification mechanism while controlling who can raise it. Subscribers attach handlers, and publishers raise events when the relevant condition occurs.",
            "Unsubscribe when a subscriber’s lifetime ends if the publisher may outlive it. Otherwise, event handlers can keep objects reachable and lead to memory or lifecycle surprises."
          ],
          "example": "class Alarm\n{\n    public event EventHandler? Ring;\n    public void Trigger() => Ring?.Invoke(this, EventArgs.Empty);\n}\nvar alarm = new Alarm();\nalarm.Ring += (_, _) => Console.WriteLine(\"Wake up\");\nalarm.Trigger();",
          "quest": {
            "prompt": "In the publisher/subscriber pattern, what does an event normally do?",
            "choices": [
              "Notify subscribers that an occurrence happened",
              "Run every method in the application",
              "Automatically persist data to disk"
            ],
            "answer": 0,
            "explanation": "Events notify registered handlers when the publisher raises the event."
          }
        },
        {
          "id": "csharp-modern-features-async-await",
          "title": "Asynchronous programming with async and await",
          "summary": "async/await makes asynchronous operations easier to compose.",
          "content": [
            "An asynchronous method often returns Task or Task<T>. await asynchronously waits for completion without blocking the current thread in the same way as synchronous waiting; it does not automatically make CPU-bound work faster.",
            "Avoid .Result or .Wait in typical asynchronous application code because blocking can reduce responsiveness and cause deadlocks in some contexts. Propagate cancellation tokens where supported and handle exceptions from awaited tasks."
          ],
          "example": "static async Task<string> LoadAsync(HttpClient client, string url)\n{\n    return await client.GetStringAsync(url);\n}",
          "quest": {
            "prompt": "What does await do with a task in an async method?",
            "choices": [
              "Suspends the method until the task completes without synchronously blocking in the usual way",
              "Starts a new operating-system thread for every call",
              "Guarantees the operation cannot fail"
            ],
            "answer": 0,
            "explanation": "await asynchronously waits for task completion and propagates the result or exception."
          }
        }
      ],
      "checkpoint": "Write an async method that fetches or simulates delayed data. Handle cancellation or failure and avoid blocking with Task.Result or Task.Wait."
    },
    {
      "id": "csharp-testing-tooling",
      "title": "Testing, project structure, and application design",
      "level": "Advanced",
      "description": "Organize projects, automate checks, and prepare a maintainable application for delivery.",
      "outcomes": [
        "Separate application logic from presentation and infrastructure concerns.",
        "Write unit tests for normal and boundary behavior.",
        "Use the .NET CLI to test and publish applications."
      ],
      "lessons": [
        {
          "id": "csharp-testing-tooling-project-structure",
          "title": "Projects, namespaces, and dependencies",
          "summary": "A clear project structure makes code easier to navigate and maintain.",
          "content": [
            "Namespaces group related types, while project files define compilation settings and dependencies. Larger applications commonly separate domain logic, application workflows, and external concerns into focused components.",
            "Avoid creating many layers before they solve a real problem. Keep dependencies explicit and prefer small types with focused responsibilities over giant classes."
          ],
          "example": "namespace StudyTracker;\n\npublic class StudySession\n{\n    public string Topic { get; init; } = \"\";\n    public int Minutes { get; init; }\n}",
          "quest": {
            "prompt": "What is a useful goal of separating responsibilities into components?",
            "choices": [
              "Make each part easier to understand, change, and test",
              "Ensure every class has hundreds of methods",
              "Remove the need for naming conventions"
            ],
            "answer": 0,
            "explanation": "Focused components lower coupling and improve readability and testability."
          }
        },
        {
          "id": "csharp-testing-tooling-unit-testing",
          "title": "Unit tests and testable code",
          "summary": "Unit tests verify behavior in small, repeatable scenarios.",
          "content": [
            "A unit test typically arranges inputs, invokes a unit of behavior, and asserts the result. Test projects can be created with dotnet new and executed with dotnet test using a compatible test framework.",
            "Keep tests deterministic and fast. Cover representative behavior and important boundaries, and prefer testing observable contracts over private implementation details."
          ],
          "example": "// Example assertion-style pseudocode\nint result = Calculator.Add(2, 3);\nAssert.Equal(5, result);",
          "quest": {
            "prompt": "What does a unit test usually verify?",
            "choices": [
              "A small unit of behavior for defined inputs",
              "The entire internet connection in every test",
              "Only the visual styling of an editor"
            ],
            "answer": 0,
            "explanation": "Unit tests check defined behavior of a small component, usually in isolation."
          }
        },
        {
          "id": "csharp-testing-tooling-build-publish",
          "title": "Build, test, and publish",
          "summary": "A reliable delivery workflow builds and tests before publishing.",
          "content": [
            "Use dotnet build for compilation, dotnet test to run tests, and dotnet publish to create deployment-ready output. The target runtime and deployment settings influence the published artifacts.",
            "Check configuration and secrets before release, and do not commit credentials. Test a published build in an environment similar to its intended destination instead of assuming development mode behaves identically."
          ],
          "example": "// Typical workflow:\n// dotnet restore\n// dotnet build --configuration Release\n// dotnet test --configuration Release\n// dotnet publish --configuration Release",
          "quest": {
            "prompt": "Which command is used to run .NET tests?",
            "choices": [
              "dotnet test",
              "dotnet publish-testless",
              "dotnet new test-runner"
            ],
            "answer": 0,
            "explanation": "dotnet test builds and runs tests in the selected test projects."
          }
        }
      ],
      "checkpoint": "Create a small tested Study Tracker with separate model and service logic. Include tests for empty data, invalid duration, and valid additions; then build and publish a Release configuration."
    }
  ],
  "capstone": {
    "title": "C# capstone: Personal Study Tracker",
    "brief": "Build a console-based study tracker that records topics, session durations, and dates; lists and filters sessions; summarizes time by topic; validates user input; and saves or loads data as JSON. Keep core logic testable and separate from console interaction.",
    "milestones": [
      "Define a study-session model and specify validation rules for topic names, dates, and non-negative durations.",
      "Create focused methods or services to add, list, filter, and summarize sessions.",
      "Use collections and LINQ to calculate totals by topic and find the most recent sessions.",
      "Add JSON file persistence with clear error handling for missing or malformed data.",
      "Write unit tests for normal, empty, duplicate, and invalid cases; build and publish the Release version."
    ]
  }
};
export default csharpCourse;