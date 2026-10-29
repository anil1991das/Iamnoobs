import type { CourseConfig } from "../types";

export const cppCourse: CourseConfig = {
  "slug": "cpp",
  "language": "C++",
  "title": "Learn C++: Beginner to Advanced",
  "icon": "🅲➕➕",
  "levelLabel": "Beginner to advanced",
  "description": "Learn modern C++ from fundamentals to object-oriented design, STL, resource management, templates, files, testing, and concurrency through short lessons, guided code, quests, and a capstone.",
  "metaDescription": "A structured C++17 course covering compilation, types, control flow, functions, arrays, strings, vectors, classes, polymorphism, smart pointers, STL algorithms, exceptions, files, templates, testing, and concurrency.",
  "audience": "Learners who want to build reliable C++ programs, understand modern language features, and progress from basic syntax to reusable software design.",
  "prerequisites": "No prior C++ experience is needed. Examples target C++17 and are explanatory; they are not compiled or executed on this website.",
  "modules": [
    {
      "id": "cpp-first-program",
      "title": "Meet C++ and the compiler",
      "level": "Beginner",
      "description": "Learn how a C++ program is structured, compiled, and run, then begin using standard console input and output.",
      "outcomes": [
        "Recognize the role of main() and header files.",
        "Compile a source file and distinguish compiler errors from runtime behavior.",
        "Use standard input and output for simple programs."
      ],
      "lessons": [
        {
          "id": "cpp-program-shape",
          "title": "Source code and main()",
          "summary": "A C++ program starts from main() in a hosted application.",
          "content": [
            "C++ source files are commonly saved with a .cpp extension. A compiler translates the source into an executable, and the operating system starts a hosted program by calling main().",
            "The iostream header provides the standard console streams std::cout and std::cin. Names from the standard library live in the std namespace; writing std:: makes their origin explicit."
          ],
          "example": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, C++!\\n\";\n    return 0;\n}",
          "quest": {
            "prompt": "Which function is the usual entry point of a hosted C++ program?",
            "choices": [
              "main()",
              "std::cout",
              "#include"
            ],
            "answer": 0,
            "explanation": "The runtime calls main() to begin a hosted C++ program. Header inclusion happens before compilation and is not the entry point."
          }
        },
        {
          "id": "cpp-compile-run",
          "title": "Compile, run, and read diagnostics",
          "summary": "Compilation turns source code into a program and reports many mistakes before execution.",
          "content": [
            "A typical GCC or Clang command is g++ -std=c++17 -Wall -Wextra -Wpedantic main.cpp -o app. Run the output executable afterward; the exact command depends on the operating system and toolchain.",
            "Read the first relevant compiler error, including its file and line number. Warnings are useful feedback, and fixing the earliest real issue often clears later cascading diagnostics."
          ],
          "example": "g++ -std=c++17 -Wall -Wextra -Wpedantic main.cpp -o app\n./app",
          "quest": {
            "prompt": "What does the compiler primarily do in this workflow?",
            "choices": [
              "Translate source code and diagnose many source-level problems",
              "Automatically design the program",
              "Run every test case without being asked"
            ],
            "answer": 0,
            "explanation": "The compiler translates source code and reports errors or warnings. Testing and program design remain the developer's responsibility."
          }
        },
        {
          "id": "cpp-console-io",
          "title": "Console input and output",
          "summary": "The standard streams provide a convenient way to read and display values.",
          "content": [
            "Use std::cout with the insertion operator << to display values and std::cin with >> to extract formatted input. Add a newline with '\\n'; std::endl also flushes the stream, which is not always necessary.",
            "Formatted extraction can fail when the input does not match the expected type. Check the stream state before using the value, especially when input comes from a user or file."
          ],
          "example": "#include <iostream>\n\nint main() {\n    int age{};\n    std::cout << \"Age: \";\n    if (!(std::cin >> age)) {\n        std::cerr << \"Please enter a whole number.\\n\";\n        return 1;\n    }\n    std::cout << \"Next year: \" << age + 1 << '\\n';\n}",
          "quest": {
            "prompt": "Which operator sends a value to std::cout?",
            "choices": [
              "<<",
              ">>",
              "&&"
            ],
            "answer": 0,
            "explanation": "The insertion operator << sends a value into an output stream. The extraction operator >> reads from an input stream."
          }
        }
      ],
      "checkpoint": "Try it: create a program that asks for a name and a whole number, validates the numeric input, and prints a personalized message."
    },
    {
      "id": "cpp-types-values",
      "title": "Types, variables, and expressions",
      "level": "Beginner",
      "description": "Represent data with appropriate types, initialize variables deliberately, and understand operators and conversions.",
      "outcomes": [
        "Choose common built-in types for values.",
        "Use initialization and const to express intent.",
        "Recognize arithmetic, comparison, and logical expressions."
      ],
      "lessons": [
        {
          "id": "cpp-variables-initialization",
          "title": "Variables and initialization",
          "summary": "A variable names an object whose type determines the values and operations it supports.",
          "content": [
            "Common built-in types include int for integers, double for floating-point values, char for character code units, and bool for true/false values. std::string from the string header is useful for text.",
            "Prefer initializing variables at the point of declaration. Brace initialization such as int count{3}; helps reject some narrowing conversions that could silently lose information."
          ],
          "example": "#include <iostream>\n#include <string>\n\nint main() {\n    int count{3};\n    double ratio{0.75};\n    bool ready{true};\n    std::string label{\"sensor\"};\n    std::cout << label << \": \" << count << \", \" << ratio << \", \" << ready << '\\n';\n}",
          "quest": {
            "prompt": "Which type is intended for a true/false value?",
            "choices": [
              "bool",
              "double",
              "std::string"
            ],
            "answer": 0,
            "explanation": "bool represents logical values true and false. The other types serve numeric and text purposes."
          }
        },
        {
          "id": "cpp-const-and-conversion",
          "title": "const and type conversions",
          "summary": "Const-qualified objects cannot be modified through their declared name, and conversions can change representation or value.",
          "content": [
            "Use const for values that should not be reassigned after initialization. This makes intent clearer and lets the compiler reject accidental modifications.",
            "Conversions between numeric types can be useful, but converting a floating-point value to an integer discards the fractional part. Choose types and conversions with ranges and precision in mind."
          ],
          "example": "const int attempts{3};\ndouble price{19.95};\nint wholeDollars = static_cast<int>(price);\n// attempts = 4; // Error: attempts is const.\n// wholeDollars is 19 after conversion.",
          "quest": {
            "prompt": "What happens when 19.95 is converted to int with static_cast<int>?",
            "choices": [
              "The fractional part is discarded, producing 19",
              "It is rounded to 20 in every case",
              "The integer stores the complete decimal fraction"
            ],
            "answer": 0,
            "explanation": "A floating-point to integer conversion truncates toward zero. It does not automatically round to the nearest integer."
          }
        },
        {
          "id": "cpp-operators",
          "title": "Operators and expressions",
          "summary": "Operators combine values to produce new values or comparisons.",
          "content": [
            "Arithmetic operators include +, -, *, /, and %. When both operands of integer division are integers, the fractional part is discarded; use a floating-point operand when you need a fractional result.",
            "Comparison operators such as ==, !=, <, and >= produce a bool. Logical operators &&, ||, and ! combine or invert conditions; parentheses help make complex conditions easy to review."
          ],
          "example": "int total{7};\nint people{2};\nint each = total / people;       // 3\ndouble average = 7.0 / people;  // 3.5\nbool enough = total >= 5 && people > 0;",
          "quest": {
            "prompt": "What is the result of 7 / 2 when both operands are int?",
            "choices": [
              "3",
              "3.5",
              "4"
            ],
            "answer": 0,
            "explanation": "Integer division discards the fractional part, so 7 / 2 evaluates to 3."
          }
        }
      ],
      "checkpoint": "Try it: calculate a bill total, tax, and per-person split. Decide where integer and floating-point types are appropriate and state any rounding rule."
    },
    {
      "id": "cpp-control-flow",
      "title": "Decisions and loops",
      "level": "Beginner",
      "description": "Control which code runs and repeat operations with conditions that have clear bounds and exit paths.",
      "outcomes": [
        "Write if/else and switch branches.",
        "Use for and range-based for loops.",
        "Prevent accidental infinite loops and off-by-one mistakes."
      ],
      "lessons": [
        {
          "id": "cpp-if-else",
          "title": "Conditions and branches",
          "summary": "if and else choose which block executes based on a Boolean condition.",
          "content": [
            "Conditions can use comparisons and logical operators. Use braces consistently, even for single statements, so later edits do not accidentally change which statements belong to a branch.",
            "A switch statement is useful when comparing one expression against several discrete case values. Include break where you intend to leave a case, and consider a default branch for unexpected values."
          ],
          "example": "int temperature{18};\nif (temperature < 0) {\n    std::cout << \"Freezing\\n\";\n} else if (temperature < 20) {\n    std::cout << \"Cool\\n\";\n} else {\n    std::cout << \"Warm\\n\";\n}",
          "quest": {
            "prompt": "Which branch runs when temperature is 18 in this example?",
            "choices": [
              "The else-if branch prints Cool",
              "The first branch prints Freezing",
              "Both the first and final branches run"
            ],
            "answer": 0,
            "explanation": "18 is not less than 0, but it is less than 20, so the else-if branch runs."
          }
        },
        {
          "id": "cpp-for-loops",
          "title": "Count with for and range-based for",
          "summary": "A for loop is useful when iteration has a clear initialization, condition, and update.",
          "content": [
            "A conventional for loop places initialization, continuation condition, and update in one header. For a sequence of size n, indexes usually run from zero through n - 1, so i < n is a common condition.",
            "A range-based for loop iterates over elements directly and is often simpler when an index is not required. Use const auto& when you want read-only access without copying each element."
          ],
          "example": "#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> values{2, 4, 6};\n    for (std::size_t i = 0; i < values.size(); ++i) {\n        std::cout << values[i] << '\\n';\n    }\n    for (const auto& value : values) {\n        std::cout << value << '\\n';\n    }\n}",
          "quest": {
            "prompt": "If i starts at 0 and the loop continues while i < 4, how many times does its body run?",
            "choices": [
              "3",
              "4",
              "5"
            ],
            "answer": 1,
            "explanation": "The body runs for i values 0, 1, 2, and 3: four iterations."
          }
        },
        {
          "id": "cpp-while-break",
          "title": "while, break, and continue",
          "summary": "while repeats while a condition remains true; break and continue alter loop flow.",
          "content": [
            "A while condition is checked before each iteration, so the body may run zero times. Ensure state involved in the condition changes along the normal path, or provide a deliberate exit to avoid infinite loops.",
            "break exits the nearest loop or switch. continue skips the remainder of the current loop body and proceeds to the next iteration; use these controls only when they make the flow easier to understand."
          ],
          "example": "int remaining{3};\nwhile (remaining > 0) {\n    std::cout << remaining << '\\n';\n    --remaining;\n}",
          "quest": {
            "prompt": "When is a while condition checked?",
            "choices": [
              "Before each possible iteration",
              "Only after the loop ends",
              "Only when the program is compiled"
            ],
            "answer": 0,
            "explanation": "The condition is tested before each iteration. A false condition prevents the body from running."
          }
        }
      ],
      "checkpoint": "Try it: write a menu-driven program that repeats until the user selects Exit. Test invalid menu choices and the first and last loop iterations."
    },
    {
      "id": "cpp-functions",
      "title": "Functions, parameters, and scope",
      "level": "Beginner",
      "description": "Organize programs into reusable functions, pass information safely, and understand overloads and variable scope.",
      "outcomes": [
        "Declare and define functions with appropriate return types.",
        "Choose value, reference, or const-reference parameters deliberately.",
        "Use overloads and keep variables in a suitable scope."
      ],
      "lessons": [
        {
          "id": "cpp-function-basics",
          "title": "Function declarations and definitions",
          "summary": "A function names a reusable operation with a return type and parameter list.",
          "content": [
            "A declaration tells the compiler a function's name, return type, and parameter types. The definition supplies the body, and a call provides arguments that match the parameter list.",
            "Give functions focused responsibilities and descriptive names. Return a result when the caller needs one, and use void when there is no result value to return."
          ],
          "example": "int square(int value);\n\nint square(int value) {\n    return value * value;\n}\n\nint result = square(5); // 25",
          "quest": {
            "prompt": "What does int square(int value); declare?",
            "choices": [
              "A function returning int and accepting an int",
              "An array containing squares",
              "A function that cannot be called"
            ],
            "answer": 0,
            "explanation": "The declaration describes the function's return type, name, and parameter type. The body is provided by the definition."
          }
        },
        {
          "id": "cpp-parameter-passing",
          "title": "Pass by value and by reference",
          "summary": "Parameter choice controls whether a function receives a copy or access to an existing object.",
          "content": [
            "Pass small values such as int by value when the function only needs its own copy. A non-const reference parameter, written T&, lets a function modify the caller's object.",
            "Use const T& for larger objects that should be read without copying or modifying them. A reference must refer to a valid object, while a pointer can represent an optional or reseatable address and needs explicit validity checks."
          ],
          "example": "void addOne(int& value) {\n    ++value;\n}\n\nvoid printName(const std::string& name) {\n    std::cout << name << '\\n';\n}",
          "quest": {
            "prompt": "Which parameter form communicates read-only access to an existing std::string without requiring a copy?",
            "choices": [
              "const std::string&",
              "std::string* with no checks",
              "std::string&& for every ordinary input"
            ],
            "answer": 0,
            "explanation": "A const reference allows access without copying the string and prevents modification through that reference."
          }
        },
        {
          "id": "cpp-overloads-scope",
          "title": "Overloading, defaults, and scope",
          "summary": "C++ allows functions to share a name when their parameter lists distinguish them.",
          "content": [
            "Overloaded functions use the same name with different parameter lists. The compiler selects a viable overload based on the arguments; changing only the return type is not enough to overload a function.",
            "Default arguments supply values when trailing arguments are omitted. Scope determines where a name is visible, so prefer local variables and avoid globals unless shared state is genuinely needed."
          ],
          "example": "int maxOf(int a, int b) {\n    return a > b ? a : b;\n}\n\ndouble maxOf(double a, double b) {\n    return a > b ? a : b;\n}\n\nvoid logMessage(const std::string& text, int level = 1);",
          "quest": {
            "prompt": "Can two functions be overloaded by changing only their return type?",
            "choices": [
              "No, the parameter lists must distinguish overloads",
              "Yes, always",
              "Only if both return void"
            ],
            "answer": 0,
            "explanation": "Overload resolution uses parameter types and other call-related information; return type alone does not distinguish overloads."
          }
        }
      ],
      "checkpoint": "Try it: design functions to validate a score, calculate an average, and format a summary. Document each function's inputs, outputs, and any side effects."
    },
    {
      "id": "cpp-arrays-strings",
      "title": "Arrays, strings, and sequences",
      "level": "Beginner",
      "description": "Represent collections and text using standard C++ types that make ownership and size easier to manage.",
      "outcomes": [
        "Use std::array for fixed-size sequences.",
        "Manipulate text with std::string.",
        "Choose std::vector for resizable sequences and check indexes."
      ],
      "lessons": [
        {
          "id": "cpp-std-array",
          "title": "Fixed-size arrays with std::array",
          "summary": "std::array stores a fixed number of elements and knows its size.",
          "content": [
            "Include the array header and use std::array<T, N> when the number of elements is fixed at compile time. Its size() member reports the number of elements, unlike a raw array passed to a function where the length is not carried along.",
            "Use operator[] only with a valid index. The at() member performs a bounds check and throws an exception for an invalid index, which can be useful when safety is more important than avoiding the check."
          ],
          "example": "#include <array>\n#include <iostream>\n\nint main() {\n    std::array<int, 3> scores{8, 9, 10};\n    for (int score : scores) {\n        std::cout << score << '\\n';\n    }\n    std::cout << scores.at(0) << '\\n';\n}",
          "quest": {
            "prompt": "For std::array<int, 5>, what is the last valid index?",
            "choices": [
              "4",
              "5",
              "6"
            ],
            "answer": 0,
            "explanation": "Indexes start at zero, so five elements use indexes 0 through 4."
          }
        },
        {
          "id": "cpp-strings",
          "title": "Text with std::string",
          "summary": "std::string manages a sequence of characters and provides common text operations.",
          "content": [
            "Include the string header to use std::string. It manages its character storage, can grow as needed, and provides operations such as size(), empty(), substr(), and find().",
            "When reading a complete line, std::getline reads spaces up to the newline. If it follows formatted extraction with operator>>, the newline may still be waiting in the stream; handle that transition deliberately rather than assuming getline will read the next visible line."
          ],
          "example": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string name;\n    std::cout << \"Full name: \";\n    std::getline(std::cin, name);\n    std::cout << \"Hello, \" << name << \"!\\n\";\n}",
          "quest": {
            "prompt": "Which function reads a full line, including spaces, into a std::string?",
            "choices": [
              "std::getline",
              "std::strlen",
              "std::cout"
            ],
            "answer": 0,
            "explanation": "std::getline reads characters up to the newline into the string, allowing names or other text to contain spaces."
          }
        },
        {
          "id": "cpp-vector",
          "title": "Resizable sequences with std::vector",
          "summary": "std::vector is the usual default for a sequence whose size may change at runtime.",
          "content": [
            "A vector owns a contiguous sequence of elements and grows when elements are added with push_back or emplace_back. Its size() is the number of elements currently in the sequence, not the reserved capacity.",
            "Do not keep iterators, pointers, or references to vector elements across operations that may reallocate the vector unless you have checked the invalidation rules. Prefer passing a vector together with its normal lifetime rather than manually managing an array's memory."
          ],
          "example": "#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> values{2, 4};\n    values.push_back(6);\n    for (const auto& value : values) {\n        std::cout << value << '\\n';\n    }\n}",
          "quest": {
            "prompt": "What does vector.size() report?",
            "choices": [
              "The number of elements currently stored",
              "The amount of memory in bytes",
              "The largest possible element value"
            ],
            "answer": 0,
            "explanation": "size() reports the number of elements currently in the vector. capacity() describes how many elements can fit without a reallocation."
          }
        }
      ],
      "checkpoint": "Try it: read several numbers into a vector, compute the minimum, maximum, and average, and handle the case where no numbers were entered."
    },
    {
      "id": "cpp-classes-oop",
      "title": "Classes and object-oriented programming",
      "level": "Intermediate",
      "description": "Bundle state with behavior, enforce class invariants, and use inheritance and polymorphism when they clarify a design.",
      "outcomes": [
        "Define classes with private data and public operations.",
        "Initialize objects with constructors and use const member functions.",
        "Explain inheritance, overriding, and runtime polymorphism."
      ],
      "lessons": [
        {
          "id": "cpp-classes-encapsulation",
          "title": "Classes and encapsulation",
          "summary": "A class defines a type and controls how its state can be accessed.",
          "content": [
            "A class groups data members and member functions. Members are private by default in a class and public by default in a struct; access labels let a class expose a small, intentional interface.",
            "Encapsulation means callers use operations rather than changing internal details directly. Validate input where state changes so an object can maintain its invariants throughout its lifetime."
          ],
          "example": "class Counter {\npublic:\n    void increment() { ++value_; }\n    int value() const { return value_; }\nprivate:\n    int value_{0};\n};",
          "quest": {
            "prompt": "Why is a class data member often private?",
            "choices": [
              "To protect invariants and control how state changes",
              "To make the member accessible from every function",
              "To prevent the object from having functions"
            ],
            "answer": 0,
            "explanation": "Private state can only be accessed through permitted class operations, helping the class maintain valid state."
          }
        },
        {
          "id": "cpp-constructors-const",
          "title": "Constructors and const member functions",
          "summary": "Constructors establish an object's initial valid state.",
          "content": [
            "A constructor has the same name as its class and no return type. Use a member initializer list to initialize data members directly; this is especially important for const members and references.",
            "A const member function promises not to modify the object's observable state through the ordinary this pointer. Mark read-only operations const so callers can use them with const objects."
          ],
          "example": "class Rectangle {\npublic:\n    Rectangle(double width, double height)\n        : width_{width}, height_{height} {}\n\n    double area() const { return width_ * height_; }\nprivate:\n    double width_;\n    double height_;\n};",
          "quest": {
            "prompt": "What is the purpose of a constructor?",
            "choices": [
              "To establish the initial state of an object",
              "To destroy every object of the class",
              "To replace the class name with a variable"
            ],
            "answer": 0,
            "explanation": "A constructor runs during object creation and initializes the object. It should leave the object ready for valid use."
          }
        },
        {
          "id": "cpp-inheritance-polymorphism",
          "title": "Inheritance and virtual functions",
          "summary": "Inheritance models an is-a relationship, while virtual functions enable runtime dispatch through a base interface.",
          "content": [
            "A derived class can extend a base class and override virtual behavior. Use inheritance when substitutability is meaningful, not merely to reuse a few lines of code.",
            "When a derived object may be deleted through a base pointer, the base class generally needs a public virtual destructor. Use override on intended overrides so the compiler can detect signature mismatches."
          ],
          "example": "class Shape {\npublic:\n    virtual ~Shape() = default;\n    virtual double area() const = 0;\n};\n\nclass Circle : public Shape {\npublic:\n    explicit Circle(double radius) : radius_{radius} {}\n    double area() const override { return 3.14159 * radius_ * radius_; }\nprivate:\n    double radius_;\n};",
          "quest": {
            "prompt": "What does override help the compiler verify?",
            "choices": [
              "That a member function overrides a virtual base-class function",
              "That a variable never changes",
              "That the object is allocated on the stack"
            ],
            "answer": 0,
            "explanation": "override asks the compiler to verify that the function really overrides a virtual function in a base class."
          }
        }
      ],
      "checkpoint": "Try it: implement a BankAccount class with a constructor, a balance query, deposit and withdraw operations, and validation that prevents invalid balances."
    },
    {
      "id": "cpp-lifetime-pointers",
      "title": "Pointers, lifetime, and resource management",
      "level": "Intermediate",
      "description": "Understand object lifetime and use modern C++ ownership patterns to avoid leaks, dangling pointers, and double deletion.",
      "outcomes": [
        "Distinguish references, pointers, and objects.",
        "Explain stack lifetime, dynamic storage, and RAII.",
        "Choose smart pointers based on ownership semantics."
      ],
      "lessons": [
        {
          "id": "cpp-pointers-references",
          "title": "Pointers and references",
          "summary": "Pointers represent addresses, while references provide another name for an existing object.",
          "content": [
            "A reference must be initialized to refer to an object and cannot later be reseated. A pointer can be null and can be changed to point elsewhere, so code must verify that a pointer is valid before dereferencing it.",
            "Use nullptr for an explicitly empty pointer. Avoid using an uninitialized pointer or a pointer after the pointed-to object's lifetime has ended; these can lead to undefined behavior."
          ],
          "example": "int score{7};\nint& alias = score;\nint* pointer = &score;\nalias = 8;\nif (pointer != nullptr) {\n    *pointer = 9;\n}\n// score is now 9.",
          "quest": {
            "prompt": "Which value represents an intentionally empty C++ pointer?",
            "choices": [
              "nullptr",
              "0.5",
              "std::string{}"
            ],
            "answer": 0,
            "explanation": "nullptr is the dedicated null pointer literal in modern C++. It communicates that the pointer does not point to an object."
          }
        },
        {
          "id": "cpp-raii-lifetime",
          "title": "Object lifetime and RAII",
          "summary": "RAII ties a resource's lifetime to an object's lifetime so cleanup happens automatically.",
          "content": [
            "Local objects are destroyed when their scope ends. RAII types acquire resources during construction and release them during destruction, including when control leaves a scope because of an exception.",
            "Prefer standard library types such as std::string, std::vector, streams, and smart pointers over raw owning pointers. Raw pointers and references are commonly used as non-owning access paths when lifetime is guaranteed elsewhere."
          ],
          "example": "#include <fstream>\n#include <stdexcept>\n#include <string>\n\nvoid writeNote(const std::string& text) {\n    std::ofstream file(\"note.txt\");\n    if (!file) {\n        throw std::runtime_error(\"Could not open note.txt\");\n    }\n    file << text << '\\n';\n} // file closes automatically here.",
          "quest": {
            "prompt": "What is the main benefit of RAII?",
            "choices": [
              "Resources are cleaned up automatically as their owning objects leave scope",
              "Every resource remains open until the program exits",
              "Pointers never need to be checked"
            ],
            "answer": 0,
            "explanation": "RAII makes resource cleanup part of object lifetime, which reduces leaks and helps cleanup run on early returns and exceptions."
          }
        },
        {
          "id": "cpp-smart-pointers",
          "title": "unique_ptr and shared_ptr",
          "summary": "Smart pointers express ownership and automate deletion of dynamically allocated objects.",
          "content": [
            "std::unique_ptr represents exclusive ownership: only one unique_ptr owns the object at a time, and ownership can be transferred by moving it. It is a good default for dynamically owned objects when shared ownership is unnecessary.",
            "std::shared_ptr uses reference counting for shared ownership, while std::weak_ptr can observe an object managed by shared_ptr without keeping it alive. Shared ownership adds complexity, so do not use it automatically for every pointer."
          ],
          "example": "#include <memory>\n\nauto item = std::make_unique<int>(42);\n// The int is deleted automatically when item leaves scope.\n\nauto sharedA = std::make_shared<int>(7);\nauto sharedB = sharedA; // Shared ownership.",
          "quest": {
            "prompt": "Which smart pointer expresses exclusive ownership?",
            "choices": [
              "std::unique_ptr",
              "std::weak_ptr",
              "A plain int"
            ],
            "answer": 0,
            "explanation": "std::unique_ptr has one owning handle and transfers ownership through move operations."
          }
        }
      ],
      "checkpoint": "Try it: review a small program with new and delete, then refactor ownership to standard containers or smart pointers. Explain who owns every resource and how long it lives."
    },
    {
      "id": "cpp-stl-algorithms",
      "title": "The standard library: containers and algorithms",
      "level": "Intermediate",
      "description": "Use associative containers, iterators, algorithms, and lambdas to express common data-processing tasks clearly.",
      "outcomes": [
        "Choose sequence and associative containers appropriately.",
        "Understand iterator-based traversal.",
        "Use standard algorithms with predicates and lambdas."
      ],
      "lessons": [
        {
          "id": "cpp-map-set",
          "title": "Maps, sets, and container choice",
          "summary": "Associative containers organize values by keys or uniqueness rules.",
          "content": [
            "std::map stores unique keys in sorted order and supports key-based lookup. std::unordered_map uses hashing and is often useful when ordering is not required; its average lookup is constant-time, though worst-case behavior can be slower.",
            "std::set stores unique keys, while std::unordered_set uses hashing for unique values without sorted ordering. Choose a container from the operations and ordering requirements the program actually needs."
          ],
          "example": "#include <iostream>\n#include <map>\n#include <string>\n\nint main() {\n    std::map<std::string, int> stock{{\"pen\", 10}, {\"book\", 4}};\n    stock[\"pen\"] += 2;\n    for (const auto& [name, quantity] : stock) {\n        std::cout << name << \": \" << quantity << '\\n';\n    }\n}",
          "quest": {
            "prompt": "Which standard container stores unique keys in sorted order?",
            "choices": [
              "std::map",
              "std::vector",
              "std::queue"
            ],
            "answer": 0,
            "explanation": "std::map stores unique keys ordered by its comparison function. std::vector is a sequence container."
          }
        },
        {
          "id": "cpp-iterators",
          "title": "Iterators and traversal",
          "summary": "Iterators provide a common way to refer to elements in many standard containers.",
          "content": [
            "Iterators behave like generalized pointers for many container operations. begin() refers to the first element and end() is a past-the-last marker; end() must not be dereferenced.",
            "Range-based for loops are often the simplest way to traverse all elements. Use explicit iterators when an algorithm needs iterator operations or when you need to erase elements according to container-specific rules."
          ],
          "example": "#include <vector>\n#include <iostream>\n\nstd::vector<int> values{3, 5, 7};\nfor (auto it = values.begin(); it != values.end(); ++it) {\n    std::cout << *it << '\\n';\n}",
          "quest": {
            "prompt": "What does a container's end() iterator represent?",
            "choices": [
              "A position just after the last element",
              "The last element itself in every container",
              "The container's memory address"
            ],
            "answer": 0,
            "explanation": "end() is a past-the-end position and is used as a stopping condition. It is not an element to dereference."
          }
        },
        {
          "id": "cpp-algorithms-lambdas",
          "title": "Algorithms and lambda expressions",
          "summary": "Standard algorithms and lambdas let you describe what should happen without writing every loop yourself.",
          "content": [
            "Algorithms such as std::sort, std::find, std::count_if, and std::transform operate over iterator ranges. Include the algorithm header and verify the preconditions, such as requiring a suitable ordering for binary search.",
            "A lambda is an inline callable object. Its capture list controls which surrounding values it can access; use value captures for independent copies and reference captures only when the referenced variables outlive the lambda's use."
          ],
          "example": "#include <algorithm>\n#include <vector>\n\nstd::vector<int> values{5, 2, 8, 3};\nstd::sort(values.begin(), values.end());\nint evens = std::count_if(values.begin(), values.end(),\n    [](int value) { return value % 2 == 0; });",
          "quest": {
            "prompt": "What does count_if count?",
            "choices": [
              "Elements for which a supplied predicate is true",
              "The bytes allocated by a container",
              "Only the first element of a range"
            ],
            "answer": 0,
            "explanation": "std::count_if applies the predicate to elements and counts those for which it returns true."
          }
        }
      ],
      "checkpoint": "Try it: build a word-frequency counter using a map, then display the most useful summaries and explain why you chose that container."
    },
    {
      "id": "cpp-errors-files",
      "title": "Exceptions, validation, and file handling",
      "level": "Intermediate",
      "description": "Handle invalid input and operational failures explicitly, and read or write files using standard C++ streams.",
      "outcomes": [
        "Use exceptions for exceptional failure paths without hiding errors.",
        "Validate inputs at program boundaries.",
        "Read and write text files with checked stream state."
      ],
      "lessons": [
        {
          "id": "cpp-exceptions",
          "title": "Exceptions and error paths",
          "summary": "Exceptions report failures that prevent an operation from completing normally.",
          "content": [
            "Throw an exception when an operation cannot fulfill its contract and the caller can meaningfully handle the failure. Catch by const reference for polymorphic exception types, and avoid catching everything merely to silence failures.",
            "Use ordinary return values or types such as std::optional when absence is an expected outcome. Exceptions are not a substitute for validating ordinary user input or documenting failure behavior."
          ],
          "example": "#include <stdexcept>\n\nint divide(int numerator, int denominator) {\n    if (denominator == 0) {\n        throw std::invalid_argument(\"denominator must not be zero\");\n    }\n    return numerator / denominator;\n}",
          "quest": {
            "prompt": "What should divide() do when its denominator is zero in this contract?",
            "choices": [
              "Report the invalid argument instead of performing division",
              "Continue with undefined assumptions",
              "Return an unrelated random number"
            ],
            "answer": 0,
            "explanation": "A zero denominator violates the function's contract, so it should be reported through a defined error path."
          }
        },
        {
          "id": "cpp-file-streams",
          "title": "Read and write files",
          "summary": "File streams connect C++ input and output operations to files.",
          "content": [
            "Use std::ifstream to read and std::ofstream to write. Check that a stream opened successfully before relying on it, and use the stream's state to detect failures.",
            "A common line-reading pattern is while (std::getline(file, line)); it processes each line only when the read succeeds. Do not use while (!file.eof()) as the primary loop condition, because end-of-file is usually set only after a read attempt fails."
          ],
          "example": "#include <fstream>\n#include <string>\n\nstd::ifstream file(\"input.txt\");\nif (!file) {\n    throw std::runtime_error(\"Cannot open input.txt\");\n}\nstd::string line;\nwhile (std::getline(file, line)) {\n    // Process this line.\n}",
          "quest": {
            "prompt": "What is a robust condition for processing each line from a file?",
            "choices": [
              "while (std::getline(file, line))",
              "while (!file.eof()) with no read check",
              "while (true) with no exit"
            ],
            "answer": 0,
            "explanation": "The getline operation returns the stream, allowing the loop to continue only while a line is read successfully."
          }
        },
        {
          "id": "cpp-input-validation",
          "title": "Validate and parse external input",
          "summary": "External input should be checked before it is trusted by the rest of a program.",
          "content": [
            "Validate ranges, required fields, and format at the boundary where data enters the program. A successful extraction does not necessarily mean a value is semantically valid; for example, a quantity may parse as an integer but still be negative when negatives are forbidden.",
            "Separate parsing from business rules so the core logic can be tested without console interaction. For robust command-line input, consider reading a full line and parsing it deliberately, especially when trailing junk should be rejected."
          ],
          "example": "int quantity{};\nstd::cout << \"Quantity: \";\nif (!(std::cin >> quantity) || quantity < 0) {\n    std::cerr << \"Enter a non-negative whole number.\\n\";\n    return 1;\n}",
          "quest": {
            "prompt": "Does successful integer parsing guarantee that the input is valid for every application?",
            "choices": [
              "No; application rules and ranges must also be checked",
              "Yes; every integer is valid for every purpose",
              "Only if the variable is global"
            ],
            "answer": 0,
            "explanation": "Parsing establishes a representation, but business rules still determine whether that value is acceptable."
          }
        }
      ],
      "checkpoint": "Try it: implement a program that loads records from a text file, detects missing or malformed data, and reports a useful error instead of silently using invalid values."
    },
    {
      "id": "cpp-templates-modern",
      "title": "Templates and modern C++ features",
      "level": "Advanced",
      "description": "Write reusable generic code and use modern language features that improve safety, clarity, and performance.",
      "outcomes": [
        "Write function and class templates.",
        "Explain move semantics at a practical level.",
        "Use selected C++17 utilities such as optional, variant, and structured bindings."
      ],
      "lessons": [
        {
          "id": "cpp-function-templates",
          "title": "Function and class templates",
          "summary": "Templates let the compiler generate code for types that satisfy the operations the template uses.",
          "content": [
            "A function template describes a family of functions parameterized by types or values. The compiler deduces template arguments from a call when possible and instantiates a concrete version for the types used.",
            "Templates do not make every type compatible automatically: the chosen type must support the expressions the template performs. Keep generic interfaces focused and give clear diagnostics when a required operation is missing."
          ],
          "example": "template <typename T>\nT larger(T left, T right) {\n    return left < right ? right : left;\n}\n\nint a = larger(3, 5);\ndouble b = larger(2.5, 1.5);",
          "quest": {
            "prompt": "What is a key benefit of a function template?",
            "choices": [
              "It can support multiple compatible types without duplicating the algorithm",
              "It makes type checking unnecessary",
              "It executes only when the source file is opened"
            ],
            "answer": 0,
            "explanation": "A template allows the compiler to generate type-specific functions from one reusable definition, as long as the operations are valid for those types."
          }
        },
        {
          "id": "cpp-move-semantics",
          "title": "Copying, moving, and value categories",
          "summary": "Move operations can transfer resources from temporary or expiring objects instead of duplicating them.",
          "content": [
            "Copying typically creates another value with equivalent state; moving can transfer resources such as a string's allocated buffer. The standard library types manage their own copy and move behavior, so prefer using them rather than manually moving raw resources.",
            "std::move is a cast that allows an object to be treated as an rvalue; it does not move anything by itself. After moving from an object, its state is valid but should only be relied on according to the type's documented guarantees."
          ],
          "example": "#include <string>\n#include <utility>\n\nstd::string source{\"a long message\"};\nstd::string destination = std::move(source);\n// destination now owns the transferred value.\n// source is valid, but its value is unspecified.",
          "quest": {
            "prompt": "What does std::move itself do?",
            "choices": [
              "It enables an expression to be treated as an rvalue; a move may happen in the operation that uses it",
              "It always copies the object",
              "It immediately destroys the source object"
            ],
            "answer": 0,
            "explanation": "std::move performs a cast. The selected constructor or assignment operation determines whether resources are transferred."
          }
        },
        {
          "id": "cpp-modern-utilities",
          "title": "optional, variant, and structured bindings",
          "summary": "Modern library utilities make absence and alternative types explicit in program interfaces.",
          "content": [
            "std::optional<T> represents either a value of type T or no value. Check has_value() or use the available access patterns before assuming a value exists.",
            "std::variant represents one value from a set of alternative types. Structured bindings can unpack pairs and other supported objects into named local bindings, which often improves readability when iterating over maps."
          ],
          "example": "#include <optional>\n#include <string>\n#include <utility>\n\nstd::optional<int> parseScore(const std::string& text);\nstd::pair<std::string, int> entry{\"pen\", 12};\nauto [name, count] = entry;\n// name is \"pen\" and count is 12.",
          "quest": {
            "prompt": "What does an empty std::optional<int> represent?",
            "choices": [
              "The absence of an int value",
              "An int with every possible value at once",
              "An automatically allocated array"
            ],
            "answer": 0,
            "explanation": "std::optional represents a value that may or may not be present, making absence explicit in the type."
          }
        }
      ],
      "checkpoint": "Try it: write a reusable template for finding the maximum value in a compatible sequence, then use std::optional to represent a search that may find nothing."
    },
    {
      "id": "cpp-project-quality",
      "title": "Project structure, testing, and debugging",
      "level": "Advanced",
      "description": "Organize multi-file programs, build with useful diagnostics, and test correctness including boundary and failure cases.",
      "outcomes": [
        "Separate declarations and definitions across headers and source files.",
        "Use namespaces and a repeatable build command.",
        "Create meaningful tests and use debugging tools systematically."
      ],
      "lessons": [
        {
          "id": "cpp-headers-namespaces",
          "title": "Headers, source files, and namespaces",
          "summary": "A well-organized C++ project separates public interfaces from implementation details.",
          "content": [
            "Headers commonly declare classes, functions, and shared types; source files define non-inline functions. Use include guards or #pragma once according to the project's conventions to avoid repeated inclusion problems.",
            "Namespaces group names and reduce collisions. Avoid placing using namespace std; in public headers, because it can force every file that includes the header to import those names into its own scope."
          ],
          "example": "// geometry.h\n#pragma once\n\nnamespace geometry {\n    double areaOfCircle(double radius);\n}\n\n// geometry.cpp\n#include \"geometry.h\"\n\nnamespace geometry {\n    double areaOfCircle(double radius) {\n        return 3.141592653589793 * radius * radius;\n    }\n}",
          "quest": {
            "prompt": "Why use a namespace?",
            "choices": [
              "To group related names and reduce naming collisions",
              "To disable type checking",
              "To make every variable global"
            ],
            "answer": 0,
            "explanation": "Namespaces organize identifiers and allow unrelated libraries to use similar names without necessarily colliding."
          }
        },
        {
          "id": "cpp-build-warnings",
          "title": "Build commands and compiler warnings",
          "summary": "A repeatable build command helps catch issues consistently across a project.",
          "content": [
            "For a small multi-file program, pass the relevant .cpp files to the compiler and choose the language standard explicitly. For larger projects, a build system such as CMake helps manage targets, dependencies, and platform differences.",
            "Enable warnings such as -Wall and -Wextra with GCC or Clang, and treat them as useful review signals. Warnings are not proof of a bug, and their absence is not proof of correctness."
          ],
          "example": "g++ -std=c++17 -Wall -Wextra -Wpedantic main.cpp geometry.cpp -o app\n./app",
          "quest": {
            "prompt": "What is the benefit of specifying -std=c++17?",
            "choices": [
              "It selects the C++ language standard mode for compilation",
              "It automatically writes unit tests",
              "It guarantees the code has no bugs"
            ],
            "answer": 0,
            "explanation": "The option selects C++17 language and library expectations for the compiler; it does not guarantee correctness."
          }
        },
        {
          "id": "cpp-testing-debugging",
          "title": "Testing and debugging systematically",
          "summary": "Focused tests and deliberate debugging make failures easier to reproduce and fix.",
          "content": [
            "Test normal cases, boundaries, and invalid inputs. Include empty collections, one-element collections, minimum and maximum values, failed file operations, and repeated calls when those cases apply to the requirements.",
            "When a test fails, reproduce the failure, reduce it to the smallest useful case, inspect relevant state with a debugger or logging, and verify the fix with the same test. Sanitizers and static analysis can reveal classes of defects but do not replace design and review."
          ],
          "example": "bool isValidScore(int score) {\n    return score >= 0 && score <= 100;\n}\n\n// Useful tests: -1, 0, 50, 100, 101.",
          "quest": {
            "prompt": "Why are boundary tests important?",
            "choices": [
              "They exercise assumptions that ordinary examples can miss",
              "They guarantee no future defect can occur",
              "They remove the need for input validation"
            ],
            "answer": 0,
            "explanation": "Boundary tests target transitions and unusual states where off-by-one and range errors commonly appear."
          }
        }
      ],
      "checkpoint": "Try it: split a small program into a header, implementation file, and main file. Add tests for normal and boundary behavior, then compile with warnings enabled."
    },
    {
      "id": "cpp-concurrency",
      "title": "Concurrency fundamentals",
      "level": "Advanced",
      "description": "Understand basic multithreading tools and shared-state risks, and learn when concurrency adds complexity rather than value.",
      "outcomes": [
        "Start and join a thread safely.",
        "Protect shared mutable state with a mutex.",
        "Recognize data races and the role of higher-level synchronization."
      ],
      "lessons": [
        {
          "id": "cpp-threads",
          "title": "Starting and joining threads",
          "summary": "A thread allows a program to execute work concurrently with other threads.",
          "content": [
            "The thread header provides std::thread. A joinable thread should be joined or detached before its thread object is destroyed; for straightforward tasks, joining is usually easier to reason about than detaching.",
            "Concurrent execution does not guarantee a particular interleaving or output order. Keep shared state explicit and define how the main thread waits for worker tasks to finish."
          ],
          "example": "#include <iostream>\n#include <thread>\n\nvoid work() {\n    std::cout << \"Worker finished\\n\";\n}\n\nint main() {\n    std::thread worker(work);\n    worker.join();\n}",
          "quest": {
            "prompt": "What does worker.join() do?",
            "choices": [
              "Waits for the worker thread to finish",
              "Starts the worker a second time",
              "Deletes the source code"
            ],
            "answer": 0,
            "explanation": "join() blocks the calling thread until the represented thread has completed."
          }
        },
        {
          "id": "cpp-mutex",
          "title": "Mutexes and shared data",
          "summary": "A mutex can ensure only one thread at a time accesses a protected critical section.",
          "content": [
            "Unsynchronized concurrent access to the same memory, when at least one access modifies it, can create a data race and undefined behavior. A mutex protects shared state by allowing only one thread to hold the lock at a time.",
            "Prefer std::lock_guard or std::scoped_lock to manage lock lifetime automatically. Keep critical sections small and avoid calling unknown code while holding a lock, because that can cause contention or deadlocks."
          ],
          "example": "#include <mutex>\n\nstd::mutex countMutex;\nint total{0};\n\nvoid addWork() {\n    std::lock_guard<std::mutex> lock(countMutex);\n    ++total;\n}",
          "quest": {
            "prompt": "What problem does a mutex help prevent when used consistently?",
            "choices": [
              "Conflicting unsynchronized access to protected shared data",
              "All compiler errors",
              "Every possible performance problem"
            ],
            "answer": 0,
            "explanation": "A mutex serializes access to a protected critical section, preventing data races on that state when all access follows the locking discipline."
          }
        },
        {
          "id": "cpp-futures-design",
          "title": "Tasks, futures, and concurrency design",
          "summary": "Higher-level task tools can make results and synchronization more explicit.",
          "content": [
            "std::future can represent a result that will become available later, and std::async can run a callable according to its launch policy. Retrieving a result with get() waits when necessary and can rethrow an exception from the task.",
            "Do not introduce threads merely to make code appear advanced. First identify independent work, shared state, cancellation and error handling needs, and the cost of synchronization; simpler sequential code is often easier to verify."
          ],
          "example": "#include <future>\n\nint compute() { return 6 * 7; }\n\nint main() {\n    auto result = std::async(std::launch::async, compute);\n    int answer = result.get(); // waits and obtains 42\n}",
          "quest": {
            "prompt": "What happens when future.get() is called before the result is ready?",
            "choices": [
              "It waits for the result and returns it, or propagates a stored exception",
              "It always returns immediately with zero",
              "It cancels the task in every case"
            ],
            "answer": 0,
            "explanation": "get() obtains the shared result and may block until it is ready; it can also propagate an exception stored by the asynchronous operation."
          }
        }
      ],
      "checkpoint": "Try it: create two independent computations, collect their results, and explain why the work is safe to run concurrently. Then identify what synchronization would be required if they shared mutable state."
    }
  ],
  "capstone": {
    "title": "C++ capstone: Personal expense tracker",
    "brief": "Build a command-line expense tracker that records expense descriptions, categories, dates, and amounts. Use classes to model records, standard containers to manage them, algorithms to summarize spending, and file streams to save and reload data. Validate every input and handle file errors explicitly.",
    "milestones": [
      "Define an Expense class or struct with a clear representation for description, category, date, and amount; validate the values at the program boundary.",
      "Create a menu for adding, listing, searching, and removing expenses, with each operation implemented as a focused function.",
      "Store records in a std::vector and use standard algorithms or loops to calculate totals by category and date range.",
      "Read and write records using file streams, checking open and operation states and defining how malformed records are handled.",
      "Add a summary report, tests for empty and invalid inputs, file-error cases, and boundary amounts; compile with warnings and document the build steps."
    ]
  }
};

export default cppCourse;
