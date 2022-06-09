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
    title: 'Test a JavaScript function',
    description: 'With Jest',
    content: `<ol>
      <li>Install dependencies</li>
      <li>Setup and configure tooling</li>
      <li>Write tests (<a href="https://jestjs.io/docs/api">Jest documentation</a>)</li>
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

git init

npm init --yes
npm install -D jest
</code></pre>
<pre><code>\/\/ package.json
{
  ...,
  "scripts": {
    "test": "jest --config=config/jest.config.js",
    "test:watch": "npm test -- --watch"
  }
}
</code></pre>`,
  },
  {
    index: 9,
    title: 'Setup and configure tooling',
    content: `<pre><code>\/\/ config/jest.config.js
module.exports = {
  bail: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: { statements: 100, branches: 100, functions: 100, lines: 100 },
  },
  rootDir: '../',
  testEnvironment: "node",
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
    title: 'Test a React component',
    description: 'With Jest and Testing Library',
    content: `<ol>
      <li>Install dependencies</li>
      <li>Setup and configure tooling</li>
      <li>Write tests (<a href="https://testing-library.com/docs/react-testing-library/intro">Testing Library documentation</a>)</li>
      <li>Run tests</li>
    </ol>`,
  },
  {
    index: 13,
    title: 'Install dependencies',
    content: `<ul>
  <li>Babel for transpiling JSX to JS</li>
  <li>Testing Library for testing a simulated DOM</li>
  <li>Some plugins to connect everything</li>
</ul>
<pre><code>npm install -D react \\
  react-dom \\
  @babel/core \\
  @babel/preset-react \\
  babel-jest \\
  @testing-library/react \\
  @testing-library/jest-dom \\
  jest-environment-jsdom</code></pre>`,
  },
  {
    index: 14,
    title: 'Setup and configure tooling',
    layout: 'columns',
    content: `<pre><code>\/\/ config/jest.config.js
module.exports = {
  ...,
  coverageProvider: "babel",
  testEnvironment: "jsdom",
  transform: {
    "^.+\.jsx?$": "babel-jest",
  },
}</code></pre>
<pre><code>\/\/ package.json
{
  ...,
  "babel": {
    "presets": ["@babel/preset-react"]
  }
}
</code></pre>`,
  },
  {
    index: 15,
    title: 'View a React component story',
    description: 'With Storybook',
    content: `<ol>
      <li>Install dependencies</li>
      <li>Setup and configure tooling</li>
      <li>Write stories (<a href="https://storybook.js.org/docs/react/get-started/introduction">Storybook documentation</a>)</li>
      <li>Run Storybook</li>
    </ol>`,
  },
  {
    index: 16,
    title: 'Install dependencies',
    content: `<pre><code>npx storybook init</code></pre>
<p>Replace \`storybook\` and \`build-storybook\` scripts and move configs files.</p>
<pre><code>\/\/ package.json
{
  "scripts": {
    ...,
    "compile:storybook": "NODE_OPTIONS=--openssl-legacy-provider build-storybook --config-dir=config/storybook",
    "serve:storybook": "NODE_OPTIONS=--openssl-legacy-provider start-storybook --config-dir=config/storybook --port=6060"
  }
}
</code></pre>`,
  },
  {
    index: 17,
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
    index: 18,
    title: 'Write stories',
    content: `<ul>
      <li>List the stories for each component</li>
      <li>Consider business requirements and user stories as criteria</li>
      <li>Setup a template and instantiate with different args for each story</li>
      <li>Stories are not source code; put them in <code>/stories</code>
        <ul>
          <li>Move <code>.storybook</code> to <code>config/storybook</code></li>
          <li>In <code>config/storybook/main.js</code> update <code>stories</code> paths:<br />
            <code>../src</code> to <code>../../stories</code></li>
        </ul>
      </li>
    </ul>`,
  },
  {
    index: 19,
    title: 'Run Storybook',
    content: `<ul>
      <li>Compile on-demand: <code>npm run compile:storybook</code></li>
      <li>Serve and watch for changes: <code>npm run serve:storybook</code></li>
      <li>Git hooks: Husky pre-commit hook</li>
      <li>Continuous integration: Bitbucket and/or Jenkins pipeline</li>
    </ul>`,
  },
  {
    index: 20,
    title: 'Checkout the repo',
    content: '<p><a href="https://github.com/paulshryock/testing-react-components">github.com/paulshryock/testing-react-components</a></p>',
  },
]
