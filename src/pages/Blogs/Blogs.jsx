import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
    useTitle("Blogs");

    return (
        <div className="blogs mt-5">
            <div
                className="hero"
                style={{
                    backgroundImage: `url("https://i.ibb.co/Q6PHXZm/accent-bg-hd.jpg")`,
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content min-h-[400px] py-10">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Blogs</h1>
                        <p className="mb-5">
                            Welcome to our Blogs page, your gateway to
                            insightful and engaging content! Here you'll find a
                            treasure trove of questions.
                        </p>
                    </div>
                </div>
            </div>
            <div className="blogs-section mt-[130px] mx-5 lg:mx-12">
                <div className="blog-header">
                    <h1 className="text-[36px] sm:text-[48px] font-bold text-[#1A1919] text-center">
                        Questions
                    </h1>
                </div>
                <div className="questions text-[#1A1919] text-justify mt-10">
                    <div className="container max-w-[1280px] flex flex-col gap-y-8 mx-auto">
                        <div className="question question-1">
                            <h3 className="text-[24px] font-medium">
                                1. What is an access token and refresh token?
                                How do they work and where should we store them
                                on the client-side?
                            </h3>
                            <div className=" mt-1">
                                <span className="font-medium">Ans: </span>
                                <span className="text-[#757575]">
                                    An access token is a credential obtained
                                    during authentication that proves a user's
                                    identity and permissions or authorizations,
                                    granting them access to protected resources.
                                    A refresh token is a long-lived credential
                                    used to obtain a new access token when the
                                    original token expires, allowing seamless
                                    authentication without requiring the user to
                                    re-enter their credentials. Together, these
                                    tokens enhance security and enable efficient
                                    and secure authentication and authorization
                                    processes in websites and APIs.
                                </span>
                                <br />
                                <span className="text-[#757575]">
                                    Access tokens and refresh tokens work in
                                    tandem to enable secure authentication and
                                    authorization. After a user successfully
                                    authenticates, an access token is generated
                                    and used to authenticate subsequent requests
                                    to protected resources. If the access token
                                    expires, a refresh token can be used to
                                    obtain a new access token without requiring
                                    the user to re-enter their credentials.
                                </span>
                                <br />
                                <span className="text-[#757575]">
                                    The tokens should be securely stored on the
                                    client-side, typically in secure HTTP-only
                                    cookies or in local storage with appropriate
                                    security measures in place, to prevent
                                    unauthorized access and ensure the integrity
                                    of the tokens.
                                </span>
                            </div>
                        </div>
                        <div className="question question-2">
                            <h3 className="text-[24px] font-medium">
                                2. Compare SQL and NoSQL databases?
                            </h3>
                            <div className="mt-1">
                                <span className="font-medium">Ans: </span>
                                <span className="text-[#757575]">
                                    SQL and NoSQL databases have distinct
                                    characteristics and are suited for different
                                    use cases. Here's a comparison between SQL
                                    and NoSQL databases in bullet points:
                                </span>
                                <br />
                                <p className="text-[#757575] font-medium text-lg mt-2 mb-1">
                                    SQL Databases
                                </p>
                                <ul className="ml-5 text-[#757575]">
                                    <li className="list-disc">
                                        Structured data model with predefined
                                        schemas
                                    </li>
                                    <li className="list-disc">
                                        Vertical scalability by upgrading
                                        hardware resources
                                    </li>
                                    <li className="list-disc">
                                        Standardized query language (SQL) for
                                        complex operations
                                    </li>
                                    <li className="list-disc">
                                        Emphasize data consistency through ACID
                                        properties
                                    </li>
                                    <li className="list-disc">
                                        Suitable for applications with complex
                                        queries and structured data
                                    </li>
                                    <li className="list-disc">
                                        Commonly used in transactional systems,
                                        financial applications, etc.
                                    </li>
                                </ul>
                                <p className="text-[#757575] font-medium text-lg mt-4 mb-1">
                                    NoSQL Databases
                                </p>
                                <ul className="ml-5 text-[#757575]">
                                    <li className="list-disc">
                                        Flexible data models (key-value,
                                        document, columnar, graph)
                                    </li>
                                    <li className="list-disc">
                                        Horizontal scalability by distributing
                                        data across multiple servers
                                    </li>
                                    <li className="list-disc">
                                        Varying query languages, some supporting
                                        SQL-like querying
                                    </li>
                                    <li className="list-disc">
                                        Emphasize availability and partition
                                        tolerance over strict consistency
                                    </li>
                                    <li className="list-disc">
                                        Suitable for applications with complex
                                        queries and structured data
                                    </li>
                                    <li className="list-disc">
                                        Commonly used in content management
                                        systems, real-time analytics, etc.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="question question-3">
                            <h3 className="text-[24px] font-medium">
                                3. What is express js? What is Nest JS?
                            </h3>
                            <div className="mt-1">
                                <span className="font-medium">Ans: </span>
                                <span className="text-[#757575]">
                                    Express.js is a popular web application
                                    framework for Node.js. It provides a robust
                                    set of features and tools to build web
                                    applications and APIs quickly and
                                    efficiently. Express.js simplifies the
                                    process of creating server-side applications
                                    by providing a minimal and flexible
                                    framework that allows developers to handle
                                    routing, middleware, and HTTP requests
                                    easily. With its lightweight design,
                                    Express.js offers a wide range of extensions
                                    and middleware libraries that enhance
                                    functionality and enable developers to
                                    customize their applications based on
                                    specific requirements. It is widely adopted
                                    in the Node.js ecosystem and is known for
                                    its simplicity, scalability, and speed in
                                    building web applications.
                                </span>
                                <br />
                                <span className="text-[#757575]">
                                    Nest.js is a powerful, scalable, and
                                    extensible framework for building
                                    server-side applications using Node.js. It
                                    leverages TypeScript, a typed superset of
                                    JavaScript, to provide a robust development
                                    experience and enhance code quality. Nest.js
                                    follows the architectural pattern of
                                    Angular, making it familiar to developers
                                    who have worked with Angular on the
                                    frontend. It offers a modular and
                                    dependency-injection-based approach,
                                    allowing developers to create highly
                                    maintainable and testable applications.
                                    Nest.js provides a comprehensive set of
                                    features, including routing, middleware,
                                    dependency injection, validation, and much
                                    more, making it suitable for building
                                    complex, enterprise-grade applications. It
                                    also integrates well with other libraries
                                    and frameworks in the Node.js ecosystem,
                                    enabling seamless integration with existing
                                    systems. Overall, Nest.js promotes clean
                                    architecture and best practices, empowering
                                    developers to build scalable and
                                    maintainable server-side applications with
                                    ease.
                                </span>
                            </div>
                        </div>
                        <div className="question question-4">
                            <h3 className="text-[24px] font-medium">
                                4. What is MongoDB aggregate and how does it
                                work?
                            </h3>
                            <div className="mt-1">
                                <span className="font-medium">Ans: </span>
                                <span className="text-[#757575]">
                                    The MongoDB aggregate framework is a
                                    powerful tool for data processing and
                                    aggregation in MongoDB. It allows you to
                                    define a sequence of stages that transform
                                    and manipulate data within collections. Each
                                    stage performs a specific operation, such as
                                    filtering, grouping, reshaping, or sorting
                                    documents. The aggregate framework enables
                                    complex computations and transformations on
                                    data, making it a versatile tool for
                                    advanced data analysis and reporting in
                                    MongoDB.
                                </span>
                                <br />
                                <span className="text-[#757575]">
                                    The MongoDB aggregate framework operates by
                                    processing data through a pipeline of
                                    stages, where each stage performs a specific
                                    operation on the input documents and passes
                                    the transformed data to the next stage.
                                </span>
                                <br />
                                <ol className="ml-4 mt-2 text-[#757575]">
                                    <li className="list-decimal">
                                        Data Input: The aggregate framework
                                        starts with an input collection that
                                        contains the documents you want to
                                        process and aggregate.
                                    </li>
                                    <li className="list-decimal">
                                        Pipeline Stages: You define a series of
                                        stages in the aggregation pipeline. Each
                                        stage represents a specific operation
                                        that is applied to the data. Common
                                        stages include $match, $group, $project,
                                        $sort, and $unwind, among others.
                                    </li>
                                    <li className="list-decimal">
                                        Data Transformation: As the data flows
                                        through the pipeline, each stage applies
                                        its operation to the documents,
                                        modifying or filtering them according to
                                        the specified criteria. For example, the
                                        $match stage filters documents based on
                                        certain conditions, while the $group
                                        stage groups documents by a specified
                                        field and performs aggregation
                                        operations like sum, average, or count.
                                    </li>
                                    <li className="list-decimal">
                                        Result Generation: At the end of the
                                        pipeline, the final stage produces the
                                        aggregated result. This can be a
                                        transformed dataset, a summary of the
                                        data, or any other desired output.
                                    </li>
                                </ol>
                                <p className="text-[#757575] mt-2">
                                    The aggregate framework offers a wide range
                                    of operators and functions that allow for
                                    complex computations, data reshaping,
                                    joining data from multiple collections, and
                                    performing advanced analytics. It provides
                                    powerful features like data projection,
                                    conditional processing, and data
                                    manipulation, making it a versatile tool for
                                    generating reports, implementing business
                                    logic, and extracting insights from large
                                    datasets. The aggregate framework in MongoDB
                                    enables developers to perform sophisticated
                                    data processing and analysis within the
                                    database itself, reducing the need for
                                    additional processing on the application
                                    side and improving performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
