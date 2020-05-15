# TAD_CONSUMER

Consumer search for the Travel Adviser Directory

## Prerequisites

- Git
- Node

## Installation

```javascript
git clone https://github.com/moneyadviceservice/tad_consumer.git

cd tad_consumer

npm install

npm run dev
```

## Test

### Run
```javascript
npm run test
```

### Approach
Where possible, the approach to testing should be Test Driven Development (TDD) or at least be written at the same time as the component being tested.

### Tools
Jest and Enzymes

### Location
Where a component has its own folder, the test should be colocated in the folder, however, where the component share  folder with other files, the test should be located in `src/__test__` folder.

### Naming Convention
All test files should have the same name with the their files and also an extension of `.test.js`

### Clean up
After every test there must be a tear down process by unmounting every components used in order to prevent the pollution of test environment.

### Parent Child Testing
A test for a parent component should not be awareof the internal implementation of its children component. It is enough for it to just be aware the existence of the children components.

### Bug
Whenever a bug is fixed, there should be a regression test
