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
After every test there must be a tear down process by unmounting every components used in order to prevent the pollution of test environment
```javascript
...
import { mount } from 'enzyme'
import App from './App'

let wrapped;

beforeEach(()=> {
  wrapped = mount (<App/>)
})

afterEach(() => {
  wrapped = wrapped.unmount()
})
...
```

### Parent Child Testing
A test for a parent component should not be awareof the internal implementation of its children component. It is enough for it to just be aware the existence of the children components. For instance, to test the Parent component below:

```javascript
...
import Child from './Child' //contains a className .child-class

...
const Parent = (props) => {
  return (
    ...
    <Child />
  )
};

export default Parent;
```
:x: Parent should not have intimate knowledge of the Child component, there should be separate test for the Child component in order to prevent future change in Child component from causing a failure in test for Parent component
```javascript
...
import { shallow } from 'enzyme'
import Parent from './Parent'

it('should render Child component', () => {
  const component = shallow(<Parent/>);
  const child = component.find('.child-class');
  expect(child.length).toBe(1);
})
...
```javascript
:heavy_check_mark: It is enough to know of the existence of the child component
...
import { shallow } from 'enzyme'
import Parent from './Parent'
import Child from './Child'

it('should render Child component', () => {
  const component = shallow(<Parent/>);
  expect(component.find(Child).length).toBe(1);
})
...
```

### Bug
Whenever a bug is fixed, there should be a regression test
