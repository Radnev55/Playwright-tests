Test Plan – Playwright E2E Automation Project
1. Project Overview
This project contains automated End-to-End (E2E) tests using Playwright for testing a web application.
The goal is to ensure key functionalities work as expected and to enable quick regression checks during development.

2. Scope
In Scope:

UI testing

Functional testing

Smoke and regression test suites

Cross-browser validation (Chromium, Firefox, WebKit)

Out of Scope:

Performance testing (covered separately)

Manual exploratory testing

3. Test Types
Smoke Tests – Quick validation that the application is up and running (e.g., login, homepage load)

Regression Tests – Full set of critical workflows to catch unexpected bugs after changes

Performance Tests – Basic page load and rendering checks

4. Test Environments
Local: Developer machine using Playwright CLI

CI/CD: GitHub Actions (Ubuntu latest)

5. Tools & Frameworks
Playwright for test automation

Node.js for execution environment

GitHub Actions for CI/CD

6. Test Data
Static test data stored in test-data/ folder

Configurable environment variables for sensitive data (e.g., credentials)

7. Folder Structure
pgsql
Копиране
Редактиране
tests/
 ├── smoke/
 │    ├── login.spec.js
 │    ├── homepage.spec.js
 ├── regression/
 │    ├── checkout.spec.js
 │    ├── search.spec.js
 ├── performance/
 │    ├── pageload.spec.js
8. Execution Commands
Run all tests:

bash
Копиране
Редактиране
npx playwright test
Run only smoke tests:

bash
Копиране
Редактиране
npx playwright test tests/smoke
Run only regression tests:

bash
Копиране
Редактиране
npx playwright test tests/regression
9. Reporting
HTML report is generated automatically after test execution.

To view:

bash
Копиране
Редактиране
npx playwright show-report
10. CI/CD Integration
Tests run automatically on each push or pull request to the main branch.

GitHub Actions workflow is stored in .github/workflows/playwright.yml.