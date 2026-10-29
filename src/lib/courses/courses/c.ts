import type { CourseConfig } from "../types";

export const cCourse: CourseConfig = {
  slug: "c",
  language: "C",
  title: "Learn C: Beginner to Advanced",
  icon: "⚙️",
  levelLabel: "Beginner to advanced",
  description:
    "Learn C fundamentals, memory, pointers, data structures, and program design through short lessons, guided code, quests, and a capstone.",
  metaDescription:
    "Learn C programming from the ground up with a structured course covering compilation, types, control flow, functions, arrays, pointers, memory, structs, files, and algorithms.",
  audience:
    "Learners who want to understand compiled programs, low-level data, and how C gives explicit control over memory.",
  prerequisites:
    "No prior C experience is needed. The examples are explanatory and are not compiled or executed on this website.",
  modules: [
    {
      id: "c-first-program",
      title: "Meet C and the compiler",
      level: "Beginner",
      description:
        "Understand the edit-compile-run cycle and write small programs with clear input and output.",
      outcomes: [
        "Recognize the role of headers and main().",
        "Declare basic variables and choose matching format specifiers.",
        "Read input safely into appropriately sized storage.",
      ],
      lessons: [
        {
          id: "c-program-shape",
          title: "Source code and main",
          summary: "A C compiler translates source code into a program the computer can run.",
          content: [
            "A C source file is compiled before execution. A typical program includes a header, a main function, and a return status that tells the operating system how the program ended.",
            "The compiler can catch syntax and type-related mistakes. Treat warnings as useful feedback, and learn to read the first relevant diagnostic rather than changing code at random.",
          ],
          example: '#include <stdio.h>\n\nint main(void) {\n    puts("Hello, world!");\n    return 0;\n}',
          quest: {
            prompt: "Where does a typical C program begin executing?",
            choices: ["main()", "printf()", "#include"],
            answer: 0,
            explanation:
              "The runtime starts a hosted C program by calling main(). Header inclusion happens during preprocessing and is not the entry point.",
          },
        },
        {
          id: "c-types-variables",
          title: "Types and variables",
          summary: "A declaration gives a name storage with a particular type.",
          content: [
            "C is statically typed: a declaration specifies the kind of value a variable stores. Common types include int, char, and double.",
            "Use format specifiers that match the type passed to printf. A mismatch can cause undefined behavior, so pay attention to the function documentation and compiler warnings.",
          ],
          example: '#include <stdio.h>\n\nint main(void) {\n    int count = 4;\n    double ratio = 0.5;\n    printf("count=%d ratio=%.1f\\n", count, ratio);\n    return 0;\n}',
          quest: {
            prompt: "Which printf conversion specifier matches an int?",
            choices: ["%d", "%s", "%p"],
            answer: 0,
            explanation:
              "%d formats an int as a signed decimal integer. %s is for a string and %p is for a pointer.",
          },
        },
        {
          id: "c-input-output",
          title: "Input and output",
          summary: "Use standard I/O functions with attention to their return values.",
          content: [
            "printf and puts write output. scanf can read formatted input, but its return value must be checked to confirm that the expected number of fields was read.",
            "For beginner examples, use a variable's address with scanf for numeric input. Later, prefer line-based input and explicit parsing for more robust user-facing programs.",
          ],
          example: '#include <stdio.h>\n\nint main(void) {\n    int age;\n    printf("Age: ");\n    if (scanf("%d", &age) != 1) {\n        return 1;\n    }\n    printf("Next year: %d\\n", age + 1);\n    return 0;\n}',
          quest: {
            prompt: "Why does scanf receive &age for an int variable?",
            choices: [
              "It needs the address where it can store the value",
              "It converts age to a string",
              "It prints the memory address",
            ],
            answer: 0,
            explanation:
              "scanf needs a pointer to writable storage so it can place the parsed integer in age.",
          },
        },
      ],
      checkpoint:
        "Try it: sketch a C program that reads one whole number, checks that input succeeded, and prints a derived value.",
    },
    {
      id: "c-control-flow",
      title: "Make decisions and repeat",
      level: "Beginner",
      description:
        "Use conditions and loops to express rules and repeat work deliberately.",
      outcomes: [
        "Write if/else decisions using comparisons.",
        "Use for and while loops with clear bounds.",
        "Avoid off-by-one errors by tracing start and stop conditions.",
      ],
      lessons: [
        {
          id: "c-conditions",
          title: "Conditions and branches",
          summary: "if and else choose which statement block runs.",
          content: [
            "C uses comparison operators such as ==, !=, <, and >=. A condition is true when its value is nonzero and false when it is zero.",
            "Use braces around branch bodies even when there is only one statement. Consistent braces make later edits safer and help prevent accidental control-flow changes.",
          ],
          example: 'if (temperature < 0) {\n    puts("Freezing");\n} else {\n    puts("Not freezing");\n}',
          quest: {
            prompt: "What is the result of the comparison 5 >= 3?",
            choices: ["True (nonzero)", "False (zero)", "A string"],
            answer: 0,
            explanation:
              "The comparison is true. In C, a true comparison evaluates to 1 and false evaluates to 0.",
          },
        },
        {
          id: "c-for-loops",
          title: "Count with for",
          summary: "A for loop groups initialization, condition, and update.",
          content: [
            "A for loop has an initialization expression, a continuation condition, and an update expression. Read all three to understand exactly when the body runs.",
            "For an array of length length, valid indexes range from zero through length minus one. A condition such as i < length is a common safe pattern.",
          ],
          example: 'for (int i = 0; i < 4; i++) {\n    printf("%d\\n", i);\n}',
          quest: {
            prompt: "How many times does the loop body run when i starts at 0 and continues while i < 4?",
            choices: ["3", "4", "5"],
            answer: 1,
            explanation:
              "The body runs for i values 0, 1, 2, and 3. It stops before the iteration where i equals 4.",
          },
        },
        {
          id: "c-while-loops",
          title: "Repeat with while",
          summary: "while repeats as long as its condition remains true.",
          content: [
            "Use while when the number of iterations depends on a changing condition. The test occurs before each run, so a false initial condition means the body runs zero times.",
            "Update the variables that affect the condition, and consider a clear exit path. These habits prevent infinite loops and make state changes easy to trace.",
          ],
          example: 'int remaining = 3;\nwhile (remaining > 0) {\n    printf("%d\\n", remaining);\n    remaining--;\n}',
          quest: {
            prompt: "When is the while condition checked?",
            choices: [
              "Before each possible loop iteration",
              "Only after the loop finishes",
              "Once when the program compiles",
            ],
            answer: 0,
            explanation:
              "The condition is tested before each iteration, so the body only runs while it evaluates as true.",
          },
        },
      ],
      checkpoint:
        "Try it: trace a loop in a table with columns for the counter, condition, and output before you compile it.",
    },
    {
      id: "c-functions-arrays",
      title: "Functions, arrays, and strings",
      level: "Beginner",
      description:
        "Split work into functions and understand how arrays and C strings are represented.",
      outcomes: [
        "Declare and call a function with a matching prototype.",
        "Pass arrays with their length and stay inside their bounds.",
        "Recognize that C strings end with a null character.",
      ],
      lessons: [
        {
          id: "c-functions",
          title: "Function declarations and calls",
          summary: "Functions name reusable operations and define their inputs and result.",
          content: [
            "A function declaration tells the compiler a function's name, return type, and parameter types. Its definition provides the body, and a call supplies arguments.",
            "Pass values for inputs and return a result when appropriate. Keep each function focused so it can be reasoned about and tested independently.",
          ],
          example: 'int square(int value);\n\nint square(int value) {\n    return value * value;\n}',
          quest: {
            prompt: "What does the function prototype int square(int value); communicate?",
            choices: [
              "The function returns an int and accepts an int",
              "The function changes every global variable",
              "The function is an array",
            ],
            answer: 0,
            explanation:
              "The prototype gives the function's return type, name, and parameter type before a call is compiled.",
          },
        },
        {
          id: "c-arrays",
          title: "Arrays and bounds",
          summary: "An array stores a fixed number of same-typed elements in sequence.",
          content: [
            "Array elements use zero-based indexes. C does not automatically check array bounds, so every index calculation must stay between zero and length minus one.",
            "When passing an array to a function, also pass its length. The array parameter does not carry its element count with it.",
          ],
          example: 'int scores[] = {8, 9, 10};\nsize_t count = sizeof scores / sizeof scores[0];\nfor (size_t i = 0; i < count; i++) {\n    printf("%d\\n", scores[i]);\n}',
          quest: {
            prompt: "For an array with 5 elements, what is the final valid index?",
            choices: ["4", "5", "6"],
            answer: 0,
            explanation:
              "Indexes start at zero, so five elements use indexes 0 through 4.",
          },
        },
        {
          id: "c-strings",
          title: "Characters and C strings",
          summary: "A C string is a character array ending with a null terminator.",
          content: [
            "A string literal such as \"cat\" occupies characters plus a terminating '\\0'. The terminator marks where string functions should stop.",
            "A destination buffer needs room for all characters and the terminator. Use bounded input functions and check sizes to avoid writing past the buffer.",
          ],
          example: '#include <stdio.h>\n\nint main(void) {\n    char word[] = "cat";\n    printf("%s has %zu letters\\n", word, sizeof word - 1);\n    return 0;\n}',
          quest: {
            prompt: "What marks the end of a C string?",
            choices: ["A null character, '\\0'", "A newline in every case", "The end of the array's allocated memory"],
            answer: 0,
            explanation:
              "C string functions look for the null terminator. It is distinct from a newline and must fit in the buffer.",
          },
        },
      ],
      checkpoint:
        "Try it: pass an array and its length to a function, then test the first, last, and one-element cases.",
    },
    {
      id: "c-pointers-memory",
      title: "Understand pointers and memory",
      level: "Intermediate",
      description:
        "Follow addresses, use pointers safely, and manage dynamically allocated storage.",
      outcomes: [
        "Explain the relationship between an object and its address.",
        "Use pointers only when valid storage is available.",
        "Pair dynamic allocation with checks and release.",
      ],
      lessons: [
        {
          id: "c-address-pointers",
          title: "Addresses and pointers",
          summary: "A pointer stores the address of an object.",
          content: [
            "The address-of operator & produces an object's address. A pointer declaration such as int *pointer says that pointer can point to an int.",
            "Dereferencing a valid pointer with * accesses the pointed-to object. Never dereference a null, uninitialized, expired, or otherwise invalid pointer.",
          ],
          example: 'int score = 7;\nint *score_pointer = &score;\n*score_pointer = 8;\nprintf("%d\\n", score);',
          quest: {
            prompt: "What does &score produce in the example?",
            choices: ["The address of score", "The value 8", "A new integer array"],
            answer: 0,
            explanation:
              "The address-of operator returns where the score object is stored, which can be assigned to a compatible pointer.",
          },
        },
        {
          id: "c-pointer-parameters",
          title: "Pointers as output parameters",
          summary: "A function can modify a caller's object through a pointer.",
          content: [
            "C passes arguments by value. Passing a pointer copies the address, allowing a function to access the caller's object through that address.",
            "Document whether pointer parameters may be null and validate them when the function contract allows it. Make ownership and lifetime clear when pointers refer to allocated memory.",
          ],
          example: 'void reset(int *value) {\n    if (value != NULL) {\n        *value = 0;\n    }\n}',
          quest: {
            prompt: "Why can reset() change the caller's integer?",
            choices: [
              "It receives a pointer to that integer",
              "C passes every variable by reference",
              "The function can access all local variables",
            ],
            answer: 0,
            explanation:
              "The pointer contains the caller object's address, so dereferencing it accesses that object.",
          },
        },
        {
          id: "c-dynamic-memory",
          title: "Dynamic memory and ownership",
          summary: "Heap allocations need an explicit lifetime and a matching free.",
          content: [
            "malloc requests a number of bytes and returns a pointer, or NULL if it fails. Check the result before using the allocated region.",
            "Every successful allocation should have a clear owner responsible for calling free exactly once when the memory is no longer needed. Do not use the pointer after freeing it.",
          ],
          example: '#include <stdlib.h>\n\nsize_t count = 10;\nint *values = malloc(count * sizeof *values);\nif (values == NULL) {\n    return 1;\n}\n/* Use values[0] through values[count - 1]. */\nfree(values);\nvalues = NULL;',
          quest: {
            prompt: "What should a program do if malloc returns NULL?",
            choices: [
              "Avoid using the allocation and handle failure",
              "Dereference it to check the size",
              "Call free repeatedly until it changes",
            ],
            answer: 0,
            explanation:
              "NULL means allocation failed. The program must not access the requested memory and should handle the failure explicitly.",
          },
        },
      ],
      checkpoint:
        "Try it: identify who owns each allocated block in a small program and when that owner releases it.",
    },
    {
      id: "c-structs-modules",
      title: "Model data and split programs",
      level: "Intermediate",
      description:
        "Create structs for related data and separate interfaces from implementations.",
      outcomes: [
        "Define and initialize a struct.",
        "Choose between struct values and pointers based on ownership and size.",
        "Organize declarations in headers and implementations in source files.",
      ],
      lessons: [
        {
          id: "c-structs",
          title: "Structs and records",
          summary: "A struct combines related fields into one application-defined type.",
          content: [
            "A struct groups fields that describe one record. Access a field through a value with . or through a pointer with ->.",
            "Initialize fields deliberately. Structs do not automatically validate their contents, so define and enforce the rules in the functions that create or update records.",
          ],
          example: 'struct Point {\n    double x;\n    double y;\n};\n\nstruct Point origin = { .x = 0.0, .y = 0.0 };',
          quest: {
            prompt: "Which operator accesses x through a struct pointer named point?",
            choices: ["->", ".", "&"],
            answer: 0,
            explanation:
              "The arrow operator is shorthand for dereferencing the pointer and selecting a field.",
          },
        },
        {
          id: "c-headers-files",
          title: "Headers and source files",
          summary: "Headers declare interfaces; source files provide implementations.",
          content: [
            "A header commonly contains function declarations and shared type definitions. Include guards prevent the same header from being processed repeatedly in one translation unit.",
            "Keep definitions in source files and include only the interface needed by callers. This structure makes a program easier to compile, navigate, and reuse.",
          ],
          example: '#ifndef COUNTER_H\n#define COUNTER_H\n\nint next_count(int current);\n\n#endif',
          quest: {
            prompt: "What problem do include guards prevent?",
            choices: [
              "Repeated inclusion of the same header in one translation unit",
              "All compiler warnings",
              "The operating system from starting the program",
            ],
            answer: 0,
            explanation:
              "The preprocessor defines the guard once, so later inclusions skip the header contents.",
          },
        },
        {
          id: "c-const-scope",
          title: "Scope, const, and interfaces",
          summary: "Clear scope and const-qualified inputs communicate intent.",
          content: [
            "A variable's scope determines where its name is visible. Keep variables in the smallest scope that fits their use to reduce accidental coupling.",
            "Use const for data a function should not modify through a particular parameter. It documents intent and lets the compiler help enforce that promise.",
          ],
          example: 'double average(const int values[], size_t count) {\n    long total = 0;\n    for (size_t i = 0; i < count; i++) {\n        total += values[i];\n    }\n    return count == 0 ? 0.0 : (double) total / count;\n}',
          quest: {
            prompt: "What does const communicate for the values parameter?",
            choices: [
              "The function promises not to modify elements through this parameter",
              "The array has no elements",
              "The function is only called at compile time",
            ],
            answer: 0,
            explanation:
              "const restricts modification through that access path and communicates that the function treats the input as read-only.",
          },
        },
      ],
      checkpoint:
        "Try it: define a small record type and list which functions should create, validate, print, and update it.",
    },
    {
      id: "c-files-algorithms",
      title: "Files, algorithms, and safe boundaries",
      level: "Advanced",
      description:
        "Check file operations, reason about algorithm growth, and assemble a complete C project.",
      outcomes: [
        "Check file and parsing operations for failure.",
        "Compare simple algorithm growth patterns.",
        "Design a project with explicit ownership and testable functions.",
      ],
      lessons: [
        {
          id: "c-files-errors",
          title: "Files and error paths",
          summary: "File operations can fail and should be checked.",
          content: [
            "fopen returns NULL when a file cannot be opened. Check every resource-acquisition result and close a successfully opened file with fclose.",
            "Read functions report how much they read or whether an error occurred. Handle end-of-file separately from an actual I/O error when the distinction matters.",
          ],
          example: '#include <stdio.h>\n\nFILE *file = fopen("notes.txt", "r");\nif (file == NULL) {\n    perror("notes.txt");\n    return 1;\n}\n/* Read from file and check results. */\nfclose(file);',
          quest: {
            prompt: "What should happen when fopen returns NULL?",
            choices: [
              "The program should not use the file pointer and should handle the error",
              "The program should call fclose(NULL)",
              "The program can assume the file opened anyway",
            ],
            answer: 0,
            explanation:
              "A NULL result indicates that opening failed. Handle the failure before attempting file operations.",
          },
        },
        {
          id: "c-algorithm-cost",
          title: "Search and algorithm growth",
          summary: "A clear baseline helps compare better algorithms.",
          content: [
            "A linear search checks elements in sequence and has O(n) worst-case work. Binary search can achieve O(log n) comparisons, but it requires sorted data and careful bounds.",
            "Complexity describes growth, not a promise about exact time. For small inputs, a simpler algorithm can be easier to verify and fast enough.",
          ],
          example: 'size_t low = 0;\nsize_t high = count;\nwhile (low < high) {\n    size_t middle = low + (high - low) / 2;\n    if (values[middle] < target) {\n        low = middle + 1;\n    } else {\n        high = middle;\n    }\n}',
          quest: {
            prompt: "What precondition does binary search need?",
            choices: [
              "The values are sorted according to the search order",
              "The array contains only negative numbers",
              "The list length is exactly two",
            ],
            answer: 0,
            explanation:
              "Binary search eliminates a half based on ordering, so its input must already be sorted.",
          },
        },
        {
          id: "c-project-quality",
          title: "Build a dependable C project",
          summary: "Compilation, warnings, tests, and clear ownership support reliable code.",
          content: [
            "Break a program into small functions with documented inputs, outputs, and ownership. Validate external input at the boundary before using it in core logic.",
            "Compile with warnings enabled, test boundary cases, and use tools such as sanitizers when available. They complement careful reasoning but do not replace correct bounds and lifetime rules.",
          ],
          example: '/* A useful development loop:\n   1. Compile with warnings enabled.\n   2. Run focused tests, including boundary cases.\n   3. Fix the first relevant diagnostic.\n   4. Review ownership and array bounds.\n*/',
          quest: {
            prompt: "Why test boundary cases such as an empty collection?",
            choices: [
              "They reveal assumptions that normal examples can hide",
              "They guarantee the compiler never warns",
              "They remove the need to check input",
            ],
            answer: 0,
            explanation:
              "Boundary cases exercise conditions such as zero length, first/last indexes, and missing data where bugs commonly appear.",
          },
        },
      ],
      checkpoint:
        "Review your capstone for input validation, clear error paths, array bounds, and a single owner for each allocation.",
    },
  ],
  capstone: {
    title: "C capstone: Study-session tracker",
    brief:
      "Create a command-line tracker for study sessions. Represent each session with a struct, support adding and listing records, summarize total minutes, and save data to a file. Build the first version with a fixed maximum before considering dynamic allocation.",
    milestones: [
      "Define a session struct and decide the maximum record count for version one.",
      "Write focused functions for adding, validating, listing, and summarizing sessions.",
      "Pass array lengths explicitly and check every index against the current count.",
      "Add file loading and saving with checked fopen, read/write, and fclose paths.",
      "Test empty, full, invalid-input, and file-error cases; document how memory is owned.",
    ],
  },
};

export default cCourse;
