import type { CourseConfig } from "../types";

export const typescriptCourse: CourseConfig = {
  slug: "typescript",
  language: "TypeScript",
  title: "Learn TypeScript: Beginner to Advanced",
  icon: "🔷",
  levelLabel: "Beginner to advanced",
  description:
    "Learn TypeScript from the foundations of static typing to generics, narrowing, asynchronous code, tooling, and application design through short lessons, examples, quizzes, and a capstone.",
  metaDescription:
    "Learn TypeScript step by step with a complete course covering types, functions, objects, unions, narrowing, generics, classes, modules, async programming, DOM APIs, testing, and project design.",
  audience:
    "Learners who know basic programming or JavaScript and want to build maintainable applications with TypeScript's static type system.",
  prerequisites:
    "No prior TypeScript experience is required. Familiarity with basic programming concepts is helpful; JavaScript knowledge makes the examples easier to follow. Examples are explanatory and are not compiled or executed on this website.",
  modules: [
    {
      id: "ts-first-steps",
      title: "Meet TypeScript and the compiler",
      level: "Beginner",
      description:
        "Understand what TypeScript adds to JavaScript, how type checking works, and how source files become executable JavaScript.",
      outcomes: [
        "Explain the relationship between TypeScript and JavaScript.",
        "Recognize the roles of the TypeScript compiler and tsconfig.json.",
        "Use type annotations and type inference in simple programs.",
      ],
      lessons: [
        {
          id: "ts-what-is-typescript",
          title: "What TypeScript is",
          summary: "TypeScript adds a static type system and tooling on top of JavaScript.",
          content: [
            "TypeScript is a language built on JavaScript. It understands JavaScript syntax and adds types that can describe the values a program expects. TypeScript code is normally checked and then transformed into JavaScript for a runtime such as a browser or Node.js.",
            "Types help editors and the compiler detect many mistakes before a program runs. They do not automatically validate data received from a network, file, or user: runtime input still needs checks.",
          ],
          example: 'function greet(name: string): string {\n  return `Hello, ${name}`;\n}\n\nconst message = greet("Ada");',
          quest: {
            prompt: "What does TypeScript normally produce for execution?",
            choices: ["JavaScript", "A native CPU instruction file", "A database schema"],
            answer: 0,
            explanation:
              "TypeScript is generally compiled or transpiled to JavaScript, which is then executed by a JavaScript runtime.",
          },
        },
        {
          id: "ts-compiler-config",
          title: "The compiler and tsconfig.json",
          summary: "The TypeScript compiler checks source files according to project settings.",
          content: [
            "The TypeScript compiler, commonly invoked as tsc, checks TypeScript files and can emit JavaScript and related output. A project-level tsconfig.json records compiler options and which files belong to the project.",
            "The strict option enables a group of stronger checks. Enabling strict mode early helps make assumptions visible instead of allowing uncertain values to pass through silently.",
          ],
          example: '{\n  "compilerOptions": {\n    "target": "ES2022",\n    "module": "ESNext",\n    "strict": true,\n    "outDir": "./dist"\n  },\n  "include": ["src"]\n}',
          quest: {
            prompt: "Which file commonly stores TypeScript project compiler options?",
            choices: ["tsconfig.json", "package-lock.txt", "index.css"],
            answer: 0,
            explanation:
              "tsconfig.json defines the compiler configuration and project file selection for a TypeScript project.",
          },
        },
        {
          id: "ts-annotations-inference",
          title: "Type annotations and inference",
          summary: "Types can be written explicitly or inferred from initial values and context.",
          content: [
            "A type annotation follows a variable or parameter name with a colon. For example, let count: number = 3 declares that count stores a number.",
            "TypeScript can often infer a variable's type from its initial value. Annotations are most useful when they clarify a public interface, a function parameter, or a value whose type cannot be inferred clearly.",
          ],
          example: 'let attempts: number = 3;\nlet courseName = "TypeScript";\n\nfunction isReady(value: boolean) {\n  return value;\n}',
          quest: {
            prompt: "What is type inference?",
            choices: [
              "The compiler derives a type from available context",
              "The program guesses a value while it is running",
              "A method that converts every value to a string",
            ],
            answer: 0,
            explanation:
              "Type inference lets TypeScript determine types from initializers, expressions, and other contextual information.",
          },
        },
      ],
      checkpoint:
        "Try it: write a function that accepts a string and returns a greeting. Add a return type, then remove it and observe what the compiler infers.",
    },
    {
      id: "ts-basic-types",
      title: "Primitive types, literals, and unions",
      level: "Beginner",
      description:
        "Describe common values with TypeScript's built-in types and combine possible values safely.",
      outcomes: [
        "Use string, number, boolean, and other common types appropriately.",
        "Represent a limited set of values with literal and union types.",
        "Distinguish unknown from any and recognize never in type analysis.",
      ],
      lessons: [
        {
          id: "ts-primitives",
          title: "Primitive and special types",
          summary: "Primitive annotations describe common JavaScript values precisely.",
          content: [
            "Common TypeScript types include string, number, and boolean. Arrays, objects, functions, and other structures can be described with additional type syntax. JavaScript has one number type for ordinary numeric values, including integers and decimals.",
            "Use void for a function that does not return a useful value. The type null and undefined describe their corresponding JavaScript values; strict null checking makes their presence explicit in many situations.",
          ],
          example: 'let username: string = "Mira";\nlet score: number = 91;\nlet isEnrolled: boolean = true;\n\nfunction logMessage(message: string): void {\n  console.log(message);\n}',
          quest: {
            prompt: "Which type is used for a true-or-false value?",
            choices: ["boolean", "number", "object"],
            answer: 0,
            explanation: "The boolean type represents the values true and false.",
          },
        },
        {
          id: "ts-literal-union",
          title: "Literal and union types",
          summary: "Union types allow a value to be one of several declared alternatives.",
          content: [
            "A union type uses the vertical bar to combine possibilities. A variable typed string | number can hold either a string or a number, but operations must be valid for the value currently known to the checker.",
            "Literal types describe exact values such as \"draft\", \"published\", or 200. They are useful for status fields, command names, and other values drawn from a small known set.",
          ],
          example: 'type Status = "draft" | "published" | "archived";\n\nlet articleStatus: Status = "draft";\narticleStatus = "published";',
          quest: {
            prompt: "Which value can be assigned to type 'open' | 'closed'?",
            choices: ["open", "pending", "42"],
            answer: 0,
            explanation:
              "The union accepts only the two declared string literals: open or closed.",
          },
        },
        {
          id: "ts-any-unknown-never",
          title: "any, unknown, and never",
          summary: "These types express different levels of certainty and impossible values.",
          content: [
            "The any type disables many checks for a value, so it can allow mistakes to spread. The unknown type can hold any value but requires narrowing or a check before most operations are allowed.",
            "The never type represents a value that cannot occur. It appears in functions that never return normally and can help verify that every case of a union has been handled.",
          ],
          example: 'function printValue(value: unknown): void {\n  if (typeof value === "string") {\n    console.log(value.toUpperCase());\n  }\n}\n\nfunction fail(message: string): never {\n  throw new Error(message);\n}',
          quest: {
            prompt: "Why is unknown generally safer than any for untrusted values?",
            choices: [
              "It requires a check before the value is used in type-specific ways",
              "It automatically converts values to strings",
              "It prevents the value from existing at runtime",
            ],
            answer: 0,
            explanation:
              "unknown keeps the value flexible but prevents unchecked operations until its type has been narrowed.",
          },
        },
      ],
      checkpoint:
        "Try it: define a Status union with three string literals, then write a function that accepts only that Status type.",
    },
    {
      id: "ts-functions",
      title: "Functions and callable types",
      level: "Beginner",
      description:
        "Create typed functions with clear parameters, return values, optional arguments, and callback contracts.",
      outcomes: [
        "Annotate function parameters and return types.",
        "Use optional, default, and rest parameters appropriately.",
        "Describe callback functions and understand function type compatibility.",
      ],
      lessons: [
        {
          id: "ts-function-signatures",
          title: "Function parameters and return types",
          summary: "Function types define what callers must provide and what a function returns.",
          content: [
            "Annotate each parameter with its expected type. A return type after the parameter list states what the function returns and lets the compiler check every return path.",
            "When a function's return type is obvious, TypeScript can infer it. Explicit return types can still improve readability and help protect a public API from accidental changes.",
          ],
          example: 'function calculateTotal(price: number, quantity: number): number {\n  return price * quantity;\n}\n\nconst total = calculateTotal(12.5, 4);',
          quest: {
            prompt: "Where is a function return type written?",
            choices: ["After the parameter list and a colon", "Before the function name only", "Inside the function body after return"],
            answer: 0,
            explanation:
              "A return type annotation follows the closing parenthesis of the parameter list, separated by a colon.",
          },
        },
        {
          id: "ts-optional-default-rest",
          title: "Optional, default, and rest parameters",
          summary: "Parameter syntax communicates which arguments callers may omit.",
          content: [
            "A question mark marks an optional parameter. A default parameter supplies a value when the caller passes undefined or omits that argument. Rest parameters collect remaining arguments into an array.",
            "Keep parameter order understandable. Required parameters normally come before optional parameters, and a rest parameter must be last in a function's parameter list.",
          ],
          example: 'function welcome(name: string, greeting = "Hello", ...tags: string[]): string {\n  return `${greeting}, ${name}! ${tags.join(", ")}`;\n}\n\nwelcome("Kai", "Welcome", "student", "new");',
          quest: {
            prompt: "What does ...values indicate in a function parameter list?",
            choices: ["A rest parameter collecting remaining arguments", "A return type", "An optional property"],
            answer: 0,
            explanation:
              "A rest parameter gathers zero or more remaining arguments into an array.",
          },
        },
        {
          id: "ts-callback-types",
          title: "Function types and callbacks",
          summary: "Callback types describe functions that are passed as values.",
          content: [
            "Functions are values in JavaScript, so they can be passed to other functions. TypeScript can describe a callback with a function type such as (value: string) => void.",
            "A callback signature documents the input and output expected by the caller. Use named type aliases for complex callback contracts so they can be reused consistently.",
          ],
          example: 'type StringHandler = (value: string) => void;\n\nfunction processName(name: string, handler: StringHandler): void {\n  handler(name.trim());\n}\n\nprocessName("  Nia  ", value => console.log(value));',
          quest: {
            prompt: "What does (value: string) => void describe?",
            choices: [
              "A function accepting a string and returning no useful value",
              "An object with a string property",
              "A string array",
            ],
            answer: 0,
            explanation:
              "The syntax describes a function whose parameter is a string and whose return type is void.",
          },
        },
      ],
      checkpoint:
        "Try it: write a typed function that accepts an array of numbers and a callback, then call the callback once for each number.",
    },
    {
      id: "ts-objects-arrays",
      title: "Objects, arrays, and tuples",
      level: "Beginner",
      description:
        "Model structured data with object types, reusable aliases, readonly properties, arrays, and tuples.",
      outcomes: [
        "Describe object shapes with properties and optional fields.",
        "Use arrays, readonly arrays, and tuples for ordered data.",
        "Create reusable type aliases and interfaces.",
      ],
      lessons: [
        {
          id: "ts-object-shapes",
          title: "Object types and optional properties",
          summary: "Object types state which properties an object may or must contain.",
          content: [
            "An object type lists property names and their types. A question mark marks a property as optional, meaning the property may be absent or undefined depending on the exact type and compiler settings.",
            "TypeScript uses structural typing: compatibility is generally based on whether a value has the required shape, not whether it was created from a particular named class or interface.",
          ],
          example: 'type User = {\n  id: number;\n  name: string;\n  email?: string;\n};\n\nconst user: User = { id: 1, name: "Asha" };',
          quest: {
            prompt: "What does the question mark mean in email?: string?",
            choices: ["The property is optional", "The property must be null", "The property is private"],
            answer: 0,
            explanation:
              "An optional property does not have to be present on every object that matches the type.",
          },
        },
        {
          id: "ts-arrays-tuples",
          title: "Arrays and tuples",
          summary: "Arrays hold a sequence of values while tuples describe fixed-position types.",
          content: [
            "An array type such as number[] describes an array whose elements are numbers. The generic form Array<number> expresses the same common idea.",
            "A tuple describes a sequence with known positions and types, such as [string, number]. Tuples are useful for small structured pairs, though named object properties can be clearer for larger records.",
          ],
          example: 'const scores: number[] = [78, 84, 92];\nconst entry: [string, number] = ["Asha", 92];\n\nconst firstScore = scores[0];',
          quest: {
            prompt: "What does [string, number] describe?",
            choices: ["A two-position tuple with a string then a number", "An array containing only strings", "A union of string and number values"],
            answer: 0,
            explanation:
              "Tuple positions have declared types, so the first position is a string and the second is a number.",
          },
        },
        {
          id: "ts-alias-interface-readonly",
          title: "Type aliases, interfaces, and readonly",
          summary: "Named types make data contracts easier to share and maintain.",
          content: [
            "A type alias gives a name to a type expression. An interface primarily describes object shapes and can be extended or merged in ways that are useful for some library and application contracts.",
            "The readonly modifier prevents reassignment through that typed property or array reference. It is a compile-time restriction, not a deep runtime freeze of the underlying JavaScript object.",
          ],
          example: 'interface Course {\n  readonly id: string;\n  title: string;\n}\n\ntype CourseList = readonly Course[];\n\nconst courses: CourseList = [\n  { id: "ts", title: "TypeScript" }\n];',
          quest: {
            prompt: "What does readonly provide?",
            choices: [
              "A compile-time restriction against writing through that typed reference",
              "A guarantee that the object is deeply frozen at runtime",
              "Automatic encryption of the property",
            ],
            answer: 0,
            explanation:
              "readonly is enforced by TypeScript's type checker; it does not itself freeze an object at runtime.",
          },
        },
      ],
      checkpoint:
        "Try it: define an interface for a Course with an id, title, and optional description. Create a readonly array of courses.",
    },
    {
      id: "ts-narrowing",
      title: "Union types and narrowing",
      level: "Intermediate",
      description:
        "Use runtime checks and control-flow analysis to safely work with values that may have different types.",
      outcomes: [
        "Narrow union types with typeof, in, and equality checks.",
        "Use custom type predicates and discriminated unions.",
        "Handle every variant of a union with exhaustive checks.",
      ],
      lessons: [
        {
          id: "ts-control-flow-narrowing",
          title: "Control-flow type narrowing",
          summary: "TypeScript tracks checks through branches to refine a value's possible type.",
          content: [
            "A union value can be used only in ways valid for all types currently possible. A typeof check, equality comparison, or property-existence check can narrow the value inside a branch.",
            "The checker follows control flow, so the type may become more specific after a guard and change again after assignments. Prefer checks that reflect facts the program can verify at runtime.",
          ],
          example: 'function formatId(id: string | number): string {\n  if (typeof id === "number") {\n    return id.toFixed(0);\n  }\n  return id.toUpperCase();\n}',
          quest: {
            prompt: "What does typeof id === 'number' do inside a union-handling function?",
            choices: ["Narrows id to number in that branch", "Converts id to a number", "Changes the declared type permanently"],
            answer: 0,
            explanation:
              "The runtime condition establishes that id is a number in the true branch, so TypeScript narrows its type there.",
          },
        },
        {
          id: "ts-type-guards",
          title: "The in operator and custom type guards",
          summary: "Type guards describe checks that establish which shape a value has.",
          content: [
            "The in operator can test whether an object has a named property. For repeated or complex checks, a custom type predicate can state that a value satisfies a particular type when the function returns true.",
            "A type predicate is a promise made by the programmer. Its implementation must perform a real check; an inaccurate predicate can make the compiler trust an unsafe assumption.",
          ],
          example: 'type Admin = { role: "admin"; permissions: string[] };\ntype Guest = { role: "guest"; expiresAt: Date };\n\nfunction isAdmin(value: Admin | Guest): value is Admin {\n  return value.role === "admin" && Array.isArray(value.permissions);\n}',
          quest: {
            prompt: "What does the return type value is Admin declare?",
            choices: [
              "A type predicate that narrows value to Admin when true",
              "A conversion that creates a new Admin object",
              "A promise that the function returns an Admin value directly",
            ],
            answer: 0,
            explanation:
              "The predicate tells TypeScript that a true result establishes the Admin type for the tested value.",
          },
        },
        {
          id: "ts-discriminated-unions",
          title: "Discriminated unions and exhaustive checks",
          summary: "A shared literal property makes variants easy to distinguish and verify.",
          content: [
            "A discriminated union gives each object variant a shared property with a different literal value. Checking that property narrows the object to the matching variant.",
            "An exhaustive switch handles every variant. Assigning the remaining value to never can make the compiler report when a new variant is added but not handled.",
          ],
          example: 'type Result =\n  | { kind: "success"; data: string }\n  | { kind: "failure"; message: string };\n\nfunction describe(result: Result): string {\n  switch (result.kind) {\n    case "success": return result.data;\n    case "failure": return result.message;\n    default: {\n      const impossible: never = result;\n      return impossible;\n    }\n  }\n}',
          quest: {
            prompt: "Why use never in an exhaustive switch?",
            choices: [
              "To make an unhandled union variant visible to the type checker",
              "To skip all switch branches at runtime",
              "To turn a union into an array",
            ],
            answer: 0,
            explanation:
              "If every variant is handled, the remaining value is never. A newly added unhandled variant makes the assignment fail type checking.",
          },
        },
      ],
      checkpoint:
        "Try it: define a loading, success, and error state as a discriminated union, then write a function that handles all three cases.",
    },
    {
      id: "ts-generics",
      title: "Generics and reusable abstractions",
      level: "Intermediate",
      description:
        "Write reusable functions and structures that preserve relationships between input and output types.",
      outcomes: [
        "Create generic functions with type parameters.",
        "Constrain generic types when an operation requires particular properties.",
        "Use generic interfaces and classes to preserve type information.",
      ],
      lessons: [
        {
          id: "ts-generic-functions",
          title: "Generic functions",
          summary: "A type parameter lets one function work with multiple types without losing information.",
          content: [
            "A generic function introduces a type parameter, commonly written with a name such as T. The compiler can infer T from the arguments or callers can supply it explicitly.",
            "Generics are useful when a function's output type depends on its input type. They avoid forcing values into broad types such as any and retain useful information for later operations.",
          ],
          example: 'function identity<T>(value: T): T {\n  return value;\n}\n\nconst numberValue = identity(42);\nconst textValue = identity("hello");',
          quest: {
            prompt: "What relationship does identity<T> preserve?",
            choices: [
              "The returned value has the same type as the input value",
              "Every input is converted to a string",
              "The function accepts only numbers",
            ],
            answer: 0,
            explanation:
              "The same type parameter T is used for the input and return type, preserving their type relationship.",
          },
        },
        {
          id: "ts-generic-constraints",
          title: "Generic constraints and keyof",
          summary: "Constraints limit a type parameter to values that support required operations.",
          content: [
            "A generic constraint uses extends to require that a type has a particular shape. This allows a function to use the required properties while remaining generic over other details.",
            "The keyof operator produces a union of an object's known property keys. Combining K extends keyof T allows a function to accept only keys that exist on T and return the corresponding property type.",
          ],
          example: 'function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {\n  return object[key];\n}\n\nconst profile = { name: "Ira", age: 28 };\nconst age = getProperty(profile, "age");',
          quest: {
            prompt: "What does K extends keyof T ensure in this example?",
            choices: [
              "K must be a key that exists on T",
              "K must always be a number",
              "T must be a function",
            ],
            answer: 0,
            explanation:
              "keyof T represents the known keys of T, so the constraint restricts K to those keys.",
          },
        },
        {
          id: "ts-generic-interfaces-classes",
          title: "Generic interfaces and classes",
          summary: "Generic types can describe reusable containers and service contracts.",
          content: [
            "Interfaces and classes can declare type parameters. A generic repository, for example, can describe operations over a particular entity type without duplicating the interface for every entity.",
            "Choose generic parameters that express meaningful relationships. Avoid adding type parameters that do not affect the members or behavior of the abstraction, because they can make APIs harder to understand.",
          ],
          example: 'interface Store<T> {\n  save(value: T): void;\n  getAll(): T[];\n}\n\nclass MemoryStore<T> implements Store<T> {\n  private items: T[] = [];\n  save(value: T): void { this.items.push(value); }\n  getAll(): T[] { return [...this.items]; }\n}',
          quest: {
            prompt: "What does Store<Course> represent?",
            choices: [
              "A Store whose operations work with Course values",
              "A class that can store only strings",
              "A function that creates a new TypeScript compiler",
            ],
            answer: 0,
            explanation:
              "Supplying Course for T specializes the generic Store interface to that entity type.",
          },
        },
      ],
      checkpoint:
        "Try it: write a generic function that returns the first item from an array, and then add a constraint to read an id property from objects.",
    },
    {
      id: "ts-classes-oop",
      title: "Classes and object-oriented TypeScript",
      level: "Intermediate",
      description:
        "Build class-based models with constructors, access control, inheritance, and interface contracts.",
      outcomes: [
        "Define classes, constructors, and instance methods.",
        "Use public, private, protected, and readonly members intentionally.",
        "Apply inheritance and implement interfaces while understanding runtime behavior.",
      ],
      lessons: [
        {
          id: "ts-classes-constructors",
          title: "Classes, fields, and constructors",
          summary: "Classes describe objects with data and behavior and are available at runtime.",
          content: [
            "A class declares fields and methods. The constructor runs when an instance is created with new and can initialize the object's state.",
            "TypeScript's type system checks class usage, while JavaScript's class syntax supplies the runtime behavior. A type alias or interface, by contrast, is erased from the emitted JavaScript.",
          ],
          example: 'class Course {\n  title: string;\n\n  constructor(title: string) {\n    this.title = title;\n  }\n\n  describe(): string {\n    return `Course: ${this.title}`;\n  }\n}\n\nconst course = new Course("TypeScript");',
          quest: {
            prompt: "When is a class constructor called?",
            choices: ["When an instance is created with new", "Whenever a type alias is imported", "When the TypeScript compiler starts"],
            answer: 0,
            explanation:
              "The constructor initializes a class instance when the class is instantiated.",
          },
        },
        {
          id: "ts-access-modifiers",
          title: "Access modifiers and readonly members",
          summary: "Member modifiers control how class state may be accessed and changed.",
          content: [
            "public members are accessible from anywhere. private and protected restrict access according to TypeScript's class rules; protected allows access in subclasses. TypeScript also supports ECMAScript private fields written with a # prefix, which have runtime privacy semantics.",
            "A readonly property can be assigned during declaration or in the constructor, then cannot be reassigned through normal typed code. Use encapsulation to protect important state transitions rather than exposing every field for direct mutation.",
          ],
          example: 'class Account {\n  constructor(\n    public readonly id: string,\n    private balance: number\n  ) {}\n\n  getBalance(): number {\n    return this.balance;\n  }\n}',
          quest: {
            prompt: "Which modifier allows access inside a class and its subclasses?",
            choices: ["protected", "private", "readonly"],
            answer: 0,
            explanation:
              "protected members can be accessed in the declaring class and its subclasses, but not by arbitrary external callers.",
          },
        },
        {
          id: "ts-inheritance-implements",
          title: "Inheritance and interfaces",
          summary: "Inheritance reuses class behavior while interfaces describe compatible contracts.",
          content: [
            "A class can extend another class to inherit its accessible behavior and specialize it. Use inheritance when there is a meaningful subtype relationship, not merely to share a few lines of code.",
            "A class can implement an interface to promise that it provides the required members. Interfaces are compile-time contracts; they do not create runtime validation for external data.",
          ],
          example: 'interface Printable {\n  print(): string;\n}\n\nclass Report implements Printable {\n  print(): string {\n    return "Report ready";\n  }\n}\n\nclass MonthlyReport extends Report {}',
          quest: {
            prompt: "What does implements Printable require from Report?",
            choices: ["Report must provide the members required by Printable", "Report must inherit a runtime object from Printable", "Printable must be a JavaScript package"],
            answer: 0,
            explanation:
              "implements asks the type checker to verify that the class conforms to the interface contract.",
          },
        },
      ],
      checkpoint:
        "Try it: define a base class for a notification and a subclass for an email notification. Give both a common typed method.",
    },
    {
      id: "ts-advanced-types",
      title: "Advanced and utility types",
      level: "Advanced",
      description:
        "Transform and compose types with intersections, mapped types, conditional types, and built-in utilities.",
      outcomes: [
        "Combine object types with intersections and use indexed access types.",
        "Read and create mapped and conditional types.",
        "Apply standard utility types to derive maintainable contracts.",
      ],
      lessons: [
        {
          id: "ts-intersection-indexed-access",
          title: "Intersection and indexed access types",
          summary: "Intersection and indexed access types build new types from existing definitions.",
          content: [
            "An intersection type uses & to combine requirements. A value of type A & B must satisfy both type descriptions, so intersections are useful for composing object contracts.",
            "Indexed access types select a property type from another type. For example, User[\"id\"] refers to the declared type of the id property on User and helps keep related definitions synchronized.",
          ],
          example: 'type Identified = { id: string };\ntype Timestamped = { createdAt: Date };\ntype RecordInfo = Identified & Timestamped;\n\ntype RecordId = RecordInfo["id"];',
          quest: {
            prompt: "What does A & B mean for object type requirements?",
            choices: ["The value must satisfy both A and B", "The value can be either A or B", "The value must be a string"],
            answer: 0,
            explanation:
              "An intersection combines requirements, so a compatible value must meet both constituent types.",
          },
        },
        {
          id: "ts-mapped-conditional-types",
          title: "Mapped and conditional types",
          summary: "Mapped types iterate over keys and conditional types select a type based on a relationship.",
          content: [
            "A mapped type creates a new type by iterating over the keys of an existing type. It can preserve or modify property modifiers and is the foundation of several built-in utility types.",
            "A conditional type uses a form like T extends U ? X : Y. It selects one type expression when the relationship holds and another when it does not; conditional types can distribute over unions in certain forms.",
          ],
          example: 'type Flags<T> = {\n  [K in keyof T]: boolean;\n};\n\ntype Box<T> = T extends string ? { text: T } : { value: T };\n\ntype CourseFlags = Flags<{ title: string; published: boolean }>;',
          quest: {
            prompt: "What does [K in keyof T] do in a mapped type?",
            choices: ["Iterates over the keys of T to create properties", "Calls each property as a function", "Removes all keys from T"],
            answer: 0,
            explanation:
              "The mapped type syntax iterates over the property keys of T and creates a corresponding property in the new type.",
          },
        },
        {
          id: "ts-utility-types",
          title: "Built-in utility types",
          summary: "Utility types derive common variants of existing types without repeating their structure.",
          content: [
            "TypeScript provides utilities such as Partial<T>, Required<T>, Readonly<T>, Pick<T, K>, Omit<T, K>, and Record<K, V>. They transform existing types for common API and data-modeling needs.",
            "Choose utilities according to the intent of the data contract. For example, Partial<User> can describe a patch object, but application logic must still decide which fields may actually be updated and validate values at runtime.",
          ],
          example: 'type User = {\n  id: string;\n  name: string;\n  email: string;\n};\n\ntype UserUpdate = Partial<Pick<User, "name" | "email">>;\ntype UserDirectory = Record<string, User>;',
          quest: {
            prompt: "What does Partial<T> do?",
            choices: ["Makes the properties of T optional", "Makes every property private", "Converts T into an array"],
            answer: 0,
            explanation:
              "Partial<T> creates a type with the same properties as T, but each property is optional.",
          },
        },
      ],
      checkpoint:
        "Try it: define a User type, derive a UserPreview with Pick, and derive a UserPatch with Partial. Explain which fields each type permits.",
    },
    {
      id: "ts-modules-packages",
      title: "Modules, packages, and declarations",
      level: "Intermediate",
      description:
        "Organize TypeScript code into modules and understand package configuration and declaration files.",
      outcomes: [
        "Export and import named and default values.",
        "Understand module resolution and package metadata at a practical level.",
        "Recognize declaration files and ambient type declarations.",
      ],
      lessons: [
        {
          id: "ts-es-modules",
          title: "Exporting and importing modules",
          summary: "Modules divide a program into files with explicit dependencies and public exports.",
          content: [
            "A file with an import or export is treated as a module. Named exports allow a module to expose multiple values, while a default export provides one primary exported value.",
            "Prefer explicit imports and small module responsibilities. Circular dependencies can make initialization and testing harder, so keep dependency direction understandable.",
          ],
          example: '// math.ts\nexport function add(a: number, b: number): number {\n  return a + b;\n}\n\n// app.ts\nimport { add } from "./math";\nconsole.log(add(2, 3));',
          quest: {
            prompt: "Which syntax imports a named export called add?",
            choices: ['import { add } from "./math";', 'import add only from "./math";', 'include add from "./math";'],
            answer: 0,
            explanation:
              "Named exports are imported by name inside braces, unless an alias is provided.",
          },
        },
        {
          id: "ts-package-config",
          title: "Package configuration and module resolution",
          summary: "Project and package settings help tools resolve code and choose output formats.",
          content: [
            "A package.json file records package metadata, scripts, and dependencies. TypeScript's module and moduleResolution options influence how imports are interpreted and checked for the chosen runtime or bundler.",
            "A browser application, Node.js service, and library may need different module settings. Follow the conventions of the runtime and build tool rather than copying compiler options without understanding their effect.",
          ],
          example: '{\n  "scripts": {\n    "typecheck": "tsc --noEmit",\n    "build": "tsc"\n  },\n  "devDependencies": {\n    "typescript": "^5.0.0"\n  }\n}',
          quest: {
            prompt: "What is a common purpose of package.json?",
            choices: ["Store package metadata, scripts, and dependency declarations", "Define HTML page colors", "Replace all TypeScript source files"],
            answer: 0,
            explanation:
              "package.json describes a JavaScript or TypeScript package, including scripts and dependencies.",
          },
        },
        {
          id: "ts-declaration-files",
          title: "Declaration files and ambient types",
          summary: "Declaration files describe types for JavaScript code and external APIs.",
          content: [
            "A declaration file ending in .d.ts describes the types of values without providing their runtime implementation. Libraries can ship declarations so TypeScript users receive editor support and type checking.",
            "Ambient declarations describe values supplied elsewhere, such as a host environment or a JavaScript library. A declaration must accurately match the runtime API; an incorrect declaration can hide real errors.",
          ],
          example: '// greeting.d.ts\ndeclare function greeting(name: string): string;\n\n// app.ts\nconst message = greeting("Noah");',
          quest: {
            prompt: "What does a .d.ts file normally provide?",
            choices: ["Type declarations for code implemented elsewhere", "The executable implementation of every function", "A CSS stylesheet"],
            answer: 0,
            explanation:
              "Declaration files describe the shape of an API for the type checker; they do not normally implement that API.",
          },
        },
      ],
      checkpoint:
        "Try it: split a small program into two modules, export a function from one, import it in the other, and add a package script for type checking.",
    },
    {
      id: "ts-async",
      title: "Promises and asynchronous TypeScript",
      level: "Intermediate",
      description:
        "Represent asynchronous results with Promise types and write clear async workflows with safe error handling.",
      outcomes: [
        "Describe Promise<T> and type asynchronous function results.",
        "Use async and await with typed values.",
        "Handle rejected promises and concurrent asynchronous operations.",
      ],
      lessons: [
        {
          id: "ts-promise-basics",
          title: "Promises and Promise<T>",
          summary: "A promise represents a result that may become available in the future.",
          content: [
            "Promise<T> represents an asynchronous operation that fulfills with a value of type T or rejects with a reason. A promise is not the value itself; it is an object representing eventual completion.",
            "The type parameter describes the fulfillment value. Rejection reasons are not strongly typed by the standard Promise type, so catch handlers should treat unknown errors carefully.",
          ],
          example: 'function loadCount(): Promise<number> {\n  return Promise.resolve(5);\n}\n\nloadCount().then(count => {\n  console.log(count + 1);\n});',
          quest: {
            prompt: "What does Promise<number> describe?",
            choices: ["A promise that fulfills with a number", "A number that is always available immediately", "A function that cannot fail"],
            answer: 0,
            explanation:
              "Promise<number> types the fulfillment value as a number; the operation is still asynchronous and can reject.",
          },
        },
        {
          id: "ts-async-await",
          title: "async and await",
          summary: "async and await let asynchronous code be written in a sequential style.",
          content: [
            "An async function always returns a promise. Returning a value from an async function fulfills that promise with the value; throwing an error causes the returned promise to reject.",
            "The await expression pauses the async function until a promise settles, then produces its fulfillment value or throws its rejection reason. It does not block the entire JavaScript runtime while waiting.",
          ],
          example: 'async function getGreeting(): Promise<string> {\n  const name = await Promise.resolve("Ari");\n  return `Hello, ${name}`;\n}',
          quest: {
            prompt: "What does an async function return?",
            choices: ["A Promise", "Only a synchronous string", "A TypeScript interface"],
            answer: 0,
            explanation:
              "An async function wraps its result in a promise, even when it returns a non-promise value.",
          },
        },
        {
          id: "ts-async-errors-concurrency",
          title: "Async errors and concurrent tasks",
          summary: "Use try/catch and Promise combinators to coordinate asynchronous work.",
          content: [
            "A rejected promise awaited inside a try block throws into the corresponding catch block. Since catch values are not guaranteed to be Error objects, check their shape before reading properties.",
            "Promise.all waits for all supplied promises to fulfill and rejects when one rejects. Promise.allSettled waits for every promise to settle and reports each outcome, which is useful when partial success matters.",
          ],
          example: 'async function loadDashboard(): Promise<void> {\n  try {\n    const [profile, courses] = await Promise.all([\n      Promise.resolve({ name: "Ari" }),\n      Promise.resolve(["TypeScript", "Go"])\n    ]);\n    console.log(profile.name, courses.length);\n  } catch (error: unknown) {\n    console.error(error);\n  }\n}',
          quest: {
            prompt: "Which method waits for every promise to settle, whether fulfilled or rejected?",
            choices: ["Promise.allSettled", "Promise.resolve", "Array.map"],
            answer: 0,
            explanation:
              "Promise.allSettled returns an outcome for each input promise after all of them have settled.",
          },
        },
      ],
      checkpoint:
        "Try it: write an async function that loads two independent values concurrently with Promise.all and handles a rejected promise.",
    },
    {
      id: "ts-runtime-data-dom",
      title: "Runtime data, JSON, and browser APIs",
      level: "Intermediate",
      description:
        "Work with external data safely and connect TypeScript code to JSON and browser interfaces.",
      outcomes: [
        "Explain why compile-time types do not validate runtime input.",
        "Parse JSON and narrow unknown values before using them.",
        "Use DOM types and browser events with appropriate null checks.",
      ],
      lessons: [
        {
          id: "ts-runtime-validation",
          title: "Static types versus runtime validation",
          summary: "Types protect code during development but do not inspect external data automatically.",
          content: [
            "TypeScript types are removed from emitted JavaScript. A value received from an API, local storage, or a user can still have an unexpected shape even when the code assigns it to a typed variable through an assertion.",
            "Treat external data as unknown and validate the fields that the application relies on. A runtime validator can check required keys, primitive types, ranges, and business rules before the data is trusted.",
          ],
          example: 'type Profile = { name: string; age: number };\n\nfunction isProfile(value: unknown): value is Profile {\n  if (typeof value !== "object" || value === null) return false;\n  const candidate = value as Record<string, unknown>;\n  return typeof candidate.name === "string" &&\n    typeof candidate.age === "number";\n}',
          quest: {
            prompt: "Why should API responses be validated at runtime?",
            choices: [
              "External data is not guaranteed to match a TypeScript type declaration",
              "TypeScript automatically rewrites server responses",
              "JSON cannot contain objects",
            ],
            answer: 0,
            explanation:
              "Static types are not runtime checks. The application must verify that incoming data actually has the expected shape.",
          },
        },
        {
          id: "ts-json-data",
          title: "JSON parsing and serialization",
          summary: "JSON APIs exchange runtime data that should be checked before being trusted.",
          content: [
            "JSON.parse converts JSON text into a JavaScript value. Its result should be treated as untrusted data until the application validates it; a type assertion changes only the compiler's view and does not inspect the value.",
            "JSON.stringify serializes supported JavaScript values into JSON text. Some values, such as functions and undefined object properties, are omitted or transformed, so serialization behavior should be understood when designing data formats.",
          ],
          example: 'const text = \'{"title":"TypeScript","minutes":30}\';\nconst parsed: unknown = JSON.parse(text);\n\nif (typeof parsed === "object" && parsed !== null) {\n  console.log("Received an object");\n}\n\nconst encoded = JSON.stringify({ complete: true });',
          quest: {
            prompt: "What is the safest initial type for a value returned by JSON.parse?",
            choices: ["unknown", "any", "never"],
            answer: 0,
            explanation:
              "unknown requires the program to check the parsed value before using it as a more specific type.",
          },
        },
        {
          id: "ts-dom-events",
          title: "DOM elements and event handling",
          summary: "DOM library types describe browser elements, events, and user interactions.",
          content: [
            "When the DOM library is included in the project, TypeScript provides types such as Document, HTMLElement, and MouseEvent. Methods such as querySelector can return null when no matching element exists, so check the result before using it.",
            "Event listeners receive event objects. Use the event type or a carefully narrowed target to access properties safely, and keep browser-specific code separate from code intended to run in non-browser environments.",
          ],
          example: 'const button = document.querySelector<HTMLButtonElement>("#save");\n\nif (button) {\n  button.addEventListener("click", (event: MouseEvent) => {\n    button.disabled = true;\n    console.log(event.type);\n  });\n}',
          quest: {
            prompt: "Why check a querySelector result before using it?",
            choices: ["It may be null when no element matches", "It always returns a string", "It runs only after a click"],
            answer: 0,
            explanation:
              "querySelector returns an element or null, so code must handle the missing-element case.",
          },
        },
      ],
      checkpoint:
        "Try it: parse a JSON string as unknown, validate its required fields, and write a browser event handler that checks whether its target element exists.",
    },
    {
      id: "ts-tooling-testing",
      title: "Tooling, testing, and code quality",
      level: "Advanced",
      description:
        "Use compiler checks, linting, tests, and build tooling to maintain a reliable TypeScript project.",
      outcomes: [
        "Separate type checking from code execution and bundling.",
        "Write tests that verify behavior and important type boundaries.",
        "Use strict compiler settings and project conventions to prevent common defects.",
      ],
      lessons: [
        {
          id: "ts-typecheck-build-lint",
          title: "Type checking, builds, and linting",
          summary: "Type checking, transpilation, bundling, and linting solve related but different problems.",
          content: [
            "The TypeScript compiler can check a project without emitting JavaScript by using --noEmit. A build tool or compiler may then transform and bundle source code for a target runtime.",
            "Linting checks patterns and style rules that are not all covered by the type checker. Keep scripts explicit so developers know which command checks types, runs tests, and produces production output.",
          ],
          example: '{\n  "scripts": {\n    "typecheck": "tsc --noEmit",\n    "build": "tsc -p tsconfig.json",\n    "test": "vitest run",\n    "lint": "eslint ."\n  }\n}',
          quest: {
            prompt: "What does tsc --noEmit commonly do?",
            choices: ["Checks TypeScript without writing JavaScript output", "Runs every browser test", "Starts a production web server"],
            answer: 0,
            explanation:
              "The --noEmit option runs the compiler checks without emitting output files.",
          },
        },
        {
          id: "ts-unit-tests",
          title: "Unit testing typed code",
          summary: "Tests verify runtime behavior while types help describe valid inputs and outputs.",
          content: [
            "A unit test checks a small unit of behavior in isolation. Test normal cases, boundary cases, and error paths; a function being type-correct does not prove that its logic produces the intended result.",
            "A test framework supplies assertions and test organization. Keep tests deterministic and avoid relying on real network services or current time unless the test controls those dependencies.",
          ],
          example: 'function clamp(value: number, min: number, max: number): number {\n  return Math.min(Math.max(value, min), max);\n}\n\n// Example assertion in a test\nexpect(clamp(12, 0, 10)).toBe(10);',
          quest: {
            prompt: "Why test boundary cases?",
            choices: [
              "They reveal behavior at limits that ordinary examples may miss",
              "They remove the need for type checking",
              "They guarantee that no future bug can occur",
            ],
            answer: 0,
            explanation:
              "Boundary tests exercise values such as zero, maximum values, empty inputs, and transitions where logic often fails.",
          },
        },
        {
          id: "ts-strict-code-quality",
          title: "Strict mode and maintainable code",
          summary: "Strict checks and clear boundaries make assumptions explicit across a codebase.",
          content: [
            "The strict compiler option enables a collection of stronger checks, including strict null checking and stricter function type behavior. Teams can add additional checks and lint rules according to the project needs.",
            "Avoid broad any usage, keep types close to their domain, and validate untrusted data at system boundaries. Refactor repeated type logic into focused aliases or functions when that improves clarity rather than creating abstractions for their own sake.",
          ],
          example: 'function displayName(name: string | undefined): string {\n  return name?.trim() || "Guest";\n}\n\nconst title: string = displayName(undefined);',
          quest: {
            prompt: "What is a key benefit of strictNullChecks?",
            choices: [
              "It makes possible null and undefined values explicit in type checking",
              "It prevents all runtime exceptions",
              "It automatically validates API responses",
            ],
            answer: 0,
            explanation:
              "strictNullChecks helps detect places where null or undefined may be used without being handled.",
          },
        },
      ],
      checkpoint:
        "Try it: add a typecheck script, enable strict mode, and write tests for a function's normal, empty, and boundary inputs.",
    },
    {
      id: "ts-architecture-capstone",
      title: "Application design and production readiness",
      level: "Advanced",
      description:
        "Bring TypeScript concepts together with layered boundaries, API contracts, error handling, and maintainable project design.",
      outcomes: [
        "Separate domain types, application logic, and infrastructure code.",
        "Design typed API boundaries without confusing static types with runtime guarantees.",
        "Review an application for reliability, accessibility, and maintainability.",
      ],
      lessons: [
        {
          id: "ts-layered-design",
          title: "Organize an application into layers",
          summary: "Clear boundaries keep domain rules independent from user interfaces and infrastructure.",
          content: [
            "A small application can separate domain types and rules from storage, network access, and presentation. The domain layer should express the core concepts without depending unnecessarily on browser or server-specific APIs.",
            "A repository or service interface can describe what the application needs, while a separate implementation handles local storage or HTTP. This separation makes the core logic easier to test and change.",
          ],
          example: 'type Task = { id: string; title: string; done: boolean };\n\ninterface TaskRepository {\n  list(): Promise<Task[]>;\n  save(task: Task): Promise<void>;\n}\n\nasync function completeTask(\n  repository: TaskRepository,\n  task: Task\n): Promise<void> {\n  await repository.save({ ...task, done: true });\n}',
          quest: {
            prompt: "Why define a repository interface?",
            choices: [
              "To separate application needs from a particular storage implementation",
              "To make TypeScript types available at runtime automatically",
              "To eliminate the need for error handling",
            ],
            answer: 0,
            explanation:
              "An interface describes the operations the application needs without binding the domain logic to one storage mechanism.",
          },
        },
        {
          id: "ts-api-contracts",
          title: "Typed API contracts and error boundaries",
          summary: "API types document expectations while runtime code checks responses and failures.",
          content: [
            "A request and response type can document an API contract and help application code use it consistently. However, a response type annotation cannot prove that a remote server actually returned the documented shape.",
            "Centralize response parsing, status checks, and runtime validation at the network boundary. Convert low-level failures into meaningful application errors while retaining enough context for logs and troubleshooting.",
          ],
          example: 'type CourseDto = { id: string; title: string };\n\nasync function fetchCourse(url: string): Promise<unknown> {\n  const response = await fetch(url);\n  if (!response.ok) {\n    throw new Error(`Request failed: ${response.status}`);\n  }\n  return response.json();\n}',
          quest: {
            prompt: "Why return unknown from a low-level JSON fetch helper?",
            choices: [
              "It reminds callers to validate the external response before trusting its shape",
              "It converts the response to an empty object",
              "It guarantees that the request cannot reject",
            ],
            answer: 0,
            explanation:
              "The JSON payload is external data. unknown requires validation before code treats it as a particular application type.",
          },
        },
        {
          id: "ts-production-review",
          title: "Production readiness and code review",
          summary: "A release review checks behavior, configuration, observability, and maintainability.",
          content: [
            "Before release, run type checking, automated tests, linting, and the production build. Review environment-specific configuration, dependency versions, secret handling, and error paths rather than assuming a successful local run covers every deployment environment.",
            "Review public interfaces for clear names and stable types. Confirm that external values are validated, asynchronous failures are handled, and logs do not expose credentials or personal information.",
          ],
          example: '// A practical release checklist\n// 1. Run the type checker.\n// 2. Run unit and integration tests.\n// 3. Run linting and the production build.\n// 4. Verify environment configuration.\n// 5. Review validation and error handling.',
          quest: {
            prompt: "Which check should be included before a production release?",
            choices: [
              "Run the production build and automated tests",
              "Remove all input validation to simplify the code",
              "Assume local development success guarantees deployment success",
            ],
            answer: 0,
            explanation:
              "A release process should verify the production build and test behavior, alongside configuration and security checks.",
          },
        },
      ],
      checkpoint:
        "Review your capstone for clear module boundaries, validated external data, handled asynchronous failures, meaningful tests, and a reproducible production build.",
    },
  ],
  capstone: {
    title: "TypeScript capstone: Personal Study Planner",
    brief:
      "Build a small study planner that lets a learner create, update, complete, filter, and remove study tasks. Model the domain with TypeScript types, keep application logic separate from the user interface, persist data through a repository implementation, and validate any data loaded from storage or an API before using it.",
    milestones: [
      "Define Task, TaskStatus, and planner state types using interfaces, aliases, and discriminated unions where appropriate.",
      "Implement typed functions for creating, updating, completing, filtering, and removing tasks.",
      "Create a repository interface and a local implementation for saving and loading planner data.",
      "Validate parsed JSON as unknown before converting it into trusted task values; handle invalid or missing data safely.",
      "Build an interface with typed events and form handling, then add tests for normal, empty, invalid, and boundary cases.",
      "Enable strict compiler checks, run type checking and tests, and document how to build and run the application.",
    ],
  },
};
export default typescriptCourse;