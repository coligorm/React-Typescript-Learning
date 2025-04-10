# React: Using TypeScript

[LinkedIn Learning Course](https://www.linkedin.com/learning/react-using-typescript-23743818?contextUrn=urn%3Ali%3AlearningCollection%3A7315539718224445441)

## Key Points

- **Structured Development:** Combining TypeScript with React provides a more structured approach to JavaScript application development, making your code cleaner and easier to maintain.
- **Types and Components:** You'll learn about basic and complex types, as well as functional and stateful components in React.
- **Interfaces and Best Practices:** The course covers how to use TypeScript interfaces to improve your React code and reviews best practices.
- **Higher-Order Components:** Learn to implement higher-order components to reuse components while adding new functionality.

## React: Using TypeScript - Course Progress

- [X] Chapter 1: Setup and Basics
- [X] Chapter 2: First Steps
- [X] Chapter 3: Interfaces
- [X] Chapter 4: Hooks

---

# Learning React with TypeScript: Course Notes

---

## Chapter 1: Setup

> **Summary:**  
Learn how to set up a new React project with TypeScript and understand the benefits of using TypeScript with React.

### Creating a New React + TypeScript App

- Use the following command to scaffold a new app:
  ```bash
  npx create-react-app my-app --template typescript
  ```
- `npx` runs packages without installing them globally, avoiding version conflicts.

### Why TypeScript?

- Helps with **type safety** and **better tooling support** in JavaScript apps.
- Encourages catching errors at compile-time rather than runtime.

### React Import in `.tsx` Files

- Always add this line at the top when using React in `.tsx` files:
  ```tsx
  import React from 'react';
  ```

---

## Chapter 2: First Steps

> **Summary:**  
Covers the basics of using TypeScript in a React project, including type definitions and functional component syntax.

### Video Breakdown:

- *Introduction to TypeScript with React (2m 17s)*
- *Basic Types (4m 21s)*
- *Other Complex Types (4m 53s)*
- *Introduction to React Components (1m 6s)*
- *React Components Syntax (5m 27s)*

---

### Basic Types in TypeScript

- `string`
- `number`
- `boolean`
- `array` (technically an object)
  - `number[]` – array of numbers
  - `Array<string>` – generic array of strings

---

### Complex Types

- **Tuple**  
  Store multiple types in a fixed-length array.
  ```ts
  let aTuple: [string, number] = ["Hello", 20];
  ```

- **Enum**  
  Defines named constants.
  ```ts
  enum Code { First = 1, Second = 2 }
  ```

- **any**  
  Use only if you're unsure about a type (avoid when possible).

- **void**  
  Indicates no return value from a function.

---

### Functions in TypeScript

- Must include return type:
  ```ts
  const warning = (): void => {
    console.log('Warning');
  };
  ```

---

### React Functional Components

#### Overview

- Functional components are JS functions that return JSX (HTML-like).
- In modern React, we prefer functional over class components.

#### Syntax Guidelines

- Use `const` to declare.
- Component names must start with a **capital letter**.
- Define return types using `React.FC`.

#### Example:

```tsx
// With props
type Props = { name: string };

const MyComponent: React.FC<Props> = (props) => {
  return <div>{props.name}</div>;
};

// Without props
const MyComponentWithoutProps: React.FC = () => {
  return <div>MyComponentWithoutProps</div>;
};
```

#### React.FC

- `type React.FC<P = {}> = React.FunctionComponent<P>`
- `P` — props type
- `FC` — Functional Component

🔗 [React TypeScript Cheatsheet – Function Components](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components)

---

## Chapter 3: Interfaces

> **Summary:**  
Learn how to define and use interfaces to ensure type safety in props and state.

### Video Breakdown:
- *Introduction to Interfaces (3m 7s)*
- *Define Our State with TypeScript (5m 9s)*
- *Review Best Practices for Interfaces (1m 46s)*

---

### Why Use Interfaces?

- Define **shape and structure** of props or state.
- Used only at compile-time (no runtime cost).
- Improve code readability and maintainability.

---

### Key Concepts

- Define props using an interface before using them in a component.
- Use `?` to make props optional.
- Use `readonly` to create immutable props.
- Interfaces can describe both props and state.

---

### Using State with TypeScript

```tsx
const [userName, setUserName] = useState<string>('User');
```

This code:
- Declares a `userName` key in state.
- Provides a function `setUserName` to update the state.
- Specifies the type (`string`) using TypeScript.
- Sets a default value `'User'`.

---

## Chapter 4: Hooks

> **Summary:**  
Understand how to use React hooks like `useEffect` and Context API in a TypeScript environment.

### Video Breakdown:
- *Overview of Hooks with TypeScript (2m 16s)*
- *Implementation of useEffect with TypeScript (4m 19s)*
- *Implementation of Context with TypeScript (8m 37s)*

---

### Hooks Overview

- Enable state and side-effect management in functional components.
- Support functional programming principles.
- Can be reused or customized across components.

---

### `useEffect` Hook

- Runs side effects **after** component renders.
- Re-runs if dependency values change.

```tsx
useEffect(() => {
  console.log("Component mounted or updated");
}, [/* dependencies */]);
```

---

### Context API with TypeScript

#### Steps to Implement:

1. Create a new context file (e.g. `UserContext.tsx`).
2. Move interfaces from component files to context file.
3. Create and export context:
   ```tsx
   export const UserContext = React.createContext<UserContextType>(/* default value */);
   ```

4. In `App.tsx`, wrap your app with the provider:
   ```tsx
   <UserContext.Provider value={/* your context value */}>
     {/* children */}
   </UserContext.Provider>
   ```

#### Why Use Context?

- Makes global data accessible across all components.
- Reduces the need for prop drilling.
- Improves maintainability and clarity.
