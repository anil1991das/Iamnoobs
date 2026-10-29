import type { CourseConfig } from "../types";

export const kotlinCourse: CourseConfig = {
  "slug": "kotlin",
  "language": "Kotlin",
  "title": "Learn Kotlin: Beginner to Advanced",
  "icon": "🟣",
  "levelLabel": "Beginner to advanced",
  "description": "Learn Kotlin from first principles through null safety, classes, collections, generics, coroutines, file handling, testing, HTTP APIs, and application design with short lessons, guided code, quizzes, checkpoints, and a capstone.",
  "metaDescription": "A structured Kotlin programming course covering the JVM, variables, expressions, control flow, functions, lambdas, null safety, classes, data classes, interfaces, collections, generics, extensions, exceptions, files, JSON, coroutines, testing, Gradle, and HTTP APIs.",
  "audience": "Beginners and developers who want to learn Kotlin for JVM applications, Android foundations, command-line tools, backend services, and modern application development.",
  "prerequisites": "No prior Kotlin experience is required. Familiarity with files and running terminal commands is helpful. Examples primarily target Kotlin on the JVM; some dependency-based snippets are illustrative and may require Gradle dependencies. Examples are explanatory and are not compiled or executed on this website.",
  "modules": [
    {
      "id": "kotlin-meet-kotlin-and-the-jvm",
      "title": "Meet Kotlin and the JVM",
      "level": "Beginner",
      "description": "Understand Kotlin's purpose, project structure, compiler, and basic syntax.",
      "outcomes": [
        "Describe how Kotlin source code is compiled and run on the JVM.",
        "Recognize main, package declarations, and imports.",
        "Use compiler and build-tool feedback to fix simple problems."
      ],
      "lessons": [
        {
          "id": "kotlin-first-program",
          "title": "Your first Kotlin program",
          "summary": "A Kotlin command-line application commonly starts in a top-level main function.",
          "content": [
            "Kotlin is a statically typed language that can target the JVM and other platforms. For a JVM course, source files are commonly compiled with kotlinc or built with Gradle.",
            "The main function is the conventional entry point for a command-line program. Kotlin's println function writes a value followed by a newline."
          ],
          "example": "fun main() {\n    println(\"Hello, Kotlin!\")\n}",
          "quest": {
            "prompt": "Which function is the usual entry point of a Kotlin command-line program?",
            "choices": [
              "main()",
              "start()",
              "println()"
            ],
            "answer": 0,
            "explanation": "A top-level main function is the conventional entry point. println prints output but does not start the program."
          }
        },
        {
          "id": "kotlin-run-compile",
          "title": "Run and compile Kotlin",
          "summary": "The Kotlin compiler and build tools turn source code into runnable output.",
          "content": [
            "For a small JVM program, kotlinc can compile a .kt file into a runnable jar. Larger applications commonly use Gradle to manage source sets, dependencies, tests, and repeatable builds.",
            "Compiler diagnostics are useful feedback. Read the first relevant message, check its file and line, and fix the underlying type or syntax issue rather than changing unrelated code."
          ],
          "example": "kotlinc Main.kt -include-runtime -d app.jar\njava -jar app.jar",
          "quest": {
            "prompt": "Which command runs a jar built with an included Kotlin runtime?",
            "choices": [
              "java -jar app.jar",
              "kotlin --delete app.jar",
              "gradle clean-only"
            ],
            "answer": 0,
            "explanation": "java -jar runs an executable JVM jar when it has a suitable main manifest entry."
          }
        },
        {
          "id": "kotlin-syntax-names",
          "title": "Comments, names, and basic syntax",
          "summary": "Kotlin uses case-sensitive names and supports line and block comments.",
          "content": [
            "Kotlin identifiers are case-sensitive, so itemCount and ItemCount are different names. Use descriptive lower camel case for local variables and functions, and UpperCamelCase for classes and types.",
            "Use // for line comments and /* ... */ for block comments. Prefer comments that explain intent, constraints, or reasoning that is not apparent from the code itself."
          ],
          "example": "fun main() {\n    val courseName = \"Kotlin Basics\"\n    // Display the selected course.\n    println(courseName)\n}",
          "quest": {
            "prompt": "How are itemCount and ItemCount treated in Kotlin?",
            "choices": [
              "As different identifiers",
              "As the same identifier",
              "As compiler keywords"
            ],
            "answer": 0,
            "explanation": "Kotlin is case-sensitive, so capitalization changes the identifier."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Kotlin program that uses meet kotlin and the jvm, then test a normal case, an empty or boundary case, and one invalid or unexpected input. Explain why the result is correct before running the code."
    },
    {
      "id": "kotlin-variables-types-and-expressions",
      "title": "Variables, Types, and Expressions",
      "level": "Beginner",
      "description": "Declare immutable and mutable values and work with Kotlin's core types.",
      "outcomes": [
        "Choose between val and var appropriately.",
        "Recognize Kotlin's common numeric, Boolean, character, and string types.",
        "Use type inference and explicit conversions correctly."
      ],
      "lessons": [
        {
          "id": "kotlin-val-var",
          "title": "Immutable and mutable variables",
          "summary": "val prevents reassignment of a reference, while var permits reassignment.",
          "content": [
            "Use val by default when a name should not be reassigned. Use var only when the program needs to update the variable. A val reference does not automatically make a referenced object deeply immutable.",
            "Kotlin often infers a type from the initializer. Explicit type annotations are useful when they clarify an API, resolve ambiguity, or document the intended type."
          ],
          "example": "val course = \"Kotlin\"\nvar completedLessons = 0\ncompletedLessons += 1\nprintln(\"$course: $completedLessons\")",
          "quest": {
            "prompt": "Which declaration prevents reassignment of the variable name?",
            "choices": [
              "val",
              "var",
              "mut"
            ],
            "answer": 0,
            "explanation": "val prevents the variable from being assigned a new value after initialization; it does not guarantee deep object immutability."
          }
        },
        {
          "id": "kotlin-primitive-types",
          "title": "Numbers, Boolean, and characters",
          "summary": "Kotlin provides statically typed numeric and logical values.",
          "content": [
            "Common types include Int, Long, Double, Float, Boolean, and Char. Kotlin's type system helps prevent accidental mixing of incompatible values.",
            "Numeric conversions are explicit. For example, an Int can be converted using toLong() or toDouble(); Kotlin does not silently widen numeric types in every expression."
          ],
          "example": "val count: Int = 12\nval population: Long = count.toLong()\nval ratio: Double = count.toDouble() / 5\nval enabled: Boolean = true",
          "quest": {
            "prompt": "How can an Int value be converted explicitly to Long?",
            "choices": [
              "value.toLong()",
              "Long(value)",
              "value asLong"
            ],
            "answer": 0,
            "explanation": "Kotlin provides conversion functions such as toLong() and toDouble() for numeric conversions."
          }
        },
        {
          "id": "kotlin-strings-templates",
          "title": "Strings and string templates",
          "summary": "String templates embed expressions directly in readable text.",
          "content": [
            "A normal string uses double quotes. Prefix a variable name with $ or place an expression inside ${...} to interpolate it into a string.",
            "Triple-quoted strings can hold multiline text with fewer escaping rules. Use trimIndent() when you want to remove common indentation from a multiline string."
          ],
          "example": "val learner = \"Mina\"\nval finished = 3\nprintln(\"$learner completed $finished lessons\")\nprintln(\"Total after bonus: ${finished + 2}\")",
          "quest": {
            "prompt": "Which syntax embeds an expression in a Kotlin string?",
            "choices": [
              "${expression}",
              "#{expression}",
              "%{expression}"
            ],
            "answer": 0,
            "explanation": "Kotlin string templates use $name or ${expression}; braces are useful for expressions."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Kotlin program that uses variables, types, and expressions, then test a normal case, an empty or boundary case, and one invalid or unexpected input. Explain why the result is correct before running the code."
    },
    {
      "id": "kotlin-operators-conditions-and-ranges",
      "title": "Operators, Conditions, and Ranges",
      "level": "Beginner",
      "description": "Build expressions and express conditional logic using Kotlin syntax.",
      "outcomes": [
        "Use arithmetic, comparison, and logical operators.",
        "Write if expressions and when branches.",
        "Create and test ranges with correct inclusive bounds."
      ],
      "lessons": [
        {
          "id": "kotlin-operators",
          "title": "Arithmetic and comparison operators",
          "summary": "Operators calculate values and compare expressions.",
          "content": [
            "Kotlin supports familiar arithmetic operators such as +, -, *, /, and %. Comparison operators produce Boolean values. Integer division discards the fractional part, so use a floating-point type when fractional results are required.",
            "Logical operators && and || short-circuit: the right-hand expression is evaluated only when needed to determine the result. This matters when expressions perform checks or have side effects."
          ],
          "example": "val total = 17 / 5\nval remainder = 17 % 5\nval canProceed = total > 2 && remainder == 2\nprintln(\"$total, $remainder, $canProceed\")",
          "quest": {
            "prompt": "What is the result of 17 / 5 when both operands are Int?",
            "choices": [
              "3",
              "3.4",
              "4"
            ],
            "answer": 0,
            "explanation": "Integer division returns the whole-number quotient, so 17 / 5 evaluates to 3."
          }
        },
        {
          "id": "kotlin-if-expression",
          "title": "Conditions and if expressions",
          "summary": "In Kotlin, if can select and return a value.",
          "content": [
            "Kotlin uses if and else to choose between branches. Unlike a statement-only design, if can be used as an expression when both branches supply a value.",
            "Use braces for multi-line branches and keep conditions understandable. Complex business rules are often clearer when extracted into named Boolean values or functions."
          ],
          "example": "val score = 82\nval grade = if (score >= 80) {\n    \"A\"\n} else {\n    \"Keep practicing\"\n}\nprintln(grade)",
          "quest": {
            "prompt": "What must an if expression provide when used to initialize a value?",
            "choices": [
              "A value from the selected branch",
              "A return statement in every branch",
              "A semicolon after every condition"
            ],
            "answer": 0,
            "explanation": "When if is used as an expression, the selected branch produces the resulting value."
          }
        },
        {
          "id": "kotlin-when-ranges",
          "title": "when branches and ranges",
          "summary": "when can replace long conditional chains, and ranges express intervals.",
          "content": [
            "when compares a subject against branches and can also be used without a subject for Boolean conditions. The first matching branch is selected.",
            "An IntRange written as 1..5 includes both endpoints. The until operator excludes its upper bound, while downTo and step can express descending or stepped sequences."
          ],
          "example": "val score = 76\nval result = when (score) {\n    in 90..100 -> \"Excellent\"\n    in 70 until 90 -> \"Good\"\n    in 0 until 70 -> \"Practice more\"\n    else -> \"Invalid score\"\n}\nprintln(result)",
          "quest": {
            "prompt": "Which range includes 5 in Kotlin?",
            "choices": [
              "1..5",
              "1 until 5",
              "1..<5 is always inclusive"
            ],
            "answer": 0,
            "explanation": "The .. range includes both endpoints, so 1..5 contains 5."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Kotlin program that uses operators, conditions, and ranges, then test a normal case, an empty or boundary case, and one invalid or unexpected input. Explain why the result is correct before running the code."
    },
    {
      "id": "kotlin-loops-collections-and-iteration",
      "title": "Loops, Collections, and Iteration",
      "level": "Beginner",
      "description": "Repeat operations and process collections without off-by-one errors.",
      "outcomes": [
        "Use for, while, and repeat for appropriate tasks.",
        "Iterate through ranges and collection elements.",
        "Choose break and continue carefully."
      ],
      "lessons": [
        {
          "id": "kotlin-for-ranges",
          "title": "for loops and ranges",
          "summary": "A for loop iterates over values supplied by a range or collection.",
          "content": [
            "Use for when iterating over a known range or collection. Ranges make boundaries visible and often eliminate manual counter updates.",
            "Check whether the upper endpoint is included. Use 0 until size for indexes when the collection has size elements, and prefer iterating over values when indexes are not needed."
          ],
          "example": "for (number in 1..4) {\n    println(number)\n}\nfor (index in 0 until 3) {\n    println(\"Index $index\")\n}",
          "quest": {
            "prompt": "How many values are produced by 1..4?",
            "choices": [
              "4",
              "3",
              "5"
            ],
            "answer": 0,
            "explanation": "The .. range includes both endpoints, producing 1, 2, 3, and 4."
          }
        },
        {
          "id": "kotlin-while-repeat",
          "title": "while, do-while, and repeat",
          "summary": "Different loop forms suit condition-driven and count-driven repetition.",
          "content": [
            "while checks its condition before each iteration, so the body may run zero times. do-while checks after the body and therefore runs at least once.",
            "repeat(count) is convenient for a fixed number of repetitions. Keep loop conditions tied to explicit state changes to avoid accidental infinite loops."
          ],
          "example": "var remaining = 3\nwhile (remaining > 0) {\n    println(remaining)\n    remaining--\n}\nrepeat(2) { index -> println(\"Pass $index\") }",
          "quest": {
            "prompt": "Which loop form always executes its body at least once?",
            "choices": [
              "do-while",
              "while",
              "A while loop with a false initial condition"
            ],
            "answer": 0,
            "explanation": "do-while evaluates the condition after its first body execution."
          }
        },
        {
          "id": "kotlin-break-continue",
          "title": "Control loop flow",
          "summary": "break exits a loop and continue skips to the next iteration.",
          "content": [
            "break terminates the nearest enclosing loop. continue skips the remaining body for the current iteration and proceeds with the next one.",
            "Use these statements where they make the algorithm clearer, such as stopping after a match. For nested loops, labels can target an outer loop, but named helper functions may be easier to understand."
          ],
          "example": "for (number in 1..6) {\n    if (number == 2) continue\n    if (number == 5) break\n    println(number)\n}",
          "quest": {
            "prompt": "What does continue do in a loop?",
            "choices": [
              "Skips the rest of the current iteration",
              "Stops the entire program",
              "Restarts the application"
            ],
            "answer": 0,
            "explanation": "continue skips the remaining body for that iteration and moves to the next iteration."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Kotlin program that uses loops, collections, and iteration, then test a normal case, an empty or boundary case, and one invalid or unexpected input. Explain why the result is correct before running the code."
    },
    {
      "id": "kotlin-functions-lambdas-and-scope",
      "title": "Functions, Lambdas, and Scope",
      "level": "Beginner",
      "description": "Create reusable functions and use default arguments, named arguments, and lambdas.",
      "outcomes": [
        "Declare functions with parameters and return types.",
        "Use default and named arguments for readable calls.",
        "Recognize lambdas and local scope."
      ],
      "lessons": [
        {
          "id": "kotlin-function-basics",
          "title": "Function parameters and return values",
          "summary": "Functions group reusable behavior behind a clear signature.",
          "content": [
            "A Kotlin function is declared with fun. Parameters have a name followed by a type, and the return type appears after a colon. Functions returning no meaningful value commonly omit the return type, which defaults to Unit.",
            "Prefer functions that have a clear purpose and explicit inputs. Return results rather than changing unrelated global state, which improves testability and makes code easier to reason about."
          ],
          "example": "fun square(value: Int): Int {\n    return value * value\n}\n\nfun main() {\n    println(square(6))\n}",
          "quest": {
            "prompt": "Where is a Kotlin function's return type written?",
            "choices": [
              "After the parameter list, following a colon",
              "Before the fun keyword only",
              "After the function body"
            ],
            "answer": 0,
            "explanation": "Kotlin writes an explicit return type after the parameter list using a colon."
          }
        },
        {
          "id": "kotlin-default-named",
          "title": "Default and named arguments",
          "summary": "Default values reduce overloads, and named arguments clarify call sites.",
          "content": [
            "A parameter can have a default value so callers can omit it when the default is appropriate. Named arguments make calls clearer when a function has several Boolean or numeric parameters.",
            "Parameter defaults should be stable and unsurprising. Avoid using defaults to conceal required decisions such as authorization, data ownership, or a critical configuration setting."
          ],
          "example": "fun describeCourse(name: String, lessons: Int = 12, offline: Boolean = true) {\n    println(\"$name: $lessons lessons; offline=$offline\")\n}\n\ndescribeCourse(name = \"Kotlin\", offline = false)",
          "quest": {
            "prompt": "Why might a caller use a named argument?",
            "choices": [
              "To make the meaning of a supplied value clearer",
              "To bypass type checking",
              "To make the function run asynchronously"
            ],
            "answer": 0,
            "explanation": "Named arguments document which parameter receives each value, especially when several arguments have similar types."
          }
        },
        {
          "id": "kotlin-lambdas-scope",
          "title": "Lambdas and lexical scope",
          "summary": "A lambda is a function literal that can be stored or passed to another function.",
          "content": [
            "Lambdas are useful for short behavior passed to functions such as filter, map, and forEach. The arrow separates parameter declarations from the lambda body.",
            "A lambda can access variables from its surrounding lexical scope. Keep captured mutable state limited and obvious, because it can make behavior harder to test or understand."
          ],
          "example": "val numbers = listOf(1, 2, 3, 4)\nval doubled = numbers.map { value -> value * 2 }\nprintln(doubled)",
          "quest": {
            "prompt": "What does map do in this example?",
            "choices": [
              "Transforms each element and returns a new list",
              "Deletes the original list permanently",
              "Sorts the list automatically"
            ],
            "answer": 0,
            "explanation": "map applies the transformation to each element and returns a list of the transformed results."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Kotlin program that uses functions, lambdas, and scope, then test a normal case, an empty or boundary case, and one invalid or unexpected input. Explain why the result is correct before running the code."
    },
    {
      "id": "kotlin-null-safety-and-type-modeling",
      "title": "Null Safety and Type Modeling",
      "level": "Intermediate",
      "description": "Model optional values safely and represent alternatives with Kotlin's type system.",
      "outcomes": [
        "Distinguish nullable and non-nullable types.",
        "Use safe calls, Elvis, and explicit null checks.",
        "Represent outcomes using enums and sealed classes."
      ],
      "lessons": [
        {
          "id": "kotlin-nullable-types",
          "title": "Nullable and non-null types",
          "summary": "Kotlin encodes whether a variable may hold null in its type.",
          "content": [
            "A String value cannot be null, while String? can hold either a string or null. The compiler requires code to handle nullable values before using them where a non-null value is required.",
            "Null safety prevents many common null-reference mistakes at compile time, but platform types from Java or unsafe operations can still require care. Prefer clear contracts at language boundaries."
          ],
          "example": "val nickname: String? = readNickname()\nif (nickname != null) {\n    println(nickname.length)\n}\n\nfun readNickname(): String? = null",
          "quest": {
            "prompt": "Which type explicitly allows a null value?",
            "choices": [
              "String?",
              "String",
              "NonNullStringOnly"
            ],
            "answer": 0,
            "explanation": "The question mark marks a nullable type in Kotlin."
          }
        },
        {
          "id": "kotlin-safe-elvis",
          "title": "Safe calls and the Elvis operator",
          "summary": "Safe calls and Elvis expressions provide concise nullable-value handling.",
          "content": [
            "The safe-call operator ?. accesses a member only when the receiver is non-null; otherwise the result is null. The Elvis operator ?: provides a fallback when the left side is null.",
            "Avoid using the not-null assertion !! as a routine shortcut. It throws if the value is null, so use it only when a non-null invariant is genuinely guaranteed and documented."
          ],
          "example": "val input: String? = null\nval length = input?.length ?: 0\nprintln(length)",
          "quest": {
            "prompt": "What does input?.length ?: 0 produce when input is null?",
            "choices": [
              "0",
              "null.length",
              "A compile-time error always"
            ],
            "answer": 0,
            "explanation": "The safe call evaluates to null, and the Elvis operator chooses the fallback value 0."
          }
        },
        {
          "id": "kotlin-enum-sealed",
          "title": "Enums and sealed hierarchies",
          "summary": "Enums represent a fixed set of values; sealed types model a controlled set of variants.",
          "content": [
            "An enum class is useful for a finite set of named constants such as task status. A sealed class or sealed interface can represent alternatives that carry different data.",
            "when can provide exhaustive handling when the compiler knows all cases. Explicitly handle each variant so adding a new case highlights the places that need updating."
          ],
          "example": "enum class TaskStatus { TODO, IN_PROGRESS, DONE }\n\nfun label(status: TaskStatus): String = when (status) {\n    TaskStatus.TODO -> \"To do\"\n    TaskStatus.IN_PROGRESS -> \"In progress\"\n    TaskStatus.DONE -> \"Done\"\n}",
          "quest": {
            "prompt": "What benefit does an exhaustive when over an enum provide?",
            "choices": [
              "The compiler can help identify unhandled enum values",
              "It converts the enum to JSON automatically",
              "It prevents all runtime errors"
            ],
            "answer": 0,
            "explanation": "When all enum cases are handled, adding another enum entry can make missing handling visible at compile time."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Kotlin program that uses null safety and type modeling, then test a normal case, an empty or boundary case, and one invalid or unexpected input. Explain why the result is correct before running the code."
    },
    {
      "id": "kotlin-classes-and-object-oriented-kotlin",
      "title": "Classes and Object-Oriented Kotlin",
      "level": "Intermediate",
      "description": "Create classes and data classes and understand properties, constructors, and inheritance.",
      "outcomes": [
        "Define classes with primary constructors and properties.",
        "Use data classes for value-like records.",
        "Understand interfaces, inheritance, and overriding."
      ],
      "lessons": [
        {
          "id": "kotlin-classes-constructors",
          "title": "Classes and constructors",
          "summary": "A class defines a type, and a constructor initializes instances.",
          "content": [
            "Kotlin's primary constructor is declared in the class header. Properties may be declared with val or var in the constructor, and an init block can run initialization logic.",
            "Keep invariants close to the type that owns them. Validate constructor inputs when invalid state would otherwise spread through the application."
          ],
          "example": "class Course(val title: String, val lessonCount: Int) {\n    init {\n        require(lessonCount >= 0) { \"lessonCount must not be negative\" }\n    }\n}\n\nval course = Course(\"Kotlin\", 12)",
          "quest": {
            "prompt": "What does require(condition) do when the condition is false?",
            "choices": [
              "Throws IllegalArgumentException",
              "Silently changes the condition to true",
              "Runs the constructor twice"
            ],
            "answer": 0,
            "explanation": "require checks an argument condition and throws IllegalArgumentException when the condition is false."
          }
        },
        {
          "id": "kotlin-data-classes",
          "title": "Data classes and properties",
          "summary": "Data classes provide useful value-oriented methods for property-based models.",
          "content": [
            "A data class generates methods such as equals, hashCode, toString, and component functions based on primary-constructor properties. It is useful for records such as settings, tasks, and API data models.",
            "A data class does not make every property deeply immutable. A val property cannot be reassigned, but it may still refer to a mutable collection or object."
          ],
          "example": "data class StudyTask(\n    val id: Int,\n    val title: String,\n    val completed: Boolean = false\n)\n\nval task = StudyTask(1, \"Practice Kotlin\")\nprintln(task)",
          "quest": {
            "prompt": "Which feature is generated for a Kotlin data class?",
            "choices": [
              "A useful toString implementation",
              "A database table automatically",
              "A network endpoint automatically"
            ],
            "answer": 0,
            "explanation": "Data classes generate common value-oriented methods based on their primary-constructor properties."
          }
        },
        {
          "id": "kotlin-interfaces-inheritance",
          "title": "Interfaces and inheritance",
          "summary": "Interfaces define contracts and open classes support controlled inheritance.",
          "content": [
            "Kotlin classes and methods are final by default. Use open when a class or member is intentionally designed for inheritance, and override to implement an inherited open member or interface requirement.",
            "Interfaces can declare abstract members and provide default implementations. Prefer composition and small interfaces when they express dependencies more clearly than a deep inheritance hierarchy."
          ],
          "example": "interface Notifier {\n    fun send(message: String)\n}\n\nclass ConsoleNotifier : Notifier {\n    override fun send(message: String) {\n        println(message)\n    }\n}",
          "quest": {
            "prompt": "What keyword marks an implementation of an inherited member?",
            "choices": [
              "override",
              "extends",
              "implements"
            ],
            "answer": 0,
            "explanation": "Kotlin uses override to implement or replace an inherited open member or interface member."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Kotlin program that uses classes and object-oriented kotlin, then test a normal case, an empty or boundary case, and one invalid or unexpected input. Explain why the result is correct before running the code."
    },
    {
      "id": "kotlin-collections-and-functional-operations",
      "title": "Collections and Functional Operations",
      "level": "Intermediate",
      "description": "Choose suitable collection types and process data with standard collection operations.",
      "outcomes": [
        "Choose between lists, sets, and maps.",
        "Understand read-only versus mutable collection interfaces.",
        "Use filter, map, grouping, and sorting deliberately."
      ],
      "lessons": [
        {
          "id": "kotlin-list-set-map",
          "title": "Lists, sets, and maps",
          "summary": "Each collection type expresses a different way to organize values.",
          "content": [
            "A List preserves element order and allows repeated elements. A Set represents unique elements, and a Map associates keys with values. Use the collection that expresses the operations the application needs.",
            "Kotlin distinguishes read-only collection interfaces from mutable interfaces. A read-only reference does not necessarily guarantee that the underlying collection cannot be mutated through another reference."
          ],
          "example": "val lessons = listOf(\"Types\", \"Functions\", \"Classes\")\nval tags = setOf(\"beginner\", \"kotlin\", \"beginner\")\nval scores = mapOf(\"Ada\" to 95, \"Lin\" to 88)\nprintln(lessons.size)\nprintln(tags.size)\nprintln(scores[\"Ada\"])",
          "quest": {
            "prompt": "How many elements does setOf(\"beginner\", \"kotlin\", \"beginner\") contain?",
            "choices": [
              "2",
              "3",
              "1"
            ],
            "answer": 0,
            "explanation": "Sets keep unique elements, so the duplicate beginner value is represented once."
          }
        },
        {
          "id": "kotlin-mutable-collections",
          "title": "Mutable collections and safe updates",
          "summary": "Mutable collections support updates while read-only APIs can limit accidental changes.",
          "content": [
            "mutableListOf and mutableMapOf create collections with update operations such as add, remove, and put via indexing. Use the narrowest mutability needed by a function or property.",
            "Be careful when modifying a collection while iterating over it. Prefer filtering into a new collection or using a supported iterator operation rather than changing structure unpredictably."
          ],
          "example": "val tasks = mutableListOf(\"Read\", \"Practice\")\ntasks.add(\"Review\")\ntasks.remove(\"Read\")\nprintln(tasks)",
          "quest": {
            "prompt": "Which function adds an element to a MutableList?",
            "choices": [
              "add()",
              "appendOnly()",
              "insertValueForever()"
            ],
            "answer": 0,
            "explanation": "MutableList exposes add to append an element, with other insertion overloads available for specific positions."
          }
        },
        {
          "id": "kotlin-collection-pipelines",
          "title": "Filter, map, and sorting",
          "summary": "Collection operations make data transformations explicit and composable.",
          "content": [
            "filter keeps elements matching a predicate, map transforms each element, and sortedBy orders values according to a key. These operations commonly return a new collection rather than changing the original.",
            "Break complicated pipelines into named intermediate values when doing so improves readability. For large or streaming data, consider sequence operations when lazy evaluation meaningfully reduces intermediate work."
          ],
          "example": "val scores = listOf(62, 91, 75, 88)\nval passing = scores\n    .filter { it >= 70 }\n    .sorted()\nprintln(passing)",
          "quest": {
            "prompt": "What does filter do?",
            "choices": [
              "Keeps elements satisfying a predicate",
              "Changes every element into a string",
              "Always sorts in descending order"
            ],
            "answer": 0,
            "explanation": "filter returns the elements whose predicate evaluates to true."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Kotlin program that uses collections and functional operations, then test a normal case, an empty or boundary case, and one invalid or unexpected input. Explain why the result is correct before running the code."
    },
    {
      "id": "kotlin-generics-extensions-and-delegation",
      "title": "Generics, Extensions, and Delegation",
      "level": "Intermediate",
      "description": "Write reusable type-safe code and extend existing APIs without unnecessary inheritance.",
      "outcomes": [
        "Declare generic classes and functions.",
        "Write extension functions and understand their dispatch rules.",
        "Use delegation where it simplifies composition."
      ],
      "lessons": [
        {
          "id": "kotlin-generics",
          "title": "Generic functions and classes",
          "summary": "Generics allow reusable code to preserve type information.",
          "content": [
            "A generic function declares a type parameter such as <T> and uses it in its parameters or return type. This lets the compiler check that the values remain type-consistent without requiring untyped casts.",
            "Use generic constraints when an operation requires specific capabilities, such as T : Comparable<T>. Avoid adding type parameters that do not express a useful relationship."
          ],
          "example": "fun <T> firstOrNull(items: List<T>): T? {\n    return items.firstOrNull()\n}\n\nval first = firstOrNull(listOf(\"Kotlin\", \"JVM\"))",
          "quest": {
            "prompt": "What does the type parameter T allow in this function?",
            "choices": [
              "The function can work with different element types while preserving their type",
              "All values become strings",
              "The compiler skips type checking"
            ],
            "answer": 0,
            "explanation": "T represents a type chosen by the caller, allowing the function to remain reusable and type-safe."
          }
        },
        {
          "id": "kotlin-extension-functions",
          "title": "Extension functions and properties",
          "summary": "Extensions add callable syntax to a type without changing its source code.",
          "content": [
            "An extension function is declared with a receiver type before the function name, as in fun String.wordCount(). It can make a focused operation available with convenient member-like syntax.",
            "Extensions do not actually modify the class, and they are resolved statically based on the declared receiver type. They also cannot access a receiver's private members unless normal visibility rules permit it."
          ],
          "example": "fun String.wordCount(): Int =\n    trim().split(Regex(\"\\\\s+\")).count { it.isNotEmpty() }\n\nprintln(\"learn Kotlin well\".wordCount())",
          "quest": {
            "prompt": "Do extension functions add a real member to the receiver's class?",
            "choices": [
              "No, extension resolution is static and the class is not modified",
              "Yes, they rewrite the class at runtime",
              "Only when the receiver is a String"
            ],
            "answer": 0,
            "explanation": "Extension functions provide member-like syntax but do not modify the receiver type or use virtual dispatch as ordinary members do."
          }
        },
        {
          "id": "kotlin-delegation",
          "title": "Composition and delegation",
          "summary": "Delegation forwards an interface implementation to another object.",
          "content": [
            "Kotlin supports class delegation with the by keyword, allowing an object to implement an interface by forwarding members to a delegate. This can remove repetitive forwarding code.",
            "Use delegation when the delegated object's behavior matches the required contract. Keep ownership, mutability, and lifecycle expectations clear so delegation does not hide surprising side effects."
          ],
          "example": "interface Clock {\n    fun now(): Long\n}\n\nclass SystemClock : Clock {\n    override fun now(): Long = System.currentTimeMillis()\n}\n\nclass LoggedClock(private val delegate: Clock) : Clock by delegate",
          "quest": {
            "prompt": "What is the main purpose of `by delegate` in class declaration?",
            "choices": [
              "Forward interface behavior to another object",
              "Create a global singleton automatically",
              "Disable all overridden methods"
            ],
            "answer": 0,
            "explanation": "The by syntax can delegate interface implementation to another instance, reducing boilerplate."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Kotlin program that uses generics, extensions, and delegation, then test a normal case, an empty or boundary case, and one invalid or unexpected input. Explain why the result is correct before running the code."
    },
    {
      "id": "kotlin-exceptions-files-and-serialization",
      "title": "Exceptions, Files, and Serialization",
      "level": "Intermediate",
      "description": "Handle failures and work with files and structured data responsibly.",
      "outcomes": [
        "Use try/catch/finally and choose appropriate failure handling.",
        "Read and write files with clear resource lifetimes.",
        "Serialize data with an explicit JSON library or boundary."
      ],
      "lessons": [
        {
          "id": "kotlin-exceptions",
          "title": "Exceptions and failure paths",
          "summary": "try and catch handle exceptional failures at a boundary where recovery is possible.",
          "content": [
            "Kotlin does not distinguish checked exceptions in the type system. A try expression can return a value, and catch branches can handle exceptions that the code can reasonably recover from.",
            "Do not catch Throwable or broad exceptions merely to hide failures. Catch expected failure types close to a useful recovery action, and preserve enough context to diagnose unexpected problems."
          ],
          "example": "fun parseCount(text: String): Int? =\n    try {\n        text.toInt()\n    } catch (error: NumberFormatException) {\n        null\n    }",
          "quest": {
            "prompt": "What does this parseCount return for text that is not an integer?",
            "choices": [
              "null",
              "Always zero",
              "The original text"
            ],
            "answer": 0,
            "explanation": "The NumberFormatException is caught and the function returns null to represent an unparseable value."
          }
        },
        {
          "id": "kotlin-file-io",
          "title": "Reading and writing files",
          "summary": "File operations should specify their expected paths, encodings, and error behavior.",
          "content": [
            "For JVM applications, java.nio.file APIs provide Path and Files helpers for common file operations. Reading an entire small file can be convenient, while large files may need streaming to avoid unnecessary memory use.",
            "File operations can fail because of permissions, missing paths, disk issues, or invalid content. Handle those errors at a boundary where the application can report or recover from them."
          ],
          "example": "import java.nio.file.Files\nimport java.nio.file.Path\n\nfun saveNotes(text: String) {\n    Files.writeString(Path.of(\"notes.txt\"), text)\n}\n\nfun readNotes(): String =\n    Files.readString(Path.of(\"notes.txt\"))",
          "quest": {
            "prompt": "Which JVM type represents a filesystem path in this example?",
            "choices": [
              "Path",
              "FileBytesOnly",
              "DirectoryText"
            ],
            "answer": 0,
            "explanation": "java.nio.file.Path represents a path and works with the Files utility APIs."
          }
        },
        {
          "id": "kotlin-json-boundary",
          "title": "JSON and serialization boundaries",
          "summary": "Structured formats need an explicit mapping between domain data and external representations.",
          "content": [
            "Kotlin does not include a built-in JSON serializer in the core language. JVM applications commonly select a library such as kotlinx.serialization or Jackson and configure it for the project's needs.",
            "Validate external data even if it is deserialized into a typed object. Data can be missing, outdated, malformed, or semantically invalid, and compatibility rules should be part of the API contract."
          ],
          "example": "import kotlinx.serialization.Serializable\n\n@Serializable\ndata class StudyTask(\n    val id: Int,\n    val title: String,\n    val completed: Boolean = false\n)",
          "quest": {
            "prompt": "What does @Serializable indicate when using kotlinx.serialization?",
            "choices": [
              "The type is intended to participate in serialization",
              "The type is automatically stored in every database",
              "The compiler disables validation"
            ],
            "answer": 0,
            "explanation": "The annotation marks a type for serialization support when used with the kotlinx.serialization plugin and dependency."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Kotlin program that uses exceptions, files, and serialization, then test a normal case, an empty or boundary case, and one invalid or unexpected input. Explain why the result is correct before running the code."
    },
    {
      "id": "kotlin-coroutines-and-concurrency",
      "title": "Coroutines and Concurrency",
      "level": "Advanced",
      "description": "Understand threads, structured concurrency, and coroutine-based asynchronous work.",
      "outcomes": [
        "Distinguish concurrency from parallel execution.",
        "Use coroutine scopes and suspend functions conceptually and safely.",
        "Avoid blocking work and uncontrolled shared mutable state."
      ],
      "lessons": [
        {
          "id": "kotlin-threads-concurrency",
          "title": "Threads and shared state",
          "summary": "Concurrency allows work to make progress during overlapping periods; parallelism means work executes at the same time.",
          "content": [
            "JVM threads can execute independently, but shared mutable state introduces coordination problems such as races. Synchronization, thread-safe structures, immutability, and message passing are different ways to manage these risks.",
            "Do not assume that a compound operation is atomic just because an individual field is visible. Define who owns each mutable value and what synchronization protects it."
          ],
          "example": "import kotlin.concurrent.thread\n\nval worker = thread {\n    println(\"Work on a background thread\")\n}\nworker.join()",
          "quest": {
            "prompt": "What does join do on a Thread?",
            "choices": [
              "Waits for that thread to finish",
              "Starts the thread a second time",
              "Converts the thread to a coroutine"
            ],
            "answer": 0,
            "explanation": "join blocks the calling thread until the target thread completes."
          }
        },
        {
          "id": "kotlin-suspend-coroutines",
          "title": "Suspend functions and coroutines",
          "summary": "Coroutines can suspend without blocking the underlying thread when using a compatible suspending operation.",
          "content": [
            "A suspend function can suspend its coroutine and later resume, but it does not automatically run on a background thread. The dispatcher and the operations being called determine where work runs.",
            "For typical Kotlin/JVM projects, kotlinx.coroutines provides coroutine builders such as launch and async. Keep coroutine work in a defined scope so cancellation and failure propagation follow a clear lifecycle."
          ],
          "example": "import kotlinx.coroutines.delay\nimport kotlinx.coroutines.runBlocking\n\nfun main() = runBlocking {\n    delay(100)\n    println(\"Resumed after delay\")\n}",
          "quest": {
            "prompt": "Does the suspend modifier by itself guarantee execution on a background thread?",
            "choices": [
              "No, the coroutine context and dispatcher determine execution",
              "Yes, always",
              "Only when returning Int"
            ],
            "answer": 0,
            "explanation": "suspend marks a function that may suspend; the context and dispatcher determine where the coroutine executes."
          }
        },
        {
          "id": "kotlin-structured-cancellation",
          "title": "Structured concurrency and cancellation",
          "summary": "Structured concurrency ties child tasks to a defined lifecycle.",
          "content": [
            "A coroutine scope provides a parent for child coroutines. Structured concurrency helps ensure child tasks are joined or cancelled with the parent, making lifetime and error propagation easier to reason about.",
            "Cancellation is cooperative: suspending functions and explicit checks give a coroutine opportunities to respond. Avoid swallowing CancellationException in broad catch blocks because doing so can break cancellation behavior."
          ],
          "example": "import kotlinx.coroutines.coroutineScope\nimport kotlinx.coroutines.launch\n\nsuspend fun runTasks() = coroutineScope {\n    launch { println(\"Child task\") }\n}",
          "quest": {
            "prompt": "Why should CancellationException generally not be swallowed?",
            "choices": [
              "It can prevent structured cancellation from working correctly",
              "It is always a syntax error",
              "It means the JVM has run out of memory"
            ],
            "answer": 0,
            "explanation": "Swallowing cancellation can make work continue after its owning scope expects it to stop."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Kotlin program that uses coroutines and concurrency, then test a normal case, an empty or boundary case, and one invalid or unexpected input. Explain why the result is correct before running the code."
    },
    {
      "id": "kotlin-testing-build-tools-and-project-structure",
      "title": "Testing, Build Tools, and Project Structure",
      "level": "Advanced",
      "description": "Organize a Kotlin project for maintainability with automated checks and reliable builds.",
      "outcomes": [
        "Structure packages and Gradle projects clearly.",
        "Write unit tests for normal and boundary cases.",
        "Use formatting, static checks, and repeatable build steps."
      ],
      "lessons": [
        {
          "id": "kotlin-packages-gradle",
          "title": "Packages, imports, and Gradle",
          "summary": "Packages organize source names, while Gradle manages repeatable JVM project builds.",
          "content": [
            "A package declaration groups related declarations in a namespace; imports allow concise use of declarations from other packages. Keep package names stable and related to the domain or project structure.",
            "Gradle Kotlin DSL commonly uses build.gradle.kts. Dependencies, plugins, source sets, and test tasks should be declared reproducibly rather than installed manually on one developer machine."
          ],
          "example": "plugins {\n    kotlin(\"jvm\") version \"2.0.21\"\n}\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    testImplementation(kotlin(\"test\"))\n}",
          "quest": {
            "prompt": "What is build.gradle.kts commonly used for?",
            "choices": [
              "Configuring a Gradle build with Kotlin DSL",
              "Storing runtime logs only",
              "Defining JVM bytecode opcodes manually"
            ],
            "answer": 0,
            "explanation": "build.gradle.kts is a Gradle build script written with Kotlin DSL."
          }
        },
        {
          "id": "kotlin-unit-tests",
          "title": "Unit testing with Kotlin",
          "summary": "Tests verify observable behavior for normal, boundary, and failure cases.",
          "content": [
            "Unit tests check a focused unit of behavior and should be fast and repeatable. Use meaningful test names and assert outcomes that are important to users or callers.",
            "Test boundary cases such as empty inputs, invalid identifiers, duplicate items, and failure paths. Tests complement code review and do not prove every possible execution is correct."
          ],
          "example": "import kotlin.test.Test\nimport kotlin.test.assertEquals\n\nclass MathTest {\n    @Test\n    fun addsTwoNumbers() {\n        assertEquals(5, 2 + 3)\n    }\n}",
          "quest": {
            "prompt": "What is the purpose of an assertion in a unit test?",
            "choices": [
              "To compare actual behavior with an expected result",
              "To change the production code permanently",
              "To skip the test runner"
            ],
            "answer": 0,
            "explanation": "An assertion fails the test when actual behavior does not match the expected result."
          }
        },
        {
          "id": "kotlin-debug-quality",
          "title": "Debugging and code quality",
          "summary": "Formatting, diagnostics, tests, and focused reviews improve reliability.",
          "content": [
            "Use IDE breakpoints, stack traces, and logging to investigate behavior. Reproduce a bug with a small input, identify the first meaningful failure, and verify the fix with a regression test.",
            "Before release, run the full test suite, review dependency changes, and build from a clean checkout. Keep secrets out of source control and avoid logging access tokens or personal data unnecessarily."
          ],
          "example": "git status\n./gradlew test\n./gradlew build",
          "quest": {
            "prompt": "Why add a regression test after fixing a defect?",
            "choices": [
              "To help detect the same failure if it returns",
              "To guarantee the application contains no bugs",
              "To replace all future code reviews"
            ],
            "answer": 0,
            "explanation": "A regression test records the failure mode so later changes can detect if the defect returns."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Kotlin program that uses testing, build tools, and project structure, then test a normal case, an empty or boundary case, and one invalid or unexpected input. Explain why the result is correct before running the code."
    },
    {
      "id": "kotlin-http-apis-and-application-design",
      "title": "HTTP APIs and Application Design",
      "level": "Advanced",
      "description": "Apply Kotlin skills to basic service design, configuration, and production readiness.",
      "outcomes": [
        "Understand HTTP request and response boundaries.",
        "Separate application logic from delivery and storage concerns.",
        "Prepare an application with validation, configuration, and observability."
      ],
      "lessons": [
        {
          "id": "kotlin-http-basics",
          "title": "HTTP clients and APIs",
          "summary": "HTTP defines requests and responses that application code should validate and handle explicitly.",
          "content": [
            "A client sends a request to a URL and receives a status code, headers, and possibly a body. Treat network failures, non-success statuses, timeouts, and malformed responses as distinct failure cases.",
            "Kotlin can use JVM HTTP clients or framework-specific clients. Keep transport code separate from domain logic so core behavior can be tested without a live network."
          ],
          "example": "import java.net.URI\nimport java.net.http.HttpClient\nimport java.net.http.HttpRequest\nimport java.net.http.HttpResponse\n\nval client = HttpClient.newHttpClient()\nval request = HttpRequest.newBuilder(URI(\"https://example.com\"))\n    .GET()\n    .build()\nval response = client.send(request, HttpResponse.BodyHandlers.ofString())\nprintln(response.statusCode())",
          "quest": {
            "prompt": "Which value indicates the HTTP outcome category in this example?",
            "choices": [
              "response.statusCode()",
              "URI only",
              "The variable name client"
            ],
            "answer": 0,
            "explanation": "The status code communicates the result category of the HTTP request, such as success or client/server error."
          }
        },
        {
          "id": "kotlin-validation-config",
          "title": "Input validation and configuration",
          "summary": "Validate untrusted input at boundaries and keep environment configuration separate from code.",
          "content": [
            "Validate external data before it reaches core business logic. Check required fields, lengths, ranges, and relationships, and return useful errors without exposing internal details.",
            "Configuration may come from environment variables or a configuration file. Define defaults deliberately, validate required settings on startup, and never commit production secrets to a repository."
          ],
          "example": "fun requirePort(value: Int): Int {\n    require(value in 1..65535) { \"Port must be between 1 and 65535\" }\n    return value\n}",
          "quest": {
            "prompt": "Why validate configuration during startup?",
            "choices": [
              "To fail early with a clear message when settings are invalid",
              "To guarantee no network request can ever fail",
              "To avoid reading configuration at all"
            ],
            "answer": 0,
            "explanation": "Failing early makes configuration problems easier to diagnose than discovering them during a later operation."
          }
        },
        {
          "id": "kotlin-capstone-release",
          "title": "Release readiness and application boundaries",
          "summary": "Clear layers and repeatable checks make a small Kotlin application maintainable.",
          "content": [
            "Separate domain rules, persistence, and user-interface or HTTP delivery code. Keep dependencies explicit and define how failures cross each boundary.",
            "A release checklist should include clean builds, automated tests, validation of configuration, dependency review, and instructions for running the application. Add concurrency or framework layers only when the project requires them."
          ],
          "example": "./gradlew clean test\n./gradlew build",
          "quest": {
            "prompt": "Why separate domain logic from delivery code?",
            "choices": [
              "It makes core behavior easier to test and reuse",
              "It removes the need to handle errors",
              "It guarantees zero runtime cost"
            ],
            "answer": 0,
            "explanation": "Separating domain behavior from CLI, HTTP, or storage boundaries improves reuse and makes focused testing easier."
          }
        }
      ],
      "checkpoint": "Practice this module by writing a small Kotlin program that uses http apis and application design, then test a normal case, an empty or boundary case, and one invalid or unexpected input. Explain why the result is correct before running the code."
    }
  ],
  "capstone": {
    "title": "Kotlin capstone: Personal Study Tracker",
    "brief": "Build a small study tracker that creates, lists, updates, filters, and completes study tasks. Model tasks with data classes, validate inputs, use collections, persist data to a file, and write tests. As an extension, expose a small HTTP API or use coroutines for concurrent operations where useful.",
    "milestones": [
      "Create a Kotlin/JVM project with Gradle and define a StudyTask data class with an ID, title, completion status, and optional category.",
      "Implement focused functions to add, list, complete, filter, and remove tasks; validate inputs and model missing tasks explicitly.",
      "Persist task data with a clear serialization strategy, handle file and parsing failures, and keep storage behavior separate from task rules.",
      "Add unit tests for empty collections, duplicate IDs, invalid titles, missing tasks, and persistence failures; run the full Gradle test task.",
      "Optionally expose operations through an HTTP API or add coroutine-based work with explicit cancellation and lifecycle rules; document build and run steps."
    ]
  }
};
export default kotlinCourse;