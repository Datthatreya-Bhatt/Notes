#### What is system design ?
System design is the process of defining the architecture, components, modules, interfaces, and data for a system to meet specific requirements. It involves creating a blueprint for how different parts of a system will work together to solve a problem or fulfill a need.



#### What is CQRS and what are its use ?
CQRS (Command Query Responsibility Segregation) is a pattern that separates the handling of data modification (commands) from data retrieval (queries).

* **Commands**: Modify data (e.g., create, update, delete).
* **Queries**: Retrieve data without modifying it.

**Uses**:

* Improves scalability by optimizing read and write operations separately.
* Enhances performance and security by allowing specialized models for reads and writes.
* Useful in complex domains with high transaction volumes or where read/write requirements differ significantly.



#### What is gRPC and what its use ?
gRPC (gRPC Remote Procedure Call) is an open-source framework for building high-performance, cross-platform APIs using HTTP/2. It allows different services to communicate with each other efficiently.

**Uses**:

* Enables fast, reliable communication between microservices.
* Supports multiple languages for client-server communication.
* Offers features like bidirectional streaming, multiplexing, and low-latency communication.



#### What is kafka and what its use ?
Kafka is an open-source distributed event streaming platform that handles real-time data feeds.

**Uses**:

* Used for building real-time data pipelines and streaming applications.
* Allows for high-throughput, fault-tolerant, and scalable communication between systems.
* Commonly used in event-driven architectures, log aggregation, and messaging between microservices.


#### Simply explain what is event driven architecture ?
Event-driven architecture (EDA) is a software design pattern where the system responds to events or changes in state. In this model, components communicate by producing and consuming events, rather than direct calls.

**Uses**:

* Enables real-time processing and response.
* Decouples components, making systems more scalable and flexible.
* Commonly used in applications that require high responsiveness, like e-commerce or financial systems.



#### What is microservice and what are its use ?
A microservice is an architectural style where an application is broken down into small, independent services that each perform a specific function and communicate over a network.

**Uses**:

* Improves scalability by allowing each service to be scaled independently.
* Enhances flexibility by enabling easier updates and deployment.
* Enables faster development with teams working on different services simultaneously.
* Often used in complex, large-scale applications or systems.



#### What is development life cycle ?
The development life cycle (SDLC) is a series of stages that a software development process goes through to create and maintain a software application.

**Stages** typically include:

1. **Planning**: Defining project goals and requirements.
2. **Design**: Creating architecture and design plans.
3. **Development**: Writing the code and building the software.
4. **Testing**: Checking for bugs and ensuring quality.
5. **Deployment**: Releasing the software to users.
6. **Maintenance**: Ongoing updates and bug fixes.

It helps ensure the software is developed in an organized, efficient, and consistent manner.


#### What are the different development life cycle ?
There are several different software development life cycle (SDLC) models, each with its own approach to software development. The most common ones include:

1. **Waterfall**: A linear, sequential approach where each phase must be completed before moving to the next.

2. **Agile**: An iterative approach where development is broken into small cycles (sprints), with continuous feedback and flexibility for changes.

3. **Scrum**: A type of Agile that uses fixed-length iterations called sprints and focuses on team collaboration and regular progress checks.

4. **DevOps**: A combination of development and operations that focuses on continuous integration, delivery, and collaboration to speed up development and deployment.

5. **V-Model**: An extension of the Waterfall model that emphasizes validation and verification at each stage.

6. **Spiral**: A risk-driven approach that combines iterative development with a focus on identifying and mitigating risks.

Each model is suited for different project needs based on factors like size, complexity, and required flexibility.


#### What is the difference between monolithic and microservice ?
**Monolithic** and **Microservice** architectures are two different approaches to building software systems:

1. **Monolithic**:

   * All components of the application are built as a single, tightly integrated unit.
   * Difficult to scale and maintain as the application grows.
   * Changes to one part of the system require rebuilding and redeploying the whole application.

2. **Microservice**:

   * The application is broken down into smaller, independent services that can be developed, deployed, and scaled separately.
   * More flexible and scalable, allowing for easier updates and independent deployments of different parts of the system.
   * Typically involves more complex management and communication between services.

In short, **monolithic** is a single unified system, while **microservices** are a collection of smaller, loosely coupled services.



#### What is docker and what are its use ?
Docker is a platform that allows developers to package applications and their dependencies into containers, ensuring they run consistently across different environments.

**Uses**:

* **Portability**: Run applications anywhere, regardless of the underlying system.
* **Isolation**: Isolates applications in separate containers for better security and resource management.
* **Scalability**: Easily scale applications by adding more containers.
* **Consistency**: Ensures the application behaves the same in development, testing, and production environments.


#### What is the difference between framework and library ? 
**Framework** and **Library** are both tools used in software development, but they differ in how they are used:

1. **Framework**:

   * Provides a structure or blueprint for developing applications.
   * Inverts control — the framework calls your code (called "Inversion of Control").
   * Often requires you to follow specific rules or conventions.

2. **Library**:

   * A collection of reusable functions or methods you can call in your code.
   * You control when and how the library is used.
   * More flexible than a framework because you can choose which functions to use.

In short, **a framework dictates the structure of your application**, while **a library provides reusable functions** that you can call as needed.


#### What is API ?
An **API** (Application Programming Interface) is a set of rules and protocols that allow different software applications to communicate with each other.

It defines how requests and responses should be made between systems, enabling them to share data and functionalities.

In simple terms, **an API is a way for one program to talk to another.**



#### What is Graphql and how it works ?
**GraphQL** is a query language for APIs and a runtime for executing those queries. It allows clients to request exactly the data they need and nothing more.

**How it works**:

* **Client sends a query**: The client specifies the structure of the data it needs.
* **Server processes the query**: The server returns only the requested data, based on the query.
* **Flexible**: Clients can request data from multiple sources in a single query, making it more efficient than traditional REST APIs.

In short, **GraphQL enables efficient, flexible, and precise data retrieval between clients and servers.**



#### What is REST API and how it works?
**REST API** (Representational State Transfer) is an architectural style for building web services that allows different software systems to communicate over HTTP.

**How it works**:

* **Client sends a request**: The client makes an HTTP request (GET, POST, PUT, DELETE) to a server for specific data or to perform an action.
* **Server processes the request**: The server handles the request, performs the necessary operations (like fetching or updating data), and sends a response back to the client.
* **Stateless**: Each request from the client contains all the information the server needs to fulfill it (no memory of previous requests).

In short, **REST APIs enable communication between systems using standard HTTP methods and are simple, stateless, and scalable.**



#### What is Vertical scaling and Horizontal scaling
**Vertical Scaling** (Scaling Up):

* Involves adding more resources (CPU, RAM, storage) to a single server to increase its capacity.
* Easier to implement but has limits based on hardware.

**Horizontal Scaling** (Scaling Out):

* Involves adding more servers to a system to distribute the load across multiple machines.
* More scalable and flexible, but can be more complex to manage.

In short, **vertical scaling** adds power to a single machine, while **horizontal scaling** adds more machines to spread the load.



#### What is stateful and stateless session 
* **Stateless**: Data (like user info) is stored in the **token** (e.g., JWT), usually encrypted or signed. The server does **not** store session data.
* **Stateful**: Session data is stored on the **server/database**, and the token (like a session ID) just references it.


#### What is Indexing ?
**Indexing** is the process of creating a data structure (called an index) that improves the speed of data retrieval operations in a database or search engine.

It works like an index in a book, allowing quick access to specific data without having to search through all records.

In short, **indexing speeds up search and retrieval of data** by organizing it efficiently.



#### What is data aggregation ?
**Data aggregation** is the process of collecting and summarizing data from multiple sources to provide a more comprehensive view or analysis.

It often involves tasks like grouping, filtering, or performing calculations (e.g., sums, averages) on the data.

In short, **data aggregation combines and simplifies data to make it easier to analyze**.


#### What is sharding ?
**Sharding** is the process of dividing a large database into smaller, more manageable pieces called "shards." Each shard contains a portion of the data and can be stored on different servers.

This helps improve performance and scalability by spreading the load across multiple systems.

In short, **sharding breaks data into smaller parts and distributes it across multiple servers for better performance and scalability**.



#### What is data normalizations
**Data normalization** is the process of organizing data in a database to reduce redundancy and improve efficiency. It involves structuring the data into tables and ensuring each piece of information is stored in the most logical place.

The goal is to eliminate duplicate data and make updates easier, leading to more consistent and accurate data.

In short, **data normalization helps organize and simplify data to reduce redundancy**.



#### What is SQL Injection?
**SQL Injection** is a type of security vulnerability where an attacker inserts or manipulates malicious SQL queries into an input field (like a search bar or login form) to gain unauthorized access to a database.

It can allow attackers to view, modify, or delete data, potentially compromising the entire system.

In short, **SQL Injection exploits flaws in how an application handles user input to attack the database.**
