# Rhino UI

## Table of Contents
- [Purpose](#purpose)
- [Why Rhino UI](#why-rhino-ui)
- [Features](#features)
- [Getting Started](#getting-started)
- [Rhino UI Packages](#rhino-ui-packages)
- [Contributing](#contributing)
- [Raising an Issue](#raising-an-issue)
- [License](#license)

[Rhino UI](https://github.com/rhinolabs/rhino-ui) is an open-source set of Frontend libraries designed to simplify the integration of UI components into developers' workflows. This collection includes libraries, components, design tokens, and React hooks, providing a comprehensive toolkit for building modern user interfaces.

### Purpose
Rhino UI aims to streamline the integration of UI components, reducing development time and effort for frontend projects. It addresses the need for a modular, efficient, and developer-friendly solution for building user interfaces.

### Why Rhino UI?
Rhino UI solves the challenge of repetitive setup tasks and inconsistent configurations by providing ready-to-use ESLint, Prettier, and build tool configurations. It also simplifies component testing and documentation, enhancing the overall development experience.

### Features
1. **Faster build times with Vite**
Rhino UI utilizes Vite as the build tool for the React component library (`@rhino-ui/components`). Leveraging Vite's faster build time and improved developer experience, Rhino UI maintains consistency through its Storybook CS53 setup. This ensures efficient development, testing, and documentation of UI components.

2.  **Consistent code formatting and linting with ESLint and Prettier configurations**
Setting up ESLint and Prettier for each project can be time-consuming. Rhino UI streamlines this process with its ESLint (`@rhino-ui/eslint-config`) and Prettier (`@rhino-ui/ts-config` for TypeScript projects) config modules. These configurations, located in the [libs](https://github.com/rhinolabs/rhino-ui/tree/main/libs) folder, are integrated into the [pnpm](https://github.com/rhinolabs/rhino-ui/blob/main/pnpm-workspace.yaml) workspace. This approach ensures consistency across projects, speeds up development, and maintains clean code.

3. **Efficient component development, testing, and documentation with Storybook CS53 setup**
Rhino UI uses Storybook CS53 setup, which is more efficient for developing, testing, and documenting UI components in isolation. This setup enhances collaboration and ensures the seamless integration of UI components into projects.

4. **Modular import pattern for optimized bundle size and performance**
Rhino UI adopts a modular import pattern, allowing components to be imported directly from their subpaths or as an aggregate. This flexibility reduces bundle size, optimizes performance, and supports individual component exports. Examples include:
   - Direct import: `import Alert from '@rhino-ui/components/alert'`
   - Aggregate import: `import { Alert } from '@rhino-ui/components'`

5. **Live testing of UI components with Docusaurus**
Rhino UI introduces the `docusaurus-live-codeblock` plugin, enabling live testing of UI components. This feature enhances the development experience by allowing developers to interactively test components within the documentation.


### Getting Started

To get started Rhino UI, follow these steps:

1. Install the required packages via npm:
   ```
   npm install @rhino-ui/hooks @rhino-ui/components
   ```

2. If you're using TypeScript, install the TypeScript configuration package:
   ```
   npm install @rhino-ui/ts-config --save-dev
   ```

**Note:** 
- `@rhino-ui/ts-config` is a workspace requirement in devDependencies, providing TypeScript configuration for Rhino UI projects.
- The babel compiler for the `design-tokens` package builds esmodules, not commonjs.

#### Prerequisites
- Node.js and npm installed

#### Example

```js
import React from 'react';
import { Button } from '@rhino-ui/components';

function App() {
  return (
    <div>
      <h1>Welcome to Rhino UI</h1>
      <Button onClick={() => alert('Button clicked!')}>Click me</Button>
    </div>
  );
}

export default App;
```

###  Rhino UI Packages
Rhino UI has two packages:

- [Components](https://github.com/rhinolabs/rhino-ui/tree/main/packages/components)
- [Design Tokens](https://github.com/rhinolabs/rhino-ui/tree/main/packages/design-tokens)

#### Components
The Components package `@rhino-ui/components` is a React component library. It offers a wide range of reusable UI components to accelerate frontend development while maintaining consistency and quality across applications.

- Install
```bash
yarn add @rhino-ui/components
```

- Import Global CSS
```bash
@import '@rhino-ui/components/dist/css/utilities.css'; // Utility classes -- REQUIRED
@import '@rhino-ui/components/dist/css/variables.css'; // CSS Variables -- REQUIRED
@import '@rhino-ui/components/dist/css/index.css'; // Component CSS -- REQUIRED
@import '@rhino-ui/components/dist/css/fonts.css'; // Included Font files -- OPTIONAL BUT ENCOURAGED
```
Importing the global reset is recommended for maintaining a consistent look across components:
```bash
@import '@rhino-ui/components/dist/css/reset.css'; // A Basic CSS Reset -- OPTIONAL BUT ENCOURAGED
```

**Usage**
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@rhino-ui/components';

function App() {
  return <Button>Hello World</Button>;
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

#### Design Tokens
The Design Tokens package `@rhino-ui/design-tokens` provides a central location to store shared attributes of the Rhino UI Design System. These attributes include colors, fonts, spacing, and more. Using [Amazon's Style Dictionary](https://amzn.github.io/style-dictionary/), it transforms attributes into usable variables for a variety of platforms.

- Install
```bash
npm install @rhino-ui/design-tokens
```

or

```bash
yarn add @rhino-ui/design-tokens

```

**Usage**

- SASS Variables
```scss
@import '~@rhino-ui/design-tokens/build/scss/tokens.scss';
```

- CSS Variables
```css
@import '~@rhino-ui/design-tokens/build/css/tokens.css';
```

- SASS Utility Classes
```scss
@import '~@rhino-ui/design-tokens/build/utilities/utilities-color.scss';
@import '~@rhino-ui/design-tokens/build/utilities/utilities-size.scss';
```

- CSS Utility Classes
```css
@import '~@rhino-ui/design-tokens/build/utilities/utilities-color.css';
@import '~@rhino-ui/design-tokens/build/utilities/utilities-size.css';
```

### Contributing
Please see our [Contributing Guidelines]() for details on how to contribute to Rhino UI and participate in our community.

### Raising an Issue
When raising an issue:

- Make sure the issue hasn't been raised yet.
- Tag issue accordingly using your best judgement. Do NOT create new tags. If you feel a new one is needed, raise it in your issue.
- If your issue is a bug, include screenshots or animated GIFs in your issue whenever needed (if issue is visual in nature).
- If your issue is a bug, include steps to reproduce, or link to reproducible issue, e.g.: Code Sandbox or similar. Please also provide any additional details including device, OS, browser, browser version etc.

### License
Rhino UI is licensed under the [MIT License](https://github.com/rhinolabs/rhino-ui/blob/main/LICENSE)