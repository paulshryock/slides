# Testing React Components

## Getting started

```bash
npm ci
npm start
```

- Slides: http://localhost:8080
  - Navigate slides with left and right arrow keys
- Storybook: http://localhost:6060
- Website using the React component: http://localhost:8080/site

## File structure

```bash
.
├── config  // Configuration files.
├── docs    // Documentation.
├── src     // Source code.
├── stories // Storybook stories.
└── tests   // Tests.
```

## Running tests

```bash
npm test

 PASS  tests/app.test.js
 PASS  tests/components/Button.test.js
 PASS  tests/lib/sum.test.js
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------|---------|----------|---------|---------|-------------------
All files       |   94.73 |      100 |      75 |   94.44 |
 js             |   91.66 |      100 |      50 |   91.66 |
  app.js        |      90 |      100 |      50 |      90 | 8
  components.js |     100 |      100 |     100 |     100 |
  lib.js        |     100 |      100 |     100 |     100 |
 js/components  |     100 |      100 |     100 |     100 |
  Button.js     |     100 |      100 |     100 |     100 |
 js/lib         |     100 |      100 |     100 |     100 |
  sum.js        |     100 |      100 |     100 |     100 |
----------------|---------|----------|---------|---------|-------------------

Test Suites: 3 passed, 3 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        1.363 s
Ran all test suites.
```
