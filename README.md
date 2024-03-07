# Rhino UI

## Table of Contents
- [What is RhinoUI](#what-is-rhinoui)
- [Why RhinoUI](#why-rhinoui)
- [How to Contribute](#how-to-contribute)
- [How to Raise an Issue](#how-to-raise-an-issue)
- [License](#license)

### What is RhinoUI
[RhinoUI](https://github.com/rhinolabs/rhino-ui) is an open-source set of Frontend libraries designed to simplify the integration of UI components into developers' workflows. This collection includes libraries, components, design tokens, and React hooks, providing a comprehensive toolkit for building modern user interfaces.

### Why RhinoUI?
RhinoUI aims to streamline the integration of UI components, providing a modular, efficient, and developer-friendly solution for frontend projects. With ready-to-use configurations, RhinoUI eliminates repetitive setup tasks and ensures consistency across projects, without sacrificing simplicity.

### Features
1. **Faster build times with Vite**
RhinoUI utilizes [Vite](https://vitejs.dev/) as the build tool for the React component library (`@rhino-ui/components`). Leveraging Vite's faster build time and improved developer experience ensures efficient development, testing, and documentation of UI components.

2.  **Consistent code formatting and linting with ESLint and Prettier configurations**
Setting up ESLint and Prettier for each project can be time-consuming. RhinoUI streamlines this process with its ESLint (`@rhino-ui/eslint-config`) and Prettier (`@rhino-ui/ts-config` for TypeScript projects) config modules. These configurations, located in the [libs](https://github.com/rhinolabs/rhino-ui/tree/main/libs) folder, are integrated into the [pnpm](https://github.com/rhinolabs/rhino-ui/blob/main/pnpm-workspace.yaml) workspace. This approach ensures consistency across projects, speeds up development, and maintains clean code.

 _However, it's important to note that these configurations are not available for public usage and are intended for RhinoUI development only._

3. **Modular import pattern for optimized bundle size and performance**
RhinoUI adopts a modular import pattern, allowing components to be imported directly from their subpaths or as an aggregate. This flexibility reduces bundle size, optimizes performance, and supports individual component exports. Examples include:
   - Direct import: `import Alert from '@rhino-ui/components/alert'`
   - Aggregate import: `import { Alert } from '@rhino-ui/components'`

### Getting Started

To get started RhinoUI, follow these steps:

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

###  RhinoUI Packages
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

### How to Contribute
Contributions to RhinoUI are welcome!✅

RhinoUI uses pnpm—a performant npm package manager and is integrated into its `pnpm workspace`. This optimizes package installation and dependency management. 
To install `pnpm`, follow this [guide](https://pnpm.io/installation).

Whether you're fixing a bug, or adding a new feature, please see our [Contributing Guidelines](https://github.com/rhinolabs/rhino-ui/blob/6b5f99bbf4a61c9f1b748722501890a60af1f604/CODE_OF_CONDUCT.md) for details on how to contribute to RhinoUI and participate in our community.

### How to Raise an Issue
When raising an issue:

- Make sure the issue hasn't been raised yet.
- Tag issue accordingly using your best judgement. Do NOT create new tags. If you feel a new one is needed, raise it in your issue.
- If your issue is a bug, include screenshots or animated GIFs in your issue whenever needed (if issue is visual in nature).
- If your issue is a bug, include steps to reproduce, or link to reproducible issue, e.g.: Code Sandbox or similar. Please also provide any additional details including device, OS, browser, browser version etc.

### License
RhinoUI is licensed under the [MIT License](https://github.com/rhinolabs/rhino-ui/blob/main/LICENSE)