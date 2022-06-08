module.exports = [
  {
    index: 1,
    title: 'React',
    cover: true,
    description: 'JavaScript UI library',
    content: `<ul>
      <li>JavaScript library for rendering app interfaces</li>
      <li>Encourages the use of isolated components</li>
      <li>The line between an app and UI components often gets blurred</li>
    </ul>`,
    not: [
      'App framework',
    ],
  },
  {
    index: 2,
    title: 'Jest',
    cover: true,
    description: 'JavaScript testing framework',
    content: `<ul>
      <li>Great for writing unit tests of JavaScript functions and classes</li>
      <li>Encourages writing code as smaller isolated units</li>
      <li>Encourages a separation between app and library code</li>
      <li>Does not natively have access to the DOM since it runs on Node</li>
    </ul>`,
    not: [
      'A guarantee that your code works',
    ],
  },
  {
    index: 3,
    title: 'JSDOM',
    cover: true,
    description: 'DOM simulator for Node.js',
    content: `<ul>
      <li>Simulates the DOM and <code>window</code> global in Node</li>
      <li>Provides access to DOM API's like <code>document.querySelector()</code></li>
      <li>Useful for things like parsing and transforming HTML</li>
    </ul>`,
    not: [
      'A testing tool',
    ],
  },
  {
    index: 4,
    title: 'Testing Library',
    cover: true,
    description: 'DOM testing utility',
    content: `<ul>
      <li>Abstraction of JSDOM under the hood</li>
      <li>Provides an excellent API for testing a simulated DOM</li>
      <li>Supplements a test runner like Jest</li>
    </ul>`,
    not: [
      'Test runner',
      'Test framework',
    ],
  },
  {
    index: 5,
    title: 'React Testing Library',
    cover: true,
    description: 'DOM testing utility for React components',
    content: `<ul>
      <li>Testing Library, but for React components</li>
      <li>Renders isolated React components and makes them testable</li>
    </ul>`,
  },
  {
    index: 6,
    title: 'Storybook',
    cover: true,
    description: 'UI component rendering environment',
    content: `<ul>
      <li>Spins up an app for viewing isolated UI components</li>
      <li>Renders each component with any state or content</li>
      <li>Encourages a separation between app and components</li>
      <li>Provides a means for visually testing components on-demand</li>
    </ul>`,
    not: [
      'Component library',
      'Test runner or test framework',
    ],
  },
  {
    index: 7,
    title: 'Test a React component',
    content: `<ol>
      <li>Install dependencies</li>
      <li>Setup and configure tooling</li>
      <li>Write tests</li>
      <li>Run tests</li>
    </ol>`,
  },
  {
    index: 8,
    title: 'Install dependencies',
    layout: 'columns',
    content: `<pre><code>nvm use 18

mkdir -p my-project
cd my-project

npm init --yes
npm install -D react \\
  react-dom \\
  jest \\
  jest-environment-jsdom \\
  @testing-library/react \\
  @testing-library/jest-dom \\
  @babel/core \\
  @babel/preset-react \\
  babel-jest
</code></pre>
<pre><code>\/\/ package.json
{
  "scripts": {
    "test": "jest",
    "test:watch": "npm test -- --watch"
  },
  "devDependencies": {
    ...
  }
}
</code></pre>`,
  },
  {
    index: 9,
    title: 'Setup and configure tooling',
    layout: 'columns',
    content: `<pre><code>\/\/ jest.config.js
module.exports = {
  bail: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**"],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  coverageThreshold: {
    global: { statements: 100, branches: 100, functions: 100, lines: 100 },
  },
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
}</code></pre>
<pre><code>\/\/ babel.config.js
module.exports = {
  presets: ['@babel/preset-react'],
}</code></pre>`,
  },
  {
    index: 10,
    title: 'Write tests',
    content: `<ul>
      <li>Describe the unit being tested</li>
      <li>Consider business requirements and user stories as criteria</li>
      <li>Setup conditions for the test, then make assertions or expectations</li>
      <li>Tests are not source code; put them in <code>/tests</code></li>
    </ul>`,
  },
  {
    index: 11,
    title: 'Run tests',
    content: `<ul>
      <li>On-demand: <code>npm test</code></li>
      <li>Watch for changes: <code>npm run test:watch</code></li>
      <li>Git hooks: Husky pre-commit hook</li>
      <li>Continuous integration: Bitbucket and/or Jenkins pipeline</li>
    </ul>`,
  },
  {
    index: 12,
    title: 'View a React component story',
    content: `<ol>
      <li>Install dependencies</li>
      <li>Setup and configure tooling</li>
      <li>Write stories</li>
      <li>Run Storybook</li>
    </ol>`,
  },
  {
    index: 13,
    title: 'Install dependencies',
    content: `<pre><code>npx init storybook</code></pre>
<pre><code>\/\/ package.json
{
  "scripts": {
    "compile:storybook": "NODE_OPTIONS=--openssl-legacy-provider build-storybook --config-dir=config/storybook",
    "serve:storybook": "NODE_OPTIONS=--openssl-legacy-provider start-storybook --config-dir=config/storybook --port=6060"
  },
  "devDependencies": {
    ...
  }
}
</code></pre>`,
  },
  {
    index: 14,
    title: 'Setup and configure tooling',
    layout: 'columns',
    content: `<pre><code>\/\/ config/storybook/main.js
module.exports = {
  'stories': [
    '../../stories/**/*.stories.mdx',
    '../../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  'framework': '@storybook/react'
}</code></pre>
<pre><code>\/\/ config/storybook/preview.js
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}</code></pre>`,
  },
  {
    index: 15,
    title: 'Write stories',
    content: `<ul>
      <li>List the stories for each component</li>
      <li>Consider business requirements and user stories as criteria</li>
      <li>Setup a template and instantiate with different args for each story</li>
      <li>Stories are not source code; put them in <code>/stories</code></li>
    </ul>`,
  },
  {
    index: 16,
    title: 'Run Storybook',
    content: `<ul>
      <li>Compile on-demand: <code>npm run compile:storybook</code></li>
      <li>Serve and watch for changes: <code>npm run serve:storybook</code></li>
      <li>Git hooks: Husky pre-commit hook</li>
      <li>Continuous integration: Bitbucket and/or Jenkins pipeline</li>
    </ul>`,
  },
  {
    index: 17,
    title: 'Checkout the repo',
    content: '<p><a href="https://github.com/paulshryock/testing-react-components">github.com/paulshryock/testing-react-components</a></p>',
  },
]
