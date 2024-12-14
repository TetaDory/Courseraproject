# Automated UI Tests for uiGov

In this repository, we are running automated UI tests using playwright on uiGov. These tests are aimed at ensuring that the platform behaves as expected from a user's perspective.

## Run Tests on local machine

1. Setup the repository: Navigate to the folder of choice then clone the repository

   - `git clone https://github.com/ui/uiGov-UI-TestCases.git`

2. Navigate to the cloned repository

   - `cd uiGov-UI-TestCases`

3. Install all dependencies

   - `npm install`

4. Run test 

   `npx playwright test`

# N.B.: # 
This is can be a resource-intensive and time-consuming process. Please be aware that:

- The tests interact with the user interface of uiGov, which may involve loading and rendering multiple web pages at the same time.
- Running the full test suite may take a significant amount of time.
- Consider running the tests on a machine with sufficient resources (CPU, memory) to handle the workload effectively.
- It's recommended to run the tests in a controlled environment to minimize interference from other processes or network conditions.