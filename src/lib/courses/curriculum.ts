export interface CourseQuest {
  prompt: string;
  choices: string[];
  answer: number;
  explanation: string;
}

export interface CourseLesson {
  id: string;
  title: string;
  summary: string;
  content: string[];
  example: string;
  quest: CourseQuest;
}

export interface CourseModule {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  outcomes: string[];
  lessons: CourseLesson[];
  checkpoint: string;
}

export interface CourseConfig {
  slug: string;
  language: string;
  title: string;
  icon: string;
  levelLabel: string;
  description: string;
  metaDescription: string;
  audience: string;
  prerequisites: string;
  modules: CourseModule[];
  capstone: {
    title: string;
    brief: string;
    milestones: string[];
  };
}

const pythonCourse: CourseConfig = {
  slug: "python",
  language: "Python",
  title: "Learn Python: Beginner to Advanced",
  icon: "🐍",
  levelLabel: "Beginner to advanced",
  description:
    "Build a practical Python foundation through bite-sized lessons, code examples, knowledge quests, module checkpoints, and a final project.",
  metaDescription:
    "Learn Python from the beginning with a structured, gamified course covering core syntax, functions, data structures, files, testing, object-oriented programming, and algorithms.",
  audience:
    "New programmers and self-taught learners who want a structured path from Python basics to building complete programs.",
  prerequisites:
    "No programming experience is required. A browser and a willingness to experiment are enough to begin.",
  modules: [
    {
      id: "python-starting",
      title: "Start with Python",
      level: "Beginner",
      description:
        "Meet Python, run simple instructions, and understand the values that programs work with.",
      outcomes: [
        "Read and write basic Python statements.",
        "Store text and numbers in named variables.",
        "Convert input before using it as a number.",
      ],
      lessons: [
        {
          id: "python-first-program",
          title: "Instructions, output, and comments",
          summary: "A program is a sequence of instructions Python reads and runs.",
          content: [
            "Python code is made of statements. The print() function sends readable output to the screen, which makes it useful for feedback and simple scripts.",
            "Comments begin with # and are for people reading the code. Good comments explain intent or a decision, not merely repeat what the next line says.",
          ],
          example: 'print("Hello, world!")\n\n# This line is a note for the next developer',
          quest: {
            prompt: "Which line displays the text Welcome?",
            choices: ['message("Welcome")', 'print("Welcome")', 'show = "Welcome"'],
            answer: 1,
            explanation:
              "print() is Python's built-in function for displaying a value. Assigning text to a variable stores it but does not display it.",
          },
        },
        {
          id: "python-values-variables",
          title: "Values, types, and variables",
          summary: "Names let you keep and reuse values in a program.",
          content: [
            "A value has a type. Common built-in types include int for whole numbers, float for decimal numbers, str for text, and bool for True or False.",
            "Use = to assign a value to a variable. Python infers its type from the value, and descriptive names make later expressions easier to understand.",
          ],
          example: 'name = "Ari"\nlessons_finished = 3\nprogress = 0.25\nis_ready = True',
          quest: {
            prompt: "What is the type of the value 3.5?",
            choices: ["int", "str", "float"],
            answer: 2,
            explanation:
              "A number with a fractional part is a float. The value 3 without a decimal point is an int.",
          },
        },
        {
          id: "python-input-conversion",
          title: "Input and conversion",
          summary: "Turn user input into the type your calculation needs.",
          content: [
            "input() pauses for a line of text and returns a str, even when the person types digits. Convert that text to int or float before doing numeric work.",
            "Conversion can fail when the text is not a valid number. Later lessons will show how to handle that situation instead of letting the program stop unexpectedly.",
          ],
          example: 'name = input("Your name: ")\nage = int(input("Your age: "))\nprint("Next year you will be", age + 1)',
          quest: {
            prompt: "Why does int(input(...)) help when asking for a quantity?",
            choices: [
              "input() already returns an integer",
              "It converts the returned text to an integer",
              "It prints the input twice",
            ],
            answer: 1,
            explanation:
              "input() always returns text. int() converts digit text such as '12' to the integer 12.",
          },
        },
      ],
      checkpoint:
        "Try it: collect a name and two numeric values, convert the numbers, and print their sum with a sentence.",
    },
    {
      id: "python-decisions-loops",
      title: "Make decisions and repeat work",
      level: "Beginner",
      description:
        "Control which instructions run and repeat a task without copying the same code.",
      outcomes: [
        "Use comparisons and if/elif/else branches.",
        "Choose between for and while loops.",
        "Trace loop state and prevent accidental infinite loops.",
      ],
      lessons: [
        {
          id: "python-conditionals",
          title: "Conditions and branches",
          summary: "Boolean expressions let a program choose a path.",
          content: [
            "Comparisons such as ==, !=, <, and >= produce a Boolean value. An if statement runs its indented block when the condition is true.",
            "Use elif for another condition and else for the remaining case. Indentation is part of Python's syntax, so keep each block consistently indented.",
          ],
          example: 'score = 82\nif score >= 90:\n    print("Excellent")\nelif score >= 60:\n    print("Passed")\nelse:\n    print("Keep practicing")',
          quest: {
            prompt: "If score is 82, which branch runs in this example?",
            choices: ["if score >= 90", "elif score >= 60", "else"],
            answer: 1,
            explanation:
              "The first condition is false, and the next condition is true, so the elif block runs.",
          },
        },
        {
          id: "python-for-loops",
          title: "Repeat with for",
          summary: "A for loop visits values from a sequence one at a time.",
          content: [
            "Use for when you want to process each item in a collection or a known range of values. range(stop) produces values starting at zero and stopping before stop.",
            "Each iteration binds the next value to the loop variable. Give that variable a name that describes the item or position it represents.",
          ],
          example: 'for number in range(1, 4):\n    print(number)\n\nfor color in ["blue", "green"]:\n    print(color)',
          quest: {
            prompt: "Which values does range(1, 4) produce?",
            choices: ["1, 2, 3", "1, 2, 3, 4", "0, 1, 2, 3, 4"],
            answer: 0,
            explanation:
              "The start value is included and the stop value is excluded, so range(1, 4) produces 1, 2, and 3.",
          },
        },
        {
          id: "python-while-loops",
          title: "Repeat with while",
          summary: "A while loop continues as long as its condition stays true.",
          content: [
            "A while loop is useful when the number of repetitions depends on a condition, such as continuing until a user chooses to quit.",
            "Make sure the loop body can change the condition. If nothing ever makes the condition false, the loop may run forever.",
          ],
          example: 'countdown = 3\nwhile countdown > 0:\n    print(countdown)\n    countdown -= 1\nprint("Go!")',
          quest: {
            prompt: "What makes the countdown loop eventually stop?",
            choices: [
              "The print() call changes the condition",
              "countdown decreases until it is no longer greater than zero",
              "while loops always run three times",
            ],
            answer: 1,
            explanation:
              "The update reduces countdown on each iteration. Once it reaches zero, the condition is false.",
          },
        },
      ],
      checkpoint:
        "Try it: write the decision steps for a score-based result, then repeat a short message a chosen number of times.",
    },
    {
      id: "python-data-functions",
      title: "Organize data and reusable code",
      level: "Beginner",
      description:
        "Work with collections, define functions, and handle expected errors clearly.",
      outcomes: [
        "Choose lists, dictionaries, and sets for different data.",
        "Define functions with parameters and return values.",
        "Handle invalid conversions with a focused exception handler.",
      ],
      lessons: [
        {
          id: "python-collections",
          title: "Lists, dictionaries, and sets",
          summary: "Collections group values so your program can work with related data.",
          content: [
            "A list keeps an ordered sequence and can be changed. Indexes start at zero, and append() adds an item to the end.",
            "A dictionary maps unique keys to values for lookups. A set stores unique values and is useful when membership matters more than order.",
          ],
          example: 'tasks = ["read", "practice"]\ntasks.append("review")\nprofile = {"name": "Ari", "level": 1}\nunique_tags = {"python", "beginner"}',
          quest: {
            prompt: "Which collection is designed for mapping a label such as 'name' to a value?",
            choices: ["list", "dictionary", "range"],
            answer: 1,
            explanation:
              "A dictionary stores key-value pairs, making it a natural fit for labeled properties and lookups.",
          },
        },
        {
          id: "python-functions",
          title: "Functions and return values",
          summary: "Functions package work behind a name and a clear interface.",
          content: [
            "Define a function with def, choose parameters for its inputs, and indent the body. Calling the function runs that body with the supplied arguments.",
            "return sends a result back to the caller. A function without an explicit return value returns None, so use return when another part of the program needs the answer.",
          ],
          example: 'def add_tax(price, rate):\n    return price * (1 + rate)\n\ntotal = add_tax(20, 0.1)\nprint(total)',
          quest: {
            prompt: "What does return do in a function?",
            choices: [
              "Sends a result back to the caller",
              "Repeats the function",
              "Displays every local variable",
            ],
            answer: 0,
            explanation:
              "return ends the current function call and provides a value to the code that called it.",
          },
        },
        {
          id: "python-errors",
          title: "Debugging and exceptions",
          summary: "Use errors as clues and handle expected failure cases.",
          content: [
            "Read a traceback from the bottom upward to find the exception type and the line where it occurred. Reproduce the smallest failing case before changing code.",
            "Use try/except around operations that can reasonably fail, such as converting user input. Catch the specific exception you expect and give the user a useful next step.",
          ],
          example: 'text = input("Whole number: ")\ntry:\n    value = int(text)\nexcept ValueError:\n    print("Please enter digits, like 42.")',
          quest: {
            prompt: "Which exception is raised when int('hello') cannot parse the text?",
            choices: ["IndexError", "ValueError", "KeyError"],
            answer: 1,
            explanation:
              "ValueError means a value has the right general kind for an operation but is not acceptable, such as non-digit text passed to int().",
          },
        },
      ],
      checkpoint:
        "Try it: write a function that accepts a list, returns a useful summary, and handles an empty list deliberately.",
    },
    {
      id: "python-modules-testing",
      title: "Build reliable programs",
      level: "Intermediate",
      description:
        "Split programs into modules, write tests, and process files safely.",
      outcomes: [
        "Separate responsibilities into functions and modules.",
        "Write small assertions for expected behavior.",
        "Read and write text files using a context manager.",
      ],
      lessons: [
        {
          id: "python-modules",
          title: "Modules and imports",
          summary: "Modules help divide a program into reusable files and tools.",
          content: [
            "A Python file can be imported as a module. Import only the names your code needs, and use the standard library before reaching for an external package.",
            "Keep executable startup behavior behind an if __name__ == '__main__' guard. That lets the file be imported for testing without automatically starting the program.",
          ],
          example: 'import math\n\ndef circle_area(radius):\n    return math.pi * radius ** 2\n\nif __name__ == "__main__":\n    print(circle_area(2))',
          quest: {
            prompt: "Why use the __main__ guard?",
            choices: [
              "To prevent the module from being imported",
              "To run startup code only when the file is run directly",
              "To automatically install imported packages",
            ],
            answer: 1,
            explanation:
              "The guard distinguishes direct execution from importing, which supports reuse and testing.",
          },
        },
        {
          id: "python-testing",
          title: "Test behavior with small checks",
          summary: "Tests make expected behavior repeatable and safer to change.",
          content: [
            "Start with small examples that describe the behavior you expect. Include a normal case, an edge case, and an invalid case where appropriate.",
            "Assertions are a useful first step for learning. Larger projects use a test framework to discover tests, report failures, and organize setup.",
          ],
          example: 'def clamp(value, lower, upper):\n    return max(lower, min(value, upper))\n\nassert clamp(5, 0, 10) == 5\nassert clamp(-2, 0, 10) == 0',
          quest: {
            prompt: "What does a failing assertion tell you?",
            choices: [
              "The actual result did not match the expected condition",
              "Python has permanently changed the function",
              "The program has no syntax",
            ],
            answer: 0,
            explanation:
              "An assertion reports that a condition was false, giving you a focused signal that behavior differs from expectation.",
          },
        },
        {
          id: "python-files",
          title: "Work with text files",
          summary: "Context managers reliably close files after use.",
          content: [
            "Use open() with an explicit mode and encoding when working with text. The with statement closes the file even when an error happens inside the block.",
            "Choose read, write, or append mode deliberately. Writing replaces existing file content, while append adds to the end.",
          ],
          example: 'with open("notes.txt", "r", encoding="utf-8") as file:\n    for line in file:\n        print(line.rstrip())',
          quest: {
            prompt: "What is a benefit of opening a file with with?",
            choices: [
              "It keeps the file open forever",
              "It closes the file when the block ends",
              "It converts every file to JSON",
            ],
            answer: 1,
            explanation:
              "A context manager handles cleanup and closes the file when execution leaves the with block.",
          },
        },
      ],
      checkpoint:
        "Try it: make a tiny module with one reusable function and add at least two expected-result checks.",
    },
    {
      id: "python-objects-data",
      title: "Model richer data",
      level: "Intermediate",
      description:
        "Use comprehensions, classes, and clear object boundaries to represent a problem.",
      outcomes: [
        "Transform collections with comprehensions.",
        "Create simple classes with state and behavior.",
        "Choose an appropriate representation for a real-world concept.",
      ],
      lessons: [
        {
          id: "python-comprehensions",
          title: "Transform data with comprehensions",
          summary: "Comprehensions create a collection from a readable expression.",
          content: [
            "A list comprehension combines a value expression with a for clause, and can include a condition. It is concise when the transformation is straightforward.",
            "Prefer a regular loop when it makes multi-step logic easier to understand. Readability matters more than fitting code on one line.",
          ],
          example: 'numbers = [1, 2, 3, 4]\nsquares = [number * number for number in numbers]\nevens = [number for number in numbers if number % 2 == 0]',
          quest: {
            prompt: "What does the condition at the end of the evens comprehension do?",
            choices: [
              "Keeps only numbers divisible by 2",
              "Squares every number",
              "Sorts the list descending",
            ],
            answer: 0,
            explanation:
              "The if clause filters the source values, so only even numbers are included.",
          },
        },
        {
          id: "python-classes",
          title: "Classes and instances",
          summary: "A class describes a kind of object and the behavior it offers.",
          content: [
            "A class groups data and functions that belong together. __init__ initializes a new instance, and self refers to that particular object.",
            "Use objects when they clarify a domain concept and its behavior. Simple values and functions are often a better fit for small transformations.",
          ],
          example: 'class Counter:\n    def __init__(self):\n        self.value = 0\n\n    def increment(self):\n        self.value += 1\n\ncounter = Counter()\ncounter.increment()',
          quest: {
            prompt: "In an instance method, what does self refer to?",
            choices: [
              "The current object instance",
              "The Python interpreter",
              "The class's source file",
            ],
            answer: 0,
            explanation:
              "Python passes the instance as the first argument of an instance method, conventionally named self.",
          },
        },
        {
          id: "python-collections-choice",
          title: "Choose data structures",
          summary: "The right structure makes common operations clearer.",
          content: [
            "Use lists for ordered sequences, dictionaries for key-based lookup, and sets for unique membership. A tuple can represent a fixed group of values.",
            "Think about what the program does most often: look up by key, preserve order, remove duplicates, or update values. Let those operations guide your choice.",
          ],
          example: 'user_ids = {18, 24, 31}\nsettings = {"theme": "dark", "volume": 5}\npoint = (4, 7)\nprint(24 in user_ids)',
          quest: {
            prompt: "Which collection best answers repeated 'is this item present?' checks with unique values?",
            choices: ["set", "list of duplicate records", "string"],
            answer: 0,
            explanation:
              "A set represents unique membership directly and is designed for efficient membership checks.",
          },
        },
      ],
      checkpoint:
        "Try it: model one concept from your daily life with a class, then explain why a dictionary or list stores the surrounding records.",
    },
    {
      id: "python-algorithms-capstone",
      title: "Think in algorithms",
      level: "Advanced",
      description:
        "Analyze cost, use iteration patterns, and combine your skills into a maintainable project.",
      outcomes: [
        "Explain why input size affects algorithm performance.",
        "Use generators to process values lazily.",
        "Break a larger program into testable, understandable parts.",
      ],
      lessons: [
        {
          id: "python-complexity",
          title: "Reason about algorithm cost",
          summary: "Complexity describes how resource use grows as input grows.",
          content: [
            "Big O notation describes a growth trend rather than exact run time. A single pass through n values is O(n); a nested pass over the same values is often O(n squared).",
            "Choose a clear solution first, measure realistic workloads, and optimize the actual bottleneck. Data structure choices can change the cost of common operations.",
          ],
          example: 'def contains_value(values, target):\n    for value in values:\n        if value == target:\n            return True\n    return False',
          quest: {
            prompt: "In the worst case, how many items may a linear search inspect in a list of n items?",
            choices: ["One", "About n", "Always n squared"],
            answer: 1,
            explanation:
              "A linear search may inspect every item once, so its work grows proportionally to n.",
          },
        },
        {
          id: "python-generators",
          title: "Iterators and generators",
          summary: "Generators produce values as needed instead of building them all at once.",
          content: [
            "A generator function uses yield to produce one value and pause. Iteration resumes it for the next value, which can avoid storing a large result collection in memory.",
            "Generators are useful for streams and pipelines. They are usually consumed once, so create a new generator when you need to repeat the traversal.",
          ],
          example: 'def countdown(start):\n    while start > 0:\n        yield start\n        start -= 1\n\nfor number in countdown(3):\n    print(number)',
          quest: {
            prompt: "What does yield do in a generator?",
            choices: [
              "Produces a value and suspends the function for later",
              "Deletes the current function",
              "Sorts all remaining values",
            ],
            answer: 0,
            explanation:
              "yield returns a value to the iterator consumer while preserving enough state to continue later.",
          },
        },
        {
          id: "python-capstone-design",
          title: "Plan, build, and refine",
          summary: "A reliable project grows from a small working version.",
          content: [
            "Write down the user, the problem, and the smallest useful behavior. Separate input, rules, and output so each part can be understood and tested.",
            "Add one feature at a time, keep tests near important rules, and use version control to make changes reviewable. A clear README helps another person run the project.",
          ],
          example: 'def summarize_reading(minutes_by_day):\n    total = sum(minutes_by_day)\n    days = len(minutes_by_day)\n    average = total / days if days else 0\n    return {"total": total, "average": average}',
          quest: {
            prompt: "What is the strongest first step for a project that feels too large?",
            choices: [
              "Add every feature before testing",
              "Define a small useful version and split it into parts",
              "Put all logic in one long function",
            ],
            answer: 1,
            explanation:
              "A small defined version makes progress observable and provides a stable base for carefully adding features.",
          },
        },
      ],
      checkpoint:
        "Review your final project against its brief, tests, error handling, and instructions before calling it done.",
    },
  ],
  capstone: {
    title: "Python capstone: Personal learning tracker",
    brief:
      "Build a small program that records learning sessions, summarizes time by topic, and helps a learner choose a next step. Start with an in-memory version; add file storage only after the core rules work.",
    milestones: [
      "Define a session record and the minimum fields it needs.",
      "Add functions to record sessions and calculate totals or averages.",
      "Validate user input and handle empty or invalid data.",
      "Write tests for normal cases and edge cases.",
      "Save or load data from a text file and document how to use the program.",
    ],
  },
};

const cCourse: CourseConfig = {
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

export const courses: CourseConfig[] = [pythonCourse, cCourse];

export function getCourse(slug: string): CourseConfig | undefined {
  return courses.find((course) => course.slug === slug);
}
