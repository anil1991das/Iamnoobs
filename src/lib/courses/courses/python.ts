import type { CourseConfig } from "../types";

export const pythonCourse: CourseConfig = {
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

export default pythonCourse;
