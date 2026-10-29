import type { CourseConfig } from "../types";

export const rustCourse: CourseConfig = {
  "slug": "rust",
  "language": "Rust",
  "title": "Learn Rust: Beginner to Advanced",
  "icon": "🦀",
  "levelLabel": "Beginner to advanced",
  "description": "Learn Rust from first principles through ownership, borrowing, data modeling, traits, error handling, Cargo, smart pointers, concurrency, files, and application design with guided lessons, code examples, quizzes, checkpoints, and a capstone.",
  "metaDescription": "A structured Rust programming course covering Cargo, types, control flow, functions, ownership, borrowing, slices, structs, enums, collections, iterators, Option, Result, generics, traits, lifetimes, testing, smart pointers, threads, async concepts, file I/O, and safe application design.",
  "audience": "Beginners and developers who want to learn Rust for dependable command-line tools, systems programming, performance-sensitive applications, and concurrent services.",
  "prerequisites": "No prior Rust experience is required. Familiarity with files and running terminal commands is helpful. Examples target stable Rust and use the standard library unless otherwise noted; some examples are snippets rather than complete standalone programs and are explanatory rather than executed on this website.",
  "modules": [
    {
      "id": "rust-first-program",
      "title": "Meet Rust and its toolchain",
      "level": "Beginner",
      "description": "Understand Rust's goals, compile a small program, and use Cargo and compiler messages confidently.",
      "outcomes": [
        "Describe how rustc and Cargo fit into the development workflow.",
        "Recognize fn main and basic Rust syntax.",
        "Use rustfmt and compiler diagnostics to improve code."
      ],
      "lessons": [
        {
          "id": "rust-hello-world",
          "title": "Your first Rust program",
          "summary": "A Rust executable begins in the main function.",
          "content": [
            "A standalone Rust executable commonly defines fn main(). println! is a macro that prints formatted text followed by a newline. Macros are invoked with an exclamation mark and can accept syntax that ordinary function calls cannot.",
            "Rust is compiled, and the compiler checks types and many safety rules before producing an executable. Start with a small program, compile it, and read the first meaningful compiler diagnostic if it fails."
          ],
          "example": "fn main() {\n    println!(\"Hello, Rust!\");\n}",
          "quest": {
            "prompt": "Which function is the usual entry point of a Rust executable?",
            "choices": [
              "main",
              "start",
              "init"
            ],
            "answer": 0,
            "explanation": "A standard Rust binary starts in fn main(). Functions named start or init have no special entry-point role by default."
          }
        },
        {
          "id": "rust-cargo-project",
          "title": "Create a project with Cargo",
          "summary": "Cargo manages Rust projects, builds, dependencies, and tests.",
          "content": [
            "cargo new creates a project with a manifest and source directory. Cargo.toml records package metadata and dependencies; src/main.rs is the default binary entry point.",
            "Use cargo run to compile and execute, cargo build to build, and cargo check for a fast check that skips final code generation. Keep project metadata and source files under version control, but usually exclude generated target output."
          ],
          "example": "cargo new hello_rust\ncd hello_rust\ncargo run\ncargo check",
          "quest": {
            "prompt": "Which file normally declares a Cargo package's metadata and dependencies?",
            "choices": [
              "Cargo.toml",
              "main.rs",
              "rustfmt.toml only"
            ],
            "answer": 0,
            "explanation": "Cargo.toml is the package manifest. main.rs contains executable source code, not the project's full dependency manifest."
          }
        },
        {
          "id": "rust-format-diagnostics",
          "title": "Formatting and compiler feedback",
          "summary": "Use standard formatting and treat errors as guidance about program structure.",
          "content": [
            "rustfmt formats Rust source consistently. cargo fmt applies formatting to a Cargo project, while cargo clippy runs additional lints that can flag suspicious or unnecessarily complicated code.",
            "Read diagnostics from the top, identify the file and location, then inspect the suggested fix rather than applying suggestions blindly. Compiler messages often explain whether a value was moved, borrowed incorrectly, or expected to have another type."
          ],
          "example": "cargo fmt\ncargo check\ncargo clippy",
          "quest": {
            "prompt": "Which command formats Rust source using rustfmt?",
            "choices": [
              "cargo fmt",
              "cargo deploy-format",
              "cargo lint-fix-all"
            ],
            "answer": 0,
            "explanation": "cargo fmt invokes rustfmt for the project. cargo clippy is for lints, and cargo check performs a compilation check."
          }
        }
      ],
      "checkpoint": "Create a Cargo project, print three lines, run cargo fmt and cargo check, then fix one deliberate syntax error by following the compiler diagnostic."
    },
    {
      "id": "rust-values-types",
      "title": "Variables, types, and constants",
      "level": "Beginner",
      "description": "Learn mutability, scalar and compound types, type inference, and explicit conversions.",
      "outcomes": [
        "Declare immutable and mutable bindings deliberately.",
        "Choose common scalar, tuple, and array types.",
        "Use constants, shadowing, and conversions correctly."
      ],
      "lessons": [
        {
          "id": "rust-let-mut",
          "title": "Bindings and mutability",
          "summary": "Rust bindings are immutable by default unless declared with mut.",
          "content": [
            "let creates a binding whose value cannot be reassigned unless mut is added. This default makes accidental state changes less likely and encourages code to express which values truly need to change.",
            "Type inference can determine a variable's type from its initial value. Add an explicit type when it improves clarity or when the compiler cannot infer enough information."
          ],
          "example": "fn main() {\n    let language = \"Rust\";\n    let mut attempts = 0;\n    attempts += 1;\n    println!(\"{language}: {attempts}\");\n}",
          "quest": {
            "prompt": "What keyword allows a binding's value to be reassigned?",
            "choices": [
              "mut",
              "var",
              "change"
            ],
            "answer": 0,
            "explanation": "Rust uses mut to declare a mutable binding. Ordinary let bindings are immutable."
          }
        },
        {
          "id": "rust-scalar-types",
          "title": "Scalar types and inference",
          "summary": "Integers, floating-point values, Booleans, and characters represent common scalar data.",
          "content": [
            "Rust provides integer types such as i32 and u64, floating-point types f32 and f64, bool, and char. Integer widths and signedness matter for ranges, binary protocols, and memory layout.",
            "A character literal such as '🦀' is a Unicode scalar value and uses char; a string literal uses double quotes. Numeric inference often selects i32 for unsuffixed integers unless context or a suffix specifies a different type."
          ],
          "example": "let count: u32 = 12;\nlet ratio: f64 = 0.75;\nlet active: bool = true;\nlet initial: char = 'R';\nlet message = \"Rust\";",
          "quest": {
            "prompt": "Which Rust type represents a Unicode scalar value?",
            "choices": [
              "char",
              "u8 only",
              "bool"
            ],
            "answer": 0,
            "explanation": "Rust's char type represents a Unicode scalar value. Strings store UTF-8 text and can contain multiple char values."
          }
        },
        {
          "id": "rust-constants-shadowing",
          "title": "Constants, tuples, arrays, and shadowing",
          "summary": "Constants, tuples, arrays, and shadowing provide different ways to express stable or grouped data.",
          "content": [
            "const declares a compile-time constant with an explicit type, while let can shadow an earlier binding using the same name. Shadowing creates a new binding and can even change the type, unlike mut which changes the value of one mutable binding.",
            "Tuples group values that may have different types; arrays contain a fixed number of elements of one type. Array lengths are part of the type, so [i32; 3] and [i32; 4] are distinct types."
          ],
          "example": "const MAX_RETRIES: u8 = 3;\nlet point: (i32, i32) = (4, 7);\nlet samples: [i32; 3] = [10, 20, 30];\nlet label = \"attempts\";\nlet label = label.len();",
          "quest": {
            "prompt": "Which structure stores a fixed number of elements of the same type?",
            "choices": [
              "Array",
              "Tuple only",
              "String slice"
            ],
            "answer": 0,
            "explanation": "An array has a fixed length and one element type. A tuple can group values of different types."
          }
        }
      ],
      "checkpoint": "Write a small program containing a constant, a mutable counter, a tuple, and an array. Print selected values and explain why each type fits its role."
    },
    {
      "id": "rust-expressions-control",
      "title": "Expressions, decisions, and loops",
      "level": "Beginner",
      "description": "Use Rust expressions, branching, pattern matching, and loops to model program flow.",
      "outcomes": [
        "Use if expressions and match for decisions.",
        "Write loops with clear stopping conditions.",
        "Recognize ranges and avoid off-by-one errors."
      ],
      "lessons": [
        {
          "id": "rust-if-expressions",
          "title": "Conditions and if expressions",
          "summary": "In Rust, if is an expression and branches that return a value must have compatible types.",
          "content": [
            "Conditions in if expressions must be Boolean; Rust does not silently treat integers as true or false. Braces are required around branch bodies, making the boundaries of each branch explicit.",
            "Because if can produce a value, its branches can initialize a variable. Both branches in an expression context must evaluate to compatible types, including the unit type when no useful value is returned."
          ],
          "example": "let temperature = 18;\nlet advice = if temperature < 10 {\n    \"Wear a coat\"\n} else {\n    \"A light jacket may be enough\"\n};\nprintln!(\"{advice}\");",
          "quest": {
            "prompt": "What must be true when an if expression is used to produce one value?",
            "choices": [
              "Its branches must produce compatible types",
              "Its condition must be an integer",
              "It must always contain three branches"
            ],
            "answer": 0,
            "explanation": "A value-producing if expression must have compatible branch result types so the expression has one well-defined type."
          }
        },
        {
          "id": "rust-match",
          "title": "Match and pattern matching",
          "summary": "match checks a value against patterns and requires exhaustive handling.",
          "content": [
            "match can select behavior for enum variants, numeric ranges, tuples, and other patterns. Rust requires all possible cases to be covered, either explicitly or with a catch-all pattern such as _.",
            "Prefer meaningful patterns over long chains of nested conditions when a value has distinct cases. Be careful that an early catch-all arm can make later arms unreachable, which the compiler can warn about."
          ],
          "example": "let status = 404;\nlet label = match status {\n    200..=299 => \"success\",\n    400..=499 => \"client error\",\n    500..=599 => \"server error\",\n    _ => \"other\",\n};\nprintln!(\"{label}\");",
          "quest": {
            "prompt": "Why does Rust require a match expression to be exhaustive?",
            "choices": [
              "Every possible value must have a defined handling path",
              "match can only be used with integers",
              "It prevents use of enum types"
            ],
            "answer": 0,
            "explanation": "Exhaustiveness ensures that a value cannot reach a match expression with no applicable arm."
          }
        },
        {
          "id": "rust-loops-ranges",
          "title": "Loop, while, for, and ranges",
          "summary": "Rust offers loop, while, and for for different repetition patterns.",
          "content": [
            "loop repeats until it is exited with break. A while loop continues while its Boolean condition is true, and for is commonly used to iterate over a range or collection.",
            "Ranges such as 0..4 include the start and exclude the end, producing 0, 1, 2, and 3. The inclusive form 0..=4 includes both endpoints. Iterating directly over a collection is often clearer and safer than indexing it manually."
          ],
          "example": "for number in 0..4 {\n    println!(\"{number}\");\n}\nlet mut remaining = 3;\nwhile remaining > 0 {\n    remaining -= 1;\n}",
          "quest": {
            "prompt": "How many values are produced by the range 0..4?",
            "choices": [
              "4",
              "5",
              "3"
            ],
            "answer": 0,
            "explanation": "The half-open range 0..4 includes 0, 1, 2, and 3, for four values."
          }
        }
      ],
      "checkpoint": "Write a temperature classifier with if, a status classifier with match, and a loop that prints the values 1 through 5. Explain the endpoint of each range."
    },
    {
      "id": "rust-functions-closures",
      "title": "Functions, closures, and control-flow results",
      "level": "Beginner",
      "description": "Write reusable functions, understand return values, and learn the foundations of closures and early exits.",
      "outcomes": [
        "Declare functions with parameters and return types.",
        "Use expressions and tuples as return values.",
        "Capture values with closures and use early-return control flow."
      ],
      "lessons": [
        {
          "id": "rust-function-signatures",
          "title": "Functions and parameters",
          "summary": "A function signature describes its inputs and output type.",
          "content": [
            "Rust functions use fn, named parameters, and an optional return type written after ->. Parameter types must be declared, while return types are often required when they are not the unit type or are otherwise unclear.",
            "A function body can end with an expression without a semicolon to return its value. Adding a semicolon turns that expression into a statement and usually discards its value, returning unit instead."
          ],
          "example": "fn square(value: i32) -> i32 {\n    value * value\n}\n\nlet result = square(6);\nassert_eq!(result, 36);",
          "quest": {
            "prompt": "How does a Rust function declare its return type?",
            "choices": [
              "After -> in the signature",
              "After a colon following fn",
              "With the return keyword in every case"
            ],
            "answer": 0,
            "explanation": "Rust writes the return type after ->, as in fn square(value: i32) -> i32."
          }
        },
        {
          "id": "rust-tuples-return",
          "title": "Return values, tuples, and early return",
          "summary": "Functions can return tuples and use return for an explicit early exit.",
          "content": [
            "Rust returns one value, but that value can be a tuple containing several related items. Destructure the tuple at the call site when its fields have clear roles.",
            "Use return when a function must exit early, for example after validation fails. In larger applications, returning a Result often communicates recoverable errors better than panicking or using a sentinel value."
          ],
          "example": "fn min_max(values: &[i32]) -> Option<(i32, i32)> {\n    let first = *values.first()?;\n    let mut low = first;\n    let mut high = first;\n    for &value in values {\n        low = low.min(value);\n        high = high.max(value);\n    }\n    Some((low, high))\n}",
          "quest": {
            "prompt": "What does the ? operator do when used with an Option-returning function like this?",
            "choices": [
              "Returns None from the enclosing function if the value is None",
              "Converts None into zero",
              "Repeats the function"
            ],
            "answer": 0,
            "explanation": "On None, ? returns early with None; on Some(value), it extracts the inner value. This function's return type supports that behavior."
          }
        },
        {
          "id": "rust-closures",
          "title": "Closures and captured values",
          "summary": "Closures are anonymous functions that can capture values from their surrounding scope.",
          "content": [
            "A closure uses pipe characters around its parameters. Rust infers parameter and return types in many cases, and the closure can borrow captured values or take ownership depending on how it is used and whether move is specified.",
            "Closures are common with iterators, sorting, callbacks, and methods such as map and filter. Capture behavior is constrained by the closure's use of each value, so compiler diagnostics can help determine whether borrowing or ownership is needed."
          ],
          "example": "let factor = 3;\nlet multiply = |value: i32| value * factor;\nassert_eq!(multiply(7), 21);",
          "quest": {
            "prompt": "Which syntax introduces a closure parameter list in Rust?",
            "choices": [
              "Pipe characters: |value|",
              "A function name followed by #",
              "Square brackets: [value]"
            ],
            "answer": 0,
            "explanation": "Rust closure parameters appear between pipe characters, for example |value| value * 2."
          }
        }
      ],
      "checkpoint": "Create a function that returns a useful result, one that reports absence with Option, and a closure used to transform a list of numbers."
    },
    {
      "id": "rust-ownership-borrowing",
      "title": "Ownership, borrowing, and slices",
      "level": "Intermediate",
      "description": "Understand Rust's ownership model, borrow references safely, and work with slices without unnecessary copying.",
      "outcomes": [
        "Explain moves and cloning for owned values.",
        "Borrow values immutably or mutably within Rust's rules.",
        "Use slices to work with parts of arrays and strings."
      ],
      "lessons": [
        {
          "id": "rust-ownership-moves",
          "title": "Ownership and moves",
          "summary": "Each owned value has an owner, and ownership moves can transfer responsibility without copying the data.",
          "content": [
            "When a non-Copy value such as String is assigned to another variable or passed by value, ownership usually moves to the new binding. The original binding can no longer be used, which helps prevent double frees and ambiguous lifetimes.",
            "Types that implement Copy, such as many simple integers, are copied on assignment. Calling clone explicitly makes a duplicate when the type supports it, but cloning can allocate or perform more work than a move."
          ],
          "example": "let first = String::from(\"Rust\");\nlet second = first;\nprintln!(\"{second}\");\n// first is no longer usable here",
          "quest": {
            "prompt": "After let second = first for a String, what happens to first?",
            "choices": [
              "Its ownership moves to second",
              "Both bindings own the same String independently",
              "The program automatically clones it"
            ],
            "answer": 0,
            "explanation": "String is not Copy. The assignment moves ownership to second unless the program explicitly clones the value."
          }
        },
        {
          "id": "rust-borrowing-references",
          "title": "References and borrowing",
          "summary": "References let functions access a value without taking ownership of it.",
          "content": [
            "An immutable reference uses &T and lets code read a value without owning it. A mutable reference uses &mut T and allows mutation through that reference, subject to Rust's aliasing rules.",
            "At a given time, Rust generally allows either multiple immutable references or one mutable reference to a value, as long as references remain valid. These rules reduce data races and invalidated references in safe Rust."
          ],
          "example": "fn byte_count(text: &String) -> usize {\n    text.len()\n}\n\nlet message = String::from(\"hello\");\nlet count = byte_count(&message);\nassert_eq!(count, 5);\nassert_eq!(message, \"hello\");",
          "quest": {
            "prompt": "What is the main benefit of passing &String to byte_count?",
            "choices": [
              "The function can read the String without taking ownership",
              "It automatically copies the entire String",
              "It allows the function to free the caller's String"
            ],
            "answer": 0,
            "explanation": "The reference borrows the value; the caller retains ownership and can use message after the call."
          }
        },
        {
          "id": "rust-slices-borrow-rules",
          "title": "Slices and borrowing rules",
          "summary": "Slices borrow a contiguous part of a collection without owning it.",
          "content": [
            "A slice such as &[i32] is a view into part or all of an array or vector. String slices such as &str refer to UTF-8 text and must start and end on valid character boundaries.",
            "References must not outlive the data they point to. Rust's borrow checker verifies many lifetime and mutation rules at compile time; do not work around errors by adding references with guessed lifetimes or using unsafe code without a specific need."
          ],
          "example": "fn first_two(values: &[i32]) -> &[i32] {\n    &values[..2]\n}\n\nlet numbers = [10, 20, 30];\nassert_eq!(first_two(&numbers), &[10, 20]);",
          "quest": {
            "prompt": "What does a slice provide?",
            "choices": [
              "A borrowed view of a contiguous sequence",
              "A new owned copy in every case",
              "A reference that can outlive its source automatically"
            ],
            "answer": 0,
            "explanation": "A slice is a borrowed view into existing data. It does not automatically own or extend the lifetime of the source."
          }
        }
      ],
      "checkpoint": "Write a function that accepts a string slice and returns its length, then write a function that borrows an integer slice and computes its sum. Identify who owns each input."
    },
    {
      "id": "rust-structs-enums-patterns",
      "title": "Structs, enums, and pattern matching",
      "level": "Intermediate",
      "description": "Model domain data with structs and enums, then use pattern matching to handle variants explicitly.",
      "outcomes": [
        "Define structs and construct values.",
        "Represent alternatives with enums and Option.",
        "Use match and if let to destructure data safely."
      ],
      "lessons": [
        {
          "id": "rust-structs-methods",
          "title": "Structs and methods",
          "summary": "Structs group named fields into a type that represents one concept.",
          "content": [
            "A struct definition declares fields, and a struct expression initializes them. Use field shorthand when a local variable has the same name as a field; update syntax can reuse fields from another value when ownership rules permit it.",
            "Methods are defined in impl blocks. A method with &self borrows the receiver, &mut self can mutate it, and self takes ownership. These receiver forms make each method's access and ownership intent visible."
          ],
          "example": "struct Point { x: f64, y: f64 }\n\nimpl Point {\n    fn distance_squared(&self) -> f64 {\n        self.x * self.x + self.y * self.y\n    }\n}\n\nlet origin = Point { x: 0.0, y: 0.0 };\nassert_eq!(origin.distance_squared(), 0.0);",
          "quest": {
            "prompt": "Which receiver lets a method read a value without taking ownership?",
            "choices": [
              "&self",
              "self only",
              "&mut self only"
            ],
            "answer": 0,
            "explanation": "&self borrows the receiver immutably. self takes ownership, while &mut self allows mutable borrowing."
          }
        },
        {
          "id": "rust-enums-option",
          "title": "Enums and Option",
          "summary": "Enums represent a value that can be one of several named variants.",
          "content": [
            "An enum can represent alternatives such as Pending, Completed, or Failed, and variants can carry data. This avoids relying on unrelated magic numbers or nullable values whose meaning is unclear.",
            "Option<T> is a standard enum with Some(T) and None. It makes possible absence explicit in the type, so callers must handle it with match, if let, methods, or the ? operator where appropriate."
          ],
          "example": "enum Status {\n    Pending,\n    Completed { minutes: u32 },\n}\n\nlet status = Status::Completed { minutes: 25 };\nlet maybe_score: Option<u32> = Some(90);",
          "quest": {
            "prompt": "Which Option variant represents the absence of a value?",
            "choices": [
              "None",
              "Empty",
              "Null"
            ],
            "answer": 0,
            "explanation": "Option uses None to represent absence and Some(value) to carry a value. It is an enum rather than a special null pointer."
          }
        },
        {
          "id": "rust-pattern-destructuring",
          "title": "Match, if let, and destructuring",
          "summary": "Patterns extract data from enum variants, tuples, and structs.",
          "content": [
            "match provides exhaustive handling, while if let is useful when one pattern matters and other cases can be ignored. let destructuring can unpack tuples or structs into named bindings.",
            "Match ergonomics and references can affect whether patterns bind a value or a reference. Use explicit reference patterns when helpful, and prefer compiler-confirmed types instead of guessing what a pattern moves or borrows."
          ],
          "example": "let result: Result<i32, &str> = Ok(42);\nmatch result {\n    Ok(value) => println!(\"value = {value}\"),\n    Err(message) => println!(\"error = {message}\"),\n}\n\nif let Some(score) = Some(90) {\n    println!(\"score = {score}\");\n}",
          "quest": {
            "prompt": "Why is match particularly useful with enums?",
            "choices": [
              "It can require handling every variant",
              "It automatically ignores all variants",
              "It turns every variant into a string"
            ],
            "answer": 0,
            "explanation": "An exhaustive match makes handling of all enum variants explicit and can reveal missing cases when a type changes."
          }
        }
      ],
      "checkpoint": "Model a task with a struct and an enum status. Write a method to update it and handle an Option value using match or if let."
    },
    {
      "id": "rust-collections-strings-iterators",
      "title": "Collections, strings, and iterators",
      "level": "Intermediate",
      "description": "Store dynamic collections, work safely with UTF-8 strings, and transform data with iterators.",
      "outcomes": [
        "Choose Vec, HashMap, and String for common tasks.",
        "Distinguish string bytes, Unicode scalar values, and graphemes.",
        "Compose iterator operations such as map, filter, and collect."
      ],
      "lessons": [
        {
          "id": "rust-vec-collections",
          "title": "Vectors and dynamic sequences",
          "summary": "Vec<T> stores a growable sequence of values of one type.",
          "content": [
            "A vector can grow as elements are pushed and can be indexed, iterated, or borrowed as a slice. Indexing with [] panics when the index is out of bounds, while get returns Option and supports explicit handling of absence.",
            "Borrowing a vector's elements while mutating the vector can conflict because a mutation may reallocate storage. Prefer a single clear access pattern and avoid keeping references across operations that can change the vector's allocation."
          ],
          "example": "let mut scores = vec![80, 92, 75];\nscores.push(88);\nif let Some(first) = scores.get(0) {\n    println!(\"first score: {first}\");\n}",
          "quest": {
            "prompt": "Which method returns an Option when a vector index may be out of bounds?",
            "choices": [
              "get",
              "must_get",
              "at_unchecked"
            ],
            "answer": 0,
            "explanation": "Vec::get returns Some(&value) for a valid index and None for an invalid index."
          }
        },
        {
          "id": "rust-strings-hashmaps",
          "title": "String, &str, and HashMap",
          "summary": "String owns growable UTF-8 text, &str borrows text, and HashMap stores key-value pairs.",
          "content": [
            "A String owns a UTF-8 byte buffer, while &str is a borrowed string slice. Rust does not offer constant-time string indexing by integer because UTF-8 characters can occupy different numbers of bytes.",
            "HashMap<K, V> provides keyed lookup when keys implement the required hashing and equality traits. get returns an Option reference, and entry is useful for inserting or updating a value without separate lookup logic."
          ],
          "example": "use std::collections::HashMap;\n\nlet mut visits = HashMap::new();\nvisits.insert(\"home\", 3);\n*visits.entry(\"courses\").or_insert(0) += 1;\nassert_eq!(visits.get(\"courses\"), Some(&1));",
          "quest": {
            "prompt": "Why can't a Rust String be safely indexed by character number with text[0]?",
            "choices": [
              "UTF-8 characters can use different numbers of bytes",
              "String contains only numeric data",
              "Rust strings are always null-terminated"
            ],
            "answer": 0,
            "explanation": "String stores UTF-8 bytes, not a fixed-width character array, so an integer index would be ambiguous for text characters."
          }
        },
        {
          "id": "rust-iterators",
          "title": "Iterators and transformations",
          "summary": "Iterators express sequences of values and can be composed into clear data transformations.",
          "content": [
            "iter borrows elements, iter_mut borrows them mutably, and into_iter consumes a collection or otherwise follows the type's IntoIterator behavior. Adapter methods such as map and filter are generally lazy until a consuming operation runs.",
            "collect builds a collection from an iterator when the target type can be inferred or specified. Use iterator chains when they improve clarity, and use loops when step-by-step control makes the logic easier to understand."
          ],
          "example": "let values = [1, 2, 3, 4, 5];\nlet squares: Vec<i32> = values.iter()\n    .filter(|value| **value % 2 == 1)\n    .map(|value| *value * *value)\n    .collect();\nassert_eq!(squares, vec![1, 9, 25]);",
          "quest": {
            "prompt": "When do iterator adapters such as map usually execute their transformation?",
            "choices": [
              "When a consuming operation drives the iterator",
              "Immediately when the adapter is created in every case",
              "Only when the compiler optimizes the code"
            ],
            "answer": 0,
            "explanation": "Iterator adapters are lazy; an operation such as collect, sum, or for_each drives traversal."
          }
        }
      ],
      "checkpoint": "Build a small collection of scores, calculate the average using iteration, store per-student totals in a HashMap, and handle missing keys without assuming they exist."
    },
    {
      "id": "rust-error-handling",
      "title": "Option, Result, and error handling",
      "level": "Intermediate",
      "description": "Make absence and failures explicit, propagate errors with ?, and choose between recoverable errors and panics.",
      "outcomes": [
        "Represent optional values with Option.",
        "Return and propagate Result errors.",
        "Use panic only for unrecoverable or violated-invariant situations."
      ],
      "lessons": [
        {
          "id": "rust-option-mapping",
          "title": "Handling optional values",
          "summary": "Option represents a value that may or may not be present.",
          "content": [
            "Use match when both cases need distinct behavior, or methods such as map, and_then, unwrap_or, and ok_or when they express the intent more clearly. Do not call unwrap just to silence a compiler error without understanding why absence cannot occur.",
            "Option composes well with iterators and other APIs. Methods such as first and get often return Option because empty collections and invalid indexes are ordinary situations that callers may need to handle."
          ],
          "example": "fn username_at(names: &[String], index: usize) -> Option<&str> {\n    names.get(index).map(String::as_str)\n}\n\nlet name = username_at(&[], 0).unwrap_or(\"guest\");\nassert_eq!(name, \"guest\");",
          "quest": {
            "prompt": "What does unwrap_or do when an Option is None?",
            "choices": [
              "Returns the provided fallback value",
              "Panics in all cases",
              "Converts None to an empty vector"
            ],
            "answer": 0,
            "explanation": "unwrap_or returns the contained value for Some and the provided default for None."
          }
        },
        {
          "id": "rust-result-question-mark",
          "title": "Result and the question-mark operator",
          "summary": "Result<T, E> represents success or failure, and ? propagates compatible errors.",
          "content": [
            "Result has Ok(value) and Err(error) variants. Functions that can fail should often return Result so the caller can decide whether to retry, display an error, or stop the operation.",
            "The ? operator returns the success value or exits the current function early with an error converted into the function's error type where the conversion is supported. It does not automatically handle or log the error for the caller."
          ],
          "example": "use std::fs;\nuse std::io;\n\nfn read_notes() -> Result<String, io::Error> {\n    let text = fs::read_to_string(\"notes.txt\")?;\n    Ok(text)\n}",
          "quest": {
            "prompt": "What happens when fs::read_to_string fails in this function?",
            "choices": [
              "? returns early with the error",
              "? silently replaces the error with an empty string",
              "The process always aborts immediately"
            ],
            "answer": 0,
            "explanation": "The ? operator returns the error from the function, allowing the caller to decide what to do."
          }
        },
        {
          "id": "rust-panics-custom-errors",
          "title": "Panics, validation, and error context",
          "summary": "Use Result for expected failures and reserve panics for broken assumptions or unrecoverable situations.",
          "content": [
            "A panic indicates that execution cannot proceed normally under the current logic, such as when an invariant is broken. User input, unavailable files, network failures, and missing records are generally better represented as recoverable errors.",
            "Validate inputs at system boundaries and add context that helps someone diagnose the failure. For larger applications, custom error enums or a suitable error-handling crate can keep error types precise without losing the cause of a failure."
          ],
          "example": "fn parse_port(text: &str) -> Result<u16, std::num::ParseIntError> {\n    text.parse::<u16>()\n}",
          "quest": {
            "prompt": "Which is usually more appropriate for invalid user-provided input?",
            "choices": [
              "Return a Result error",
              "Call panic! for every invalid input",
              "Ignore the input and continue"
            ],
            "answer": 0,
            "explanation": "Invalid external input is a recoverable condition. Returning Result lets the caller explain or correct the problem."
          }
        }
      ],
      "checkpoint": "Write a function that parses an integer from text and returns Result. Handle a missing collection element with Option, and describe which errors should be shown to a user rather than panic."
    },
    {
      "id": "rust-generics-traits-lifetimes",
      "title": "Generics, traits, and lifetimes",
      "level": "Advanced",
      "description": "Reuse behavior with generics and traits, understand trait bounds, and read lifetime annotations in borrowed data APIs.",
      "outcomes": [
        "Define generic functions and structs.",
        "Use traits and trait bounds to describe shared behavior.",
        "Understand when lifetime annotations communicate reference relationships."
      ],
      "lessons": [
        {
          "id": "rust-generics",
          "title": "Generic functions and types",
          "summary": "Generics let code work with multiple types while retaining compile-time type checking.",
          "content": [
            "A generic function declares type parameters in angle brackets and can operate on any type that satisfies the operations it uses. Generic structs can store values of a type chosen by the caller.",
            "The compiler monomorphizes many generic uses, generating code specialized for concrete types. Generics are not a substitute for dynamic polymorphism in every situation; choose the model that matches the API's needs."
          ],
          "example": "fn first<T>(items: &[T]) -> Option<&T> {\n    items.first()\n}\n\nlet value = first(&[10, 20, 30]);\nassert_eq!(value, Some(&10));",
          "quest": {
            "prompt": "What is a main benefit of a generic function?",
            "choices": [
              "It can work with multiple types under defined constraints",
              "It disables type checking",
              "It converts every value to a string"
            ],
            "answer": 0,
            "explanation": "Generics allow reusable code while the compiler still checks operations and types for each concrete use."
          }
        },
        {
          "id": "rust-traits-bounds",
          "title": "Traits and trait bounds",
          "summary": "Traits describe behavior that types can implement, while bounds specify the behavior a generic type must provide.",
          "content": [
            "A trait declares required methods and can offer default implementations. Types implement traits to provide that behavior, allowing generic functions to rely on capabilities rather than specific concrete types.",
            "A bound such as T: std::fmt::Display lets a function format a value. Traits such as Debug, Clone, Iterator, and IntoIterator are common in generic APIs; derive can generate implementations for many standard traits on suitable structs and enums."
          ],
          "example": "fn show<T: std::fmt::Display>(value: T) {\n    println!(\"{value}\");\n}\n\nshow(42);\nshow(\"Rust\");",
          "quest": {
            "prompt": "What does the Display trait bound guarantee to the show function?",
            "choices": [
              "T can be formatted using Display",
              "T is always a String",
              "T can be modified through any reference"
            ],
            "answer": 0,
            "explanation": "The Display bound guarantees that the value supports the formatting behavior required by println! with the default display format."
          }
        },
        {
          "id": "rust-lifetimes",
          "title": "Reading lifetime annotations",
          "summary": "Lifetime annotations describe relationships between references rather than extending data's lifetime.",
          "content": [
            "The borrow checker normally infers lifetimes, but function signatures sometimes need annotations to express how returned references relate to input references. A lifetime such as 'a is a named relationship used in type checking, not a timer or memory-management command.",
            "A returned reference must not outlive the value it points to. Lifetime annotations cannot make a local variable live longer; they help the compiler verify that callers use a returned borrow only while its source remains valid."
          ],
          "example": "fn longer<'a>(left: &'a str, right: &'a str) -> &'a str {\n    if left.len() >= right.len() { left } else { right }\n}\n\nlet result = longer(\"rust\", \"go\");\nassert_eq!(result, \"rust\");",
          "quest": {
            "prompt": "What do lifetime annotations communicate?",
            "choices": [
              "Relationships between reference validity periods",
              "How many seconds an object remains alive",
              "A request to allocate memory on the heap"
            ],
            "answer": 0,
            "explanation": "Lifetimes describe relationships among borrows so the compiler can verify reference validity; they do not extend an object's lifetime."
          }
        }
      ],
      "checkpoint": "Implement a generic function with a trait bound, define a small trait for a domain type, and read a borrowed return type with an explicit lifetime. Explain what each bound guarantees."
    },
    {
      "id": "rust-modules-cargo-tests",
      "title": "Modules, Cargo, and testing",
      "level": "Intermediate",
      "description": "Organize code into modules and crates, manage dependencies, and create reliable automated tests.",
      "outcomes": [
        "Use mod, pub, and use to structure visibility.",
        "Understand Cargo packages, dependencies, and lockfiles.",
        "Write unit and integration tests and run quality tools."
      ],
      "lessons": [
        {
          "id": "rust-modules-visibility",
          "title": "Modules, paths, and visibility",
          "summary": "Modules organize code and Rust privacy controls which items can be accessed from outside a module.",
          "content": [
            "mod declares a module, pub exposes an item according to its containing module's visibility, and use brings a path into scope. Paths can be absolute from the crate root with crate:: or relative to the current module.",
            "Keep fields and functions private by default unless external callers need them. A public struct with private fields can preserve invariants by exposing constructors and methods rather than allowing arbitrary states."
          ],
          "example": "mod counter {\n    pub struct Counter { value: u32 }\n    impl Counter {\n        pub fn new() -> Self { Self { value: 0 } }\n        pub fn value(&self) -> u32 { self.value }\n    }\n}\n\nlet counter = counter::Counter::new();\nassert_eq!(counter.value(), 0);",
          "quest": {
            "prompt": "What does pub generally do in a module?",
            "choices": [
              "Makes an item accessible outside its current privacy boundary",
              "Makes a value mutable",
              "Automatically makes an item thread-safe"
            ],
            "answer": 0,
            "explanation": "pub changes visibility; it does not imply mutability, synchronization, or thread safety."
          }
        },
        {
          "id": "rust-cargo-dependencies",
          "title": "Cargo dependencies and reproducible builds",
          "summary": "Cargo resolves dependencies and records project configuration and versions.",
          "content": [
            "Cargo.toml declares the package and dependency requirements. Cargo.lock records the resolved dependency graph for applications and binaries; commit it for reproducible builds, while library crates commonly have different lockfile conventions.",
            "Use cargo add when available in your toolchain or edit the manifest deliberately. Review new dependencies for maintenance, license, security, and compile-time cost; do not add a dependency for trivial functionality already provided clearly by the standard library."
          ],
          "example": "cargo new study_tracker\ncd study_tracker\ncargo check\ncargo test\n# Add required dependencies in Cargo.toml when needed",
          "quest": {
            "prompt": "What is Cargo.lock mainly used for in an application?",
            "choices": [
              "Recording resolved dependency versions for repeatable builds",
              "Storing all Rust source code in one file",
              "Replacing Cargo.toml"
            ],
            "answer": 0,
            "explanation": "Cargo.lock records a resolved dependency graph. Cargo.toml remains the manifest describing package metadata and dependency requirements."
          }
        },
        {
          "id": "rust-unit-integration-tests",
          "title": "Unit tests and integration tests",
          "summary": "Rust supports unit tests in source modules and integration tests under the tests directory.",
          "content": [
            "Unit tests commonly live in a #[cfg(test)] module and can access private items in their module. Integration tests live in the tests directory and exercise the crate through its public API, resembling how an external caller uses it.",
            "Use assert, assert_eq, and assert_ne to verify outcomes. Test ordinary behavior, edge cases, invalid input, empty data, and error paths; tests complement compiler checks but cannot prove a program is correct in every possible case."
          ],
          "example": "#[cfg(test)]\nmod tests {\n    #[test]\n    fn addition_works() {\n        assert_eq!(2 + 2, 4);\n    }\n}\n\n// Run tests with: cargo test",
          "quest": {
            "prompt": "Which attribute marks a function as a standard Rust test?",
            "choices": [
              "#[test]",
              "#[verify]",
              "#[unittest]"
            ],
            "answer": 0,
            "explanation": "The #[test] attribute marks a test function that the Rust test harness discovers and runs."
          }
        }
      ],
      "checkpoint": "Split a small application into two modules, make only the necessary items public, add unit tests for normal and boundary cases, and run cargo fmt, cargo test, and cargo clippy."
    },
    {
      "id": "rust-smart-pointers",
      "title": "Smart pointers and interior mutability",
      "level": "Advanced",
      "description": "Learn when ownership wrappers such as Box, Rc, Arc, Cell, and RefCell are useful, and understand their tradeoffs.",
      "outcomes": [
        "Use Box for owned heap allocation when indirection is required.",
        "Distinguish single-threaded Rc from thread-safe Arc.",
        "Recognize interior-mutability tools and runtime borrow checks."
      ],
      "lessons": [
        {
          "id": "rust-box",
          "title": "Box and heap allocation",
          "summary": "Box<T> owns a value allocated on the heap and gives it a stable indirection in the type structure.",
          "content": [
            "Box is useful for recursive types, large values whose ownership should move cheaply, or values that need heap allocation with a single clear owner. It does not by itself provide shared ownership or thread synchronization.",
            "Rust automatically drops a Box and the value it owns when the Box goes out of scope. Prefer ordinary values when possible, and add Box only when indirection or allocation fits the design."
          ],
          "example": "enum List {\n    Cons(i32, Box<List>),\n    Nil,\n}\n\nlet list = List::Cons(1, Box::new(List::Nil));",
          "quest": {
            "prompt": "Why is Box often used in a recursive enum such as List?",
            "choices": [
              "It provides indirection so the recursive type has a finite size",
              "It disables automatic cleanup",
              "It makes every value globally shared"
            ],
            "answer": 0,
            "explanation": "Box<List> introduces indirection, allowing the compiler to determine the size of the recursive enum."
          }
        },
        {
          "id": "rust-rc-arc",
          "title": "Shared ownership with Rc and Arc",
          "summary": "Rc and Arc allow multiple owners to share a value, with different concurrency guarantees.",
          "content": [
            "Rc<T> maintains a reference count for shared ownership in single-threaded contexts. Arc<T> uses atomic reference counting and can be shared across threads when the inner type and usage satisfy the relevant Send and Sync requirements.",
            "Reference-counted ownership has costs and can create cycles if strong references point back to one another. Weak references can help break cycles; do not choose shared ownership unless several components genuinely need to co-own a value."
          ],
          "example": "use std::rc::Rc;\n\nlet original = Rc::new(String::from(\"shared\"));\nlet another_owner = Rc::clone(&original);\nassert_eq!(Rc::strong_count(&original), 2);\nassert_eq!(another_owner.as_str(), \"shared\");",
          "quest": {
            "prompt": "Which type is intended for reference-counted sharing across threads?",
            "choices": [
              "Arc",
              "Rc",
              "Box"
            ],
            "answer": 0,
            "explanation": "Arc uses atomic reference counting and is suited to shared ownership across threads when its contents meet the required thread-safety bounds."
          }
        },
        {
          "id": "rust-interior-mutability",
          "title": "Cell, RefCell, and Mutex",
          "summary": "Interior mutability permits mutation through a shared outer reference using specific runtime or synchronization rules.",
          "content": [
            "Cell works well for simple Copy values and replaces or retrieves them without exposing ordinary references to the contained value. RefCell dynamically checks borrowing rules at runtime and panics if incompatible borrows overlap.",
            "Mutex provides synchronized access to data shared between threads. Interior-mutability types solve particular ownership constraints; they do not remove the need to reason about invariants, lock ordering, or runtime borrow failures."
          ],
          "example": "use std::cell::RefCell;\n\nlet counter = RefCell::new(0);\n*counter.borrow_mut() += 1;\nassert_eq!(*counter.borrow(), 1);",
          "quest": {
            "prompt": "What can happen if RefCell's runtime borrowing rules are violated?",
            "choices": [
              "The program panics",
              "The compiler automatically inserts a Mutex",
              "The value silently becomes None"
            ],
            "answer": 0,
            "explanation": "RefCell checks its borrowing rules at runtime and panics if conflicting borrows occur."
          }
        }
      ],
      "checkpoint": "Model a recursive data structure with Box and compare it with a shared-ownership example. Explain why Rc, Arc, RefCell, and Mutex solve different problems."
    },
    {
      "id": "rust-concurrency-async",
      "title": "Threads, channels, and asynchronous concepts",
      "level": "Advanced",
      "description": "Coordinate concurrent work using threads, message passing, and shared state, while understanding where async runtimes fit.",
      "outcomes": [
        "Spawn and join threads safely.",
        "Use channels or synchronized shared state for communication.",
        "Distinguish concurrency from asynchronous I/O and identify common coordination risks."
      ],
      "lessons": [
        {
          "id": "rust-thread-spawn",
          "title": "Threads and join handles",
          "summary": "Rust threads can execute work concurrently while ownership rules constrain what data crosses thread boundaries.",
          "content": [
            "std::thread::spawn starts a new OS thread and returns a JoinHandle. Calling join waits for the thread to finish and returns a Result that reports whether the thread panicked.",
            "A move closure is commonly used when a spawned thread must own captured values. Rust's Send and 'static bounds prevent many references from being moved into a thread when their source might disappear too early."
          ],
          "example": "use std::thread;\n\nlet handle = thread::spawn(|| {\n    2 + 3\n});\nlet answer = handle.join().expect(\"worker panicked\");\nassert_eq!(answer, 5);",
          "quest": {
            "prompt": "What does JoinHandle::join do?",
            "choices": [
              "Waits for the thread and returns its result or panic status",
              "Starts a second copy of the thread",
              "Turns the thread into an async future automatically"
            ],
            "answer": 0,
            "explanation": "join waits for the thread to finish and reports the returned value or a panic result."
          }
        },
        {
          "id": "rust-channels-shared-state",
          "title": "Channels and synchronized state",
          "summary": "Channels send values between concurrent tasks, while mutexes protect shared mutable state.",
          "content": [
            "The standard library's mpsc channel provides senders and a receiver for message passing. A channel can reduce the need for shared mutable state by transferring owned messages between workers.",
            "Arc<Mutex<T>> is a common pattern when several threads need access to the same mutable value. Keep critical sections small, handle poisoned locks deliberately, and design shutdown paths so threads do not wait forever for work or messages that never arrive."
          ],
          "example": "use std::sync::mpsc;\nuse std::thread;\n\nlet (sender, receiver) = mpsc::channel();\nthread::spawn(move || {\n    sender.send(String::from(\"ready\")).unwrap();\n});\nlet message = receiver.recv().unwrap();\nassert_eq!(message, \"ready\");",
          "quest": {
            "prompt": "What is a benefit of message passing with a channel?",
            "choices": [
              "It transfers messages without requiring all workers to mutate the same value",
              "It guarantees messages are always delivered even after every sender is dropped",
              "It removes the need to handle errors"
            ],
            "answer": 0,
            "explanation": "Message passing can reduce shared mutable state. Sends and receives can still fail and should be handled according to the application's needs."
          }
        },
        {
          "id": "rust-async-futures",
          "title": "Async functions and futures",
          "summary": "async functions describe work that can be polled to completion by an executor.",
          "content": [
            "An async fn returns a future rather than running all of its body immediately. The future progresses when an executor polls it, and .await allows an async task to yield while an awaited operation is pending.",
            "Rust's standard library defines Future but does not provide a general-purpose async runtime for networking or timers. Applications commonly use a runtime crate for I/O, scheduling, and shutdown; choose one based on requirements rather than assuming async automatically makes CPU-heavy work faster."
          ],
          "example": "async fn fetch_label() -> String {\n    // A real network operation would usually await an async client here.\n    String::from(\"ready\")\n}\n\n// Inside an async context: let label = fetch_label().await;",
          "quest": {
            "prompt": "What does calling an async function usually produce?",
            "choices": [
              "A future that must be polled by an executor to make progress",
              "A new OS thread in every case",
              "A completed String before the function body can be polled"
            ],
            "answer": 0,
            "explanation": "An async fn produces a future. Its body advances when that future is polled by an executor."
          }
        }
      ],
      "checkpoint": "Create two worker threads and coordinate their results. Then compare message passing with a shared Mutex-protected counter, documenting how errors and shutdown are handled."
    },
    {
      "id": "rust-files-cli-performance",
      "title": "Files, command-line apps, performance, and unsafe boundaries",
      "level": "Advanced",
      "description": "Build practical Rust command-line programs, process files safely, measure performance, and understand the limits of unsafe code.",
      "outcomes": [
        "Read and write files while handling I/O errors.",
        "Structure a CLI around parsing, domain logic, and output.",
        "Use profiling and understand when unsafe Rust requires extra proof."
      ],
      "lessons": [
        {
          "id": "rust-file-io",
          "title": "Reading and writing files",
          "summary": "File operations return Results because permissions, paths, and storage can cause failures.",
          "content": [
            "std::fs includes convenient helpers such as read_to_string and write, while File and Read/Write traits support streaming and larger files. Choose a streaming approach if holding the entire file in memory is not appropriate.",
            "Handle errors rather than assuming a file exists or can be written. For important output, consider whether a partial write, interrupted operation, or replacement strategy matters to the application's durability requirements."
          ],
          "example": "use std::fs;\nuse std::io;\n\nfn load_config(path: &str) -> io::Result<String> {\n    fs::read_to_string(path)\n}\n\nfn save_report(path: &str, report: &str) -> io::Result<()> {\n    fs::write(path, report)\n}",
          "quest": {
            "prompt": "Why do file-reading functions commonly return Result?",
            "choices": [
              "File operations can fail for reasons the program must handle",
              "The compiler requires every string to be mutable",
              "Result makes a file operation always succeed"
            ],
            "answer": 0,
            "explanation": "File access can fail because of missing paths, permissions, I/O errors, or invalid text encoding, so a Result communicates failure."
          }
        },
        {
          "id": "rust-cli-architecture",
          "title": "Command-line arguments and application layers",
          "summary": "A reliable CLI separates argument parsing, domain operations, and presentation.",
          "content": [
            "std::env::args can access basic command-line arguments, while dedicated crates can provide richer parsing, help output, validation, and subcommands. Parse external input at the boundary and convert it into domain values before calling core logic.",
            "Keep the business rules testable without relying on terminal I/O or process exit. Return Result from application functions and let the top-level entry point decide how to display errors and choose an exit code."
          ],
          "example": "use std::env;\n\nfn main() {\n    let args: Vec<String> = env::args().collect();\n    let name = args.get(1).map(String::as_str).unwrap_or(\"learner\");\n    println!(\"Hello, {name}!\");\n}",
          "quest": {
            "prompt": "Why keep domain logic separate from command-line parsing?",
            "choices": [
              "It makes core behavior easier to test and reuse",
              "It ensures inputs can never be invalid",
              "It removes the need for a main function"
            ],
            "answer": 0,
            "explanation": "Separating domain logic avoids tying tests and reuse to process arguments, terminal output, and exit behavior."
          }
        },
        {
          "id": "rust-performance-unsafe",
          "title": "Performance, profiling, and unsafe code",
          "summary": "Measure performance before optimizing, and treat unsafe blocks as explicit proof obligations.",
          "content": [
            "Start with a correct implementation and representative benchmarks. Use profiling or benchmarking tools to locate actual bottlenecks, and consider algorithmic complexity, allocation patterns, copies, and I/O before low-level changes.",
            "Unsafe Rust permits operations that the compiler cannot fully verify, such as certain raw-pointer dereferences or implementing unsafe traits. An unsafe block does not switch off all Rust checks; the author must uphold the documented invariants that make those operations valid. Prefer safe abstractions unless a measured need justifies unsafe code."
          ],
          "example": "fn sum(values: &[u64]) -> u64 {\n    values.iter().copied().sum()\n}\n\nfn main() {\n    let values = [1, 2, 3, 4];\n    assert_eq!(sum(&values), 10);\n}",
          "quest": {
            "prompt": "What should usually happen before optimizing a suspected performance bottleneck?",
            "choices": [
              "Measure or profile representative workloads",
              "Rewrite the code with unsafe immediately",
              "Assume the most compact syntax is fastest"
            ],
            "answer": 0,
            "explanation": "Measurement identifies real bottlenecks and helps verify whether an optimization improves representative workloads."
          }
        }
      ],
      "checkpoint": "Build a CLI tool that reads a text file, validates a command, summarizes the content, and writes a report. Test I/O errors and invalid arguments, then profile only if you have evidence of a performance problem."
    }
  ],
  "capstone": {
    "title": "Rust capstone: Personal Study Tracker",
    "brief": "Build a command-line study tracker that adds, lists, updates, completes, filters, and removes study sessions. Model records with structs and enums, use Vec and HashMap where appropriate, validate input, return Result for recoverable failures, and persist records to a JSON file. Add tests and consider a threaded or HTTP extension after the core application is reliable.",
    "milestones": [
      "Create a Cargo project and define a StudySession type with an ID, topic, minutes, completion status, and suitable date or category fields.",
      "Implement focused functions for adding, listing, updating, filtering, and deleting sessions; pass borrowed data when ownership does not need to change.",
      "Validate command-line input and return clear errors for invalid minutes, missing IDs, malformed data, and unavailable files.",
      "Persist records to JSON using an appropriate serialization approach, document any external dependency, and handle read/write failures deliberately.",
      "Add unit tests for ordinary, empty, duplicate, invalid, and boundary cases; run cargo fmt, cargo test, and cargo clippy.",
      "Optionally add worker-thread processing or an HTTP API, explain ownership and synchronization decisions, and document build and run instructions."
    ]
  }
};
export default rustCourse;