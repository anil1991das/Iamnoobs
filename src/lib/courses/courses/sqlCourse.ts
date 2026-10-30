import type { CourseConfig } from "../types";

export const sqlCourse: CourseConfig = {
  "slug": "sql",
  "language": "SQL",
  "title": "Learn SQL: Beginner to Advanced",
  "icon": "🗄️",
  "levelLabel": "Beginner to advanced",
  "description": "Learn relational databases and SQL through structured lessons, practical queries, quizzes, checkpoints, and a database capstone.",
  "metaDescription": "Learn SQL from the ground up: relational database concepts, table design, SELECT, filtering, joins, aggregation, subqueries, transactions, window functions, indexes, and database security.",
  "audience": "Beginners, students, analysts, and developers who want to query, design, and manage relational databases.",
  "prerequisites": "No prior SQL experience is required. Basic computer literacy is helpful. Examples use broadly familiar SQL with dialect differences noted where relevant.",
  "modules": [
    {
      "id": "sql-foundations",
      "title": "Meet SQL and relational databases",
      "level": "Beginner",
      "description": "Understand what databases store, how relational tables are organized, and how SQL statements work.",
      "outcomes": [
        "Explain the role of a database and a relational database management system.",
        "Identify tables, rows, columns, and keys.",
        "Recognize the main categories of SQL statements."
      ],
      "lessons": [
        {
          "id": "sql-database-basics",
          "title": "Databases and database systems",
          "summary": "A database stores organized data so applications can retrieve and update it reliably.",
          "content": [
            "A database is an organized collection of information. A database management system (DBMS) provides facilities to define, query, protect, and maintain that information.",
            "A relational database represents data in tables and uses relationships between tables. PostgreSQL, MySQL, SQLite, SQL Server, and Oracle are examples of relational database systems; their SQL dialects have differences."
          ],
          "example": "-- A query asks the database for information\nSELECT 'Hello, SQL!' AS message;",
          "quest": {
            "prompt": "Which component is responsible for managing stored data and executing SQL statements?",
            "choices": [
              "The database management system",
              "The SELECT keyword",
              "A spreadsheet cell"
            ],
            "answer": 0,
            "explanation": "The DBMS stores and manages the database and processes SQL statements. SELECT is only one SQL command."
          }
        },
        {
          "id": "sql-relational-model",
          "title": "Tables, rows, and columns",
          "summary": "A relational table organizes records into rows and attributes into columns.",
          "content": [
            "A table describes one kind of entity or relationship, such as customers or orders. Each row represents one record, while each column represents an attribute with a defined data type.",
            "A well-designed table has a clear purpose and consistent meaning for each column. Avoid storing several unrelated values in one field when they need to be queried independently."
          ],
          "example": "-- Example shape of a customers table\n-- customer_id | full_name     | city\n-- 1           | Asha Rao      | Bengaluru\n-- 2           | Ravi Kumar    | Mysuru\n\nSELECT customer_id, full_name, city\nFROM customers;",
          "quest": {
            "prompt": "In a relational table, what does one row normally represent?",
            "choices": [
              "One record",
              "One column definition",
              "The entire database"
            ],
            "answer": 0,
            "explanation": "Each row represents one record, such as one customer. Columns describe the attributes recorded for every row."
          }
        },
        {
          "id": "sql-sql-command-families",
          "title": "SQL statement families",
          "summary": "SQL includes commands for defining structures, changing data, querying data, and managing access or transactions.",
          "content": [
            "Data definition language (DDL) includes statements such as CREATE, ALTER, and DROP. Data manipulation language (DML) includes INSERT, UPDATE, and DELETE; SELECT is used to query data.",
            "Transaction control statements include COMMIT and ROLLBACK. Permission statements such as GRANT and REVOKE are often grouped as data control language (DCL). Exact classifications can vary slightly between learning materials and database products."
          ],
          "example": "CREATE TABLE departments (\n    department_id INTEGER PRIMARY KEY,\n    department_name VARCHAR(80) NOT NULL\n);\n\nINSERT INTO departments (department_id, department_name)\nVALUES (10, 'Engineering');\n\nSELECT department_name FROM departments;",
          "quest": {
            "prompt": "Which statement is commonly used to add a new row to a table?",
            "choices": [
              "INSERT",
              "ALTER",
              "COMMIT"
            ],
            "answer": 0,
            "explanation": "INSERT adds rows. ALTER changes a database object's definition, while COMMIT completes a transaction."
          }
        }
      ],
      "checkpoint": "Sketch a small relational database for a library. Name two tables, list several columns for each, and identify a value that could uniquely identify each row."
    },
    {
      "id": "sql-schema-and-types",
      "title": "Design tables and choose data types",
      "level": "Beginner",
      "description": "Create table structures and use data types, primary keys, foreign keys, and constraints to protect data quality.",
      "outcomes": [
        "Create and alter tables using DDL.",
        "Choose suitable types for common values.",
        "Define primary keys, foreign keys, and basic constraints."
      ],
      "lessons": [
        {
          "id": "sql-create-table",
          "title": "Create and change tables",
          "summary": "CREATE TABLE defines a table, while ALTER TABLE changes its structure.",
          "content": [
            "A table definition specifies column names, data types, and constraints. Choose names that communicate meaning and use consistent naming conventions across a project.",
            "ALTER TABLE can add, change, or remove columns and constraints, depending on the database system. Schema changes on a populated production database should be planned because they can affect existing data and applications."
          ],
          "example": "CREATE TABLE products (\n    product_id INTEGER,\n    product_name VARCHAR(120),\n    price DECIMAL(10, 2)\n);\n\nALTER TABLE products\nADD COLUMN is_active BOOLEAN DEFAULT TRUE;",
          "quest": {
            "prompt": "Which SQL statement creates a new table?",
            "choices": [
              "CREATE TABLE",
              "INSERT INTO",
              "UPDATE TABLE"
            ],
            "answer": 0,
            "explanation": "CREATE TABLE defines a new table. INSERT INTO adds rows to an existing table."
          }
        },
        {
          "id": "sql-data-types",
          "title": "Common SQL data types",
          "summary": "A column's data type controls which kinds of values it can store.",
          "content": [
            "Common types include INTEGER for whole numbers, DECIMAL for exact decimal values, VARCHAR for variable-length text, DATE for calendar dates, TIMESTAMP for date and time, and BOOLEAN for true-or-false values where supported.",
            "Use DECIMAL rather than floating-point types for values such as currency where exact decimal arithmetic is important. Available types and details such as timestamp time-zone behavior vary by database dialect."
          ],
          "example": "CREATE TABLE invoices (\n    invoice_id INTEGER,\n    amount DECIMAL(12, 2),\n    issued_on DATE,\n    paid BOOLEAN\n);",
          "quest": {
            "prompt": "Which type is generally most appropriate for storing an exact monetary amount?",
            "choices": [
              "DECIMAL(12, 2)",
              "BOOLEAN",
              "DATE"
            ],
            "answer": 0,
            "explanation": "DECIMAL stores fixed-precision decimal values and is commonly used for monetary amounts."
          }
        },
        {
          "id": "sql-keys-and-constraints",
          "title": "Keys and integrity constraints",
          "summary": "Keys identify rows and connect tables; constraints enforce rules on stored data.",
          "content": [
            "A PRIMARY KEY uniquely identifies each row and cannot contain NULL. A FOREIGN KEY references a candidate key in another table and helps enforce valid relationships.",
            "NOT NULL requires a value, UNIQUE prevents duplicate values in the constrained key, and CHECK enforces a condition. DEFAULT supplies a value when an INSERT omits that column; it does not replace validation rules."
          ],
          "example": "CREATE TABLE customers (\n    customer_id INTEGER PRIMARY KEY,\n    email VARCHAR(200) UNIQUE NOT NULL,\n    age INTEGER CHECK (age >= 0)\n);\n\nCREATE TABLE orders (\n    order_id INTEGER PRIMARY KEY,\n    customer_id INTEGER NOT NULL,\n    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)\n);",
          "quest": {
            "prompt": "Which constraint establishes a reference from one table to another?",
            "choices": [
              "FOREIGN KEY",
              "CHECK",
              "DEFAULT"
            ],
            "answer": 0,
            "explanation": "A FOREIGN KEY links a column or group of columns to a key in another table."
          }
        }
      ],
      "checkpoint": "Create customers and orders tables. Give each a primary key, connect orders to customers with a foreign key, and add at least one NOT NULL and one CHECK constraint."
    },
    {
      "id": "sql-select-basics",
      "title": "Retrieve data with SELECT",
      "level": "Beginner",
      "description": "Read records from one or more columns and shape result sets with aliases, expressions, and DISTINCT.",
      "outcomes": [
        "Write SELECT queries with FROM.",
        "Use aliases and calculated expressions.",
        "Remove duplicate result rows with DISTINCT when appropriate."
      ],
      "lessons": [
        {
          "id": "sql-select-columns",
          "title": "Select columns and rows",
          "summary": "SELECT retrieves data from a table or other queryable source.",
          "content": [
            "A basic query names the columns to return and the table to read. Listing the required columns makes the result easier to understand and can avoid retrieving unnecessary data.",
            "SELECT * returns every column, which can be convenient while exploring but is usually less clear and less stable for application queries. A query does not promise row order unless ORDER BY is present."
          ],
          "example": "SELECT product_id, product_name, price\nFROM products;",
          "quest": {
            "prompt": "Which clause identifies the table being queried?",
            "choices": [
              "FROM",
              "VALUES",
              "SET"
            ],
            "answer": 0,
            "explanation": "FROM specifies the source table or query for the SELECT statement."
          }
        },
        {
          "id": "sql-select-aliases",
          "title": "Column aliases and expressions",
          "summary": "Aliases give result columns readable names, and expressions can calculate values in a query.",
          "content": [
            "Use AS to assign an alias to a selected expression. Aliases affect the result's column label; they do not rename the stored table column.",
            "Arithmetic and supported scalar functions can derive values without changing stored data. An expression such as quantity * unit_price can calculate a line total at query time."
          ],
          "example": "SELECT\n    product_name AS name,\n    price,\n    price * 1.18 AS price_with_tax\nFROM products;",
          "quest": {
            "prompt": "What does the alias `price_with_tax` change?",
            "choices": [
              "The output column label for that expression",
              "The stored price column in the table",
              "The table's primary key"
            ],
            "answer": 0,
            "explanation": "An alias names a column in the query result. It does not update the underlying table data."
          }
        },
        {
          "id": "sql-distinct",
          "title": "Remove duplicate results with DISTINCT",
          "summary": "DISTINCT removes duplicate result rows from the selected columns.",
          "content": [
            "When a query selects one column, DISTINCT returns each distinct value once. With multiple selected columns, uniqueness applies to the combination of all selected values.",
            "DISTINCT can be useful for finding categories or unique combinations, but it may require extra work for the database. It should not be used to hide an incorrect join or an unclear data model."
          ],
          "example": "SELECT DISTINCT city\nFROM customers;\n\nSELECT DISTINCT city, country\nFROM customers;",
          "quest": {
            "prompt": "For a query selecting city and country, what does DISTINCT compare?",
            "choices": [
              "The pair of city and country values",
              "Only the city value",
              "Only the first row"
            ],
            "answer": 0,
            "explanation": "DISTINCT applies to the complete selected row, so it removes duplicate city-country combinations."
          }
        }
      ],
      "checkpoint": "Write three SELECT queries against a products table: one selecting named columns, one creating a calculated expression with an alias, and one listing distinct categories."
    },
    {
      "id": "sql-filtering",
      "title": "Filter records with WHERE",
      "level": "Beginner",
      "description": "Control which rows appear by applying comparisons, logical operators, ranges, patterns, and membership tests.",
      "outcomes": [
        "Filter rows using comparison operators.",
        "Combine conditions with AND, OR, and NOT.",
        "Use IN, BETWEEN, LIKE, and NULL predicates correctly."
      ],
      "lessons": [
        {
          "id": "sql-where-comparisons",
          "title": "Comparison operators and WHERE",
          "summary": "WHERE keeps only rows for which its condition evaluates to true.",
          "content": [
            "Comparison operators include =, <>, <, <=, >, and >=. SQL uses three-valued logic: a condition involving NULL can evaluate to UNKNOWN, which WHERE does not treat as true.",
            "Text comparisons and case sensitivity depend on the database's collation and data type rules. Use the correct data type for the values being compared."
          ],
          "example": "SELECT product_name, price\nFROM products\nWHERE price >= 500;",
          "quest": {
            "prompt": "Which operator means 'not equal' in standard SQL?",
            "choices": [
              "<>",
              "=>",
              "!="
            ],
            "answer": 0,
            "explanation": "The SQL standard uses <> for not equal. Some systems also accept != as an extension."
          }
        },
        {
          "id": "sql-logical-operators",
          "title": "Combine conditions with AND, OR, and NOT",
          "summary": "Logical operators combine predicates to express more specific filters.",
          "content": [
            "AND requires both conditions to be true. OR requires at least one condition to be true, and NOT negates a condition.",
            "Use parentheses when mixing AND and OR so the intended grouping is explicit. SQL evaluates AND before OR in the usual operator precedence, which can surprise readers when parentheses are omitted."
          ],
          "example": "SELECT product_name, category, price\nFROM products\nWHERE (category = 'Books' OR category = 'Games')\n  AND price < 1000;",
          "quest": {
            "prompt": "Which operator requires both combined conditions to be true?",
            "choices": [
              "AND",
              "OR",
              "NOT"
            ],
            "answer": 0,
            "explanation": "AND is true only when both of its predicates are true."
          }
        },
        {
          "id": "sql-patterns-and-null",
          "title": "IN, BETWEEN, LIKE, and NULL",
          "summary": "SQL predicates provide concise ways to test membership, ranges, patterns, and missing values.",
          "content": [
            "IN checks whether a value matches one of a list of values. BETWEEN tests an inclusive range. LIKE matches text patterns, where % represents any sequence and _ represents one character.",
            "NULL represents missing or unknown information. Test it with IS NULL or IS NOT NULL, not = NULL, because ordinary equality comparisons with NULL evaluate to UNKNOWN."
          ],
          "example": "SELECT customer_id, full_name\nFROM customers\nWHERE city IN ('Bengaluru', 'Mysuru')\n  AND email IS NOT NULL\n  AND full_name LIKE 'A%';",
          "quest": {
            "prompt": "How should a query test whether a column has no value (NULL)?",
            "choices": [
              "column_name IS NULL",
              "column_name = NULL",
              "column_name == NULL"
            ],
            "answer": 0,
            "explanation": "IS NULL is the correct predicate for checking NULL. Equality does not work because NULL represents an unknown value."
          }
        }
      ],
      "checkpoint": "Create filters for products in two selected categories, products within a price range, names beginning with a chosen letter, and rows where an optional column is NULL."
    },
    {
      "id": "sql-ordering-limits",
      "title": "Sort, paginate, and handle NULL values",
      "level": "Beginner",
      "description": "Order query results predictably and return manageable subsets for reports and application screens.",
      "outcomes": [
        "Sort by one or more columns.",
        "Limit and offset result rows using dialect-appropriate syntax.",
        "Understand stable ordering and NULL sort behavior."
      ],
      "lessons": [
        {
          "id": "sql-order-by",
          "title": "Sort results with ORDER BY",
          "summary": "ORDER BY controls the order of rows returned by a query.",
          "content": [
            "ORDER BY can sort by one or more expressions. ASC means ascending order and is the default in many systems; DESC means descending order.",
            "When rows share the same sort value, their relative order is not guaranteed unless additional tie-breaker columns are specified. Include a unique key when stable ordering matters."
          ],
          "example": "SELECT product_name, price\nFROM products\nORDER BY price DESC, product_name ASC;",
          "quest": {
            "prompt": "Which keyword requests descending order?",
            "choices": [
              "DESC",
              "DOWN",
              "REVERSE"
            ],
            "answer": 0,
            "explanation": "DESC sorts values from higher to lower (or reverse natural order for the data type)."
          }
        },
        {
          "id": "sql-limit-pagination",
          "title": "Limit results and paginate",
          "summary": "Pagination divides a large ordered result into smaller sections.",
          "content": [
            "Many databases support LIMIT and OFFSET, while others use syntax such as OFFSET ... FETCH or TOP. Check the target database's documentation before relying on a particular form.",
            "Pagination should use a deterministic ORDER BY. Large offsets can become expensive because a database may still need to find and skip many rows; keyset pagination is an alternative for some application designs."
          ],
          "example": "-- Common PostgreSQL, MySQL, and SQLite style\nSELECT order_id, created_at\nFROM orders\nORDER BY created_at DESC, order_id DESC\nLIMIT 20 OFFSET 40;",
          "quest": {
            "prompt": "Why should paginated queries use a predictable ORDER BY?",
            "choices": [
              "To keep page boundaries consistent when data is unchanged",
              "To automatically create an index",
              "To remove duplicate rows"
            ],
            "answer": 0,
            "explanation": "A stable ordering prevents rows from appearing on arbitrary pages when the underlying data has not changed."
          }
        },
        {
          "id": "sql-null-sort-order",
          "title": "Sort NULL values and use safe result ordering",
          "summary": "NULL sort placement and ordering expressions can vary across database systems.",
          "content": [
            "Some database systems allow NULLS FIRST or NULLS LAST in ORDER BY; others use different defaults or syntax. Do not assume every dialect sorts NULL values identically.",
            "A CASE expression can define a portable sort priority. For repeatable application output, combine the desired sort expression with a unique tie-breaker."
          ],
          "example": "SELECT customer_id, email\nFROM customers\nORDER BY\n    CASE WHEN email IS NULL THEN 1 ELSE 0 END,\n    email ASC,\n    customer_id ASC;",
          "quest": {
            "prompt": "What is a reliable way to make NULL sort placement explicit across dialects?",
            "choices": [
              "Use a CASE expression in ORDER BY",
              "Assume NULL always sorts first",
              "Remove ORDER BY"
            ],
            "answer": 0,
            "explanation": "A CASE expression explicitly assigns a sort priority and avoids relying on a database's default NULL ordering."
          }
        }
      ],
      "checkpoint": "Build a product listing query sorted by price and name. Return a page of 10 records and ensure the ordering includes a unique tie-breaker."
    },
    {
      "id": "sql-aggregation",
      "title": "Summarize data with aggregate functions",
      "level": "Intermediate",
      "description": "Calculate counts, totals, averages, minimums, and maximums, then group and filter summarized results.",
      "outcomes": [
        "Use COUNT, SUM, AVG, MIN, and MAX.",
        "Group rows using GROUP BY.",
        "Filter grouped results using HAVING."
      ],
      "lessons": [
        {
          "id": "sql-aggregate-functions",
          "title": "COUNT, SUM, AVG, MIN, and MAX",
          "summary": "Aggregate functions calculate one summary value from a set of rows.",
          "content": [
            "COUNT(*) counts rows, while COUNT(column) counts non-NULL values in that column. SUM and AVG calculate totals and averages; MIN and MAX return the smallest and largest non-NULL values.",
            "Most aggregate functions ignore NULL inputs. Understand whether missing values should be excluded, counted separately, or handled through an explicit expression."
          ],
          "example": "SELECT\n    COUNT(*) AS order_count,\n    SUM(total_amount) AS revenue,\n    AVG(total_amount) AS average_order,\n    MIN(total_amount) AS smallest_order,\n    MAX(total_amount) AS largest_order\nFROM orders;",
          "quest": {
            "prompt": "What does COUNT(column_name) count?",
            "choices": [
              "Non-NULL values in that column",
              "Every row including NULL values",
              "Only distinct values automatically"
            ],
            "answer": 0,
            "explanation": "COUNT(column) ignores NULL values. COUNT(*) counts rows regardless of whether individual columns contain NULL."
          }
        },
        {
          "id": "sql-group-by",
          "title": "Group rows with GROUP BY",
          "summary": "GROUP BY forms groups of rows that share the same grouping values.",
          "content": [
            "Use GROUP BY to calculate a summary for each category, customer, month, or other grouping key. Selected non-aggregate expressions generally need to be included in the grouping columns, subject to dialect-specific functional dependency rules.",
            "The grouping level determines what each result row means. Grouping by customer and month produces one summary per customer-month pair, not one summary per customer."
          ],
          "example": "SELECT customer_id, COUNT(*) AS order_count\nFROM orders\nGROUP BY customer_id;",
          "quest": {
            "prompt": "What does this query return one row for?",
            "choices": [
              "Each customer_id that appears in orders",
              "Every order separately",
              "The entire database"
            ],
            "answer": 0,
            "explanation": "GROUP BY customer_id creates one group per customer ID, and the query returns a count for each group."
          }
        },
        {
          "id": "sql-having",
          "title": "Filter groups with HAVING",
          "summary": "HAVING filters groups after grouping and aggregate calculations.",
          "content": [
            "WHERE filters input rows before grouping. HAVING filters the resulting groups, often using aggregate expressions such as COUNT(*) or SUM(amount).",
            "A query can use both WHERE and HAVING: first limit the rows considered, then retain only groups that satisfy the summary condition."
          ],
          "example": "SELECT customer_id, SUM(total_amount) AS total_spent\nFROM orders\nWHERE status = 'completed'\nGROUP BY customer_id\nHAVING SUM(total_amount) > 5000;",
          "quest": {
            "prompt": "Which clause filters groups using aggregate results?",
            "choices": [
              "HAVING",
              "WHERE",
              "FROM"
            ],
            "answer": 0,
            "explanation": "HAVING filters grouped results. WHERE filters rows before grouping."
          }
        }
      ],
      "checkpoint": "Report each customer's completed order count and total spending. Use WHERE for completed orders and HAVING to keep customers whose total spending exceeds a chosen threshold."
    },
    {
      "id": "sql-joins",
      "title": "Combine data with JOINs",
      "level": "Intermediate",
      "description": "Retrieve related information from multiple tables using inner, outer, cross, and self joins.",
      "outcomes": [
        "Explain why tables are joined through related keys.",
        "Use INNER JOIN and LEFT JOIN correctly.",
        "Recognize RIGHT, FULL, CROSS, and self joins."
      ],
      "lessons": [
        {
          "id": "sql-inner-join",
          "title": "INNER JOIN related tables",
          "summary": "INNER JOIN returns rows where the join condition matches in both inputs.",
          "content": [
            "A join combines rows from tables using a condition, commonly a foreign key and its referenced primary key. Use qualified column names when multiple tables contain columns with the same name.",
            "A join can produce more rows than either input when one row matches multiple rows on the other side. Understand the relationship's cardinality before interpreting totals."
          ],
          "example": "SELECT o.order_id, c.full_name, o.total_amount\nFROM orders AS o\nINNER JOIN customers AS c\n    ON c.customer_id = o.customer_id;",
          "quest": {
            "prompt": "Which rows does INNER JOIN retain?",
            "choices": [
              "Rows with a match in both joined inputs",
              "Every row from the left input",
              "Only rows containing NULL"
            ],
            "answer": 0,
            "explanation": "INNER JOIN returns combinations that satisfy the join condition; unmatched rows are omitted."
          }
        },
        {
          "id": "sql-left-join",
          "title": "LEFT JOIN and unmatched records",
          "summary": "LEFT JOIN preserves every row from the left input and supplies NULLs for unmatched right-side columns.",
          "content": [
            "LEFT JOIN is useful when you need every customer even when some customers have no orders. Conditions on the optional right-side table placed in WHERE can remove NULL-extended rows and unintentionally make the result behave like an inner join.",
            "A common pattern is to put matching restrictions in the ON clause when unmatched left rows must remain in the output. COUNT(right_table.key) can count matches because the key is NULL for unmatched rows."
          ],
          "example": "SELECT c.customer_id, c.full_name, COUNT(o.order_id) AS order_count\nFROM customers AS c\nLEFT JOIN orders AS o\n    ON o.customer_id = c.customer_id\nGROUP BY c.customer_id, c.full_name;",
          "quest": {
            "prompt": "Which join keeps every row from the left table, even without a match?",
            "choices": [
              "LEFT JOIN",
              "INNER JOIN",
              "CROSS JOIN"
            ],
            "answer": 0,
            "explanation": "LEFT JOIN retains every left-side row and fills right-side columns with NULL when no match exists."
          }
        },
        {
          "id": "sql-other-joins",
          "title": "RIGHT, FULL, CROSS, and self joins",
          "summary": "Different join types express different matching and row-preservation requirements.",
          "content": [
            "RIGHT JOIN preserves unmatched rows from the right input, while FULL OUTER JOIN preserves unmatched rows from both inputs where supported. CROSS JOIN forms every possible pair of rows.",
            "A self join joins a table to itself using aliases, for example to connect employees with their managers. Database support and syntax for some join types vary."
          ],
          "example": "SELECT e.full_name AS employee, m.full_name AS manager\nFROM employees AS e\nLEFT JOIN employees AS m\n    ON m.employee_id = e.manager_id;",
          "quest": {
            "prompt": "What is a self join?",
            "choices": [
              "Joining a table to itself using aliases",
              "Joining every row to every database table",
              "Joining without a condition in every case"
            ],
            "answer": 0,
            "explanation": "A self join uses the same table as both inputs, usually with different aliases to represent separate roles."
          }
        }
      ],
      "checkpoint": "Create a report that lists every customer and their orders, including customers with no orders. Then create a second report that lists only customers with matching orders."
    },
    {
      "id": "sql-subqueries-sets",
      "title": "Use subqueries and set operations",
      "level": "Intermediate",
      "description": "Build queries inside queries and combine compatible result sets to express more complex data requirements.",
      "outcomes": [
        "Write scalar, multi-row, and correlated subqueries.",
        "Use EXISTS and IN for existence or membership checks.",
        "Combine query results with UNION, INTERSECT, and EXCEPT where supported."
      ],
      "lessons": [
        {
          "id": "sql-subquery-basics",
          "title": "Scalar and multi-row subqueries",
          "summary": "A subquery is a SELECT statement nested inside another SQL statement.",
          "content": [
            "A scalar subquery returns one value and can be used where a single value is expected. A subquery used with IN can return a list of values; a derived table in FROM must be given an alias in many SQL dialects.",
            "A scalar subquery that returns more than one row is an error in systems that require a single value. Ensure its query is guaranteed to return at most one row or use a suitable multi-row operator."
          ],
          "example": "SELECT product_name, price\nFROM products\nWHERE price > (\n    SELECT AVG(price)\n    FROM products\n);",
          "quest": {
            "prompt": "What must a scalar subquery return when used as a single value?",
            "choices": [
              "At most one row and one column",
              "Any number of columns",
              "A complete table definition"
            ],
            "answer": 0,
            "explanation": "A scalar subquery is used as a single value, so it must produce one column and no more than one row."
          }
        },
        {
          "id": "sql-exists-correlated",
          "title": "EXISTS and correlated subqueries",
          "summary": "EXISTS tests whether a subquery returns at least one row.",
          "content": [
            "EXISTS is often useful for finding records that have related records, while NOT EXISTS finds records without a matching related record. The database can often stop searching once it finds a qualifying row.",
            "A correlated subquery refers to a value from the outer query. Conceptually, its result depends on the current outer row, although the optimizer may transform the execution plan."
          ],
          "example": "SELECT c.customer_id, c.full_name\nFROM customers AS c\nWHERE EXISTS (\n    SELECT 1\n    FROM orders AS o\n    WHERE o.customer_id = c.customer_id\n);",
          "quest": {
            "prompt": "What does EXISTS test?",
            "choices": [
              "Whether the subquery returns at least one row",
              "Whether the subquery returns exactly one column named id",
              "Whether every value is unique"
            ],
            "answer": 0,
            "explanation": "EXISTS is true when the subquery produces at least one row; the selected values themselves are not important."
          }
        },
        {
          "id": "sql-set-operations",
          "title": "UNION and other set operations",
          "summary": "Set operations combine compatible result sets vertically.",
          "content": [
            "UNION combines rows and removes duplicates; UNION ALL retains duplicates and is often less expensive. INTERSECT returns rows present in both results, and EXCEPT returns rows from the first result that are absent from the second, where supported.",
            "The participating queries must return the same number of columns with compatible types in corresponding positions. ORDER BY generally applies to the combined result and belongs at the end."
          ],
          "example": "SELECT email FROM customers\nUNION\nSELECT email FROM newsletter_subscribers;",
          "quest": {
            "prompt": "Which operator combines results while keeping duplicates?",
            "choices": [
              "UNION ALL",
              "UNION",
              "INTERSECT"
            ],
            "answer": 0,
            "explanation": "UNION ALL retains duplicate rows, whereas UNION removes duplicates from the combined result."
          }
        }
      ],
      "checkpoint": "Find customers who have at least one order, customers who have no orders, and email addresses appearing in either of two source tables. Use EXISTS, NOT EXISTS, and UNION."
    },
    {
      "id": "sql-data-changes",
      "title": "Insert, update, and delete data",
      "level": "Intermediate",
      "description": "Change table contents safely using DML statements, multi-row operations, and dialect-aware upsert patterns.",
      "outcomes": [
        "Insert one or more records.",
        "Update selected rows with precise conditions.",
        "Delete records carefully and understand upsert concepts."
      ],
      "lessons": [
        {
          "id": "sql-insert",
          "title": "Insert rows with INSERT",
          "summary": "INSERT adds new records to a table.",
          "content": [
            "Name the target columns explicitly so the statement is resilient to table column-order changes. Values must be compatible with the target column types and satisfy constraints.",
            "A multi-row INSERT can add several records in one statement. Some systems support INSERT ... RETURNING or OUTPUT to return generated values; syntax varies by product."
          ],
          "example": "INSERT INTO products (product_id, product_name, price)\nVALUES\n    (101, 'Notebook', 75.00),\n    (102, 'Pen Set', 120.00);",
          "quest": {
            "prompt": "Why is it good practice to list target columns in an INSERT statement?",
            "choices": [
              "It makes the mapping explicit and avoids relying on column order",
              "It disables constraints",
              "It automatically sorts inserted rows"
            ],
            "answer": 0,
            "explanation": "Explicit column names make the statement clearer and safer if the table's column order changes."
          }
        },
        {
          "id": "sql-update",
          "title": "Update existing rows",
          "summary": "UPDATE changes values in rows that satisfy its WHERE condition.",
          "content": [
            "An UPDATE without a WHERE clause generally changes every row in the target table. Before running a critical update, use a SELECT with the same condition to inspect the intended target rows.",
            "You can update multiple columns in one statement. Constraints still apply, and a change can fail when it violates a key, check, or foreign-key rule."
          ],
          "example": "UPDATE products\nSET price = 89.00, is_active = TRUE\nWHERE product_id = 101;",
          "quest": {
            "prompt": "What is the risk of omitting WHERE from an UPDATE statement?",
            "choices": [
              "Every row in the table may be updated",
              "The statement becomes a SELECT",
              "The table is automatically deleted"
            ],
            "answer": 0,
            "explanation": "Without WHERE, UPDATE targets all rows in the table."
          }
        },
        {
          "id": "sql-delete-upsert",
          "title": "Delete rows and understand upserts",
          "summary": "DELETE removes rows, while an upsert inserts or updates according to a conflict rule.",
          "content": [
            "DELETE removes rows matching its WHERE condition. Omitting WHERE usually deletes every row but leaves the table definition in place; DROP TABLE removes the table object itself.",
            "An upsert handles a uniqueness conflict by updating or otherwise resolving the existing record. PostgreSQL uses ON CONFLICT, MySQL uses ON DUPLICATE KEY UPDATE, and other systems may use MERGE or other syntax."
          ],
          "example": "DELETE FROM orders\nWHERE order_id = 9001;\n\n-- PostgreSQL-style upsert\nINSERT INTO inventory (product_id, quantity)\nVALUES (101, 25)\nON CONFLICT (product_id)\nDO UPDATE SET quantity = EXCLUDED.quantity;",
          "quest": {
            "prompt": "What does DELETE without a WHERE clause usually do?",
            "choices": [
              "Removes all rows from the target table",
              "Removes only duplicate rows",
              "Drops the table definition"
            ],
            "answer": 0,
            "explanation": "DELETE without WHERE removes all rows, but it does not remove the table definition. DROP TABLE does that."
          }
        }
      ],
      "checkpoint": "Practice inserting several products, updating one selected product, and deleting one test row. Before each destructive statement, write a SELECT with the same WHERE condition to verify its target."
    },
    {
      "id": "sql-transactions",
      "title": "Manage transactions and data consistency",
      "level": "Intermediate",
      "description": "Use transaction boundaries to group related changes and understand isolation, locking, and failure recovery.",
      "outcomes": [
        "Explain the ACID transaction properties.",
        "Use BEGIN, COMMIT, and ROLLBACK where supported.",
        "Recognize isolation anomalies and the role of locks."
      ],
      "lessons": [
        {
          "id": "sql-acid",
          "title": "Understand ACID properties",
          "summary": "ACID describes important properties expected from reliable database transactions.",
          "content": [
            "Atomicity means a transaction's changes are treated as one unit; consistency means constraints and rules remain satisfied; isolation controls how concurrent transactions interact; durability means committed changes survive failures according to the system's guarantees.",
            "ACID does not mean every transaction is isolated from every other transaction in the strongest possible way. Isolation level controls which concurrent effects can be observed."
          ],
          "example": "-- Conceptual transaction: transfer 100 between accounts\nBEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE account_id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE account_id = 2;\nCOMMIT;",
          "quest": {
            "prompt": "Which ACID property means all changes in a transaction succeed or are rolled back as a unit?",
            "choices": [
              "Atomicity",
              "Durability",
              "Isolation"
            ],
            "answer": 0,
            "explanation": "Atomicity treats a transaction as an indivisible unit: it is committed as a whole or rolled back."
          }
        },
        {
          "id": "sql-commit-rollback",
          "title": "Commit and roll back changes",
          "summary": "COMMIT makes a transaction's changes permanent, while ROLLBACK cancels uncommitted changes.",
          "content": [
            "A transaction groups multiple statements so they can succeed or fail together. BEGIN or START TRANSACTION opens a transaction in systems that use explicit transaction control.",
            "Some systems and tools use autocommit by default, and DDL transaction behavior differs across products. Understand the connection's transaction mode before assuming a statement can be rolled back."
          ],
          "example": "BEGIN;\nUPDATE inventory\nSET quantity = quantity - 1\nWHERE product_id = 101;\n\n-- If validation fails:\nROLLBACK;\n\n-- Otherwise, use COMMIT instead.",
          "quest": {
            "prompt": "Which statement cancels uncommitted changes in the current transaction?",
            "choices": [
              "ROLLBACK",
              "COMMIT",
              "GRANT"
            ],
            "answer": 0,
            "explanation": "ROLLBACK discards the current transaction's uncommitted changes, subject to the database's transaction behavior."
          }
        },
        {
          "id": "sql-isolation-locking",
          "title": "Isolation levels and concurrent changes",
          "summary": "Isolation settings and locks help coordinate transactions that run at the same time.",
          "content": [
            "Concurrent transactions can encounter phenomena such as dirty reads, non-repeatable reads, and phantom rows. Database systems provide isolation levels with different guarantees and performance trade-offs.",
            "Locks coordinate access to data, but long-running transactions can block other work or create deadlocks. Keep transactions appropriately scoped and handle retryable errors where the application requires it."
          ],
          "example": "-- Isolation-level syntax varies by database\nSET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n\nBEGIN;\nSELECT balance\nFROM accounts\nWHERE account_id = 1;\nCOMMIT;",
          "quest": {
            "prompt": "What is a common risk of keeping a transaction open for too long?",
            "choices": [
              "It can hold locks and block other transactions",
              "It automatically removes indexes",
              "It converts every column to text"
            ],
            "answer": 0,
            "explanation": "Long transactions can hold locks or snapshots for extended periods and interfere with concurrent work."
          }
        }
      ],
      "checkpoint": "Write a transaction for a bank transfer between two accounts. Check that the source account has sufficient funds, update both balances, and commit only when every step succeeds."
    },
    {
      "id": "sql-advanced-queries",
      "title": "Use CTEs, views, and window functions",
      "level": "Advanced",
      "description": "Structure complex SQL with common table expressions, reusable views, and calculations across related rows.",
      "outcomes": [
        "Write non-recursive and recursive common table expressions.",
        "Create and query views.",
        "Use window functions with partitions and ordering."
      ],
      "lessons": [
        {
          "id": "sql-ctes",
          "title": "Common table expressions",
          "summary": "A CTE gives a named temporary result that can be referenced by the main statement.",
          "content": [
            "A WITH clause defines one or more common table expressions before the main SELECT, INSERT, UPDATE, or DELETE statement where supported. CTEs can make complex queries easier to read by separating stages.",
            "Recursive CTEs can process hierarchical or graph-like relationships by combining an anchor query with a recursive term. Syntax and recursion limits vary by database."
          ],
          "example": "WITH customer_totals AS (\n    SELECT customer_id, SUM(total_amount) AS total_spent\n    FROM orders\n    GROUP BY customer_id\n)\nSELECT customer_id, total_spent\nFROM customer_totals\nWHERE total_spent > 5000;",
          "quest": {
            "prompt": "What is the main purpose of a CTE?",
            "choices": [
              "Give a named result to a query expression",
              "Permanently create a new table in every case",
              "Encrypt the database"
            ],
            "answer": 0,
            "explanation": "A CTE names a query result for use within the statement, improving structure and readability."
          }
        },
        {
          "id": "sql-views",
          "title": "Create and use views",
          "summary": "A view stores a query definition that can be queried like a table.",
          "content": [
            "A standard view usually stores the query definition rather than a separate copy of its result. It can simplify repeated queries and provide a controlled interface to underlying tables.",
            "A materialized view stores results physically in database systems that support it and must be refreshed according to that system's rules. Updatability and security behavior of views depend on the DBMS."
          ],
          "example": "CREATE VIEW active_customers AS\nSELECT customer_id, full_name, email\nFROM customers\nWHERE is_active = TRUE;\n\nSELECT * FROM active_customers;",
          "quest": {
            "prompt": "What does a standard view generally store?",
            "choices": [
              "A query definition",
              "A mandatory independent copy of every result row",
              "A database backup"
            ],
            "answer": 0,
            "explanation": "A normal view is generally a stored query definition. A materialized view is the form that stores the result data."
          }
        },
        {
          "id": "sql-window-functions",
          "title": "Calculate values with window functions",
          "summary": "Window functions calculate over related rows without collapsing them into one row per group.",
          "content": [
            "A window function uses an OVER clause, often with PARTITION BY to define groups and ORDER BY to define row sequence. Unlike GROUP BY aggregates, window functions preserve individual rows.",
            "Common functions include ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, and aggregate functions used with a window. A window frame can further control which rows contribute to a calculation."
          ],
          "example": "SELECT\n    customer_id,\n    order_id,\n    total_amount,\n    ROW_NUMBER() OVER (\n        PARTITION BY customer_id\n        ORDER BY created_at DESC, order_id DESC\n    ) AS order_rank\nFROM orders;",
          "quest": {
            "prompt": "What does PARTITION BY do in a window definition?",
            "choices": [
              "Divides rows into independent groups for the window calculation",
              "Deletes rows outside the partition",
              "Sorts the final result automatically"
            ],
            "answer": 0,
            "explanation": "PARTITION BY defines the groups over which the window function is calculated. It does not by itself guarantee final output order."
          }
        }
      ],
      "checkpoint": "Create a CTE for customer spending totals, expose a reusable active-customer view, and rank each customer's orders from newest to oldest with ROW_NUMBER."
    },
    {
      "id": "sql-normalization-performance",
      "title": "Improve database design and query performance",
      "level": "Advanced",
      "description": "Apply normalization principles, understand indexes and query plans, and diagnose inefficient queries.",
      "outcomes": [
        "Explain first, second, and third normal forms at a practical level.",
        "Create indexes to support common access patterns.",
        "Read basic query-plan information and avoid common performance mistakes."
      ],
      "lessons": [
        {
          "id": "sql-normalization",
          "title": "Normalize relational data",
          "summary": "Normalization organizes data to reduce unnecessary duplication and update anomalies.",
          "content": [
            "First normal form generally requires values in each column to be atomic for the chosen relational model and rows to be identifiable. Second normal form addresses partial dependencies on part of a candidate key; third normal form addresses inappropriate transitive dependencies among non-key attributes.",
            "Normalization often separates entities into related tables and connects them with keys. Denormalization can be useful for measured performance or reporting needs, but should be a deliberate trade-off."
          ],
          "example": "-- Instead of repeating customer details on every order row:\nCREATE TABLE customers (\n    customer_id INTEGER PRIMARY KEY,\n    full_name VARCHAR(120) NOT NULL\n);\n\nCREATE TABLE orders (\n    order_id INTEGER PRIMARY KEY,\n    customer_id INTEGER NOT NULL REFERENCES customers(customer_id)\n);",
          "quest": {
            "prompt": "What is a primary goal of normalization?",
            "choices": [
              "Reduce avoidable duplication and modification anomalies",
              "Store every value in one giant table",
              "Remove all relationships between tables"
            ],
            "answer": 0,
            "explanation": "Normalization structures data to reduce redundancy and avoid insert, update, and delete anomalies."
          }
        },
        {
          "id": "sql-indexes",
          "title": "Indexes and access paths",
          "summary": "An index can help the database find rows without scanning every row in a table.",
          "content": [
            "Indexes are data structures maintained by the DBMS to support selected lookup, sorting, or join patterns. A primary key or unique constraint often creates an index automatically, depending on the system.",
            "Indexes consume storage and add work to INSERT, UPDATE, and DELETE operations. Choose indexes based on real query patterns and verify their value with query plans rather than indexing every column."
          ],
          "example": "CREATE INDEX idx_orders_customer_created\nON orders (customer_id, created_at);\n\nSELECT order_id, created_at\nFROM orders\nWHERE customer_id = 42\nORDER BY created_at DESC;",
          "quest": {
            "prompt": "What is a common trade-off of adding an index?",
            "choices": [
              "Faster qualifying reads but extra storage and write maintenance",
              "No storage cost and all writes become faster",
              "All query plans become identical"
            ],
            "answer": 0,
            "explanation": "Indexes can accelerate some reads, but they require storage and must be maintained when indexed data changes."
          }
        },
        {
          "id": "sql-explain-performance",
          "title": "Inspect query plans and tune queries",
          "summary": "A query plan shows how the database intends to access and combine data.",
          "content": [
            "EXPLAIN displays a plan in many database systems; EXPLAIN ANALYZE or equivalent may execute the query and report measured details. Commands, output, and safety implications vary by DBMS.",
            "Look for unexpected full scans on large tables, expensive sorts, poor join strategies, row-estimate errors, and missing or unused indexes. Measure with representative data and avoid assuming that rewriting a query is faster without evidence."
          ],
          "example": "-- PostgreSQL-style example\nEXPLAIN\nSELECT order_id, total_amount\nFROM orders\nWHERE customer_id = 42;",
          "quest": {
            "prompt": "What does EXPLAIN primarily help a developer inspect?",
            "choices": [
              "The database's query execution plan",
              "The application's CSS",
              "The values stored in every database backup"
            ],
            "answer": 0,
            "explanation": "EXPLAIN reports how the database plans to execute a query, helping developers understand access paths and operations."
          }
        }
      ],
      "checkpoint": "Choose two frequently used queries in your sample application. Identify their filters, joins, and sort order, propose suitable indexes, and compare query plans before and after."
    },
    {
      "id": "sql-security-applications",
      "title": "Use SQL safely in real applications",
      "level": "Advanced",
      "description": "Apply least-privilege access, parameterized queries, backup awareness, and reliable database integration practices.",
      "outcomes": [
        "Understand database users, roles, and least privilege.",
        "Prevent SQL injection with parameterized statements.",
        "Plan backups, migrations, and application-level database testing."
      ],
      "lessons": [
        {
          "id": "sql-users-privileges",
          "title": "Users, roles, and permissions",
          "summary": "Database permissions control which operations a user or role can perform.",
          "content": [
            "GRANT gives privileges and REVOKE removes privileges in systems that support those commands. Roles allow permissions to be assigned to groups of users or application identities.",
            "Follow least privilege: grant only the permissions required for a task. Applications should not normally connect using a database superuser or administrator account."
          ],
          "example": "-- Illustrative SQL; role setup varies by database\nGRANT SELECT ON products TO reporting_role;\nREVOKE INSERT ON products FROM reporting_role;",
          "quest": {
            "prompt": "What does the principle of least privilege recommend?",
            "choices": [
              "Grant only the permissions required",
              "Give every application administrator access",
              "Share one database password among all users"
            ],
            "answer": 0,
            "explanation": "Least privilege limits each identity to the minimum access needed for its responsibilities."
          }
        },
        {
          "id": "sql-injection-parameterization",
          "title": "Prevent SQL injection",
          "summary": "Parameterized queries keep user-supplied values separate from SQL command text.",
          "content": [
            "SQL injection occurs when untrusted input is interpreted as part of a SQL statement. Concatenating user input into a query string can let an attacker alter the query's meaning.",
            "Use parameterized queries through the database driver or ORM. Parameters represent values, not arbitrary SQL identifiers or keywords; dynamic table or column names need a safe allow-list and appropriate identifier handling."
          ],
          "example": "-- Conceptual parameterized query (placeholder syntax varies)\nSELECT customer_id, full_name\nFROM customers\nWHERE email = ?;\n\n-- Bind the user's email as a parameter through the driver.",
          "quest": {
            "prompt": "What is the primary benefit of parameterized queries?",
            "choices": [
              "User input is treated as data rather than SQL code",
              "They automatically encrypt every database file",
              "They remove the need for database permissions"
            ],
            "answer": 0,
            "explanation": "Binding values separately from SQL text helps prevent input from changing the structure or meaning of the query."
          }
        },
        {
          "id": "sql-migrations-backups-testing",
          "title": "Migrations, backups, and database testing",
          "summary": "Reliable database work includes controlled schema changes, recoverable backups, and repeatable tests.",
          "content": [
            "A migration records a planned database schema or data change so environments can be updated consistently. Migrations should be reviewed, tested, and designed with deployment order and rollback or recovery strategy in mind.",
            "Backups must be tested by restoring them; a backup that has never been restored is not a proven recovery plan. Database tests should cover constraints, transaction behavior, expected query results, and failure cases using representative test data."
          ],
          "example": "-- Example migration step\nALTER TABLE customers\nADD COLUMN created_at TIMESTAMP;\n\n-- Follow with validation and an application deployment plan.",
          "quest": {
            "prompt": "How can a team verify that a backup is usable?",
            "choices": [
              "Perform a restore test and validate the recovered data",
              "Check only that a backup filename exists",
              "Rename the backup file"
            ],
            "answer": 0,
            "explanation": "A restore test proves that the backup can be used to recover a working database and expected data."
          }
        }
      ],
      "checkpoint": "Design a secure database access plan for a small application. Define separate application and reporting roles, parameterize user-driven queries, describe a migration, and document how a backup restore would be tested."
    }
  ],
  "capstone": {
    "title": "SQL capstone: Personal study tracker database",
    "brief": "Design a relational database for a personal study tracker. Store learners, subjects, study sessions, goals, and progress; write queries for summaries and reports; and demonstrate safe updates, transactions, constraints, and indexing.",
    "milestones": [
      "Identify the entities and relationships, then draw a simple relational schema for learners, subjects, study sessions, and goals.",
      "Create tables with appropriate data types, primary keys, foreign keys, NOT NULL, UNIQUE, and CHECK constraints.",
      "Insert representative sample data and write SELECT queries with filtering, sorting, and pagination.",
      "Write JOIN and aggregate queries to report study time by learner, subject, and date range.",
      "Use a CTE, a view, and a window function to build useful progress reports.",
      "Demonstrate a transaction for a multi-step update and explain how errors are handled.",
      "Add indexes based on chosen query patterns, inspect query plans, and document database-specific syntax used.",
      "Create least-privilege roles, use parameterized application queries, and document a tested backup and restore approach."
    ]
  }
};
export default sqlCourse;