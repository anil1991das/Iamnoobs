import type { CourseConfig } from "../types";

export const javascriptCourse: CourseConfig = {
  "slug": "javascript",
  "language": "JavaScript",
  "title": "Learn JavaScript: Beginner to Advanced",
  "icon": "🟨",
  "levelLabel": "Beginner to advanced",
  "description": "Learn modern JavaScript from the basics to functions, data structures, browser programming, asynchronous code, modules, testing, and application design through short lessons, guided examples, quests, and a capstone.",
  "metaDescription": "A structured JavaScript course covering runtime basics, variables, types, operators, control flow, loops, functions, closures, arrays, objects, JSON, DOM, events, forms, storage, promises, async/await, fetch, classes, modules, errors, testing, and modern development practices.",
  "audience": "Beginners and developers who want to build interactive websites, browser tools, or JavaScript applications and understand modern language features.",
  "prerequisites": "No prior JavaScript experience is needed. Examples use modern JavaScript (ES2022-style syntax) and browser or Node.js concepts; code examples are explanatory and are not compiled or executed on this website.",
  "modules": [
    {
      "id": "javascript-getting-started",
      "title": "Meet JavaScript and the runtime",
      "level": "Beginner",
      "description": "Understand where JavaScript runs, how to execute a script, and how to inspect output with developer tools.",
      "outcomes": [
        "Explain the role of a JavaScript engine and runtime.",
        "Run a script in a browser or Node.js environment.",
        "Use console output to inspect values and diagnose simple mistakes."
      ],
      "lessons": [
        {
          "id": "javascript-first-script",
          "title": "Your first JavaScript program",
          "summary": "JavaScript statements tell a runtime what actions to perform.",
          "content": [
            "JavaScript is a programming language used in web browsers and in server-side environments such as Node.js. A browser can run JavaScript embedded in or linked from an HTML page; Node.js can execute a .js file from a terminal.",
            "JavaScript is dynamically typed, so variables do not require type declarations. The runtime evaluates expressions and executes statements; syntax errors prevent the affected script from being parsed correctly."
          ],
          "example": "console.log('Hello, JavaScript!');\nconst language = 'JavaScript';\nconsole.log(`Welcome to ${language}`);",
          "quest": {
            "prompt": "Which statement writes a message to the console?",
            "choices": [
              "console.log('Hello')",
              "document.compile('Hello')",
              "print.html('Hello')"
            ],
            "answer": 0,
            "explanation": "console.log() writes values to the console, which is available in browser developer tools and Node.js."
          }
        },
        {
          "id": "javascript-runtime-environments",
          "title": "Browsers, engines, and Node.js",
          "summary": "The language is shared, but host environments provide different APIs.",
          "content": [
            "A JavaScript engine parses and executes JavaScript. Browsers add web APIs such as document, fetch, and localStorage; Node.js provides APIs for files, processes, and servers. Not every API exists in every runtime.",
            "Use a browser for DOM-based interactions and Node.js for scripts or server-side work. Always check the target environment before relying on an API such as window, document, or process."
          ],
          "example": "// Browser environment\nconsole.log(document.title);\n\n// Node.js environment\nconsole.log(process.version);",
          "quest": {
            "prompt": "Which API is normally available in a browser page but not built into a standard Node.js script?",
            "choices": [
              "document",
              "console",
              "JSON"
            ],
            "answer": 0,
            "explanation": "document is part of the browser DOM API. console and JSON are available in both browser and Node.js environments."
          }
        },
        {
          "id": "javascript-console-debugging",
          "title": "Console output and first errors",
          "summary": "Console methods help you inspect data and investigate failures.",
          "content": [
            "Use console.log() for general output, console.warn() for warnings, and console.error() for error messages. Logging an object can help reveal its current properties while you experiment.",
            "Read the first meaningful error message and its line or stack trace. A misspelled variable, missing bracket, or incorrect assumption about a value can cause later symptoms, so isolate the earliest failure first."
          ],
          "example": "const scores = [8, 10, 7];\nconsole.log('Scores:', scores);\nconsole.warn('Check the input range');\nconsole.error('Example error message');",
          "quest": {
            "prompt": "What is a useful first step when a script throws an error?",
            "choices": [
              "Read the error message and locate the relevant line",
              "Delete the whole script immediately",
              "Ignore the error and assume the output is correct"
            ],
            "answer": 0,
            "explanation": "Error messages often identify the failure type and location, which helps you investigate the underlying cause systematically."
          }
        }
      ],
      "checkpoint": "Run a script that prints your name, a number, and an array. Introduce a small typo, inspect the error, and then fix it."
    },
    {
      "id": "javascript-values-variables",
      "title": "Variables, values, and data types",
      "level": "Beginner",
      "description": "Declare variables, identify primitive and reference values, and convert data deliberately.",
      "outcomes": [
        "Choose let and const appropriately.",
        "Recognize JavaScript's common primitive types and objects.",
        "Test and convert values without relying on surprising coercion."
      ],
      "lessons": [
        {
          "id": "javascript-let-const-var",
          "title": "Declare variables with let and const",
          "summary": "Declarations define bindings; const prevents reassignment of the binding.",
          "content": [
            "Use const by default when a variable will not be reassigned, and use let when its binding must change. var is older and has function scope with behaviors that can make code harder to reason about, so modern code generally prefers let and const.",
            "A const binding cannot be assigned a different value, but a referenced object or array can still be mutated. const does not automatically freeze an object; it only prevents reassignment of the binding."
          ],
          "example": "const courseName = 'JavaScript';\nlet lessonsCompleted = 0;\nlessonsCompleted += 1;\n\nconst topics = ['values', 'functions'];\ntopics.push('arrays'); // allowed\n// courseName = 'Python'; // TypeError",
          "quest": {
            "prompt": "What does const guarantee?",
            "choices": [
              "The binding cannot be reassigned",
              "Every nested object is deeply immutable",
              "The value must always be a number"
            ],
            "answer": 0,
            "explanation": "const prevents reassignment of the binding. It does not freeze arrays or objects referenced by that binding."
          }
        },
        {
          "id": "javascript-primitive-types",
          "title": "Primitive types and typeof",
          "summary": "JavaScript has primitive values as well as objects.",
          "content": [
            "Common primitive types are string, number, bigint, boolean, undefined, symbol, and null. Objects include arrays, functions, dates, and ordinary key-value records. typeof is useful for many checks, but typeof null returns 'object' for historical reasons.",
            "An uninitialized declared variable has the value undefined. null is normally used deliberately to represent an absent value. Arrays are objects, so use Array.isArray(value) when you need to confirm that a value is an array."
          ],
          "example": "console.log(typeof 'hello'); // 'string'\nconsole.log(typeof 42);      // 'number'\nconsole.log(typeof true);    // 'boolean'\nconsole.log(typeof null);    // 'object' (historical quirk)\nconsole.log(Array.isArray([1, 2])); // true",
          "quest": {
            "prompt": "Which check reliably tests whether value is an array?",
            "choices": [
              "Array.isArray(value)",
              "typeof value === 'array'",
              "value.type === 'Array'"
            ],
            "answer": 0,
            "explanation": "Arrays report typeof as 'object'. Array.isArray() is the standard direct check."
          }
        },
        {
          "id": "javascript-coercion-equality",
          "title": "Conversion, equality, and NaN",
          "summary": "Explicit conversion and strict equality make data handling clearer.",
          "content": [
            "JavaScript can convert values implicitly, sometimes producing surprising results such as '5' + 1 becoming the string '51'. Use Number(), String(), or Boolean() when an intentional conversion improves clarity, and validate the result when conversion may fail.",
            "Prefer === and !== because they compare without the broad coercion used by == and !=. Number.isNaN(value) checks whether a value is the numeric NaN value; Number('abc') produces NaN because the text is not a valid number."
          ],
          "example": "console.log('5' + 1);          // '51'\nconsole.log(Number('5') + 1); // 6\nconsole.log(5 === '5');       // false\nconsole.log(Number.isNaN(Number('abc'))); // true",
          "quest": {
            "prompt": "What is the result of 5 === '5'?",
            "choices": [
              "false, because the types differ",
              "true, because both look like five",
              "NaN"
            ],
            "answer": 0,
            "explanation": "Strict equality does not convert the string to a number, so a number and a string are not strictly equal."
          }
        }
      ],
      "checkpoint": "Write a small script that converts a text input to a number, handles invalid numeric text, and logs the type and result of each conversion."
    },
    {
      "id": "javascript-operators-conditions",
      "title": "Operators and decisions",
      "level": "Beginner",
      "description": "Build expressions and use branching to express program rules clearly.",
      "outcomes": [
        "Use arithmetic, comparison, and logical operators.",
        "Choose between if/else and switch.",
        "Apply truthiness, optional defaults, and conditional expressions carefully."
      ],
      "lessons": [
        {
          "id": "javascript-operators-expressions",
          "title": "Arithmetic and comparison operators",
          "summary": "Operators combine values to calculate results or compare conditions.",
          "content": [
            "Arithmetic operators include +, -, *, /, %, and **. The + operator can concatenate strings as well as add numbers, so make sure values have the intended type before combining them.",
            "Comparison operators such as >, <, >=, and === produce Boolean results. Logical operators &&, ||, and ! combine or invert conditions and short-circuit when the result is already determined."
          ],
          "example": "const subtotal = 80;\nconst taxRate = 0.1;\nconst total = subtotal + subtotal * taxRate;\nconst eligible = total >= 50 && true;\nconsole.log(total, eligible); // 88, true",
          "quest": {
            "prompt": "Which operator checks strict equality?",
            "choices": [
              "===",
              "=",
              "==="
            ],
            "answer": 0,
            "explanation": "=== compares values without implicit type conversion. A single = assigns a value; == allows coercion."
          }
        },
        {
          "id": "javascript-if-switch",
          "title": "Make decisions with if and switch",
          "summary": "Conditional statements select which block of code runs.",
          "content": [
            "Use if, else if, and else for conditions and ranges. Put the most specific or important conditions in a deliberate order, because the first matching branch is the one that runs in an if/else chain.",
            "switch is often useful when one expression is compared with several discrete values. Include break when you want to stop a case from falling through to the next one, or use return when branching inside a function."
          ],
          "example": "const score = 82;\nif (score >= 90) {\n  console.log('A');\n} else if (score >= 75) {\n  console.log('B');\n} else {\n  console.log('Keep practicing');\n}\n\nconst role = 'editor';\nswitch (role) {\n  case 'admin': console.log('Full access'); break;\n  case 'editor': console.log('Can edit'); break;\n  default: console.log('Read only');\n}",
          "quest": {
            "prompt": "In an if/else if/else chain, how many branches in the chain run?",
            "choices": [
              "At most one branch",
              "Every true branch always runs",
              "Always exactly two branches"
            ],
            "answer": 0,
            "explanation": "The chain runs the first branch whose condition is true, or the final else if none of the conditions match."
          }
        },
        {
          "id": "javascript-truthiness-defaults",
          "title": "Truthiness and default values",
          "summary": "Truthiness controls conditions, while ?? and || have different fallback rules.",
          "content": [
            "Values such as false, 0, -0, 0n, empty string, null, undefined, and NaN are falsy. Most other values—including empty arrays and empty objects—are truthy. Use Boolean(value) or a conditional expression when making the conversion explicit helps readability.",
            "The || operator chooses the right side when the left side is falsy, while ?? chooses the right side only when the left side is null or undefined. Use ?? when zero, false, or an empty string may be valid data and should not trigger a fallback."
          ],
          "example": "const suppliedLimit = 0;\nconst limitWithOr = suppliedLimit || 10; // 10\nconst limitWithNullish = suppliedLimit ?? 10; // 0\nconst label = suppliedLimit > 0 ? 'Active' : 'Inactive';",
          "quest": {
            "prompt": "What value does 0 ?? 10 produce?",
            "choices": [
              "0",
              "10",
              "undefined"
            ],
            "answer": 0,
            "explanation": "Nullish coalescing only uses its fallback for null or undefined. Zero is a valid non-nullish value."
          }
        }
      ],
      "checkpoint": "Create a grade calculator that validates the score range, uses if/else to assign a grade, and handles missing input separately from a score of zero."
    },
    {
      "id": "javascript-loops-iteration",
      "title": "Loops and iteration",
      "level": "Beginner",
      "description": "Repeat work using counter-based and condition-based loops, and iterate over collections safely.",
      "outcomes": [
        "Write for, while, and do...while loops.",
        "Choose for...of or for...in for the correct purpose.",
        "Use break and continue without creating accidental infinite loops."
      ],
      "lessons": [
        {
          "id": "javascript-for-loop",
          "title": "Count with for loops",
          "summary": "A for loop groups initialization, condition, and update in one place.",
          "content": [
            "A for loop normally has an initialization expression, a continuation condition, and an update expression. Check the starting and ending values carefully to avoid off-by-one mistakes.",
            "Arrays use zero-based indexes, so an array with length n has valid indexes from 0 through n - 1. A condition such as index < items.length is a common pattern."
          ],
          "example": "for (let index = 0; index < 4; index += 1) {\n  console.log(index); // 0, 1, 2, 3\n}",
          "quest": {
            "prompt": "How many times does the loop run when index starts at 0 and continues while index < 4?",
            "choices": [
              "3",
              "4",
              "5"
            ],
            "answer": 1,
            "explanation": "The loop runs for index values 0, 1, 2, and 3, giving four iterations."
          }
        },
        {
          "id": "javascript-while-do-while",
          "title": "Repeat with while and do...while",
          "summary": "while checks before each iteration; do...while checks after the body.",
          "content": [
            "Use while when a loop should continue as long as a condition remains true. The condition is tested before the body, so the body may execute zero times. Update variables that affect the condition to ensure an exit path.",
            "A do...while loop executes its body at least once because its condition is checked afterward. It can be helpful for menu or input flows that must perform one initial attempt."
          ],
          "example": "let remaining = 3;\nwhile (remaining > 0) {\n  console.log(remaining);\n  remaining -= 1;\n}\n\nlet attempts = 0;\ndo {\n  attempts += 1;\n} while (attempts < 1);",
          "quest": {
            "prompt": "Which loop guarantees that its body runs at least once?",
            "choices": [
              "do...while",
              "while",
              "for with a false initial condition"
            ],
            "answer": 0,
            "explanation": "do...while checks its condition after executing the body, so the first execution always happens."
          }
        },
        {
          "id": "javascript-for-of-in",
          "title": "Iterate over arrays and object keys",
          "summary": "for...of iterates values from an iterable; for...in enumerates property keys.",
          "content": [
            "Use for...of to visit values in arrays, strings, sets, maps, and other iterables. It is usually the clearest choice when you need each array element and do not need its index.",
            "for...in enumerates enumerable property keys and is commonly used with objects. For own object properties, consider Object.keys(), Object.entries(), or Object.hasOwn() when inherited properties should be excluded."
          ],
          "example": "const colors = ['red', 'blue'];\nfor (const color of colors) {\n  console.log(color);\n}\n\nconst user = { name: 'Mina', active: true };\nfor (const [key, value] of Object.entries(user)) {\n  console.log(key, value);\n}",
          "quest": {
            "prompt": "Which loop is generally preferred for reading each value in an array?",
            "choices": [
              "for...of",
              "for...in in every case",
              "switch...of"
            ],
            "answer": 0,
            "explanation": "for...of iterates array values directly. for...in iterates enumerable keys and is better suited to object-key enumeration."
          }
        }
      ],
      "checkpoint": "Write a program that sums an array of numbers, counts values above a threshold, and handles an empty array without errors."
    },
    {
      "id": "javascript-functions-scope",
      "title": "Functions, scope, and closures",
      "level": "Intermediate",
      "description": "Create reusable functions, pass arguments, and understand how names and state behave across scopes.",
      "outcomes": [
        "Compare function declarations, expressions, and arrow functions.",
        "Use default and rest parameters and return values deliberately.",
        "Explain lexical scope and closures."
      ],
      "lessons": [
        {
          "id": "javascript-function-forms",
          "title": "Function declarations, expressions, and arrows",
          "summary": "Functions package reusable behavior and can be passed as values.",
          "content": [
            "A function declaration uses the function keyword and a name. Function expressions assign a function value to a variable, and arrow functions provide concise syntax that is common for callbacks. Function declarations are hoisted differently from variables initialized with function expressions.",
            "Arrow functions do not have their own this or arguments binding. Use an ordinary method or function when its own this behavior is required, and use arrows when you want this to come from the surrounding lexical context."
          ],
          "example": "function square(value) {\n  return value * value;\n}\nconst double = function (value) { return value * 2; };\nconst triple = value => value * 3;\nconsole.log(square(4), double(4), triple(4));",
          "quest": {
            "prompt": "What does a function's return statement do?",
            "choices": [
              "Sends a result back to the caller and ends that function call",
              "Repeats the function forever",
              "Declares a global variable"
            ],
            "answer": 0,
            "explanation": "return ends the current function call and supplies a result to the caller when an expression is provided."
          }
        },
        {
          "id": "javascript-function-parameters",
          "title": "Parameters, defaults, and rest arguments",
          "summary": "Parameters define a function's inputs and can support defaults or variable-length argument lists.",
          "content": [
            "Parameters receive the argument values supplied by a caller. Default parameters provide a value when an argument is omitted or is undefined; they do not replace an explicitly supplied null value.",
            "A rest parameter such as ...numbers gathers remaining arguments into an array. Keep functions focused, validate assumptions at boundaries, and return a result rather than depending on hidden changes to unrelated variables."
          ],
          "example": "function greet(name = 'learner') {\n  return `Hello, ${name}!`;\n}\nfunction sum(...numbers) {\n  return numbers.reduce((total, value) => total + value, 0);\n}\nconsole.log(greet(), sum(2, 3, 4));",
          "quest": {
            "prompt": "What does a rest parameter such as ...items collect?",
            "choices": [
              "Remaining arguments into an array",
              "Only the first argument",
              "The function's return value"
            ],
            "answer": 0,
            "explanation": "A rest parameter gathers all remaining arguments into a real array that the function can process."
          }
        },
        {
          "id": "javascript-scope-closures",
          "title": "Scope, callbacks, and closures",
          "summary": "A closure retains access to variables from the lexical scope where a function was created.",
          "content": [
            "Global, function, and block scopes determine where bindings can be accessed. let and const are block-scoped; keeping variables in the smallest practical scope reduces accidental coupling.",
            "A closure occurs when a function continues to access variables from its surrounding lexical environment. Closures are useful for callbacks, event handlers, and private state, but long-lived callbacks can also keep referenced data alive longer than expected."
          ],
          "example": "function makeCounter() {\n  let count = 0;\n  return function () {\n    count += 1;\n    return count;\n  };\n}\nconst nextCount = makeCounter();\nconsole.log(nextCount()); // 1\nconsole.log(nextCount()); // 2",
          "quest": {
            "prompt": "Why does nextCount remember count between calls?",
            "choices": [
              "The returned function closes over its lexical environment",
              "JavaScript automatically makes count global",
              "The variable is stored in localStorage"
            ],
            "answer": 0,
            "explanation": "The inner function retains access to the lexical environment created by makeCounter, including its count binding."
          }
        }
      ],
      "checkpoint": "Create a reusable calculator with separate functions for validation, calculation, and formatting. Then write a closure that keeps a private counter."
    },
    {
      "id": "javascript-arrays-objects",
      "title": "Arrays, objects, and data modeling",
      "level": "Intermediate",
      "description": "Store collections and structured records, transform data, and use modern syntax to work with nested values.",
      "outcomes": [
        "Use common array iteration and transformation methods.",
        "Read and update object properties safely.",
        "Apply destructuring, spread syntax, and optional chaining."
      ],
      "lessons": [
        {
          "id": "javascript-array-methods",
          "title": "Arrays and array methods",
          "summary": "Arrays hold ordered values and provide methods for common transformations.",
          "content": [
            "Arrays can contain values of mixed types, although a consistent element shape often makes programs easier to reason about. Access elements by zero-based index and use length to inspect how many positions exist.",
            "map() transforms each element into a new array, filter() keeps matching elements, and reduce() combines elements into a single result. These methods return new results and are often easier to compose than manual loops."
          ],
          "example": "const prices = [10, 20, 30];\nconst withTax = prices.map(price => price * 1.1);\nconst large = prices.filter(price => price >= 20);\nconst total = prices.reduce((sum, price) => sum + price, 0);\nconsole.log(withTax, large, total);",
          "quest": {
            "prompt": "Which array method creates a new array by transforming each item?",
            "choices": [
              "map()",
              "filter()",
              "find()"
            ],
            "answer": 0,
            "explanation": "map() calls a callback for each element and builds a new array from the callback results."
          }
        },
        {
          "id": "javascript-objects-properties",
          "title": "Objects and property access",
          "summary": "Objects group related information in named properties.",
          "content": [
            "Object literals create records with key-value properties. Use dot notation for known property names and bracket notation when a property name is dynamic or contains characters that cannot be used in dot notation.",
            "Property access on null or undefined throws an error. Check optional values before reading nested properties, or use optional chaining for safe access. Object references are shared when assigned; assigning an object to another variable does not automatically clone it."
          ],
          "example": "const user = { name: 'Mina', profile: { city: 'Bengaluru' } };\nconst key = 'name';\nconsole.log(user[key]);\nconsole.log(user.profile?.city);\nconsole.log(user.settings?.theme ?? 'default');",
          "quest": {
            "prompt": "What does user.profile?.city do if profile is null or undefined?",
            "choices": [
              "Returns undefined instead of throwing for that access",
              "Creates a profile object automatically",
              "Always returns an empty string"
            ],
            "answer": 0,
            "explanation": "Optional chaining short-circuits a property access when its left side is nullish, returning undefined."
          }
        },
        {
          "id": "javascript-destructuring-spread",
          "title": "Destructuring and spread syntax",
          "summary": "Destructuring extracts values; spread syntax copies enumerable properties or expands iterables.",
          "content": [
            "Array destructuring assigns elements to named variables, while object destructuring reads properties by name. Default values can cover missing or undefined properties, and renaming is available with a colon in object patterns.",
            "Spread syntax can create a shallow copy of an array or object and can combine values. A shallow copy duplicates only the outer structure, so nested objects are still shared references. Use structuredClone() for suitable structured-cloneable data when a deeper copy is needed."
          ],
          "example": "const [first, ...others] = [10, 20, 30];\nconst { name, city = 'Unknown' } = { name: 'Mina' };\nconst original = { settings: { dark: false } };\nconst copy = { ...original };\ncopy.settings.dark = true; // also changes original.settings.dark\nconsole.log(first, others, name, city);",
          "quest": {
            "prompt": "What kind of copy does { ...original } create?",
            "choices": [
              "A shallow copy",
              "A guaranteed deep clone of all nested values",
              "A frozen object"
            ],
            "answer": 0,
            "explanation": "Object spread copies own enumerable properties at the top level. Nested object references are not recursively cloned."
          }
        }
      ],
      "checkpoint": "Given an array of product records, filter active products, transform their names for display, and calculate the total price. Use destructuring to make the code readable."
    },
    {
      "id": "javascript-built-in-data",
      "title": "Strings, numbers, dates, and JSON",
      "level": "Intermediate",
      "description": "Manipulate text and numeric values, work with timestamps, and exchange structured data using JSON.",
      "outcomes": [
        "Use template literals and common string methods.",
        "Handle numeric conversion and rounding carefully.",
        "Parse and serialize JSON and understand basic date handling."
      ],
      "lessons": [
        {
          "id": "javascript-strings-template-literals",
          "title": "Strings and template literals",
          "summary": "String methods and template literals make text processing clearer.",
          "content": [
            "Strings are immutable primitive values. Methods such as trim(), includes(), startsWith(), slice(), and replace() return results without changing the original string.",
            "Template literals use backticks and ${expression} to embed values. They are useful for composing messages, but do not insert untrusted input into HTML using innerHTML; use textContent when treating input as plain text."
          ],
          "example": "const name = '  Ada Lovelace  ';\nconst cleanName = name.trim();\nconst message = `Welcome, ${cleanName}!`;\nconsole.log(message);\nconsole.log(cleanName.includes('Ada'));",
          "quest": {
            "prompt": "Which method removes whitespace from both ends of a string?",
            "choices": [
              "trim()",
              "split()",
              "push()"
            ],
            "answer": 0,
            "explanation": "trim() returns a string with leading and trailing whitespace removed."
          }
        },
        {
          "id": "javascript-numbers-math",
          "title": "Numbers, Math, and precision",
          "summary": "JavaScript's number type uses floating-point representation, which affects precision and rounding.",
          "content": [
            "Most everyday JavaScript numbers use the IEEE 754 double-precision floating-point format. Some decimal fractions cannot be represented exactly, so expressions such as 0.1 + 0.2 can show a small precision difference. Currency code should use an explicit rounding strategy, often storing minor units such as cents or paise as integers.",
            "Use Number.isFinite() to reject Infinity and NaN where a finite number is required. Math.round(), Math.floor(), and Math.ceil() have different rounding rules; do not assume Math.round() covers every business-specific rounding policy."
          ],
          "example": "console.log(0.1 + 0.2); // often 0.30000000000000004\nconst paise = 1999; // ₹19.99 stored as minor units\nconst formatted = (paise / 100).toFixed(2);\nconsole.log(formatted); // '19.99'\nconsole.log(Number.isFinite(Number('12'))); // true",
          "quest": {
            "prompt": "Why can 0.1 + 0.2 fail to equal exactly 0.3?",
            "choices": [
              "Some decimal fractions are not represented exactly in binary floating point",
              "Addition is unsupported for numbers",
              "JavaScript randomly changes numeric values"
            ],
            "answer": 0,
            "explanation": "Binary floating-point cannot represent every decimal fraction exactly, so a small representation error can appear in the result."
          }
        },
        {
          "id": "javascript-json-dates",
          "title": "JSON and dates",
          "summary": "JSON provides a text format for data exchange, while Date represents time values.",
          "content": [
            "JSON.stringify() converts supported JavaScript data into JSON text, and JSON.parse() parses JSON text into a value. JSON supports objects, arrays, strings, numbers, booleans, and null; it does not directly preserve functions, undefined properties, or object identity.",
            "Date represents a timestamp. Date.now() returns milliseconds since the Unix epoch, and ISO strings are useful for interoperable date-time exchange. Be explicit about time zones when parsing or displaying dates because local-time interpretation can differ across environments."
          ],
          "example": "const record = { title: 'Lesson', completed: true };\nconst json = JSON.stringify(record);\nconst parsed = JSON.parse(json);\nconst now = new Date();\nconsole.log(parsed.title);\nconsole.log(now.toISOString());",
          "quest": {
            "prompt": "Which method converts a JavaScript object to JSON text?",
            "choices": [
              "JSON.stringify()",
              "JSON.parse()",
              "Date.toJSONText()"
            ],
            "answer": 0,
            "explanation": "JSON.stringify() serializes supported JavaScript values into JSON text. JSON.parse() performs the reverse operation for valid JSON text."
          }
        }
      ],
      "checkpoint": "Build a small product summary that trims names, formats numeric prices consistently, and saves and reloads a record through JSON serialization."
    },
    {
      "id": "javascript-dom",
      "title": "The DOM and browser programming",
      "level": "Intermediate",
      "description": "Connect JavaScript to HTML documents, locate elements, update the page, and create interface elements safely.",
      "outcomes": [
        "Select elements using DOM APIs.",
        "Update text, classes, attributes, and styles.",
        "Create and remove DOM elements while treating user data safely."
      ],
      "lessons": [
        {
          "id": "javascript-dom-selectors",
          "title": "Select HTML elements",
          "summary": "The DOM represents a web page as objects that JavaScript can inspect and update.",
          "content": [
            "Use document.querySelector() to find the first element matching a CSS selector, and querySelectorAll() to find all matches in a static NodeList. Check that an element exists before calling methods on it, especially when a script may run before the HTML element is parsed.",
            "For scripts loaded with defer or placed near the end of the body, the target markup is usually available when the script runs. Keep behavior separate from markup where practical by linking an external JavaScript file."
          ],
          "example": "// HTML: <h1 id=\"title\">Welcome</h1>\nconst heading = document.querySelector('#title');\nif (heading) {\n  console.log(heading.textContent);\n}",
          "quest": {
            "prompt": "What does querySelector() return when no element matches?",
            "choices": [
              "null",
              "An empty string",
              "A new HTML element"
            ],
            "answer": 0,
            "explanation": "querySelector() returns the first matching element or null if no element matches the selector."
          }
        },
        {
          "id": "javascript-dom-update",
          "title": "Update text, classes, and attributes",
          "summary": "DOM properties and classList allow JavaScript to change page content and state.",
          "content": [
            "Use textContent to set plain text and classList.add(), remove(), or toggle() to manage CSS classes. Set properties such as disabled or attributes such as aria-expanded as appropriate to communicate state to users and assistive technology.",
            "Avoid building HTML from untrusted text with innerHTML because it can interpret supplied content as markup and create cross-site scripting risks. Prefer textContent and DOM creation APIs when inserting user-provided values."
          ],
          "example": "const status = document.querySelector('#status');\nif (status) {\n  status.textContent = 'Saved successfully';\n  status.classList.add('is-success');\n  status.setAttribute('aria-live', 'polite');\n}",
          "quest": {
            "prompt": "Which property is safest for inserting user input as plain text?",
            "choices": [
              "textContent",
              "innerHTML with untrusted input",
              "document.write()"
            ],
            "answer": 0,
            "explanation": "textContent inserts text without parsing it as HTML, which avoids a common class of injection issues."
          }
        },
        {
          "id": "javascript-dom-create-remove",
          "title": "Create and remove elements",
          "summary": "DOM creation methods let a page render lists and update sections dynamically.",
          "content": [
            "Use document.createElement() to create a node, set its text and attributes, then append it to the intended parent. For repeated items, a DocumentFragment can reduce repeated insertion operations and can help organize rendering code.",
            "Keep rendering separate from data updates when possible. Clear or update only the specific region that needs changing, and provide accessible labels and meaningful text for interactive elements."
          ],
          "example": "const list = document.querySelector('#topics');\nif (list) {\n  const item = document.createElement('li');\n  item.textContent = 'Asynchronous JavaScript';\n  list.append(item);\n  // item.remove(); // removes this node when needed\n}",
          "quest": {
            "prompt": "Which API creates a new element node?",
            "choices": [
              "document.createElement()",
              "document.querySelectorAll()",
              "console.create()"
            ],
            "answer": 0,
            "explanation": "document.createElement() creates an element node that can be configured and inserted into the document."
          }
        }
      ],
      "checkpoint": "Create a page section that renders a list of lesson titles from an array, displays an empty-state message for no data, and uses textContent for all inserted titles."
    },
    {
      "id": "javascript-events-storage",
      "title": "Events, forms, and browser storage",
      "level": "Intermediate",
      "description": "Respond to user actions, validate form data, and persist small amounts of browser-side state.",
      "outcomes": [
        "Register event listeners and understand event propagation.",
        "Handle and validate form submissions.",
        "Use localStorage and sessionStorage appropriately."
      ],
      "lessons": [
        {
          "id": "javascript-event-listeners",
          "title": "Events and event listeners",
          "summary": "Events communicate interactions such as clicks, key presses, and submissions.",
          "content": [
            "Use addEventListener() to register a callback for events such as click, input, change, and submit. The event object provides details about the event and its target, but prefer currentTarget when you need the element on which the listener was registered.",
            "Events can bubble from a nested target toward ancestor elements. Event delegation uses a listener on a parent to handle matching child elements, which is useful when list items are added dynamically."
          ],
          "example": "const button = document.querySelector('#save');\nbutton?.addEventListener('click', event => {\n  console.log('Clicked:', event.currentTarget);\n});\n\nconst list = document.querySelector('#items');\nlist?.addEventListener('click', event => {\n  if (event.target instanceof Element && event.target.matches('[data-action=remove]')) {\n    event.target.closest('li')?.remove();\n  }\n});",
          "quest": {
            "prompt": "What is event delegation?",
            "choices": [
              "Handling events for matching descendants through a common ancestor listener",
              "Creating a separate page for each click",
              "Preventing every event from bubbling"
            ],
            "answer": 0,
            "explanation": "Event delegation takes advantage of bubbling so a shared parent listener can handle events from current or future child elements."
          }
        },
        {
          "id": "javascript-forms-validation",
          "title": "Form submission and validation",
          "summary": "Forms should validate values, prevent unwanted navigation when needed, and report errors clearly.",
          "content": [
            "Listen for the submit event on the form rather than only the button click, because users can submit through the keyboard too. Call preventDefault() when JavaScript will handle the submission without a normal page navigation.",
            "Use built-in HTML constraints such as required, min, max, and type=email when suitable, and add application-specific validation in JavaScript. Client-side validation improves usability but must not replace server-side validation for data sent to a server."
          ],
          "example": "const form = document.querySelector('#profile-form');\nform?.addEventListener('submit', event => {\n  event.preventDefault();\n  const data = new FormData(form);\n  const name = String(data.get('name') ?? '').trim();\n  if (!name) {\n    console.error('Name is required');\n    return;\n  }\n  console.log('Valid name:', name);\n});",
          "quest": {
            "prompt": "Why handle the form's submit event rather than only a button's click?",
            "choices": [
              "It also covers keyboard and other submission paths",
              "Click events never work in browsers",
              "Submit events automatically validate every business rule"
            ],
            "answer": 0,
            "explanation": "The submit event represents the form submission, including submission initiated from the keyboard or other browser mechanisms."
          }
        },
        {
          "id": "javascript-web-storage",
          "title": "Persist preferences with Web Storage",
          "summary": "localStorage and sessionStorage store strings in the browser for simple client-side persistence.",
          "content": [
            "localStorage persists across browser sessions for the same origin, while sessionStorage is scoped to a page session. Both store string keys and values, so structured data commonly uses JSON.stringify() and JSON.parse(). Access may be unavailable or throw in some browser contexts, so production code should handle failures where relevant.",
            "Do not store passwords, access tokens, or other sensitive secrets in Web Storage. Data can be read by JavaScript running on the same origin, including injected scripts if an XSS vulnerability exists. Treat stored values as untrusted and validate them when loading."
          ],
          "example": "const key = 'study-progress';\nconst progress = { completed: ['intro', 'values'] };\ntry {\n  localStorage.setItem(key, JSON.stringify(progress));\n  const saved = localStorage.getItem(key);\n  const restored = saved ? JSON.parse(saved) : { completed: [] };\n  console.log(restored.completed);\n} catch (error) {\n  console.error('Could not access saved progress', error);\n}",
          "quest": {
            "prompt": "What kind of values does localStorage store directly?",
            "choices": [
              "Strings",
              "JavaScript functions with their behavior",
              "Arbitrary objects without conversion"
            ],
            "answer": 0,
            "explanation": "Web Storage stores strings. Use a serialization format such as JSON for supported structured data."
          }
        }
      ],
      "checkpoint": "Build a browser checklist with add, complete, and remove actions. Validate empty entries and save the list to localStorage, handling malformed or unavailable stored data."
    },
    {
      "id": "javascript-async",
      "title": "Asynchronous JavaScript and networking",
      "level": "Advanced",
      "description": "Understand asynchronous work, compose promises, and fetch remote data without blocking the main execution flow.",
      "outcomes": [
        "Explain callbacks, promises, and the event loop at a high level.",
        "Use async and await with error handling.",
        "Fetch and validate remote JSON responses."
      ],
      "lessons": [
        {
          "id": "javascript-callbacks-promises",
          "title": "Callbacks and promises",
          "summary": "Promises represent work that may complete in the future.",
          "content": [
            "A callback is a function passed to another function to run later or when an operation completes. Promises represent an eventual fulfillment value or rejection reason and can be composed with then(), catch(), and finally().",
            "Avoid deeply nested callbacks when a promise-based API or async/await makes the sequence clearer. A promise rejection must be handled at an appropriate boundary to avoid unhandled rejection warnings and lost error context."
          ],
          "example": "function wait(milliseconds) {\n  return new Promise(resolve => setTimeout(resolve, milliseconds));\n}\nwait(200).then(() => {\n  console.log('Finished waiting');\n}).catch(error => {\n  console.error(error);\n});",
          "quest": {
            "prompt": "What does a fulfilled promise represent?",
            "choices": [
              "The asynchronous operation completed successfully with a value",
              "The operation is guaranteed never to finish",
              "The JavaScript engine has stopped"
            ],
            "answer": 0,
            "explanation": "A fulfilled promise has completed successfully and carries a fulfillment value, which may itself be undefined."
          }
        },
        {
          "id": "javascript-async-await",
          "title": "Write asynchronous code with async and await",
          "summary": "async and await let promise-based flows read like sequential code.",
          "content": [
            "An async function always returns a promise. Inside an async function, await pauses that function's continuation until the awaited promise settles; it does not block the entire JavaScript runtime while the asynchronous operation is pending.",
            "Use try/catch around awaited operations when you can respond meaningfully to failures. For independent operations, Promise.all() can run them concurrently and wait until all fulfill, while Promise.allSettled() reports each outcome regardless of rejection."
          ],
          "example": "function getProfile() {\n  return Promise.resolve({ name: 'Mina' });\n}\nasync function showProfile() {\n  try {\n    const profile = await getProfile();\n    console.log(profile.name);\n  } catch (error) {\n    console.error('Profile unavailable', error);\n  }\n}\nshowProfile();",
          "quest": {
            "prompt": "What does an async function always return?",
            "choices": [
              "A Promise",
              "Only a string",
              "A DOM element"
            ],
            "answer": 0,
            "explanation": "An async function wraps its returned value in a promise, and thrown errors become promise rejections."
          }
        },
        {
          "id": "javascript-fetch-http",
          "title": "Fetch API and HTTP responses",
          "summary": "fetch() performs network requests, but HTTP error status codes must be checked explicitly.",
          "content": [
            "fetch() returns a promise that fulfills with a Response when a response is received. It normally does not reject just because the server returned an HTTP status such as 404 or 500, so check response.ok or response.status before treating the result as success.",
            "Parsing JSON is also asynchronous and can fail if the body is not valid JSON. Handle network failures, HTTP failures, parsing failures, and unexpected response shapes at the appropriate layer. A browser may also enforce cross-origin rules through CORS."
          ],
          "example": "async function loadTodos() {\n  const response = await fetch('/api/todos');\n  if (!response.ok) {\n    throw new Error(`Request failed: ${response.status}`);\n  }\n  const data = await response.json();\n  if (!Array.isArray(data)) {\n    throw new TypeError('Expected an array of todos');\n  }\n  return data;\n}\nloadTodos().catch(error => console.error(error));",
          "quest": {
            "prompt": "Does fetch() automatically reject when the server responds with HTTP 404?",
            "choices": [
              "No; check response.ok or response.status",
              "Yes, every non-2xx response rejects automatically",
              "Only when the body is JSON"
            ],
            "answer": 0,
            "explanation": "fetch() usually fulfills for HTTP error responses. The program must inspect the response status to decide whether the request succeeded."
          }
        }
      ],
      "checkpoint": "Create an async function that fetches JSON, checks HTTP status, validates the returned data shape, and displays a loading state plus a useful error message."
    },
    {
      "id": "javascript-classes-modules-errors",
      "title": "Classes, modules, and error handling",
      "level": "Advanced",
      "description": "Organize code into reusable units, model behavior with classes when appropriate, and handle expected failures explicitly.",
      "outcomes": [
        "Define classes, constructors, and instance methods.",
        "Split code into ES modules with import and export.",
        "Throw, catch, and communicate errors at useful boundaries."
      ],
      "lessons": [
        {
          "id": "javascript-classes-inheritance",
          "title": "Classes and object-oriented design",
          "summary": "Classes provide syntax for creating objects with shared behavior and prototype-based inheritance.",
          "content": [
            "A class defines a constructor and methods for its instances. Use this to access the current instance; instance methods are placed on the class prototype. JavaScript classes use prototype-based inheritance underneath their familiar syntax.",
            "Inheritance can express a genuine 'is a' relationship, but composition is often simpler when behavior can be assembled from smaller objects. Keep invariants inside the object and avoid adding classes when a plain object and functions are enough."
          ],
          "example": "class Counter {\n  constructor(start = 0) {\n    this.value = start;\n  }\n  increment() {\n    this.value += 1;\n    return this.value;\n  }\n}\nconst counter = new Counter(2);\nconsole.log(counter.increment()); // 3",
          "quest": {
            "prompt": "What does the constructor method do when a class instance is created?",
            "choices": [
              "Initializes the new instance",
              "Exports every function in the file",
              "Runs every time any method is called"
            ],
            "answer": 0,
            "explanation": "The constructor initializes the instance during construction with new, setting up the state required by the object."
          }
        },
        {
          "id": "javascript-es-modules",
          "title": "Organize code with ES modules",
          "summary": "Modules separate code into files with explicit exports and imports.",
          "content": [
            "An ES module can export named values or a default value, and another module can import those exports. Modules have their own scope, which helps avoid accidental global variables and makes dependencies explicit.",
            "In browsers, modules use script type=module and typically load through HTTP rather than directly opening a file URL. In Node.js, module interpretation depends on project configuration and file extensions; use a consistent module system for the project."
          ],
          "example": "// math.js\nexport function add(a, b) {\n  return a + b;\n}\n\n// main.js\nimport { add } from './math.js';\nconsole.log(add(2, 3));",
          "quest": {
            "prompt": "What is the purpose of export in an ES module?",
            "choices": [
              "Make selected declarations available to importing modules",
              "Run the file in a browser automatically",
              "Convert JavaScript to JSON"
            ],
            "answer": 0,
            "explanation": "export exposes a binding so another module can import and use it."
          }
        },
        {
          "id": "javascript-errors-validation",
          "title": "Exceptions and error boundaries",
          "summary": "Exceptions communicate failures that normal return values cannot conveniently represent.",
          "content": [
            "throw creates an exception, and try/catch handles exceptions that occur in the protected block. Use Error objects with meaningful messages and, when useful, custom error classes to distinguish failure types.",
            "Catch errors where you can add context, recover, or show a useful message. Avoid silently swallowing errors. Validate external values at boundaries, and remember that catch handles synchronous exceptions in its block as well as rejected promises that are awaited inside a try block."
          ],
          "example": "function parsePositiveNumber(text) {\n  const value = Number(text);\n  if (!Number.isFinite(value) || value <= 0) {\n    throw new RangeError('Enter a positive finite number');\n  }\n  return value;\n}\ntry {\n  console.log(parsePositiveNumber('12'));\n} catch (error) {\n  console.error(error.message);\n}",
          "quest": {
            "prompt": "When should an error generally be caught?",
            "choices": [
              "Where code can recover, add context, or present a useful failure",
              "Every line, even when no recovery is possible",
              "Only after ignoring the error"
            ],
            "answer": 0,
            "explanation": "Catching errors is most useful at boundaries that can take a meaningful action, preserve context, or communicate failure clearly."
          }
        }
      ],
      "checkpoint": "Split a small calculator into modules, validate its inputs, and use a custom error or standard Error to report invalid operations."
    },
    {
      "id": "javascript-tooling-quality",
      "title": "Tooling, testing, and advanced patterns",
      "level": "Advanced",
      "description": "Practice data structures and functional patterns, use development tools and tests, and prepare a reliable application for delivery.",
      "outcomes": [
        "Choose Map, Set, and common functional patterns appropriately.",
        "Use package scripts, linting, and tests in a JavaScript project.",
        "Improve maintainability, performance, and security through measured practices."
      ],
      "lessons": [
        {
          "id": "javascript-map-set-collections",
          "title": "Map, Set, and collection choices",
          "summary": "Map and Set handle common collection needs beyond arrays and plain objects.",
          "content": [
            "Set stores unique values and is useful for membership checks or removing duplicates. Map stores key-value pairs and allows keys of many types, unlike ordinary object property keys which are strings or symbols.",
            "Choose the structure that matches the operation you need. Arrays preserve order and support indexed access; objects model records; Set models unique membership; Map models key-value lookup. Do not depend on accidental iteration behavior when an explicit collection is clearer."
          ],
          "example": "const uniqueTags = new Set(['js', 'web', 'js']);\nconst visits = new Map();\nvisits.set('home', 3);\nvisits.set('course', 8);\nconsole.log([...uniqueTags]); // ['js', 'web']\nconsole.log(visits.get('course')); // 8",
          "quest": {
            "prompt": "Which collection is designed to store unique values?",
            "choices": [
              "Set",
              "Array with guaranteed automatic deduplication",
              "Date"
            ],
            "answer": 0,
            "explanation": "Set stores each value at most once, according to its value equality semantics."
          }
        },
        {
          "id": "javascript-functional-patterns",
          "title": "Pure functions and functional patterns",
          "summary": "Pure functions and immutable updates make behavior easier to test and reason about.",
          "content": [
            "A pure function returns a result determined by its inputs and does not cause observable side effects. Pure transformations are easier to test because they do not rely on timers, network state, global variables, or DOM state.",
            "JavaScript does not enforce immutability automatically. Use new arrays or objects when you want an update that does not mutate the original, and keep side effects such as DOM updates or network requests at explicit boundaries."
          ],
          "example": "function applyDiscount(price, rate) {\n  return price * (1 - rate);\n}\nconst cart = [{ name: 'Book', price: 100 }];\nconst discountedCart = cart.map(item => ({\n  ...item, price: applyDiscount(item.price, 0.1)\n}));\nconsole.log(cart[0].price, discountedCart[0].price); // 100, 90",
          "quest": {
            "prompt": "What is a key property of a pure function?",
            "choices": [
              "Its result depends on inputs and it has no observable side effects",
              "It always updates a global variable",
              "It must contain an await expression"
            ],
            "answer": 0,
            "explanation": "Pure functions avoid observable side effects and return consistent results for the same inputs."
          }
        },
        {
          "id": "javascript-testing-performance-security",
          "title": "Testing, performance, and secure habits",
          "summary": "Automated checks and measurement help prevent regressions and guide improvements.",
          "content": [
            "A unit test checks a small behavior with known inputs and expected outputs. Test normal cases, boundaries, invalid inputs, and failure paths; keep tests repeatable and independent when possible. JavaScript projects commonly use test runners and linting tools configured through package scripts.",
            "Measure performance before optimizing, and use browser performance tools or runtime profiling to find real bottlenecks. Avoid unsafe HTML insertion, validate external data, handle asynchronous failures, keep dependencies updated, and never treat client-side validation as a security boundary."
          ],
          "example": "function total(items) {\n  return items.reduce((sum, item) => sum + item.price, 0);\n}\n\n// A minimal assertion for learning purposes\nfunction assertEqual(actual, expected) {\n  if (actual !== expected) {\n    throw new Error(`Expected ${expected}, received ${actual}`);\n  }\n}\nassertEqual(total([{ price: 2 }, { price: 3 }]), 5);",
          "quest": {
            "prompt": "Why should performance optimization usually begin with measurement?",
            "choices": [
              "Profiling helps identify actual bottlenecks",
              "It guarantees every algorithm becomes O(1)",
              "It removes the need for tests"
            ],
            "answer": 0,
            "explanation": "Measurement helps focus optimization effort on code that materially affects performance instead of guessing."
          }
        }
      ],
      "checkpoint": "Add tests for a pure calculation function, include empty and invalid input cases, run a linter if available, and review the program for unsafe DOM updates and unhandled failures."
    }
  ],
  "capstone": {
    "title": "JavaScript capstone: Personal study planner",
    "brief": "Build a browser-based study planner where a learner can add tasks, set a category and due date, mark tasks complete, filter the task list, and retain progress between visits. Keep application state separate from DOM rendering, validate input, and handle storage or parsing failures gracefully.",
    "milestones": [
      "Define a task data model with a unique identifier, title, category, due date, and completion status.",
      "Write focused functions to validate input, create tasks, update completion state, delete tasks, and filter the collection.",
      "Render task data into the DOM using safe APIs such as createElement and textContent.",
      "Add event listeners for forms, task actions, and filters; use event delegation for dynamic list items where appropriate.",
      "Persist task data with localStorage and validate loaded JSON before using it.",
      "Add loading, empty, and error states; test normal, empty, malformed-storage, and invalid-input cases.",
      "Organize the project into ES modules and document how to run and test it."
    ]
  }
};

export default javascriptCourse;
