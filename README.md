Project Purpose
This project serves as my personal pet-project for experimenting with test automation in the context of an online shop. It is designed to mimic the functionality and behavior of an online shop, similar to the one provided at automationexercise.com. Through this project, I aim to explore and implement test automation strategies using WebDriverIO, Cucumber, and TypeScript.

Technologies and Frameworks Used
WebDriverIO: WebDriverIO is used as the main automation framework for driving browser interactions and executing tests.

Cucumber: Cucumber is used as the BDD (Behavior-Driven Development) framework for writing test scenarios in a human-readable format.

TypeScript: TypeScript is used as the programming language for writing test code, providing static typing and other advanced features.

Chai: Chai is used as the assertion library for making test assertions within the test code.

Chai-WebdriverIO: Chai-WebdriverIO is used for extending Chai's assertions to support WebDriverIO's browser commands.

Chai-WebdriverIO-Async: Chai-WebdriverIO-Async is used for asynchronous assertion support with WebDriverIO.

Chromedriver: Chromedriver is used as the WebDriver implementation for automating Chrome browser interactions.

npm-check-updates: npm-check-updates is a tool used for checking and updating dependencies to their latest versions.

Test Results Reporting
Test results in this project are reported using the spec reporter. The spec reporter displays test results in a hierarchical, nested format, making it easy to understand the test execution flow and outcomes.

To view the test results, simply run the tests using the provided scripts, and the results will be printed to the console in the spec format.

Example:

npm run tests-without-tags

This command will execute all tests and display the results using the spec reporter.

Prerequisites
Before running the tests, ensure you have the following prerequisites installed:

Node.js and npm: Make sure you have Node.js and npm installed on your system. You can download and install them from the Node.js website.

Google Chrome: The tests are designed to run on the Google Chrome browser. Ensure you have the latest version of Google Chrome installed on your machine.

Installation
To install the project dependencies, run the following command:

npm install

This will install all required dependencies specified in the package.json file.

Writing Tests
Tests in this project are written in TypeScript. TypeScript is a superset of JavaScript that adds static typing and other advanced features to the language, making it more robust and maintainable for larger projects.

With TypeScript, you can write tests using modern JavaScript syntax and leverage the type checking capabilities to catch errors early in the development process.

Contributing
Contributions to this project are welcome! If you'd like to contribute, here are a few ways you can help:

Reporting Issues: If you encounter any bugs or unexpected behavior, please open an issue on the issue tracker. Be sure to include detailed steps to reproduce the problem and any relevant information about your environment.

Feature Requests: Have an idea for a new feature or improvement? Feel free to submit a feature request on the issue tracker. We'd love to hear your ideas!

Pull Requests: If you'd like to contribute code changes, you can fork the repository, make your changes, and submit a pull request. Please make sure your code follows the project's coding standards and include tests if applicable.

Documentation: Improvements to the documentation are always appreciated. If you notice any missing or outdated information in the README or other documentation files, please submit a pull request with your changes.

Before submitting a pull request, please make sure to read our contributing guidelines for more information on how to contribute effectively to this project.

We appreciate all contributions, big or small!

License
This project is licensed under the ISC License - see the LICENSE file for details.

The ISC License is a permissive open-source license that allows users to do almost anything they want with your project, as long as they include the original copyright and license notice in any copy of the software/source.

Test Writing Guidelines
When writing tests for this project, consider the following guidelines to ensure clarity, maintainability, and effectiveness:

Scenario Clarity: Each scenario should clearly describe a specific user action and expected outcome. Make sure scenarios are easy to understand and follow a logical flow.

Feature Context: Start each feature with a brief description of the user and their goal. This helps provide context for the scenarios and ensures they align with user needs.

Tags for Filtering: Use tags to categorize scenarios based on their purpose or characteristics. For example, @smoke and @fast tags denote the nature of the tests.

Scenario Outline with Examples: Utilize Scenario Outlines with Examples to create reusable test scenarios with different data sets. This helps in maintaining concise and DRY (Don't Repeat Yourself) tests.

Step Definitions Reusability: Aim for step definitions that are reusable across multiple scenarios. Avoid duplicating steps and consolidate common actions into reusable functions.

Clear Assertions: Ensure that each step ends with a clear assertion, verifying the expected behavior or state of the application. This helps in quickly identifying test failures and debugging issues.

Test Data Management: Keep test data separate from test logic. Use placeholders like <firstCategory>, <firstCategoryProduct>, etc., to inject data into scenarios. This makes tests more maintainable and adaptable to changes in data.

Modular Test Structure: Organize tests into modular blocks to improve readability and maintainability. Each block should focus on a specific feature or user flow, making it easier to understand and troubleshoot.

Consistent Naming Convention: Follow a consistent naming convention for feature files, scenarios, and step definitions. This promotes clarity and ensures uniformity across the test suite.

Cleanup Actions: Include cleanup actions at the end of scenarios, especially in scenarios that involve creating or modifying data. This ensures the test environment remains clean and consistent for subsequent tests.

By following these guidelines, you can create robust, maintainable, and effective test suites that accurately verify the functionality of your application.
