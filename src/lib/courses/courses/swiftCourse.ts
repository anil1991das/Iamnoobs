import type { CourseConfig } from "../types";

export const swiftCourse: CourseConfig = {
  "slug": "swift",
  "language": "Swift",
  "title": "Learn Swift: Beginner to Advanced",
  "icon": "🐦",
  "levelLabel": "Beginner to advanced",
  "description": "Learn Swift programming from the fundamentals through value types, protocols, memory management, concurrency, testing, and SwiftUI application development.",
  "metaDescription": "Learn Swift from beginner to advanced with lessons on constants, types, control flow, optionals, functions, collections, structs, enums, classes, ARC, protocols, generics, errors, Codable, concurrency, networking, testing, and SwiftUI.",
  "audience": "Beginners, students, and developers who want to build Swift applications, understand modern language features, and develop for Apple platforms.",
  "prerequisites": "No prior Swift experience is required. Basic computer literacy is helpful. The core language examples are platform-neutral; the final module introduces SwiftUI for Apple-platform development.",
  "modules": [
    {
      "id": "swift-first-steps",
      "title": "Meet Swift and the Swift toolchain",
      "level": "Beginner",
      "description": "Understand where Swift runs, how source code is compiled, and how to create and execute a small program.",
      "outcomes": [
        "Describe Swift and common platforms where it is used.",
        "Explain the edit, build, and run workflow.",
        "Create a basic Swift program and recognize compiler feedback."
      ],
      "lessons": [
        {
          "id": "swift-language-overview",
          "title": "What Swift is used for",
          "summary": "Swift is a general-purpose programming language designed for safety, performance, and clear syntax.",
          "content": [
            "Swift is used to build apps for Apple platforms and can also be used for command-line tools, server applications, and other systems. Its language features include type inference, optionals, value types, protocols, and structured concurrency.",
            "Swift code is commonly compiled. The same language can be used in different project types, but available frameworks depend on the operating system and target platform. For example, SwiftUI is primarily used to build user interfaces for Apple platforms."
          ],
          "example": "let message = \"Hello, Swift!\"\nprint(message)",
          "quest": {
            "prompt": "Which statement best describes Swift?",
            "choices": [
              "A general-purpose language used for apps and other software",
              "A database query language",
              "A markup language for web pages"
            ],
            "answer": 0,
            "explanation": "Swift is a general-purpose programming language. It is commonly used for Apple-platform apps but is not limited to that use."
          }
        },
        {
          "id": "swift-program-entry",
          "title": "Your first Swift program",
          "summary": "A Swift program can start with executable statements at the top level or use an explicit main entry point.",
          "content": [
            "In a simple Swift file or playground, executable statements can appear at the top level. In a larger application, the project template usually defines the application entry point for you.",
            "The print function writes a textual representation of a value to standard output. Semicolons are usually unnecessary because line breaks separate statements in ordinary Swift code."
          ],
          "example": "print(\"Hello, world!\")\nprint(\"I am learning Swift.\")",
          "quest": {
            "prompt": "What does print(\"Hello\") do?",
            "choices": [
              "Writes Hello to standard output",
              "Creates a new class",
              "Compiles the project"
            ],
            "answer": 0,
            "explanation": "print writes a textual representation of its argument to standard output. Compilation and type checking are separate activities."
          }
        },
        {
          "id": "swift-tools-workflow",
          "title": "Swift tools and the build workflow",
          "summary": "The Swift compiler and Swift Package Manager support building and organizing Swift code.",
          "content": [
            "Swift projects are commonly developed with Xcode on Apple platforms or with the Swift toolchain and command-line tools. The swift command can compile source files, run scripts, and manage packages.",
            "Swift Package Manager describes dependencies, targets, and products in a Package.swift manifest. A repeatable build helps ensure that code works consistently across development machines and continuous-integration environments."
          ],
          "example": "// Save as main.swift\nprint(\"Build and run this Swift file\")\n\n// Command-line example:\n// swift main.swift",
          "quest": {
            "prompt": "Which tool is commonly used to manage Swift package dependencies?",
            "choices": [
              "Swift Package Manager",
              "A SQL database",
              "A CSS preprocessor"
            ],
            "answer": 0,
            "explanation": "Swift Package Manager is the standard package-management tool in the Swift toolchain."
          }
        }
      ],
      "checkpoint": "Create a small Swift program that prints your name, a learning goal, and the result of a simple calculation. Run it and resolve any compiler errors or warnings."
    },
    {
      "id": "swift-values-and-types",
      "title": "Constants, variables, and types",
      "level": "Beginner",
      "description": "Store information using constants and variables, understand type inference, and work with common built-in types.",
      "outcomes": [
        "Choose between let and var.",
        "Recognize common Swift value types.",
        "Convert values explicitly and use string interpolation."
      ],
      "lessons": [
        {
          "id": "swift-let-var",
          "title": "Constants and variables",
          "summary": "Use let for a value that will not be reassigned and var for a value that can change.",
          "content": [
            "Swift encourages constants by default. A binding declared with let cannot be assigned a new value after initialization, while a var binding can be reassigned when its type permits it.",
            "Choosing let makes intent clearer and prevents accidental reassignment. A constant reference to a class instance does not make every property of that instance immutable; the binding and the referenced object have different mutability rules."
          ],
          "example": "let courseName = \"Swift\"\nvar completedLessons = 2\ncompletedLessons += 1\nprint(\"\\(courseName): \\(completedLessons) lessons\")",
          "quest": {
            "prompt": "Which keyword declares a binding that cannot be reassigned?",
            "choices": [
              "let",
              "var",
              "repeat"
            ],
            "answer": 0,
            "explanation": "let declares a constant binding. Use var when the binding itself needs to be reassigned."
          }
        },
        {
          "id": "swift-type-inference",
          "title": "Type inference and type annotations",
          "summary": "Swift can infer a value’s type from its initial value, and you can write a type annotation when clarity is useful.",
          "content": [
            "Swift is statically typed: the compiler checks types before the program runs. When a variable is initialized with a value such as 42, the compiler can infer an appropriate type.",
            "A type annotation makes the intended type explicit. It is useful when the initial value does not provide enough information, when a specific numeric type is required, or when it improves readability."
          ],
          "example": "let count: Int = 42\nlet temperature = 21.5  // inferred as Double\nlet isReady: Bool = true",
          "quest": {
            "prompt": "What does static typing mean in Swift?",
            "choices": [
              "Types are checked by the compiler",
              "Every value changes type at runtime",
              "Variables cannot store values"
            ],
            "answer": 0,
            "explanation": "Swift checks type correctness during compilation, before the program executes."
          }
        },
        {
          "id": "swift-basic-types-conversion",
          "title": "Numbers, booleans, and type conversion",
          "summary": "Swift provides distinct types for integers, floating-point values, booleans, and text.",
          "content": [
            "Common types include Int, Double, Float, Bool, and String. Swift does not silently mix most numeric types, which helps make conversions visible and intentional.",
            "Use initializers such as Int(value) or Double(value) to convert compatible values. A conversion from text can fail, so initializers for many types return an optional rather than pretending that every string contains a valid number."
          ],
          "example": "let wholeNumber = 12\nlet decimalNumber = 3.5\nlet total = Double(wholeNumber) + decimalNumber\nlet parsed = Int(\"42\")  // Int?",
          "quest": {
            "prompt": "What is the type of Int(\"42\")?",
            "choices": [
              "Int? because conversion can fail",
              "String",
              "Bool"
            ],
            "answer": 0,
            "explanation": "The failable integer initializer returns an optional Int because the supplied string might not contain a valid integer."
          }
        }
      ],
      "checkpoint": "Declare a constant for a person’s name, a variable for a score, a Boolean completion flag, and a Double measurement. Print them using string interpolation and perform one explicit numeric conversion."
    },
    {
      "id": "swift-control-flow",
      "title": "Expressions, decisions, and loops",
      "level": "Beginner",
      "description": "Use operators, conditional logic, switch, and loops to control how a Swift program executes.",
      "outcomes": [
        "Evaluate arithmetic and comparison expressions.",
        "Choose branches with if and switch.",
        "Repeat work using for-in and while loops."
      ],
      "lessons": [
        {
          "id": "swift-operators",
          "title": "Arithmetic and comparison operators",
          "summary": "Operators combine values and produce results such as numbers or Boolean conditions.",
          "content": [
            "Swift supports arithmetic operators such as +, -, *, and /, as well as remainder with %. Comparison operators include ==, !=, <, <=, >, and >=.",
            "Logical operators &&, ||, and ! combine or invert Boolean conditions. Swift uses short-circuit evaluation for && and ||, so the right-hand expression may not be evaluated when the left side already determines the result."
          ],
          "example": "let subtotal = 80.0\nlet discount = 10.0\nlet total = subtotal - discount\nlet qualifies = total >= 50.0\nprint(qualifies)",
          "quest": {
            "prompt": "Which operator means logical AND in Swift?",
            "choices": [
              "&&",
              "||",
              "!"
            ],
            "answer": 0,
            "explanation": "The && operator is logical AND. Both operands must be true for the combined condition to be true."
          }
        },
        {
          "id": "swift-if-switch",
          "title": "Make decisions with if and switch",
          "summary": "Use if for conditional branches and switch to select among patterns or values.",
          "content": [
            "An if statement runs a block when its condition is true. Conditions must evaluate to Bool; Swift does not treat arbitrary integers or strings as Boolean values.",
            "Swift switch statements must be exhaustive. They can match constants, ranges, tuples, enum cases, and other patterns, which makes them useful for expressing a complete set of alternatives."
          ],
          "example": "let score = 82\nif score >= 50 {\n    print(\"Pass\")\n} else {\n    print(\"Try again\")\n}\n\nswitch score {\ncase 90...100: print(\"Excellent\")\ncase 70..<90: print(\"Good\")\ndefault: print(\"Keep practicing\")\n}",
          "quest": {
            "prompt": "What must a Swift switch do?",
            "choices": [
              "Cover all possible cases, often with default",
              "Always contain exactly two cases",
              "Use only strings"
            ],
            "answer": 0,
            "explanation": "A switch must be exhaustive. A default case can handle values not matched by earlier cases."
          }
        },
        {
          "id": "swift-loops-ranges",
          "title": "Repeat work with loops and ranges",
          "summary": "for-in, while, and repeat-while loops provide different ways to repeat statements.",
          "content": [
            "A for-in loop iterates over a sequence such as an array or range. The closed range 1...5 includes both endpoints, while the half-open range 1..<5 excludes the upper endpoint.",
            "A while loop checks its condition before each iteration. A repeat-while loop runs its body at least once because the condition is checked afterward. Choose the loop that most clearly expresses the repetition."
          ],
          "example": "for number in 1...3 {\n    print(number)\n}\n\nvar attempts = 0\nwhile attempts < 2 {\n    attempts += 1\n}",
          "quest": {
            "prompt": "How many values are produced by the range 1..<5?",
            "choices": [
              "Four: 1, 2, 3, and 4",
              "Five: 1 through 5",
              "Three: 1, 2, and 3"
            ],
            "answer": 0,
            "explanation": "The half-open range excludes its upper bound, so 1..<5 contains 1, 2, 3, and 4."
          }
        }
      ],
      "checkpoint": "Write a program that classifies a numeric score, prints a message using switch, and uses a loop to display the first five positive integers. Test values at the boundaries of your conditions."
    },
    {
      "id": "swift-optionals",
      "title": "Optionals and safe value handling",
      "level": "Beginner",
      "description": "Model the presence or absence of a value explicitly and unwrap optionals safely.",
      "outcomes": [
        "Explain why Swift uses optionals.",
        "Unwrap values with if let, guard let, and optional chaining.",
        "Choose safe defaults with nil-coalescing."
      ],
      "lessons": [
        {
          "id": "swift-optional-basics",
          "title": "Why optionals exist",
          "summary": "An optional represents either a wrapped value or the absence of a value.",
          "content": [
            "A type such as String? is an optional String. It can contain a String or nil, which represents no value. The question mark is part of the type and makes possible absence visible to the compiler.",
            "Optionals help prevent accidental use of missing data. A function that searches for an item, parses text, or reads a value that may not exist can return an optional to communicate that possibility."
          ],
          "example": "let nickname: String? = \"Mira\"\nlet missingNickname: String? = nil\nprint(nickname as Any)\nprint(missingNickname as Any)",
          "quest": {
            "prompt": "What does a String? value represent?",
            "choices": [
              "A String value or nil",
              "Only an empty String",
              "A String that cannot change"
            ],
            "answer": 0,
            "explanation": "String? is an optional String. It either contains a String or represents absence with nil."
          }
        },
        {
          "id": "swift-optional-binding",
          "title": "Unwrap optionals with optional binding",
          "summary": "Optional binding safely makes a wrapped value available inside a scope only when it exists.",
          "content": [
            "Use if let or if var to conditionally bind the wrapped value. The bound name is available inside the corresponding branch, where the compiler knows that it is not nil.",
            "Use guard let when a function or scope should exit early if the value is absent. The successfully unwrapped value remains available after the guard statement in the surrounding scope."
          ],
          "example": "let input = \"27\"\nif let age = Int(input) {\n    print(\"Next year: \\(age + 1)\")\n} else {\n    print(\"Enter a valid integer\")\n}",
          "quest": {
            "prompt": "What happens when if let cannot unwrap an optional?",
            "choices": [
              "The else branch runs, if one is provided",
              "The program always crashes",
              "The value becomes zero"
            ],
            "answer": 0,
            "explanation": "If optional binding fails because the optional is nil, execution follows the else branch when present."
          }
        },
        {
          "id": "swift-optional-chaining-defaults",
          "title": "Optional chaining and nil-coalescing",
          "summary": "Optional chaining safely accesses members of a value that may be absent, while ?? supplies a fallback.",
          "content": [
            "Optional chaining uses ? to call a property, method, or subscript only when the optional contains a value. The result is generally optional because the operation may not happen.",
            "The nil-coalescing operator ?? returns the wrapped value when present or evaluates a fallback expression when the optional is nil. Prefer it when a simple default is appropriate."
          ],
          "example": "let displayName: String? = nil\nlet label = displayName ?? \"Guest\"\nprint(label)\n\nlet text: String? = \"swift\"\nlet length = text?.count  // Int?",
          "quest": {
            "prompt": "What does name ?? \"Guest\" do when name is nil?",
            "choices": [
              "It produces \"Guest\"",
              "It force-unwraps name",
              "It changes name to an empty string"
            ],
            "answer": 0,
            "explanation": "The nil-coalescing operator returns its right-hand fallback when the optional on the left is nil."
          }
        }
      ],
      "checkpoint": "Write a function that accepts an optional String and returns a useful greeting. Handle nil with optional binding or a default, and avoid force-unwrapping the input."
    },
    {
      "id": "swift-functions-closures",
      "title": "Functions, closures, and functional patterns",
      "level": "Beginner",
      "description": "Build reusable behavior with functions and closures, and pass behavior as values.",
      "outcomes": [
        "Declare functions with parameters and return values.",
        "Use argument labels, default arguments, and inout carefully.",
        "Create closures and use common higher-order functions."
      ],
      "lessons": [
        {
          "id": "swift-function-declarations",
          "title": "Declare and call functions",
          "summary": "Functions package reusable statements behind a named interface with inputs and an optional result.",
          "content": [
            "A function declaration specifies its name, parameters, and return type. Use -> to introduce a return type, and return to send a result to the caller when the function produces one.",
            "Functions can be kept small and focused. Clear parameter names and return types make behavior easier to understand, reuse, and test."
          ],
          "example": "func area(width: Double, height: Double) -> Double {\n    width * height\n}\n\nlet result = area(width: 4, height: 3)\nprint(result)",
          "quest": {
            "prompt": "Which symbol introduces a function return type in Swift?",
            "choices": [
              "->",
              "=>",
              "::"
            ],
            "answer": 0,
            "explanation": "The arrow -> separates a function’s parameter list from its return type."
          }
        },
        {
          "id": "swift-argument-labels-defaults",
          "title": "Argument labels and default parameters",
          "summary": "Swift function parameters can have external argument labels and default values.",
          "content": [
            "An external argument label describes a value at the call site, while the internal parameter name is used inside the function. Use _ when you intentionally want to omit an external label.",
            "A default argument lets a caller omit a parameter when the common value is suitable. Defaults can simplify APIs, but avoid adding many parameters that make a function difficult to understand."
          ],
          "example": "func greet(person name: String, punctuation: String = \"!\") -> String {\n    \"Hello, \\(name)\\(punctuation)\"\n}\n\nprint(greet(person: \"Asha\"))",
          "quest": {
            "prompt": "In greet(person: \"Asha\"), what is person?",
            "choices": [
              "The external argument label",
              "The return type",
              "A variable declared globally"
            ],
            "answer": 0,
            "explanation": "person is the external argument label used at the call site. name is the local parameter name inside the function."
          }
        },
        {
          "id": "swift-closures-higher-order",
          "title": "Closures and higher-order functions",
          "summary": "A closure is a self-contained block of functionality that can be stored, passed, and returned.",
          "content": [
            "Closures can capture values from their surrounding context. Swift can often infer closure parameter and return types, allowing concise syntax when the expected function type is already known.",
            "Array methods such as map, filter, and sorted accept closures. They express transformations and selection declaratively, which can be clearer than manually building result arrays in loops."
          ],
          "example": "let numbers = [1, 2, 3, 4, 5]\nlet doubled = numbers.map { $0 * 2 }\nlet even = numbers.filter { $0 % 2 == 0 }\nprint(doubled)\nprint(even)",
          "quest": {
            "prompt": "What does map do to a collection?",
            "choices": [
              "Transforms each element using a closure",
              "Removes every element",
              "Sorts elements automatically"
            ],
            "answer": 0,
            "explanation": "map applies a transformation to each element and produces a new collection of transformed results."
          }
        }
      ],
      "checkpoint": "Create a function that converts minutes to seconds. Give one parameter a default value, then use map or filter with a closure to transform a small array."
    },
    {
      "id": "swift-collections-strings",
      "title": "Collections and strings",
      "level": "Beginner",
      "description": "Store groups of values with arrays, sets, and dictionaries, and work safely with Swift strings.",
      "outcomes": [
        "Choose arrays, sets, and dictionaries for common tasks.",
        "Read, update, and iterate over collection values.",
        "Understand String character handling and interpolation."
      ],
      "lessons": [
        {
          "id": "swift-arrays",
          "title": "Work with arrays",
          "summary": "An array stores values in an ordered sequence and allows access by index.",
          "content": [
            "Arrays preserve element order and can contain repeated values. Their elements share a single element type, and array indices are zero-based for ordinary arrays.",
            "Check collection bounds before indexing when the index is not already known to be valid. Use methods such as append, remove, contains, and enumerated to express common operations."
          ],
          "example": "var scores = [88, 92, 75]\nscores.append(95)\nfor (index, score) in scores.enumerated() {\n    print(\"\\(index): \\(score)\")\n}",
          "quest": {
            "prompt": "What is the first valid index of a non-empty Swift array?",
            "choices": [
              "0",
              "1",
              "-1"
            ],
            "answer": 0,
            "explanation": "Swift arrays use zero-based indexing, so the first element is at index 0."
          }
        },
        {
          "id": "swift-sets-dictionaries",
          "title": "Use sets and dictionaries",
          "summary": "Sets store unique values, while dictionaries associate keys with values.",
          "content": [
            "A Set is useful when uniqueness and membership tests matter more than order. A Dictionary stores key-value pairs and uses a key to look up its corresponding value.",
            "Dictionary lookup returns an optional because a key may be absent. Set and dictionary iteration order should not be relied on as a stable ordering for application logic."
          ],
          "example": "let tags: Set<String> = [\"swift\", \"ios\", \"swift\"]\nvar points = [\"Asha\": 10, \"Ravi\": 8]\npoints[\"Mira\"] = 9\nlet ashaPoints = points[\"Asha\"]  // Int?",
          "quest": {
            "prompt": "Why does dictionary[key] return an optional value?",
            "choices": [
              "The key might not exist",
              "Dictionary values are always strings",
              "A dictionary can store only one key"
            ],
            "answer": 0,
            "explanation": "A dictionary lookup may fail because the requested key is absent, so the result is optional."
          }
        },
        {
          "id": "swift-strings-unicode",
          "title": "Strings, characters, and Unicode",
          "summary": "Swift String represents Unicode text and provides operations that respect extended grapheme clusters.",
          "content": [
            "A Swift String is a collection of text that may contain complex Unicode sequences. A visible character can be made from more than one Unicode scalar, so character counts and byte counts are not necessarily the same.",
            "Use String APIs such as count, append, lowercased, and components when appropriate. Avoid assuming that a character always occupies one byte or that a string index can be treated like an integer offset."
          ],
          "example": "let greeting = \"Hello, 🌍\"\nprint(greeting.count)\nprint(greeting.uppercased())\n\nlet firstCharacter = greeting.first",
          "quest": {
            "prompt": "Why should Swift code avoid treating every character as one byte?",
            "choices": [
              "Unicode characters can use multiple scalars and bytes",
              "All strings contain only ASCII",
              "Swift strings cannot contain emoji"
            ],
            "answer": 0,
            "explanation": "Swift strings support Unicode. A visible character may consist of multiple scalars and bytes."
          }
        }
      ],
      "checkpoint": "Build a small in-memory contact list using an array or dictionary. Add, search, and display entries, and handle missing dictionary keys safely."
    },
    {
      "id": "swift-structs-enums",
      "title": "Structs, enums, and value semantics",
      "level": "Intermediate",
      "description": "Model domain concepts with custom value types, enumerations, and pattern matching.",
      "outcomes": [
        "Define structs with stored and computed properties.",
        "Model alternatives with enums and associated values.",
        "Explain value semantics and property observers."
      ],
      "lessons": [
        {
          "id": "swift-structs-properties",
          "title": "Define structs and properties",
          "summary": "A struct groups related data and behavior into a custom value type.",
          "content": [
            "Structs can contain stored properties, computed properties, methods, initializers, and property observers. Use them to represent values such as coordinates, settings, measurements, and records.",
            "Computed properties calculate a value when accessed rather than storing a separate copy. Property observers such as willSet and didSet run when a stored property is about to change or has changed."
          ],
          "example": "struct Rectangle {\n    var width: Double\n    var height: Double\n\n    var area: Double { width * height }\n}\n\nlet shape = Rectangle(width: 5, height: 3)\nprint(shape.area)",
          "quest": {
            "prompt": "What is a computed property?",
            "choices": [
              "A property whose value is calculated when accessed",
              "A property stored only in a database",
              "A property that must be optional"
            ],
            "answer": 0,
            "explanation": "A computed property calculates and returns its value instead of storing an independent value."
          }
        },
        {
          "id": "swift-enums-associated-values",
          "title": "Enumerations and associated values",
          "summary": "An enum defines a finite set of related cases and can carry additional data with a case.",
          "content": [
            "Enums are useful when a value must be one of a known set of alternatives, such as a loading state or payment status. Associated values let each case carry data relevant to that alternative.",
            "Swift enums can have raw values when each case needs a fixed representation. Associated values and raw values solve different problems: associated values carry per-instance data, while raw values map cases to fixed values."
          ],
          "example": "enum DownloadState {\n    case notStarted\n    case downloading(progress: Double)\n    case finished(fileName: String)\n    case failed(message: String)\n}",
          "quest": {
            "prompt": "What do associated values allow an enum case to do?",
            "choices": [
              "Carry data specific to that case",
              "Create a new class automatically",
              "Disable pattern matching"
            ],
            "answer": 0,
            "explanation": "Associated values attach relevant data to a particular enum case, such as progress or an error message."
          }
        },
        {
          "id": "swift-pattern-matching-value-semantics",
          "title": "Pattern matching and value semantics",
          "summary": "Switch and if-case patterns inspect enum cases, while value types provide independent value semantics.",
          "content": [
            "Pattern matching lets code respond to the shape of a value. A switch over an enum can bind associated data, and where clauses can add conditions to a matched case.",
            "Structs and enums are value types. Assigning or passing a value creates a logically independent value, although the implementation may use copy-on-write optimizations for some standard-library collections."
          ],
          "example": "let state = DownloadState.downloading(progress: 0.6)\nswitch state {\ncase .downloading(let progress) where progress < 1:\n    print(\"\\(progress * 100)% complete\")\ncase .finished(let fileName):\n    print(fileName)\ndefault:\n    print(\"Other state\")\n}",
          "quest": {
            "prompt": "Which statement about Swift structs is correct?",
            "choices": [
              "They are value types",
              "They must inherit from another struct",
              "They are always stored as global variables"
            ],
            "answer": 0,
            "explanation": "Structs are value types. They do not participate in class inheritance."
          }
        }
      ],
      "checkpoint": "Model an order using a struct and an enum for its status. Include an associated value for a failure reason and write a switch that handles every status."
    },
    {
      "id": "swift-classes-arc",
      "title": "Classes, inheritance, and memory management",
      "level": "Intermediate",
      "description": "Use reference types when identity and shared mutable state are needed, and understand automatic reference counting.",
      "outcomes": [
        "Create classes and initializers.",
        "Use inheritance and overriding appropriately.",
        "Explain ARC and prevent strong reference cycles."
      ],
      "lessons": [
        {
          "id": "swift-classes-reference-types",
          "title": "Classes and reference semantics",
          "summary": "A class is a reference type that supports identity, shared references, and inheritance.",
          "content": [
            "When a class instance is assigned to another variable, both references can point to the same instance. Changes made through one reference can be observed through another reference when the property is mutable.",
            "Use classes when identity or shared mutable state is important. Prefer structs for many simple models because their value semantics make data flow easier to reason about."
          ],
          "example": "final class UserSession {\n    var userName: String\n\n    init(userName: String) {\n        self.userName = userName\n    }\n}\n\nlet first = UserSession(userName: \"Asha\")\nlet second = first\nsecond.userName = \"Mira\"\nprint(first.userName)",
          "quest": {
            "prompt": "What happens when a class instance reference is assigned to another variable?",
            "choices": [
              "Both variables can refer to the same instance",
              "A deep copy is always created",
              "The instance is destroyed immediately"
            ],
            "answer": 0,
            "explanation": "Class assignment copies the reference, not the instance. Both variables can therefore refer to the same object."
          }
        },
        {
          "id": "swift-initializers-inheritance",
          "title": "Initializers, inheritance, and overriding",
          "summary": "Initializers create valid instances, while class inheritance allows a subclass to specialize a superclass.",
          "content": [
            "Use init to initialize stored properties and establish the invariants required for a usable instance. Swift requires stored properties to be initialized before initialization finishes.",
            "A subclass inherits from a superclass and can override eligible methods or properties using override. Mark a class final when further subclassing is not part of its intended design."
          ],
          "example": "class Vehicle {\n    func move() { print(\"Moving\") }\n}\n\nclass Bicycle: Vehicle {\n    override func move() { print(\"Pedaling\") }\n}\n\nlet bicycle = Bicycle()\nbicycle.move()",
          "quest": {
            "prompt": "Which keyword marks an overridden superclass method?",
            "choices": [
              "override",
              "extends",
              "implements"
            ],
            "answer": 0,
            "explanation": "Swift uses override to make the intention to replace an inherited member explicit and compiler-checked."
          }
        },
        {
          "id": "swift-arc-weak-unowned",
          "title": "ARC, weak references, and retain cycles",
          "summary": "Automatic Reference Counting manages class instance lifetimes by tracking strong references.",
          "content": [
            "ARC deallocates a class instance when no strong references keep it alive. A strong reference cycle can prevent this from happening when two objects strongly retain each other.",
            "Use weak for a reference that can become nil and does not keep the object alive. Use unowned only when the referenced object is guaranteed to outlive the reference; an invalid unowned access causes a runtime failure."
          ],
          "example": "final class Parent {\n    var child: Child?\n}\n\nfinal class Child {\n    weak var parent: Parent?\n}",
          "quest": {
            "prompt": "Why might a delegate property be declared weak?",
            "choices": [
              "To avoid a strong reference cycle",
              "To make the object compile faster",
              "To convert the delegate into a value type"
            ],
            "answer": 0,
            "explanation": "A weak delegate reference does not keep its owner alive and is a common way to avoid retain cycles."
          }
        }
      ],
      "checkpoint": "Create a small class hierarchy with a base type and one subclass. Then draw a two-object reference graph and identify where a weak reference would prevent a retain cycle."
    },
    {
      "id": "swift-protocols-generics",
      "title": "Protocols, extensions, and generics",
      "level": "Intermediate",
      "description": "Design flexible abstractions with protocols, add focused functionality with extensions, and write reusable generic code.",
      "outcomes": [
        "Define and adopt protocols.",
        "Add functionality through extensions.",
        "Write generic functions and constrain generic types."
      ],
      "lessons": [
        {
          "id": "swift-protocols",
          "title": "Define and adopt protocols",
          "summary": "A protocol describes requirements that conforming types must provide.",
          "content": [
            "Protocols define a contract using requirements such as properties, methods, initializers, and associated types. Structs, classes, and enums can conform to protocols.",
            "Programming to a protocol can reduce coupling because callers depend on required behavior rather than one concrete implementation. Protocol extensions can provide default implementations for eligible requirements."
          ],
          "example": "protocol IdentifiableItem {\n    var id: String { get }\n}\n\nstruct Book: IdentifiableItem {\n    let id: String\n    let title: String\n}",
          "quest": {
            "prompt": "What does a protocol primarily define?",
            "choices": [
              "A set of requirements for conforming types",
              "A database table",
              "A mandatory class superclass"
            ],
            "answer": 0,
            "explanation": "A protocol describes behavior and requirements that a conforming type promises to provide."
          }
        },
        {
          "id": "swift-extensions",
          "title": "Extend existing types",
          "summary": "Extensions add computed properties, methods, initializers, and protocol conformance to existing types.",
          "content": [
            "An extension can add functionality to an existing type without subclassing or changing its original source definition. Extensions are commonly used to organize related behavior or provide protocol conformance.",
            "Extensions cannot add stored properties to an existing type. Keep extensions cohesive and avoid creating surprising behavior that makes a type harder to understand."
          ],
          "example": "import Foundation\n\nextension String {\n    var isBlank: Bool {\n        trimmingCharacters(in: .whitespacesAndNewlines).isEmpty\n    }\n}\n\nprint(\"   \".isBlank)",
          "quest": {
            "prompt": "Which member can an extension add to an existing type?",
            "choices": [
              "A computed property",
              "A new stored instance property",
              "A stored property with independent memory"
            ],
            "answer": 0,
            "explanation": "Extensions can add computed properties, but they cannot add stored properties to an existing type."
          }
        },
        {
          "id": "swift-generics-constraints",
          "title": "Generics and type constraints",
          "summary": "Generics let functions and types work with multiple concrete types while preserving compile-time type information.",
          "content": [
            "A generic function introduces a type parameter in angle brackets. The same implementation can then work with different types without losing the compiler’s ability to check how values are used.",
            "Constraints restrict which types can be substituted. A where clause can express protocol conformance and relationships between generic types, allowing the implementation to rely on required operations."
          ],
          "example": "func firstElement<T>(of values: [T]) -> T? {\n    values.first\n}\n\nlet firstNumber = firstElement(of: [10, 20, 30])\nlet firstWord = firstElement(of: [\"Swift\", \"Code\"])",
          "quest": {
            "prompt": "What is the main benefit of generics?",
            "choices": [
              "Reusable code that preserves type safety",
              "Avoiding all runtime errors",
              "Making every type a class"
            ],
            "answer": 0,
            "explanation": "Generics allow reusable implementations while the compiler still checks types and constraints."
          }
        }
      ],
      "checkpoint": "Define a protocol for values that can be displayed, conform two different structs to it, and write a generic function that accepts a collection of displayable values."
    },
    {
      "id": "swift-errors-data",
      "title": "Error handling, Codable, and data persistence",
      "level": "Intermediate",
      "description": "Represent failures explicitly, encode and decode structured data, and read or write simple files.",
      "outcomes": [
        "Declare and propagate throwing errors.",
        "Use do-catch, try?, and Result appropriately.",
        "Encode and decode models and perform basic file operations."
      ],
      "lessons": [
        {
          "id": "swift-throwing-functions",
          "title": "Throwing functions and custom errors",
          "summary": "A throwing function can report a failure using Swift’s typed error-handling mechanisms.",
          "content": [
            "Mark a function with throws when it may throw an error. Call a throwing function with try and handle the error using do-catch, propagate it with try in another throwing function, or deliberately convert it with try?.",
            "Create an enum that conforms to Error when a domain operation needs meaningful failure cases. Error values should help callers decide what to do rather than merely hide the source of a problem."
          ],
          "example": "enum AgeError: Error { case negative }\n\nfunc validate(age: Int) throws {\n    guard age >= 0 else { throw AgeError.negative }\n}\n\ndo {\n    try validate(age: 20)\n} catch {\n    print(\"Invalid age: \\(error)\")\n}",
          "quest": {
            "prompt": "What does the throws keyword indicate?",
            "choices": [
              "The function can propagate an error",
              "The function never returns",
              "The function runs on another thread"
            ],
            "answer": 0,
            "explanation": "throws marks a function that can throw an error and requires callers to account for that behavior."
          }
        },
        {
          "id": "swift-error-handling-strategies",
          "title": "Handle and transform errors",
          "summary": "Swift provides do-catch, optional conversion, and Result for expressing different error-handling needs.",
          "content": [
            "do-catch handles errors locally and can match particular error cases. try? converts a throwing operation into an optional result, while try! asserts that the operation will not fail and should be used only when failure is truly impossible by design.",
            "Result represents either success with a value or failure with an error. It is useful when an API needs to return an outcome as data, for example to store or pass a completed operation result."
          ],
          "example": "enum ScoreError: Error { case invalidInput }\n\nfunc readScore(_ text: String) -> Result<Int, Error> {\n    do {\n        guard let score = Int(text) else { throw ScoreError.invalidInput }\n        return .success(score)\n    } catch {\n        return .failure(error)\n    }\n}",
          "quest": {
            "prompt": "What does try? return when a throwing operation fails?",
            "choices": [
              "nil",
              "A default integer of zero",
              "An uncaught error"
            ],
            "answer": 0,
            "explanation": "try? converts a thrown error into nil, producing an optional result."
          }
        },
        {
          "id": "swift-codable-files",
          "title": "Codable and basic file persistence",
          "summary": "Codable enables models to be encoded and decoded by compatible encoders and decoders.",
          "content": [
            "A type that conforms to Codable can often be converted to and from formats such as JSON with JSONEncoder and JSONDecoder. The compiler can synthesize conformance when the stored properties are also Codable.",
            "FileManager and URL provide APIs for locating and working with files. File operations can fail because of permissions, missing directories, or storage conditions, so handle errors and avoid assuming a write always succeeds."
          ],
          "example": "struct StudySession: Codable {\n    let topic: String\n    let minutes: Int\n}\n\nlet session = StudySession(topic: \"Swift\", minutes: 30)\nlet data = try JSONEncoder().encode(session)\nlet decoded = try JSONDecoder().decode(StudySession.self, from: data)",
          "quest": {
            "prompt": "What does Codable provide?",
            "choices": [
              "Encoding and decoding support for a type",
              "Automatic database hosting",
              "Automatic user-interface layout"
            ],
            "answer": 0,
            "explanation": "Codable combines Encodable and Decodable, allowing compatible values to be serialized and deserialized."
          }
        }
      ],
      "checkpoint": "Create a Codable model for a study session. Encode it to JSON data, decode it back, and handle encoding or decoding failures without force-try."
    },
    {
      "id": "swift-concurrency-networking",
      "title": "Concurrency and networking",
      "level": "Advanced",
      "description": "Use async and await, tasks, actors, and URLSession to write responsive asynchronous Swift code.",
      "outcomes": [
        "Explain asynchronous functions and structured concurrency.",
        "Create and manage tasks, and protect shared state with actors.",
        "Perform asynchronous network requests and decode responses."
      ],
      "lessons": [
        {
          "id": "swift-async-await",
          "title": "Asynchronous functions with async and await",
          "summary": "Swift async and await express operations that may suspend while waiting for work to complete.",
          "content": [
            "Mark an asynchronous function with async. Calling it from an asynchronous context uses await, which marks a possible suspension point rather than blocking the current thread in the ordinary way.",
            "An async function can still throw, producing an async throws function. Callers must handle both its asynchronous nature and its possible failure."
          ],
          "example": "func loadMessage() async -> String {\n    \"Data loaded\"\n}\n\nfunc showMessage() async {\n    let message = await loadMessage()\n    print(message)\n}",
          "quest": {
            "prompt": "What does await indicate in Swift concurrency?",
            "choices": [
              "A possible suspension point while an async operation proceeds",
              "A guarantee that a function runs on the main thread",
              "A command to create a new process"
            ],
            "answer": 0,
            "explanation": "await marks a point where an asynchronous operation may suspend until its result is available."
          }
        },
        {
          "id": "swift-tasks-actors",
          "title": "Tasks, structured concurrency, and actors",
          "summary": "Tasks represent asynchronous work, while actors help protect mutable state from concurrent access.",
          "content": [
            "Structured concurrency organizes child tasks within a parent task’s lifetime. Task groups are useful when a set of related operations can run concurrently and their results need to be collected.",
            "An actor protects its isolated mutable state by controlling access across concurrency domains. Swift’s concurrency checking, including Sendable requirements, helps identify values that can safely cross those boundaries."
          ],
          "example": "actor Counter {\n    private var value = 0\n\n    func increment() { value += 1 }\n    func currentValue() -> Int { value }\n}\n\n// Call actor methods from an async context using await.",
          "quest": {
            "prompt": "What problem does an actor help address?",
            "choices": [
              "Safe access to isolated mutable state",
              "Automatic JSON formatting",
              "Replacing every struct"
            ],
            "answer": 0,
            "explanation": "Actors serialize access to their isolated state and help prevent data races when shared mutable state is accessed concurrently."
          }
        },
        {
          "id": "swift-urlsession-networking",
          "title": "Fetch and decode data with URLSession",
          "summary": "URLSession provides asynchronous APIs for network requests and can be combined with Codable for response decoding.",
          "content": [
            "Use URL and URLRequest to describe a request, then call an asynchronous URLSession method to obtain a response and data. Check the HTTP status code rather than assuming that every completed request represents a successful server response.",
            "Decode response bytes with JSONDecoder when the payload matches a Codable model. Network code should handle transport errors, unexpected status codes, malformed data, cancellation, and timeouts."
          ],
          "example": "import Foundation\n\nstruct User: Decodable {\n    let id: Int\n    let name: String\n}\n\nfunc fetchUser(from url: URL) async throws -> User {\n    let (data, response) = try await URLSession.shared.data(from: url)\n    guard let http = response as? HTTPURLResponse,\n          (200...299).contains(http.statusCode) else {\n        throw URLError(.badServerResponse)\n    }\n    return try JSONDecoder().decode(User.self, from: data)\n}",
          "quest": {
            "prompt": "Why should a network client inspect the HTTP status code?",
            "choices": [
              "A completed request can still receive an unsuccessful HTTP response",
              "The status code contains the JSON model",
              "It converts the response into a URL"
            ],
            "answer": 0,
            "explanation": "Transport completion does not guarantee application-level success. The HTTP status code communicates the server response outcome."
          }
        }
      ],
      "checkpoint": "Design an async function that fetches JSON from an endpoint, validates the HTTP response, decodes a Codable model, and propagates failures. Explain where cancellation should be supported."
    },
    {
      "id": "swift-packages-testing-design",
      "title": "Packages, testing, and code organization",
      "level": "Advanced",
      "description": "Organize code into reusable targets, test behavior, and apply access control and maintainable design.",
      "outcomes": [
        "Create a Swift package with targets and dependencies.",
        "Write unit tests for normal and boundary behavior.",
        "Use access control and modular design to manage APIs."
      ],
      "lessons": [
        {
          "id": "swift-package-manager",
          "title": "Packages, targets, and dependencies",
          "summary": "Swift Package Manager organizes source code into packages, targets, products, and dependencies.",
          "content": [
            "A package manifest named Package.swift describes the package. A target groups source files and may depend on other targets, while a product exposes a library or executable to package consumers.",
            "Keep dependencies purposeful and review their maintenance, licensing, and platform requirements. Pinning or resolving versions through the package tooling helps make builds reproducible."
          ],
          "example": "// Package.swift (illustrative manifest structure)\nimport PackageDescription\n\nlet package = Package(\n    name: \"StudyTools\",\n    targets: [\n        .target(name: \"StudyTools\"),\n        .testTarget(name: \"StudyToolsTests\", dependencies: [\"StudyTools\"])\n    ]\n)",
          "quest": {
            "prompt": "What does a Swift package target represent?",
            "choices": [
              "A buildable unit of source code such as a library, executable, or tests",
              "A single runtime variable",
              "A user account"
            ],
            "answer": 0,
            "explanation": "A target is a buildable unit in a package, such as a library, executable, or test target."
          }
        },
        {
          "id": "swift-unit-testing",
          "title": "Write unit tests",
          "summary": "Unit tests check small units of behavior and help detect regressions as code changes.",
          "content": [
            "Tests should verify observable behavior rather than depend on implementation details. Cover typical inputs, boundary values, and failure cases, and keep each test focused on one important expectation.",
            "Swift projects can use XCTest, and newer Swift toolchains also provide the Swift Testing framework. The specific framework and APIs depend on the project and toolchain version."
          ],
          "example": "import XCTest\n\nfinal class MathTests: XCTestCase {\n    func testAddition() {\n        XCTAssertEqual(2 + 3, 5)\n    }\n}",
          "quest": {
            "prompt": "Which test case is especially useful in addition to a typical valid input?",
            "choices": [
              "A boundary or failure case",
              "Only a repeated copy of the same test",
              "A test that never makes an assertion"
            ],
            "answer": 0,
            "explanation": "Boundary and failure tests reveal assumptions that ordinary successful examples may not expose."
          }
        },
        {
          "id": "swift-access-control-design",
          "title": "Access control and maintainable design",
          "summary": "Access control limits where declarations can be used and helps define stable module interfaces.",
          "content": [
            "Swift access levels include open, public, package, internal, fileprivate, and private. The default is internal, which makes a declaration available within its module but not to other modules.",
            "Expose only the API that callers need. Keep implementation details private or internal, separate responsibilities into focused types, and document important invariants and concurrency expectations."
          ],
          "example": "public struct StudyPlan {\n    public let title: String\n    private var completedCount = 0\n\n    public init(title: String) {\n        self.title = title\n    }\n}",
          "quest": {
            "prompt": "What is the default access level for a Swift declaration?",
            "choices": [
              "internal",
              "public",
              "private"
            ],
            "answer": 0,
            "explanation": "The default access level is internal, which allows use within the same module."
          }
        }
      ],
      "checkpoint": "Create a small package with a library target and a test target. Add tests for a model or calculation, then make implementation details private while exposing a small public API."
    },
    {
      "id": "swiftui-app-fundamentals",
      "title": "SwiftUI and application architecture",
      "level": "Advanced",
      "description": "Apply Swift foundations to declarative Apple-platform interfaces, state-driven views, navigation, and app structure.",
      "outcomes": [
        "Build simple SwiftUI views using declarative composition.",
        "Manage view state and pass data between views.",
        "Separate presentation from application logic and prepare an app for release."
      ],
      "lessons": [
        {
          "id": "swiftui-view-composition",
          "title": "Build interfaces with SwiftUI views",
          "summary": "SwiftUI describes an interface as a hierarchy of views whose appearance depends on data and state.",
          "content": [
            "A SwiftUI view conforms to the View protocol and provides a body describing its content. Views are composed from smaller views such as Text, Image, Button, VStack, HStack, and List.",
            "SwiftUI uses declarative descriptions: describe what the interface should look like for the current state, and the framework updates the rendered interface as state changes. SwiftUI availability and behavior can vary by platform and deployment target."
          ],
          "example": "import SwiftUI\n\nstruct WelcomeView: View {\n    var body: some View {\n        VStack(spacing: 12) {\n            Text(\"Welcome to Swift\")\n                .font(.title)\n            Text(\"Build one step at a time\")\n        }\n        .padding()\n    }\n}",
          "quest": {
            "prompt": "What does a SwiftUI view describe?",
            "choices": [
              "A declarative portion of the user interface",
              "A database schema",
              "A background operating-system process"
            ],
            "answer": 0,
            "explanation": "A SwiftUI view describes a portion of the interface and is composed with other views."
          }
        },
        {
          "id": "swiftui-state-data-flow",
          "title": "State and data flow in SwiftUI",
          "summary": "SwiftUI state tools keep views synchronized with the data that drives them.",
          "content": [
            "Use @State for value state owned by a view. Pass values to child views when they only need to read them, and use @Binding when a child needs to read and update state owned elsewhere.",
            "For larger applications, observable model types can hold shared application state. Choose state ownership deliberately so there is a clear source of truth and updates flow predictably through the view hierarchy."
          ],
          "example": "import SwiftUI\n\nstruct CounterView: View {\n    @State private var count = 0\n\n    var body: some View {\n        Button(\"Count: \\(count)\") {\n            count += 1\n        }\n    }\n}",
          "quest": {
            "prompt": "When is @Binding useful?",
            "choices": [
              "When a child view needs read-and-write access to state owned elsewhere",
              "When a value must be stored in a database",
              "When a view should never update"
            ],
            "answer": 0,
            "explanation": "A binding provides read-and-write access to a value whose source of truth is owned by another part of the view hierarchy."
          }
        },
        {
          "id": "swiftui-navigation-architecture",
          "title": "Navigation and app architecture",
          "summary": "Navigation containers and focused model layers help organize multi-screen applications.",
          "content": [
            "NavigationStack supports navigation between destinations in modern SwiftUI applications. Lists, forms, sheets, and navigation destinations provide common patterns for presenting and moving between app screens.",
            "Keep networking, persistence, and domain rules out of large view bodies. A view model or focused service can coordinate application behavior, while views concentrate on rendering state and forwarding user actions."
          ],
          "example": "import SwiftUI\n\nstruct HomeView: View {\n    var body: some View {\n        NavigationStack {\n            List {\n                NavigationLink(\"Study sessions\", destination: Text(\"Sessions\"))\n                NavigationLink(\"Settings\", destination: Text(\"Settings\"))\n            }\n            .navigationTitle(\"Study Planner\")\n        }\n    }\n}",
          "quest": {
            "prompt": "Why separate application logic from SwiftUI views?",
            "choices": [
              "To keep presentation focused and make business logic easier to test",
              "To prevent views from displaying data",
              "To remove the need for state"
            ],
            "answer": 0,
            "explanation": "Separating domain and service logic from presentation improves clarity, reuse, and testability."
          }
        }
      ],
      "checkpoint": "Sketch a two-screen SwiftUI study planner. Identify the state each screen needs, decide which view owns the source of truth, and outline where persistence and network logic should live."
    }
  ],
  "capstone": {
    "title": "Swift capstone: Personal study planner",
    "brief": "Build a small study planner that models subjects and study sessions, tracks completion, persists data with Codable, and presents the information through a SwiftUI interface. Organize the solution into focused model, service, and presentation components.",
    "milestones": [
      "Define value types for subjects, study sessions, and goals, and use enums for finite states such as session status.",
      "Implement validation and calculations with small functions, optionals, and explicit error handling.",
      "Use collections to add, search, filter, and summarize study sessions.",
      "Make the study-session model Codable and implement a persistence service that handles file errors.",
      "Create an asynchronous data-loading interface and explain how cancellation and shared state are handled.",
      "Build SwiftUI screens for a session list, session detail, and a simple form; define a clear source of truth for state.",
      "Add unit tests for calculations, validation, serialization, and important failure cases.",
      "Document the package structure, supported platform, accessibility considerations, and steps for building and testing the app."
    ]
  }
};
export default swiftCourse;