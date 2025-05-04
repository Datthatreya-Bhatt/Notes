
what is sql and nosql ?
	SQL stands for Structured Query Language. SQL databases are relational databases that store data in tables with predefined columns and relationships between them.
	NoSQL databases are non-relational databases that store data in a less structured format such as key-value pairs, documents, or graphs. They do not rely on a fixed schema, and users can add data without worrying about the predefined structure.


when should you use SQl and when No SQL
   SQL databases are a more suitable option for structured data and when data consistency and integrity are important. NoSQL databases are better for scaling and handling larger volumes of unstructured data, and when the data requirements of the application are likely to change frequently.


What is vertical and horizontal scaling.
	Vertical scaling (also known as scaling up) involves increasing the capacity of a single machine by adding more resources, such as CPU, RAM, or storage. This is done by upgrading the hardware components of the machine, such as adding more memory or a faster processor.

	Horizontal scaling (also known as scaling out) involves adding more machines or nodes to a system to increase its capacity. This is achieved by adding more machines to a network or cluster to share the workload among them.



1.What is difference between truncate and delete in sql?

	Turncate: 
		1.It is faster compered to delete
		2.we can not use turncate  with WHERE clause to delete specific row with condition
		3.It removes all rows from table

	DELETE:
		1.Delete does not remove remove all rows, it removes one or more rows on a specific condition
		2.	It can be used with WHERE clause to delete specific rows
		3.Delete is slow compared to truncate.



2.Do you have any idea about indexing the table in sql ?
	Yes, I generally use id to index the table, normally SQL stores data in ascending order and indexing helps the data to be stored in that order.




3.What is Sequelize and why it is used
	Sequelize is an Object-Relational Mapping (ORM) library for Node.js, designed to simplify database interactions within applications. An ORM is a programming technique that allows developers to work with databases using object-oriented programming concepts rather than writing raw SQL queries.


4.Why you are using MySql and why not NoSQL in the project?
	In my projects mysql suited good for project than nosql, i had to store data in structured format and also in group chat app i had to build complex association between tables for easy quering, i used mysql..


5.What are views in MqSql?
	In MySQL, "views" are virtual tables that are derived from the result set of a SELECT query. A view doesnt store any data itself, its simply a stored query that can be treated like a table when querying the database. Views allow us to encapsulate complex queries or frequently used query patterns into a single named entity, making it easier to work with and maintain our database.

	Example of creating a simple view:
	CREATE VIEW customer_names AS
	SELECT first_name, last_name
	FROM customers;





6.How to connect sequelize to database?

	To connect Sequelize to a database in a Node application, we need to follow a few steps

	Install Sequelize and Database Driver:

	First, we need to install Sequelize along with the appropriate database driver for the database we are using. Sequelize supports multiple database systems such as MySQL, PostgreSQL, SQLite, and MSSQL



	Create a Sequelize Instance:

	In our Node.js code, import Sequelize and create an instance of it by passing the database connection details such as database name, username, password, host,and dialect (database system).



	Define Models:
	Sequelize uses models to represent database tables.We define our models using Sequelizes define method


	Synchronize Models with Database:
	Sequelize allows us to synchronize our defined models with the actual database tables. This step creates the tables if they dont exist or updates them according to our model definitions.We use the sync method to achieve this





7.What are joins ? Explain the different types of joins and their uses?

	In SQL, a join is a operation used to combine data from two or more tables based on a related column between them. Joins are crucial for querying databases when the required information is spread across multiple tables. They allow us to retrieve data from multiple tables and present it as a unified result set.

	types of joins in SQL:

	INNER JOIN:
	Returns only the rows where there is a match between the specified columns in both tables.
	Excludes rows with no matching counterpart in the other table.
	Used when we want to retrieve only the data that exists in both tables.

	LEFT JOIN (or LEFT OUTER JOIN):
	Returns all rows from the left (first) table and the matching rows from the right (second) table.
	If there is no match in the right table, NULL values are returned for the right tables columns.
	Used when we want to retrieve all data from the left table along with matching data from the right table


	RIGHT JOIN (or RIGHT OUTER JOIN):
	Returns all rows from the right (second) table and the matching rows from the left (first) table.
	If there is no match in the left table, NULL values are returned for the left tables columns.
	Used less frequently than LEFT JOIN, it is just the reverse of a LEFT JOIN

	FULL JOIN (or FULL OUTER JOIN):
	Returns all rows from both tables and matches them where possible.
	If there is no match in either table, NULL values are returned for the columns from the missing side.
	Used when we want to retrieve all data from both tables, including unmatched rows

	CROSS JOIN:
	Does not require a specific condition or ON clause.





8.What are MySQL Triggers? Watch this video and explain it in your own words here.
	
	A MYSQL trigger is a database object that is associated with a specific table and automatically executes a set of actions when a certain event occurs on that table. 

	Triggers are generally called with the following events
	INSERT= Triggered when a new row is inserted into the table
	UPDATE=Triggered when an existing row is updated
	DELETE= Triggered when a row is deleted from the table



	Triggers consist of three main components
	Event: Specifies the event that will trigger the execution of the trigger. It can be one of the events mentioned above

	Condition: An optional condition that must be met for the trigger to execute. It allows us to control when the trigger fires based on specific criteria. If no condition is specified, the trigger will fire for all occurrences of the associated event

	Action: The set of SQL statements or queries that will be executed when the trigger fires. These statements can interact with the data in the table that the trigger is associated with, and they can also execute other actions in the database





9.What is Sharding in SQL? Go through this video and answer in your own words and explain it in your own words here.

	Sharding is a database scaling technique used to distribute and manage large datasets across multiple database servers. In the context of sql databases, sharding involves partittioning the data into smaller, more manageable subsets called shards and distributing these shards across multiple servers.

	The concept of sharding is primarily used in the context of nosql databases, but it can also be applied to traditional sql databases with certain modification.Each shard operates as an independent database instance, holding a portion of the overall data. This division enables parallel processing and reduces theload on any single server, thereby improving overall system performance





10.What is BLOB -> First watch this video and then go through this answer and explain it in your own words here.

	BLOB means Binary Large Object, It is a large object data type in the database system. Blob could store a large chunk of data, It can even store multi media files. BLOB fields allocate space only whenever the content in the field is utilized. blob allocates spaces in giga bytes



11.What is BLOB in MySQL? Watch this video and explain it in your own words here.
	
	BLOB means Binary Large OBject. In MySQL, it is a data type used to store binary data, such as images, audio, video, or any other type of raw binary data. BLOB columns can store large amounts of binary data and are typically used when you need to store non-textual data in a database.

	MySQL provides several types of BLOB data types
	BLOCK BLOB: Used to store Text or biinary or any multimedia files.
	APPEND BLOB: These are just like BLOCK BLOBS but are optimised for append operations
	PAGE BLOB: These can store upto 1TB data, and are highly optimised.




13.Write an SQL query to demonstrate joins ?

	SQL querys for joins:

	INNER JOIN
	SELECT * FROM table1 INNER JOIN table2 ON table1.column = table2.column;


	LEFT JOIN (LEFT OUTER JOIN):
	SELECT * FROM table1 LEFT JOIN table2 ON table1.column = table2.column;

	RIGHT JOIN (RIGHT OUTER JOIN):
	SELECT * FROM table1 RIGHT JOIN table2 ON table1.column = table2.column;


	FULL JOIN (FULL OUTER JOIN):
	SELECT * FROM table1 FULL JOIN table2 ON table1.column = table2.column;




14.What are constraints in SQL? Explain 5 of them.

	In SQL, constraints are rules that are applied to the data in a database table to ensure data integrity and maintain consistency. They define certain conditions that must be satisfied by the data stored in the table

	Primary key constraint: This constraint ensures that a column or a combination of columns uniquely identifies each row in a table. It enforces the uniqueness and non-nullity of the specified columns. Only one primary key constraint can be defined per table.

	Foreign key constraint: This constraint establishes a relationship between two tables. It ensures that values in a column of one table match values in another tables primary key. This constraint maintains reference between the related tables 

	Unique constraint: A unique constraint enforces the uniqueness of values within a column or a combination of columns in a table

	Auto increment constraint: This constraint automatically increments new rows by one value.

	Not null constraint: A not null constraint ensures that a column cannot contain null values.



15.What is UNIQUE constraint?

	In SQL, a UNIQUE constraint is a database constraint that ensures that the values in a specified column or a group of columns are unique across all the rows in a table. This means that no two rows can have the same values in the specified columns. The UNIQUE constraint helps preventing duplicate entries in the table.



16.What are primary keys and foreign keys.When to use what ? Explain with an example.

	Primary key ensures that a column or a combination of columns uniquely identifies each row in a table. It enforces the uniqueness and non-null of the specified columns. Only one primary key constraint can be defined per table.

	Foreign key establishes a relationship between two tables. It ensures that values in a column of one table match values in another tables primary key. This constraint maintains reference between the related tables 



	Primary Key is used when creating a model to uniquely identify each row in a table, This Primary key becomes Foreign key in other table when we use this key to identifie certain row from its original table.

	ex:

	If there are 2 tables User and Task, User table has userId, name as column and Task table has description as column.

	To create a relationship between these 2 table we use foreign key, in this case foreign key is userId which is a Primary Key in User table, It becomes foreign key in Task table. While entering each task in task table we also enter userId of the user in task table to create a reference. userId for task table is foreign key because it originates form other table.




17.What is the difference betwen primary key and unique key?

	Primary key and Unique are both unique value in a table

	Primary Key:
	It is used as foreign key in other tables for reference.
	One table can have only one Primary Key column.



	Unique Key:
	It is not used as foreign key in other tables for reference.
	One table can have many unique column.






18.What is a subquery? What are its various types?

	A subquery, also known as a nested query or inner query, is a query that is embedded within another query. 
	It is used to retrieve data that will be used as a comparison or filter condition in the outer query. 
	Subqueries allow us to break down complex tasks into smaller, more manageable components, making it easier to retrieve and manipulate data from a database.

	There are several types of subqueries in SQL

	Single-row Subquery: A subquery that returns only a single value and is usually used in comparison operators in the outer query. 
	Multi-row Subquery: A subquery that can return multiple rows, usually used with the IN, ANY, or ALL operators in the outer query.
	Correlated Subquery: A subquery that refers to columns from the outer query, allowing for comparisons between values in the outer query and values in the subquery. Correlated subqueries are often used when we need to perform row-by-row comparisons.
	Scalar Subquery: A subquery that returns a single column and a single row, which can be used as an expression in the outer query. 
	Subquery in the FROM Clause: Also known as a derived table or inline view, this type of subquery is used in the FROM clause of the outer query and acts as a temporary table.
	Subquery with EXISTS: This type of subquery is used to check for the existence of rows returned by the subquery. It is commonly used in situations where we want to test whether certain conditions are met.






19.Can you give an example where you might use subquery

	SELECT name
	FROM orders
	WHERE product_id IN (SELECT id FROM products WHERE category = 'Electronics');

	Im using Multi-row Subquery, In this query we want to get all the names who ordered Electronic items. First we are selecting names from orders table where product_id should be such that in products table category should be Electronics.



20.What is the use of UNION keyword in SQL? Write an example query.

	The UNION keyword in SQL is used to combine the result sets of two or more SELECT statements into a single result set. It removes duplicate rows from the combined result set by default. The column data types and the number of columns must be the same in all SELECT statements within a UNION operation.

	ex:
	We have two tables, employees and contractors. Both tables have the same structure, containing columns id, name, and role. We want to retrieve a combined list of all individuals names (both employees and contractors).

	SELECT name FROM employees
	UNION
	SELECT name FROM contractors;


	In this example, the query retrieves the name column from the employees table and combines it with the name column from the contractors table. The UNION keyword ensures that duplicate names are removed from the final result set.




21.What are Entities and Relationship (ER)?

	Entities:
	In SQL, an entity is generally represented by a table. Each row in the table represents an instance of the entity, and each column represents to an attribute or property of the entity.

	Relationships:
	A relationship is a connection between two or more entities.



22.What are the differents types of relationships which are there?

	There are Three different types of relationship in SQL

	One-to-One: Each row in one table belongs to only one row in another table.

	One-to-Many: Each row in one table belongs to one or more in another table, but each row in the second table is belongs to only one row in the first table.

	Many-to-Many: Each row from one table belongs to multiple rows of second table and vice versa. This type of relationship usually requires a junction table to manage the connections between the tables.




23.Can you make an ER Diagram of any one of your past projects and explain it and explain how you handled all the different types of relationship as mentioned above?

	I have made a Group Chat App in which i have used 2 Types of relationship, they are one to many and many to many. I have not used one to one relationship in my project because it was not required. I used sequelize in my project to handle my database.

	I had 4 tables in group chat app

	1.User (id, name, email, password)
	2.Chat (message, groupId, userId) here groupId and userId are foreign keys from group and user table respectively.
	3.Group (name, link) here link is used to store groups invite link.
	4.UsersGroups (userId, groupId, admin) here groupId and userId are foreign keys from group and user table respectively and admin column is added by me.

	In my project User and Chat had one to many relation.
	A user can send many chats and each chats belongs to only one user. Relation code is as below

	User.hasMany(chat);
	Chat.belongsTo(User);

	Group and Chat also had one to many relation.
	A group can have many chats but each chat belongs to only one group

	Group.hasMany(Chat);
	Chat.belongsTo(group);


	User and group had many to many relation. This relation was maintained with junction table called UsersGroups.
	One user can be part of many group, and each group can have many Users

	User.belongsToMany(group, {through:UsersGroups});
	Group.belongsToMany(user, {through: UsersGroups});

	There was another feature called admin, 
	One user can be admin of many groups and each group can have multiple admins, so it is a many to many relation. So rather than creating another table i used UsersGroups which is a junction table maintaining relation between user and group, i added one more column called admin




25.Why do we even need Views?

	In SQL, a view is a virtual table created by a query. It allows us to simplify complex queries,

	The reasons for views are;

	Simplicity and Abstraction: Views can encapsulate complex SQL queries into a single, easily readable and manageable structure. Instead of writing complex queries multiple times, we can create a view with the complex logic and then refer to that view in simpler queries.
	Data Security: Views can provide an additional layer of security by restricting direct access to underlying tables. 
	Performance Optimization: Views can precompute and store results of complex queries, leading to improved query performance.
	Simplifying Joins: Views can simplify joins by reducing complex join operations. 
	Code Reusability: Views allow us to define a query once and reuse it in multiple places. 




26.What is normalisation of database?

	Normalization of databases refers to the process of designing and organizing the structure of a relational database to minimize data redundancy and dependency. The goal of normalization is breaking down a database into smaller, well-structured tables that can be linked together using relationships.

https://www.simplilearn.com/tutorials/sql-tutorial/what-is-normalization-in-sql




27.What are Delete, Truncate and DROP keywords?

DELETE is used to remove specific rows based on a condition.
TRUNCATE is used to remove all rows from a table
DROP is used to completely remove a database object, such as a table or index, from the database.



28.How are they different from each other?

	DELETE:

	The DELETE statement is used to remove specific rows from a table based on a specified condition. 
	It is often used to selectively remove data from a table without removing the entire table itself. 
	The DELETE statement can be combined with a WHERE clause to determine which rows to delete. 
	It is a more controlled operation compared to TRUNCATE.


	TRUNCATE:

	The TRUNCATE statement is used to remove all the rows from a table, effectively resetting it to an empty state.
	It is a faster operation than the DELETE statement . 
	It cannot be used with a WHERE clause .


	DROP:

	The DROP statement is used to remove database objects such as tables, indexes, views, or even entire databases. 
	It permanently removes the object and all associated data.
	Once an object is dropped, it cannot be recovered.






29.What is Indexing? What is the advantage of indexing and what is the disadvantage?

	In SQL, indexing refers to the process of creating a data structure called an "index" on one or more columns of a database table.
	An index enhances the speed of data retrieval operations by providing a way to quickly locate rows based on the values in the indexed columns. 

	ADVANTAGES

	Improved Query Performance:Indexes significantly improve the speed of data retrieval operations, such as SELECT queries, by allowing the database engine to quickly narrow down the subset of rows that satisfy the search criteria. 
	Faster Sorting: Indexes also speed up the sorting process.



	DISADVANTAGES

	Increased Storage Space: Indexes require additional storage space. This can be a concern, especially for large tables, as indexes can sometimes consume a significant amount of disk space.
	Slower Data Modification: While indexes improve read performance, they can slow down data modification operations (INSERT, UPDATE, DELETE), as the database engine must update the index in addition to the table itself. 
	Complexity: Managing and maintaining indexes can add complexity to database design.






30.How to create an index in SQL? Please write the query . Use the example of any table that you have used before.

CREATE INDEX id
ON user (name, email, password);





31.If we drop a table, does it also drop related objects like constraints, indexes, columns, default, views and sorted procedures?

	When we drop a table in SQL, 
	Constraints (Foreign Keys, Primary Keys, etc.): Some DBMS systems automatically drop foreign key constraints that reference the table being dropped. 
	Primary key: constraints on the dropped table are often removed automatically.
	Indexes: indexes that were created explicitly on the dropped table will not be automatically dropped.
	Columns: When we drop a table, all columns within that table are removed as well.
	Defaults: Default constraints associated with columns in the dropped table are removed along with the table.
	Views: Views that reference the dropped table might become invalid, the views themselves are not automatically dropped.
	Stored Procedures and Functions: These are typically not directly impacted by dropping a table.




32.What is the difference between IN and BETWEERN Operator?

	IN Operator:
	The IN operator is used to compare a value against a list of possible values. It allows us to specify a set of values and checks if a given expression matches any of those values.

	BETWEEN Operator: 
	The BETWEEN operator is used to filter a range of values, including the endpoints.




33.How to write an SQL query to find students' names start with 'A'?
34.Write the SQL query to get the third maximum salary of an employee from a table named employees.You have to use OFFSET as other algos are not optimised. (Assume whatever you want to) - [Commonly asked Interview Question]





35.What is the ACID property in a database? Explain each one of them.

	The ACID properties are a set of four key properties that ensure the reliability and consistency of transactions in a database management system. 

	The ACID properties are as follows:

	Atomicity:
	Atomicity ensures that a transaction is treated as a single, indivisible unit of work. 
	It means that either all the operations within a transaction are executed successfully and the changes are committed to the database, or none of the operations are executed and no changes are made to the database.
	If any part of the transaction fails, the entire transaction is rolled back, and the database remains unchanged.

	Consistency:
	Consistency ensures that a transaction brings the database from one valid state to another. 
	In other words, the database must satisfy a set of integrity constraints before and after the transaction is executed. 

	Isolation:
	Isolation ensures that multiple transactions can occur concurrently without interfering with each other. 
	Each transaction is executed in isolation, as if it were the only transaction in the system. 

	Durability:
	Durability ensures that once a transaction is committed, its changes are permanent and will survive any subsequent system failures, crashes, or power outages. 
	Committed transactions are stored in non-volatile storage (such as hard drives or solid-state drives) to guarantee their durability.




36.What is a deadlock in SQL?

	A deadlock in SQL refers to a situation in which two or more transactions are unable to proceed because each is waiting for a resource that the other transaction holds. This creates a circular dependency where none of the transactions can complete, effectively causing the system to come to a standstill.




37.Is a blank space or zero the same as a NULL value?

	No, a blank space and zero are not the same as a NULL value in SQL.
	Blank Space: A blank space refers to an empty string, which is a characters with no content.
	Zero: Zero (0) is a numerical value that represents the absence of a quantity.
	NULL: NULL represents the absence of a value or an unknown value in a database. 



38.What is the usage of the NVL() function?

	In SQL, the NVL() function is used to handle NULL values. It allows us to replace a NULL value with an alternative value. 
	NVL(expression, replacement_value)
	Here, expression is the value that we want to evaluate, and replacement_value is the value that will be returned if expression is NULL.

	SELECT employee_id, employee_name, NVL(salary, 0) AS salary
	FROM employees;

	In this query, if the salary column contains NULL values, the NVL() function will replace them with 0 in the result set.




39.What is SQL Injection?

	SQL Injection is a type of cybersecurity vulnerability that occurs when an attacker manipulates input fields or parameters of a web application that interacts with a database.

	SQL Injection happens when a malicious user exploits a vulnerability in a web application by inserting malicious SQL code into input fields, such as text boxes, login forms, or URL parameters. 

	This can trick the application into executing unintended database operations that could allow the attacker to gain access to database.



48.What is BLOB and TEXT in MySQL?

In MySQL, BLOB and TEXT are data types used to store large amounts of binary or text data, respectively.
They are used to handle data that exceeds the storage capacity of regular columns like VARCHAR or CHAR. 

BLOB referes to Binary Large OBject, BLOB is used to store large binary data, such as images, audio, video, or any other type of binary file. BLOB columns can hold a variable amount of data, and they are typically used to store files and binary data of various sizes. 

The TEXT data type is used to store large amounts of character data, such as long paragraphs of text or entire documents.



11.In SQL what is primary key and foreign key?

	A primary key is a unique value used to distinguish between each row in a table.
	A foreign key is a primary key of external table, used in this particular table to create relationships.




15.Write a SQL query to demonstrate joins and order by? Take any table example.

	SELECT u.user_id, u.user_name, t.task_name
	FROM user u
	LEFT JOIN tasks t ON u.user_id = t.user_id
	ORDER BY u.user_name;


25.what is the difference between Delete and truncate in sql
26.What are the different kinds of joins? Explain each one of them?



40.Write a Query to display the number of employees working in each region? 
41.Write SQL query to fetch employee names having a salary greater than or equal to 20000 and less than or equal 10000.
42.Given a table Employee having columns empName and empId, what will be the result of the SQL query below? select empName from Employee order by 2 asc;
43.How to delete a column in SQL? Please write the query.
 How to find the nth highest salary in SQL?
44.How to add a new column in SQL?
45.Write a Query to display odd records from student table?
46.How to fetch alternate records from a table?
47.Write a Query to display employee details belongs to ECE department?


49.How do you return a hundred books starting from 105th? Write the query. Make required assumptions.
50.How would you select all the users, whose email id and phone number is NULL?
51.Write an SQL query to fetch five max salaries from a table.
52.How do you get the  second last id without the max function?
53.Write a query to find out the data between the age range of 25 to 35 from employee table?



59. what are transactions and what is its uses?