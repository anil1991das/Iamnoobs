import type { CourseConfig } from "../types";

export const golangCourse: CourseConfig = {
  "slug": "golang",
  "language": "Go (Golang)",
  "title": "Learn Go (Golang): Beginner to Advanced",
  "icon": "🐹",
  "levelLabel": "Beginner to advanced",
  "description": "Learn Go from first principles through packages, error handling, interfaces, generics, testing, concurrency, HTTP APIs, and production practices with short lessons, guided code, quizzes, checkpoints, and a capstone.",
  "metaDescription": "A structured Go programming course covering syntax, types, control flow, slices, maps, structs, methods, interfaces, packages, modules, JSON, files, generics, tests, goroutines, channels, HTTP, context, profiling, and application design.",
  "audience": "Beginners and developers who want to learn Go for command-line tools, backend services, networked applications, automation, and concurrent systems.",
  "prerequisites": "No prior Go experience is required. Basic familiarity with files and running commands is helpful. Examples use the standard library where practical; some examples are snippets rather than standalone files and are explanatory rather than executed on this website.",
  "modules": [
    {
      "id": "go-first-program",
      "title": "Meet Go and write your first program",
      "level": "Beginner",
      "description": "Understand Go's design, toolchain, program structure, and basic console output.",
      "outcomes": [
        "Describe the roles of the Go compiler, runtime, and go tool.",
        "Recognize package main and the main function in an executable.",
        "Run a small program and use compiler feedback to fix errors."
      ],
      "lessons": [
        {
          "id": "go-hello-world",
          "title": "Packages, imports, and main",
          "summary": "A Go executable starts in package main at the main function.",
          "content": [
            "Go source files declare a package. A runnable command uses package main and defines func main() as its entry point. Imported packages provide reusable functionality, such as fmt for formatted input and output.",
            "Go intentionally keeps syntax compact. Names imported but not used cause compilation errors, which encourages removing stale dependencies and keeping examples tidy."
          ],
          "example": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
          "quest": {
            "prompt": "Which combination identifies the entry point of a standard Go executable?",
            "choices": [
              "package main with func main()",
              "package fmt with func start()",
              "Any function named init() only"
            ],
            "answer": 0,
            "explanation": "A runnable Go command declares package main and provides func main(). The fmt package is a library, not an entry point."
          }
        },
        {
          "id": "go-run-and-build",
          "title": "Run, build, and format Go code",
          "summary": "The go tool runs, builds, formats, and tests Go projects.",
          "content": [
            "For a single file, go run main.go compiles and runs the program. go build creates a compiled executable for the current package, while go version reports the installed toolchain version.",
            "Use gofmt to apply standard formatting instead of manually debating whitespace. When compilation fails, read the first useful diagnostic and check its file, line, and reported symbol."
          ],
          "example": "gofmt -w main.go\ngo run main.go\ngo build .\ngo version",
          "quest": {
            "prompt": "Which command applies Go's standard source formatting?",
            "choices": [
              "gofmt",
              "go cleanfmt",
              "go compile-style"
            ],
            "answer": 0,
            "explanation": "gofmt formats Go source in a consistent canonical style. It does not run the program or replace tests."
          }
        },
        {
          "id": "go-comments-and-identifiers",
          "title": "Comments, names, and basic syntax",
          "summary": "Go uses case-sensitive identifiers and familiar line and block comments.",
          "content": [
            "Go identifiers are case-sensitive: total and Total are different names. Names that begin with an uppercase letter are exported from a package; lowercase names are package-private.",
            "Use // for a line comment and /* ... */ for a block comment. Write comments to explain intent, contracts, or non-obvious decisions rather than repeating what each line already says."
          ],
          "example": "package main\n\nimport \"fmt\"\n\nconst AppName = \"StudyTrack\" // exported-style identifier\n\nfunc main() {\n    userCount := 3 // local name\n    fmt.Println(AppName, userCount)\n}",
          "quest": {
            "prompt": "In a Go package, what does an identifier beginning with an uppercase letter generally indicate?",
            "choices": [
              "It is exported and can be accessed by other packages",
              "It is always a constant",
              "It is a compiler directive"
            ],
            "answer": 0,
            "explanation": "Go uses capitalization to control package visibility. Uppercase initial letters are exported; lowercase initial letters are not exported."
          }
        }
      ],
      "checkpoint": "Create main.go that prints your name, the Go version you are learning, and three short lines of output. Format it with gofmt and run it with go run."
    },
    {
      "id": "go-values-types",
      "title": "Variables, types, and constants",
      "level": "Beginner",
      "description": "Declare values, select suitable types, and understand initialization, constants, and conversions.",
      "outcomes": [
        "Declare variables with var and short declarations.",
        "Choose common numeric, string, and Boolean types.",
        "Use constants and explicit conversions deliberately."
      ],
      "lessons": [
        {
          "id": "go-variables-declarations",
          "title": "Variables and short declarations",
          "summary": "Variables have declared types, and := infers a local variable's type.",
          "content": [
            "Use var name Type to declare a variable, optionally with an initializer. Inside a function, := declares and initializes a new local variable with a type inferred from the expression.",
            "A declared variable receives its type's zero value if it is not explicitly initialized: numeric types start at zero, bool starts false, and string starts empty. Go does not permit unused local variables."
          ],
          "example": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    var attempts int\n    language := \"Go\"\n    fmt.Println(attempts) // 0\n    fmt.Println(language)\n}",
          "quest": {
            "prompt": "What does := do inside a function when declaring a new local variable?",
            "choices": [
              "Declares and initializes a variable with an inferred type",
              "Declares a package-level constant",
              "Converts every value to a string"
            ],
            "answer": 0,
            "explanation": ":= is the short variable declaration form. It infers the type from the right-hand expression and is allowed inside functions."
          }
        },
        {
          "id": "go-built-in-types",
          "title": "Built-in types and zero values",
          "summary": "Go provides numeric, Boolean, string, and byte/rune types for common data.",
          "content": [
            "Common types include int, int64, float64, bool, and string. byte is an alias for uint8 and is often used for raw bytes; rune is an alias for int32 and represents a Unicode code point.",
            "The exact size of int depends on the target architecture, so use a fixed-width type when a data format or interface requires a specific width. A string is an immutable sequence of bytes, not an automatically indexed sequence of user-perceived characters."
          ],
          "example": "var count int = 12\nvar price float64 = 19.5\nvar enabled bool = true\nvar message string = \"hello\"\nvar firstByte byte = message[0]\n_ = count\n_ = price\n_ = enabled\n_ = firstByte",
          "quest": {
            "prompt": "Which Go type is commonly used to represent a Unicode code point when iterating by code point?",
            "choices": [
              "rune",
              "bool",
              "float64"
            ],
            "answer": 0,
            "explanation": "rune is an alias for int32 and is used for Unicode code points. String indexing by byte is different from rune iteration."
          }
        },
        {
          "id": "go-constants-conversions",
          "title": "Constants and type conversions",
          "summary": "Constants name fixed values, and Go requires explicit conversions between many distinct types.",
          "content": [
            "Use const for values that do not change. Constants can be untyped until context gives them a type, which allows some constant expressions to be used flexibly while still checking representability.",
            "Go does not silently convert between distinct numeric types in ordinary assignments. Write an explicit conversion such as float64(count) when the conversion is intended, and consider precision loss or overflow when choosing the destination type."
          ],
          "example": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    const taxRate = 0.08\n    count := 4\n    rate := float64(count) + taxRate\n    fmt.Println(rate)\n}",
          "quest": {
            "prompt": "How should an int value be converted to float64 in Go?",
            "choices": [
              "Use an explicit conversion such as float64(value)",
              "Assign it directly in every context and rely on implicit conversion",
              "Prefix the value with #"
            ],
            "answer": 0,
            "explanation": "Go requires explicit conversions between many distinct numeric types, making conversion intent visible in source code."
          }
        }
      ],
      "checkpoint": "Write a small receipt calculation that uses a constant tax rate, an integer item count, a floating-point price, and an explicit conversion where needed."
    },
    {
      "id": "go-control-flow",
      "title": "Operators, decisions, and control flow",
      "level": "Beginner",
      "description": "Evaluate expressions, make decisions, and repeat work with Go's control-flow statements.",
      "outcomes": [
        "Use arithmetic, comparison, and logical operators.",
        "Write if/else branches and switch statements.",
        "Use for loops and avoid accidental infinite loops."
      ],
      "lessons": [
        {
          "id": "go-operators",
          "title": "Arithmetic and comparison operators",
          "summary": "Operators combine values into calculations and Boolean comparisons.",
          "content": [
            "Arithmetic operators include +, -, *, /, and %, while comparisons include ==, !=, <, <=, >, and >=. The result of a comparison is a bool, which can be used directly in a condition.",
            "Integer division truncates the fractional part, so 7 / 2 evaluates to 3 when both operands are integers. Convert an operand to floating point when a fractional result is required."
          ],
          "example": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(7 / 2)         // 3\n    fmt.Println(float64(7) / 2) // 3.5\n    fmt.Println(7%2 == 1)       // true\n}",
          "quest": {
            "prompt": "What is the result of 7 / 2 when both operands are integers?",
            "choices": [
              "3",
              "3.5",
              "4"
            ],
            "answer": 0,
            "explanation": "Integer division produces an integer result and discards the fractional part. Use a floating-point operand for a fractional quotient."
          }
        },
        {
          "id": "go-if-else",
          "title": "Conditions with if and else",
          "summary": "Go conditions use if and may include an initializer before the condition.",
          "content": [
            "A Go if statement does not require parentheses around the condition, but its braces are required. else and else if allow related branches to be expressed clearly.",
            "An if statement can include a short initializer whose scope is limited to the if statement and its branches. This is useful when checking a value immediately after calculating it."
          ],
          "example": "score := 82\nif score >= 90 {\n    fmt.Println(\"Excellent\")\n} else if score >= 60 {\n    fmt.Println(\"Pass\")\n} else {\n    fmt.Println(\"Keep practicing\")\n}",
          "quest": {
            "prompt": "Which is valid Go syntax for an if condition?",
            "choices": [
              "if score >= 60 { ... }",
              "if (score >= 60) then { ... }",
              "if score >= 60: ..."
            ],
            "answer": 0,
            "explanation": "Go uses if condition followed by a braced block. Parentheses are optional but not idiomatic, and there is no then or colon syntax."
          }
        },
        {
          "id": "go-switch-and-for",
          "title": "Switch statements and for loops",
          "summary": "Go uses switch for multiway branching and for as its looping construct.",
          "content": [
            "A switch evaluates cases and executes the matching case; cases do not fall through by default. A switch without an expression can make several Boolean conditions easier to read.",
            "Go has one loop keyword: for. It supports a three-part loop, a condition-only loop, and range iteration. Make sure loop conditions eventually become false unless an intentional infinite loop has a controlled exit."
          ],
          "example": "for i := 0; i < 3; i++ {\n    fmt.Println(i)\n}\n\nstatus := \"ready\"\nswitch status {\ncase \"ready\":\n    fmt.Println(\"Start\")\ncase \"paused\":\n    fmt.Println(\"Wait\")\ndefault:\n    fmt.Println(\"Unknown\")\n}",
          "quest": {
            "prompt": "Which keyword does Go use for its traditional counting loop?",
            "choices": [
              "for",
              "loop",
              "repeat"
            ],
            "answer": 0,
            "explanation": "Go uses for for counting loops, condition-based loops, and range loops. It does not have separate while or do-while keywords."
          }
        }
      ],
      "checkpoint": "Build a small grade classifier using if/else and switch. Then print numbers in a range using for and identify the condition that stops the loop."
    },
    {
      "id": "go-arrays-slices",
      "title": "Arrays, slices, and iteration",
      "level": "Beginner",
      "description": "Store ordered values and understand the crucial differences between arrays and slices.",
      "outcomes": [
        "Declare arrays and slices and access elements safely.",
        "Use append and range for common sequence operations.",
        "Understand length, capacity, and shared backing arrays."
      ],
      "lessons": [
        {
          "id": "go-arrays",
          "title": "Fixed-size arrays",
          "summary": "An array has a fixed length that is part of its type.",
          "content": [
            "An array stores a fixed number of elements of one type. Its length is part of its type, so [3]int and [4]int are different types.",
            "Array values can be copied by assignment. For general-purpose lists that grow or shrink, slices are usually more convenient and are used much more often in Go application code."
          ],
          "example": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    scores := [3]int{80, 90, 95}\n    fmt.Println(scores[0])\n    fmt.Println(len(scores))\n}",
          "quest": {
            "prompt": "What distinguishes a Go array from a slice?",
            "choices": [
              "An array has a fixed length that is part of its type",
              "An array can only hold strings",
              "A slice cannot contain repeated values"
            ],
            "answer": 0,
            "explanation": "Array length is fixed and part of its type. Slices are flexible views over arrays and are usually used for dynamic sequences."
          }
        },
        {
          "id": "go-slices-append",
          "title": "Slices, make, and append",
          "summary": "A slice describes a variable-length view over an underlying array.",
          "content": [
            "A slice contains a pointer to an underlying array plus its length and capacity. You can make a slice with make or use a slice literal, and append returns a slice that must be captured because it may use a new backing array.",
            "Two slices can share the same backing array, so changing an element through one slice may be visible through another. Keep length and capacity in mind when taking subslices or appending values."
          ],
          "example": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    names := make([]string, 0, 2)\n    names = append(names, \"Ada\", \"Linus\")\n    fmt.Println(names, len(names), cap(names))\n}",
          "quest": {
            "prompt": "Why should you write names = append(names, value) rather than ignoring append's result?",
            "choices": [
              "append returns the updated slice, possibly with a new backing array",
              "append only works when the slice is empty",
              "append prints the value and returns nothing"
            ],
            "answer": 0,
            "explanation": "append returns the resulting slice. The backing array may change when capacity is insufficient, so the returned slice must be retained."
          }
        },
        {
          "id": "go-range-and-copy",
          "title": "Iterate with range and understand copying",
          "summary": "range visits elements in arrays, slices, maps, strings, and channels.",
          "content": [
            "For a slice, range can provide an index and a copied element value. Changing that loop variable does not replace the element in the slice; use the index to update the original element.",
            "Use the blank identifier _ when a returned value is not needed. This keeps code clear and also satisfies Go's rule that declared local variables must be used."
          ],
          "example": "values := []int{2, 4, 6}\nfor i, value := range values {\n    fmt.Println(i, value)\n    values[i] = value * 2\n}\nfmt.Println(values) // [4 8 12]",
          "quest": {
            "prompt": "In `for _, value := range values`, what does the underscore do?",
            "choices": [
              "Discards the index value because it is not needed",
              "Turns value into a pointer",
              "Skips every second element"
            ],
            "answer": 0,
            "explanation": "The blank identifier discards a value that the program does not need, such as the index in this loop."
          }
        }
      ],
      "checkpoint": "Write a function that accepts a slice of integers and returns the minimum and maximum. Test empty, one-element, and multi-element slices, and document how an empty slice is handled."
    },
    {
      "id": "go-functions-errors",
      "title": "Functions, multiple returns, and errors",
      "level": "Beginner",
      "description": "Design reusable functions, pass values deliberately, and handle failures through Go's error convention.",
      "outcomes": [
        "Declare functions with parameters and return values.",
        "Use multiple return values and named results appropriately.",
        "Create and check error values instead of ignoring failures."
      ],
      "lessons": [
        {
          "id": "go-function-basics",
          "title": "Parameters and return values",
          "summary": "Functions make behavior reusable and define clear inputs and outputs.",
          "content": [
            "A function signature declares its name, parameters, and return types. Go allows multiple return values, which are often used to return a result together with an error.",
            "Arguments are passed by value. When a slice or map is passed, the copied value still refers to underlying data, so a function can update elements or entries; assigning a new slice to the parameter itself does not replace the caller's slice variable."
          ],
          "example": "func add(a int, b int) int {\n    return a + b\n}\n\nfunc divide(a, b float64) (float64, bool) {\n    if b == 0 {\n        return 0, false\n    }\n    return a / b, true\n}",
          "quest": {
            "prompt": "What does a function signature `(float64, bool)` indicate?",
            "choices": [
              "The function returns two values: a float64 and a bool",
              "The function accepts two float64 parameters only",
              "The function can only be called twice"
            ],
            "answer": 0,
            "explanation": "Go functions can return multiple values. Here the result and a Boolean status are returned together."
          }
        },
        {
          "id": "go-multiple-returns",
          "title": "Multiple returns and early exits",
          "summary": "Multiple return values can make success and failure paths explicit.",
          "content": [
            "Many standard library functions return a value and an error. Check the error before using the result, and return early when the operation cannot continue safely.",
            "Named return values are available, but explicit return expressions are often easier to follow in longer functions. Choose the style that keeps the function's contract obvious."
          ],
          "example": "func parsePositive(n int) (int, error) {\n    if n <= 0 {\n        return 0, fmt.Errorf(\"number must be positive\")\n    }\n    return n, nil\n}",
          "quest": {
            "prompt": "What does a nil error commonly indicate when returned by a Go function?",
            "choices": [
              "The operation succeeded",
              "The program should terminate immediately",
              "The result must be ignored"
            ],
            "answer": 0,
            "explanation": "The idiomatic convention is to return nil when no error occurred and a non-nil error when an operation failed."
          }
        },
        {
          "id": "go-error-handling",
          "title": "Create and handle errors",
          "summary": "Go usually represents expected failures with explicit error return values.",
          "content": [
            "The built-in error interface is used to report failure. The standard errors package can create simple errors, while fmt.Errorf can attach context to an error message.",
            "Handle errors near the operation that can fail. Avoid discarding errors with _, especially for file, network, and data-writing operations, where ignoring failure can hide lost data or broken behavior."
          ],
          "example": "package main\n\nimport (\n    \"errors\"\n    \"fmt\"\n)\n\nfunc positive(n int) error {\n    if n <= 0 {\n        return errors.New(\"value must be positive\")\n    }\n    return nil\n}\n\nfunc main() {\n    if err := positive(-1); err != nil {\n        fmt.Println(\"invalid input:\", err)\n    }\n}",
          "quest": {
            "prompt": "What is the idiomatic first step after a function returns an error?",
            "choices": [
              "Check whether err is non-nil and handle it",
              "Assume the operation succeeded",
              "Convert err to an integer"
            ],
            "answer": 0,
            "explanation": "Go makes errors explicit, so callers should inspect a returned error and decide whether to return it, add context, retry, or recover."
          }
        }
      ],
      "checkpoint": "Write a function that calculates an average and returns an error for an empty input. Write callers that handle both valid results and failures."
    },
    {
      "id": "go-maps-structs-methods",
      "title": "Maps, structs, and methods",
      "level": "Intermediate",
      "description": "Model domain data with structs, look up values with maps, and attach behavior through methods.",
      "outcomes": [
        "Use maps for key-value data and handle missing keys.",
        "Define structs and initialize values clearly.",
        "Choose value or pointer receivers based on mutation and size."
      ],
      "lessons": [
        {
          "id": "go-maps",
          "title": "Maps and safe lookups",
          "summary": "Maps associate keys with values and report whether a key exists.",
          "content": [
            "A map stores key-value associations and can be created with a map literal or make. A lookup returns the value's zero value when a key is absent, so use the comma-ok form when presence matters.",
            "Map iteration order is unspecified. Do not rely on entries appearing in the same order between runs; sort keys separately when deterministic output is required."
          ],
          "example": "scores := map[string]int{\"Mina\": 90}\nscore, ok := scores[\"Mina\"]\nif ok {\n    fmt.Println(score)\n}\n_, exists := scores[\"Ravi\"]\nfmt.Println(exists) // false",
          "quest": {
            "prompt": "What does the second value in `value, ok := m[key]` tell you?",
            "choices": [
              "Whether the key exists in the map",
              "The capacity of the map",
              "Whether the map is sorted"
            ],
            "answer": 0,
            "explanation": "The comma-ok lookup returns a Boolean indicating whether the key was present, even when the mapped value could be its zero value."
          }
        },
        {
          "id": "go-structs",
          "title": "Structs and composite literals",
          "summary": "Structs group named fields into an application-specific data type.",
          "content": [
            "A struct combines fields that belong together, such as a task's title, due date, and completion status. Use a composite literal to initialize fields and improve readability by naming fields explicitly.",
            "A struct value is copied on assignment. A pointer to a struct lets code share access to the same object, and the field selector automatically dereferences a pointer for ordinary field access."
          ],
          "example": "type Task struct {\n    Title string\n    Done  bool\n}\n\ntask := Task{Title: \"Read Go docs\", Done: false}\ntask.Done = true",
          "quest": {
            "prompt": "What is a benefit of a named-field struct literal such as `Task{Title: \"Read\", Done: false}`?",
            "choices": [
              "It makes each initialized field clear and less dependent on field order",
              "It automatically validates every field",
              "It turns the struct into a map"
            ],
            "answer": 0,
            "explanation": "Named-field literals are readable and remain clear if fields are reordered or additional fields are introduced."
          }
        },
        {
          "id": "go-methods-receivers",
          "title": "Methods and receivers",
          "summary": "Methods associate behavior with a defined type through a receiver parameter.",
          "content": [
            "A method is a function with a receiver. A value receiver operates on a copy; a pointer receiver can modify the original value and avoids copying larger structs in many situations.",
            "Use receiver consistency within a type where practical. A pointer receiver is also needed when a method must mutate the receiver or when copying the value would be undesirable."
          ],
          "example": "type Counter struct {\n    Value int\n}\n\nfunc (c *Counter) Increment() {\n    c.Value++\n}\n\nvar counter Counter\ncounter.Increment()",
          "quest": {
            "prompt": "When is a pointer receiver especially useful?",
            "choices": [
              "When a method must mutate the receiver's original value",
              "When a method must always create a copy",
              "When a type has no fields"
            ],
            "answer": 0,
            "explanation": "A pointer receiver gives the method access to the original value, which is useful for mutation and for avoiding copies of larger values."
          }
        }
      ],
      "checkpoint": "Create a Task struct, use a map to look up tasks by ID, and add methods to mark a task complete. Handle lookups for IDs that do not exist."
    },
    {
      "id": "go-pointers-interfaces",
      "title": "Pointers, interfaces, and composition",
      "level": "Intermediate",
      "description": "Understand addresses, express behavior with interfaces, and combine types without class inheritance.",
      "outcomes": [
        "Use pointers while respecting nil values and object identity.",
        "Define small interfaces based on behavior.",
        "Compose structs by embedding fields or interfaces where appropriate."
      ],
      "lessons": [
        {
          "id": "go-pointers",
          "title": "Pointers and addresses",
          "summary": "A pointer stores the address of a value, and the zero value of a pointer is nil.",
          "content": [
            "The address operator & obtains a value's address, and * dereferences a pointer. Go does not support pointer arithmetic, which avoids a broad class of unsafe address manipulations found in some lower-level languages.",
            "A nil pointer cannot be dereferenced. Check whether pointers may be nil according to the function contract, and avoid returning pointers to data whose lifetime or ownership is unclear."
          ],
          "example": "value := 10\npointer := &value\n*pointer = 25\nfmt.Println(value) // 25",
          "quest": {
            "prompt": "What does `*pointer = 25` do when pointer refers to an int variable?",
            "choices": [
              "Writes 25 into the value that pointer points to",
              "Changes pointer into a string",
              "Allocates an array"
            ],
            "answer": 0,
            "explanation": "Dereferencing a valid pointer accesses the pointed-to value. Assigning through it updates that value."
          }
        },
        {
          "id": "go-interfaces",
          "title": "Interfaces and implicit implementation",
          "summary": "A type implements an interface by providing its required methods.",
          "content": [
            "An interface describes behavior through a set of method signatures. A type satisfies an interface implicitly by implementing those methods; it does not declare that it implements the interface.",
            "Prefer small interfaces that describe what a caller needs. This reduces coupling and makes functions easier to test with alternative implementations, such as in-memory fakes for storage or network services."
          ],
          "example": "type Stringer interface {\n    String() string\n}\n\ntype User struct { Name string }\nfunc (u User) String() string { return u.Name }\n\nfunc display(s Stringer) {\n    fmt.Println(s.String())\n}",
          "quest": {
            "prompt": "How does a Go type satisfy an interface?",
            "choices": [
              "By implementing the interface's required methods",
              "By extending the interface with a keyword",
              "By listing its fields in the interface"
            ],
            "answer": 0,
            "explanation": "Interface satisfaction is implicit: a type implements an interface when its method set contains the required methods."
          }
        },
        {
          "id": "go-composition-embedding",
          "title": "Composition and embedding",
          "summary": "Go encourages composing types from smaller values and behaviors rather than class inheritance.",
          "content": [
            "A struct can contain another struct as a named field, allowing one object to build on reusable components. Embedding promotes selected fields and methods for convenient access, but it is not the same as subclassing in an inheritance hierarchy.",
            "Use explicit named fields when they make ownership and dependencies clearer. Embedding is useful for forwarding behavior, but avoid it when it hides important relationships or creates confusing method promotion."
          ],
          "example": "type Logger struct{}\nfunc (Logger) Print(message string) { fmt.Println(message) }\n\ntype Service struct {\n    Log Logger\n}\n\nfunc (s Service) Start() {\n    s.Log.Print(\"service started\")\n}",
          "quest": {
            "prompt": "Which design approach is commonly emphasized in Go instead of class inheritance?",
            "choices": [
              "Composition using fields and small interfaces",
              "Multiple class inheritance",
              "Global variables for all behavior"
            ],
            "answer": 0,
            "explanation": "Go favors composing behavior from values and interfaces. Struct embedding can promote methods, but it is not conventional subclass inheritance."
          }
        }
      ],
      "checkpoint": "Define a small storage interface, implement it with an in-memory map-backed type, and write a function that accepts only the interface it needs."
    },
    {
      "id": "go-packages-modules-tooling",
      "title": "Packages, modules, and developer tooling",
      "level": "Intermediate",
      "description": "Organize code into packages and modules and use the Go toolchain for repeatable development.",
      "outcomes": [
        "Create a Go module with go mod init.",
        "Separate package APIs from internal implementation details.",
        "Use go test, go vet, and formatting tools in a development workflow."
      ],
      "lessons": [
        {
          "id": "go-modules",
          "title": "Go modules and dependencies",
          "summary": "A module defines a project and records its dependency requirements.",
          "content": [
            "A Go module is commonly rooted at a go.mod file. Run go mod init with your module path to create one, and use go get or go mod tidy as appropriate to manage dependencies and remove stale requirements.",
            "Commit go.mod and go.sum for an application so dependency versions and checksums are recorded. Review new dependencies for maintenance, license, security, and size before adding them."
          ],
          "example": "mkdir studytrack\ncd studytrack\ngo mod init example.com/studytrack\ngo mod tidy",
          "quest": {
            "prompt": "What is the main purpose of go.mod?",
            "choices": [
              "Describe the module path and dependency requirements",
              "Store every source file in one place",
              "Replace the Go compiler"
            ],
            "answer": 0,
            "explanation": "go.mod identifies the module and records required dependencies and version information. go.sum records checksums used for module verification."
          }
        },
        {
          "id": "go-packages-visibility",
          "title": "Packages and exported APIs",
          "summary": "Packages group related code, and capitalization controls which names are exported.",
          "content": [
            "Files in the same directory normally belong to the same package and can share unexported identifiers. A package can be imported by its module path, and imported names use the package name unless an alias is declared.",
            "Uppercase initial letters make top-level names and struct fields exported. Design packages around coherent responsibilities, and keep APIs small so callers do not depend on implementation details."
          ],
          "example": "// package mathutil\npackage mathutil\n\nfunc Add(a, b int) int { // exported\n    return a + b\n}\n\nfunc clampZero(n int) int { // unexported\n    if n < 0 { return 0 }\n    return n\n}",
          "quest": {
            "prompt": "What does a lowercase initial letter generally mean for a name declared in a Go package?",
            "choices": [
              "The name is unexported outside that package",
              "The name is automatically a constant",
              "The name is only available to the compiler"
            ],
            "answer": 0,
            "explanation": "Go's capitalization convention exports names that begin with uppercase letters. Lowercase names are accessible only within the declaring package, subject to scope."
          }
        },
        {
          "id": "go-quality-tools",
          "title": "Formatting, vetting, and testing commands",
          "summary": "Standard tools catch style problems, suspicious constructs, and regressions.",
          "content": [
            "A useful local workflow includes gofmt for formatting, go test ./... for tests across packages, and go vet ./... for suspicious patterns. These tools complement code review and do not prove that a program is correct.",
            "Keep tools reproducible in a project and run checks before committing changes. Fix clear diagnostics rather than suppressing them automatically, and add tests that cover boundary cases and failure paths."
          ],
          "example": "gofmt -w .\ngo test ./...\ngo vet ./...\ngo build ./...",
          "quest": {
            "prompt": "Which command runs tests in the current module and its packages recursively?",
            "choices": [
              "go test ./...",
              "go test --all-files-only",
              "go run ./tests"
            ],
            "answer": 0,
            "explanation": "The package pattern ./... matches packages recursively from the current directory, which is useful for validating a module."
          }
        }
      ],
      "checkpoint": "Create a module with a reusable package and a main package. Export one function, keep a helper unexported, then run gofmt, go test ./..., and go vet ./...."
    },
    {
      "id": "go-data-io-json",
      "title": "Strings, JSON, and file handling",
      "level": "Intermediate",
      "description": "Transform text safely, encode structured data, and perform file operations with explicit error handling.",
      "outcomes": [
        "Distinguish bytes from Unicode code points in strings.",
        "Encode and decode JSON using structs and the encoding/json package.",
        "Open, read, write, and close files with checked errors."
      ],
      "lessons": [
        {
          "id": "go-strings-unicode",
          "title": "Strings, bytes, and Unicode",
          "summary": "Go strings store bytes, so byte indexing and Unicode code-point iteration differ.",
          "content": [
            "A Go string is an immutable byte sequence, often containing UTF-8 text. Indexing a string yields a byte; range iterates over Unicode code points and yields byte offsets and rune values.",
            "For text operations, decide whether you need bytes, Unicode code points, or user-perceived grapheme clusters. Those concepts are different, especially for accented characters and emoji."
          ],
          "example": "text := \"Go世界\"\nfmt.Println(len(text)) // byte count\nfor offset, r := range text {\n    fmt.Printf(\"%d: %c\\n\", offset, r)\n}",
          "quest": {
            "prompt": "What does indexing a Go string with s[0] return?",
            "choices": [
              "The first byte",
              "The first Unicode grapheme cluster",
              "A string containing the whole value"
            ],
            "answer": 0,
            "explanation": "String indexing returns a byte. Use range to iterate UTF-8 encoded code points, and use specialized libraries when grapheme clusters matter."
          }
        },
        {
          "id": "go-json",
          "title": "Encode and decode JSON",
          "summary": "The encoding/json package converts between JSON data and Go values.",
          "content": [
            "Use json.Marshal to encode a value to JSON and json.Unmarshal to decode JSON into a value. Exported struct fields are encoded by default; struct tags such as `json:\"title\"` control field names and options.",
            "Always check JSON errors. When decoding untrusted data, validate values and apply size limits at the boundary; syntactically valid JSON is not necessarily valid application input."
          ],
          "example": "type Task struct {\n    Title string `json:\"title\"`\n    Done  bool   `json:\"done\"`\n}\n\ndata, err := json.Marshal(Task{Title: \"Read\", Done: false})\nif err != nil {\n    return err\n}\nfmt.Println(string(data))",
          "quest": {
            "prompt": "What does a `json:\"title\"` struct tag usually control?",
            "choices": [
              "The JSON property name for that exported field",
              "The Go package name",
              "The variable's memory address"
            ],
            "answer": 0,
            "explanation": "JSON struct tags provide encoding/json metadata, commonly controlling the external property name and options."
          }
        },
        {
          "id": "go-file-io",
          "title": "Read and write files",
          "summary": "File operations return errors that must be handled and resources that must be closed.",
          "content": [
            "The os and io packages provide file operations, while os.ReadFile and os.WriteFile are convenient for small files. Check errors from every operation and avoid assuming that a requested path is readable or writable.",
            "When using os.Open or os.Create, close a successfully opened file. defer file.Close() is a common way to ensure closure, while functions that write important data should also consider write and close errors where they matter."
          ],
          "example": "data, err := os.ReadFile(\"notes.txt\")\nif err != nil {\n    return err\n}\n\nif err := os.WriteFile(\"notes-copy.txt\", data, 0o600); err != nil {\n    return err\n}",
          "quest": {
            "prompt": "Why must file-operation errors be checked?",
            "choices": [
              "Opening, reading, or writing can fail due to permissions, paths, or device problems",
              "Files are always read in random order",
              "Go automatically ignores filesystem errors"
            ],
            "answer": 0,
            "explanation": "Filesystem operations can fail for many reasons. Explicit error handling prevents the program from silently treating failed I/O as success."
          }
        }
      ],
      "checkpoint": "Create a Task struct, encode a few tasks as JSON, save them to a file, load them back, and handle both filesystem and JSON decoding errors."
    },
    {
      "id": "go-generics-testing",
      "title": "Generics, testing, and reusable code",
      "level": "Intermediate",
      "description": "Write generic helpers where useful and protect program behavior with automated tests and benchmarks.",
      "outcomes": [
        "Understand type parameters and constraints.",
        "Write table-driven unit tests with the testing package.",
        "Use benchmarks and fuzz tests as targeted quality tools."
      ],
      "lessons": [
        {
          "id": "go-generics",
          "title": "Type parameters and constraints",
          "summary": "Generics let functions and types operate on multiple types that meet a constraint.",
          "content": [
            "Type parameters allow reusable algorithms to preserve the types they operate on. A constraint describes which types are permitted, often through an interface that specifies methods or a type set.",
            "Generics are most helpful when one algorithm is genuinely shared across types. They are not automatically better than a simple function or interface, so prefer the simplest abstraction that communicates the design."
          ],
          "example": "func First[T any](values []T) (T, bool) {\n    var zero T\n    if len(values) == 0 {\n        return zero, false\n    }\n    return values[0], true\n}",
          "quest": {
            "prompt": "What does the constraint `T any` allow?",
            "choices": [
              "Any Go type may be used as T",
              "Only integer types may be used as T",
              "T must be a pointer"
            ],
            "answer": 0,
            "explanation": "any is an alias for interface{}, so T any places no additional type restriction on the type parameter."
          }
        },
        {
          "id": "go-unit-tests",
          "title": "Unit tests and table-driven tests",
          "summary": "Go tests are functions named TestXxx in files ending with _test.go.",
          "content": [
            "Tests use the testing package and usually live in files whose names end with _test.go. A test function has the signature func TestName(t *testing.T), and failures can be reported with methods such as Errorf or Fatalf.",
            "Table-driven tests put several input and expected-output cases into a slice and run them in a loop. Include normal values, boundaries, empty inputs, and invalid input when applicable."
          ],
          "example": "func TestAdd(t *testing.T) {\n    tests := []struct{ a, b, want int }{\n        {1, 2, 3},\n        {-1, 1, 0},\n    }\n    for _, tc := range tests {\n        if got := Add(tc.a, tc.b); got != tc.want {\n            t.Errorf(\"Add(%d, %d) = %d; want %d\", tc.a, tc.b, got, tc.want)\n        }\n    }\n}",
          "quest": {
            "prompt": "Where does Go expect ordinary package test files to end?",
            "choices": [
              "_test.go",
              "_spec.go",
              "_unittest.txt"
            ],
            "answer": 0,
            "explanation": "Go's testing tool discovers tests in Go source files named with the _test.go suffix."
          }
        },
        {
          "id": "go-bench-fuzz",
          "title": "Benchmarks, coverage, and fuzzing",
          "summary": "Different test tools investigate performance, execution coverage, and unexpected inputs.",
          "content": [
            "Benchmarks use functions named BenchmarkXxx with *testing.B and are run with go test -bench=. Coverage reports show which code ran during tests, but high coverage alone does not guarantee meaningful assertions.",
            "Fuzz tests generate inputs to explore cases a developer may not anticipate. Use them for parsers, input validation, and other functions with broad input spaces, and keep discovered regressions as test cases."
          ],
          "example": "func BenchmarkAdd(b *testing.B) {\n    for i := 0; i < b.N; i++ {\n        _ = Add(i, i+1)\n    }\n}\n\n// Run: go test -bench=. -benchmem\n// Coverage: go test -cover ./...",
          "quest": {
            "prompt": "What does a benchmark primarily help measure?",
            "choices": [
              "How much time or allocation a repeated operation uses",
              "Whether every requirement is satisfied",
              "Which package name is exported"
            ],
            "answer": 0,
            "explanation": "Benchmarks help measure runtime cost and allocations for chosen operations. They complement correctness tests rather than replacing them."
          }
        }
      ],
      "checkpoint": "Write table-driven tests for a slice-processing function. Run go test ./..., inspect coverage, and add a benchmark only for a performance question you actually need to answer."
    },
    {
      "id": "go-concurrency",
      "title": "Goroutines, channels, and synchronization",
      "level": "Advanced",
      "description": "Run concurrent tasks safely and coordinate them using channels, mutexes, and cancellation-aware patterns.",
      "outcomes": [
        "Start goroutines and coordinate work with channels.",
        "Use mutexes and wait groups to protect and wait for shared work.",
        "Recognize data races, deadlocks, and goroutine leaks."
      ],
      "lessons": [
        {
          "id": "go-goroutines",
          "title": "Goroutines and concurrent work",
          "summary": "A goroutine is a lightweight unit of concurrent execution managed by the Go runtime.",
          "content": [
            "A goroutine starts when a function call is prefixed with go. The caller does not wait for the goroutine to finish automatically, so a program needs a coordination method when a result or completion matters.",
            "Concurrency introduces lifetime and error-handling questions. Keep ownership clear, avoid unsynchronized shared mutable state, and make sure workers can finish or be canceled instead of waiting forever."
          ],
          "example": "func worker(done chan<- struct{}) {\n    fmt.Println(\"work complete\")\n    done <- struct{}{}\n}\n\nfunc main() {\n    done := make(chan struct{})\n    go worker(done)\n    <-done\n}",
          "quest": {
            "prompt": "What does the `go` keyword do before a function call?",
            "choices": [
              "Starts the call in a new goroutine",
              "Waits for all goroutines to finish",
              "Converts the function into a channel"
            ],
            "answer": 0,
            "explanation": "The go statement starts function execution concurrently in a new goroutine. Synchronization is needed if the caller must wait for results or completion."
          }
        },
        {
          "id": "go-channels",
          "title": "Channels and select",
          "summary": "Channels communicate values between goroutines and can coordinate work.",
          "content": [
            "A channel transfers values between goroutines. An unbuffered send and receive synchronize with each other, while a buffered channel can queue a limited number of values before senders block.",
            "Use select to wait on multiple channel operations. Channel ownership should be clear: the sender commonly closes a channel when no more values will be sent, and receiving from a closed channel yields remaining buffered values before the zero value with ok=false."
          ],
          "example": "results := make(chan int)\ngo func() { results <- 42 }()\nvalue := <-results\nfmt.Println(value)",
          "quest": {
            "prompt": "What happens when a sender writes to an unbuffered channel and no receiver is ready?",
            "choices": [
              "The sender blocks until a receiver participates",
              "The value is always dropped silently",
              "The channel automatically grows its buffer"
            ],
            "answer": 0,
            "explanation": "An unbuffered channel send synchronizes with a receive and blocks until a receiver is ready. That behavior can be useful but can also cause deadlocks if coordination is incorrect."
          }
        },
        {
          "id": "go-mutex-waitgroup",
          "title": "Wait groups, mutexes, and race detection",
          "summary": "Synchronization tools coordinate completion and protect shared state.",
          "content": [
            "sync.WaitGroup waits for a collection of goroutines to finish. A sync.Mutex protects a critical section when several goroutines access shared mutable state; unlock it with defer after locking when that fits the scope.",
            "Run go test -race ./... to detect many data races in executed code paths. The race detector is valuable but cannot prove a program is race-free, so code still needs a clear concurrency design and tests that exercise concurrent paths."
          ],
          "example": "var mu sync.Mutex\nvar total int\n\nfunc addOne() {\n    mu.Lock()\n    total++\n    mu.Unlock()\n}\n\n// Run tests with: go test -race ./...",
          "quest": {
            "prompt": "What is a mutex used for in concurrent Go code?",
            "choices": [
              "Protecting shared state so conflicting critical sections do not run simultaneously",
              "Storing JSON fields",
              "Making every operation execute in parallel"
            ],
            "answer": 0,
            "explanation": "A mutex provides mutual exclusion around a critical section. It does not make code parallel by itself and must be used consistently for the state it protects."
          }
        }
      ],
      "checkpoint": "Launch several workers, gather their results, and then modify a shared counter under a mutex. Run the race detector and explain how the code avoids deadlock and goroutine leaks."
    },
    {
      "id": "go-context-http",
      "title": "Context, HTTP, and API clients",
      "level": "Advanced",
      "description": "Build reliable networked code with HTTP handlers, request contexts, timeouts, and explicit response handling.",
      "outcomes": [
        "Use context to propagate cancellation and deadlines.",
        "Create HTTP clients and handlers with standard library packages.",
        "Check status codes, close response bodies, and validate external input."
      ],
      "lessons": [
        {
          "id": "go-context",
          "title": "Context, deadlines, and cancellation",
          "summary": "Context carries cancellation signals, deadlines, and request-scoped values across API boundaries.",
          "content": [
            "A context lets a caller signal that work is no longer needed or should stop at a deadline. Network requests and functions that can block should accept a context when cancellation is part of their contract.",
            "Pass context explicitly as the first parameter rather than storing it in a long-lived struct. Call the cancel function returned by context.WithTimeout or context.WithCancel to release associated resources when work finishes."
          ],
          "example": "ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)\ndefer cancel()\nreq, err := http.NewRequestWithContext(ctx, http.MethodGet, \"https://example.com\", nil)\nif err != nil {\n    return err\n}\n_ = req",
          "quest": {
            "prompt": "Why call the cancel function returned by context.WithTimeout?",
            "choices": [
              "To release resources and signal that the operation is finished or should stop",
              "To disable all future contexts",
              "To force the HTTP server to restart"
            ],
            "answer": 0,
            "explanation": "Calling cancel releases resources associated with the derived context and signals cancellation to operations using it."
          }
        },
        {
          "id": "go-http-client",
          "title": "HTTP clients and response handling",
          "summary": "The net/http package provides HTTP clients and servers with explicit response and error handling.",
          "content": [
            "Use an http.Client to send requests and check the returned error. A successful RoundTrip does not mean the HTTP status is successful; inspect StatusCode and interpret non-2xx responses according to the API contract.",
            "Close response bodies after reading, usually with defer after checking the request error. Set timeouts or use request contexts so the program does not wait indefinitely on an unresponsive service."
          ],
          "example": "client := &http.Client{Timeout: 5 * time.Second}\nresp, err := client.Get(\"https://example.com\")\nif err != nil {\n    return err\n}\ndefer resp.Body.Close()\nif resp.StatusCode < 200 || resp.StatusCode >= 300 {\n    return fmt.Errorf(\"unexpected status: %s\", resp.Status)\n}",
          "quest": {
            "prompt": "Does a nil error from http.Client.Get guarantee a 2xx status code?",
            "choices": [
              "No; the caller must inspect Response.StatusCode",
              "Yes, every non-2xx status is returned as an error",
              "Only when the URL uses HTTPS"
            ],
            "answer": 0,
            "explanation": "Transport errors are returned as errors, but HTTP statuses such as 404 or 500 are valid responses. The caller must check status according to the API contract."
          }
        },
        {
          "id": "go-http-handler",
          "title": "HTTP handlers and JSON APIs",
          "summary": "Handlers map HTTP requests to validated application behavior and responses.",
          "content": [
            "A handler implements ServeHTTP or uses an adapter such as http.HandlerFunc. It should validate request data, select an appropriate status code, and write a response body that matches the response headers.",
            "Keep business logic separate from HTTP details so it can be tested without a live server. Never trust client-provided identifiers, lengths, or JSON fields; validate them before using them in application operations."
          ],
          "example": "func healthHandler(w http.ResponseWriter, r *http.Request) {\n    if r.Method != http.MethodGet {\n        w.WriteHeader(http.StatusMethodNotAllowed)\n        return\n    }\n    w.Header().Set(\"Content-Type\", \"text/plain; charset=utf-8\")\n    w.WriteHeader(http.StatusOK)\n    _, _ = io.WriteString(w, \"ok\\n\")\n}",
          "quest": {
            "prompt": "What should an HTTP handler do with untrusted request data?",
            "choices": [
              "Validate it before using it in application logic",
              "Assume the browser has already validated it",
              "Use it directly as a file path"
            ],
            "answer": 0,
            "explanation": "Clients can send malformed or malicious input regardless of browser behavior, so handlers must validate inputs and handle invalid requests safely."
          }
        }
      ],
      "checkpoint": "Build a small HTTP health endpoint and a JSON endpoint. Add request validation, explicit status codes, timeouts on client calls, and tests for invalid methods and malformed input."
    },
    {
      "id": "go-architecture-performance",
      "title": "Performance, diagnostics, and release readiness",
      "level": "Advanced",
      "description": "Use profiles and diagnostics to find real bottlenecks, structure applications for testing, and prepare dependable builds.",
      "outcomes": [
        "Measure before optimizing and understand basic Go profiling tools.",
        "Use logging and diagnostics to investigate failures.",
        "Organize application layers and produce repeatable release builds."
      ],
      "lessons": [
        {
          "id": "go-performance-profiling",
          "title": "Measure and profile performance",
          "summary": "Benchmarks and profiles help identify the operations that consume time or memory.",
          "content": [
            "Measure a representative workload before optimizing. Go supports benchmarks through testing and profiling with tools such as pprof, which can reveal CPU hotspots, allocation patterns, and memory retention.",
            "Avoid assuming that a shorter implementation is faster. Optimize the demonstrated bottleneck, rerun correctness tests and benchmarks, and compare changes under repeatable conditions."
          ],
          "example": "go test -bench=. -benchmem ./...\ngo test -cpuprofile=cpu.out -bench=. ./...\ngo tool pprof cpu.out",
          "quest": {
            "prompt": "What is the best first step before performance optimization?",
            "choices": [
              "Measure a representative workload to identify the bottleneck",
              "Rewrite every loop as a goroutine",
              "Remove tests to speed up development"
            ],
            "answer": 0,
            "explanation": "Profiling and benchmarks help identify where resources are actually spent. Guessing often optimizes the wrong part of a program."
          }
        },
        {
          "id": "go-logging-diagnostics",
          "title": "Logging, tracing, and diagnostics",
          "summary": "Useful diagnostics preserve enough context to explain failures without exposing secrets.",
          "content": [
            "Use structured logging where it improves search and analysis, and include useful fields such as request identifiers, operation names, and durations. Avoid logging passwords, tokens, or unnecessary personal data.",
            "Errors should gain meaningful context as they cross system boundaries. Keep logs actionable and choose levels deliberately so normal operation does not produce overwhelming output."
          ],
          "example": "logger := slog.New(slog.NewTextHandler(os.Stdout, nil))\nlogger.Info(\"task saved\", \"task_id\", taskID)\nlogger.Error(\"save failed\", \"error\", err)",
          "quest": {
            "prompt": "What should a production log avoid recording?",
            "choices": [
              "Passwords, access tokens, and unnecessary sensitive data",
              "Operation names and useful error context",
              "A request duration when relevant"
            ],
            "answer": 0,
            "explanation": "Logs are operational data and may be widely accessible or retained. Do not expose credentials or unnecessary personal information in them."
          }
        },
        {
          "id": "go-project-release",
          "title": "Application structure and release builds",
          "summary": "Clear boundaries, repeatable checks, and explicit configuration make Go programs easier to maintain and ship.",
          "content": [
            "Separate domain behavior from delivery details such as CLI arguments, HTTP handlers, files, or databases. Keep dependencies explicit and functions focused so core logic can be tested without starting external systems.",
            "Before a release, format code, run tests and vet, review dependency changes, and build for the intended target. Store configuration outside source code and document startup, shutdown, and operational assumptions."
          ],
          "example": "gofmt -w .\ngo test ./...\ngo vet ./...\ngo build -o bin/studytrack ./cmd/studytrack",
          "quest": {
            "prompt": "Why separate core application logic from HTTP or command-line delivery code?",
            "choices": [
              "It makes core behavior easier to test and reuse across entry points",
              "It removes the need for error handling",
              "It guarantees zero runtime cost"
            ],
            "answer": 0,
            "explanation": "Separating domain behavior from delivery mechanisms supports reuse, focused tests, and clearer dependencies. It does not eliminate the need for error handling."
          }
        }
      ],
      "checkpoint": "Review the capstone for clear package boundaries, checked errors, useful logs, repeatable tests, and documented build steps. Run the full test and vet commands before building the release executable."
    }
  ],
  "capstone": {
    "title": "Go capstone: Personal Study Tracker",
    "brief": "Build a command-line study tracker that creates, lists, completes, filters, and deletes study tasks. Model tasks with structs, use slices and maps where appropriate, validate input, store data in JSON, and add tests. As an extension, expose a small HTTP API with request validation and graceful shutdown.",
    "milestones": [
      "Create a Go module and define a Task type with an ID, title, completion status, and suitable timestamps or category fields.",
      "Implement focused functions for adding, listing, completing, filtering, and deleting tasks; return errors for invalid input and missing IDs.",
      "Persist tasks as JSON, check all file and encoding errors, and define how the application behaves when the file is missing or malformed.",
      "Add table-driven tests for normal, empty, invalid, and boundary cases; run go test ./... and go vet ./....",
      "Optionally expose tasks through an HTTP API with validation, explicit status codes, request contexts, and tests; document how to build and run the application."
    ]
  }
};
export default golangCourse;