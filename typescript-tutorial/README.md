# React & TypeScript - Course for Beginners

[YouTube Tutorial Link](https://www.youtube.com/watch?v=FJDVKeh7RJI)

## Intro

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&pp=0gcJCcUCDuyUWbzu)

[TypeScript Docs](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

## TypeScript vs JavaScript

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=31s)

TypeScript is a superset of JavaScript. 
TypeScript is JavaScript that scales

## Project Overview

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=57s)

To-do project called Taskify.

Drag animation to complete tasks, or select tick to complete.

Can edit tasks and delete tasks.

## Setup React Typescript Project

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=147s&pp=0gcJCcUCDuyUWbzu)

Going to NPM Repo and initialise new react app with TypeScript dependencies and creates all files for typescript instead of JavaScript.
```
npx create-react-app [app-name] --template typescript
```
If you already have a JavaScript app, you can run:
```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```
To start app:
```
npm start
```
Remove Files we don't need
- `reportWebVitals.ts`
- `setupTests.ts`
- `logo.svg`
- `App.test.tsx`

## Basic Types in Typescript

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=297s)

In TS, you need to define the type of the variable.

TS contains strict type checking:
```
let name: string;
let age: number;
```
**Tuple**
Tuple contains a couple of values of different types
```
let role: [number,string];
```

## Object Type

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=450s)

Defining an Object:
```
let person: Object
```
*Note: Not the most recommended way to declare an Object.* 

Better way to define an Object: 
```
type Person = {
	name: string;
	age: number;
}
```

*Note: Objects get capital letters when declaring.*
```
let person : Person = {
	name: 'Colin',
	age: 26
}
```

## Optional Field in Objects

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=543s)

You can make a field **optional** with the `?` operator
```
type Person = {
	name: string;
	age?: number;
}
```

Now when creating a new Person Object, we don't need to state their age.
```
let person : Person = {
	name: 'Colin'
}
```
This will no longer give us an error.

## Array of Object Type

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=560s)

We can also create an Array of Objects.
```
let lotsOfPeople: Person[];
```
Similar to declaring a regular array.

## Union Type

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=595s)

You can declare a variable with multiple types using **Union**.

If we wanted to give our age as a number or a string we could type:
```
let age: number | string;
```
Using the `|` operator, this works as "Or".

## Function Types

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=625s)

If we want to define a function
```
function printName(name:string) {
	console.log(name);
}
```
*Note: The function requires a type for the parameter being passed to it* 

**What if we wanted to declare what type our function is?**
```
let printName: Function;
```
*Note: Similarly to Object, there is a better way to assign a type to a function.*

```
let printNmae: (name:string) => void;
```
*Here, we stated that the function requires a string and returns void (as it is just printing a name, and not returning it)*

## Any Type

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=726s)

You can give `any` type to any variable, Object or Function.

However, it is not recommended as the purpose of TS is to have types assigned to variables.

A better way is to use the `unknown` type.

## unknown and never Type

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=755s)
```
let personName: unknown;
```
You can also have type `never`.

We would use this if we are unsure what type the function will return, or if it will return anything at all
```
let printName: (name:string) => never
```
*Note: The difference between void and never:
- ***Void:** *returns undefined*
- ***Never*** *returns nothing* 

## Aliases ( type and interface )

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=772s)

Aliases come in two forms - type and interface.

It is good practise to define an Object in an interface.

The difference?
- **Type:** is more versatile, allowing unions, intersections, and more complex type definitions.
- **Interface:** is extendable and primarily for object shapes

## Extending types

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=876s)

For instance, if we define two types - X and Y:
```
type X = {
	a: string;
	b: number;
}
type Y = X & {
	c: string;
	d: number;
}
```
We can use the properties in type X, inside type Y.

Type Y will contain all the properties of X as well as the newly added properties that are defined in Y.

Now if we try to define a variable `y` as type `Y`, below we get an error:
```
let y: Y = {
	c: 'c string',
	d: 42
}
```
We get an error because we did not define the X properties/values (a &b) that are required when creating a variable of type Y.

We need to define y as:
```
let y: Y = {
	a: a strign
	b: 21
	c: 'c string',
	d: 42
}
```

## Extending interface

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=953s)

Interfaces are easier to extend. We can create a new `Guy` interface by extending the earlier `Person` interface:
```
interface Guy extends Person {
	profession: string;
}
```

## Extending type with interface ( and vice versa )

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=1005s)

You can also extend an Interface with a type (`extends`) and

You can extend a type with an interface (`&`) using the same syntax above

## Let vs Constant

- `let` when the variable's value can be changed
- `const` when the variable's value should not be changed

## Functional Component type

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=1102s)

Function Components are defined as:
```
const App: React.FC = () => {}
```

## Creating Input UI

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=1159s&pp=0gcJCcUCDuyUWbzu)

typing `rafce` generates boilerplate for React 

Below is BEM convention of writing CSS class names
```
<input type='input' placeholder='Enter a task' className='input_box' />
```

### CSS Tips

Fun wiggly font:
```
@import url("https://fonts.googleapis.com/css2?family=Neucha&display=swap");
```

Always content displayed at the top
```
z-index: 1;
```

When the screen is smaller than 800px you can adjust using:
```
@media (max-width: 800px)
```

Creates a neat collumn style for your page:
```
display: flex;
flex-direction: column;
align-items: center;
```

Using `position: relative` for the parent component
Then `position: absolute;` for the child component, places the child inside the parent

Nice blue colour:
```
background-color: #2f74c0;
```

Lighten the button when hover over the button
```
.button:hover {
    background-color: #388ae2;
}
```

Button slightly decreases in size when clicked
```
.button:active {
    transform: scale(0.8);
    box-shadow: 0 0 5px black;
}
```

## useState Hook with Typescript

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=1582s)


## PropTypes - Passing props to component

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=1659s)

You can declare your Props in an Interface, then pass the `Props` type when creating your component:
```
interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
```
*Here, the type for component `InputField` is `React.FC` which requires `Props` to be passed to it, in the form of  `{ todo, setTodo }` *

## Reusable to-do interface

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=1834s)

Creating a separate model for the to-do so it can be reused.

This model interface, needs to be exported
```
export interface Todo
```

Then in the main `App.tsx` we want to create a new `state` to keep track of all our to-dos.
```
const [todoList, setTodoList] = useState<Todo[]>([]);
```
*Here we have created a new `state` of to-do, whose type is an Array of to-dos `<Todo[]>`*

## Passing function as props

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=1981s)

We can also pass functions as props.

First we declare the function in the props.
```
handleAdd: () => void;
```

And we want to pass this function into our `InputField`
```
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
```
Just like we did for the `todo` and `setTodo`.

We want to trigger this `handleAdd` on the Go button.

The Go button is of type `submit`
```
<button className='input_submit' type='submit'>
	Go
</button>
```

So we add the `handleAdd` function to the top of the `input form`:
```
<form className='input' onSubmit={ handleAdd }>
```

Now, when we click on the Go button, our `handleAdd` function is triggered.

However, under the hood, this is triggering a refresh of our webpage.

To stop this we take an event variable in our `handleAdd` function like so:

## Event Type in Typescript

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=2054s)

`e` is used as an event. 
Events can have many types depending on your usage.

## Create Todo Logic

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=2120s)

## useRef Hook with Typescript

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=2274s)

useRef is when we are hooking a components HTML
```
const inputRef = useRef<HTMLInputElement>(null);
```
Because we gave the `useRef` a type of `HTMLInputElement`.

Now when we go to use the `inputRef` inside our `onSubmit` function, we get prompted with different `HTMLInputElements`. 

We are using the `blur` effect, so that when we submit the input in the form, the darkened background disappears until we click on the input box again.
```
inputRef.current?.blur();
```

## TodoList Component

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=2441s&pp=0gcJCcUCDuyUWbzu)

You can install React Icons to display in your apps, like a check mark, rubbish bin etc.
[React Icons](https://react-icons.github.io/react-icons/)
```
npm install react-icons
```

There are different categories of icons. For this project, we are using:
- `AiFillEdit`
- `AiFillDelete`
- `MdDone`
You can tell what category of icon it is by the leading letters.

So we must import:
- `'react-icons/ai'`
- `'react-icons/md'`

## Passing props to SingleTodo

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=2727s)

## SingleTodo Component

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=2834s)

## Todo Complete Functionality

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=3143s)

Updating a todo as done:
```
const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
```
*Explained: the `handleDone` is taking the unique `id` and calling `setTodos`.
if the `todo.id` is equal to the `id` that is being handles*
*It is then mapping the `todo` `isDone` and negatiting it with the `!` operator*
*And we are telling the function that the type is `todo`*

## Delete Todo Functionality

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=3296s)

## Edit Todo Functionality

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=3355s)

For the edit to-do, we create two `useState`'s
- first is `edit` - to keep track if the edit mode it on/off
- second `editTodo` - to keep the value of the editor to-do text
```
 const [edit, setEdit] = useState<boolean>(false);
 const [editTodo, setEditTodo] = useState<string>(todo.todo);
```
`edit` is set to false to begin, as edit mode should be off until edit is clicked
`editTodo` is set to `todo.todo` which is the initial string containing the text we want to edit

## Edit Bug Fix

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=3725s)

We create another `useRef` to handle the cursor not going into the input bar automatically when we click edit.

Create the `inputRef`
```
const inputRef = useRef<HTMLInputElement>(null);
```
Again, with type `HTMLInputElement` as it changing the state of a HTML element.

Then we `useEffect` to `focus` on the edit input box:
```
 useEffect(() => {
    inputRef.current?.focus();
  }, [edit]
```

## useReducer Hook with Typescript

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=3803s)

When using `useReducer`, we need to provide it an initial value.
A reduce takes a state and an action.
The state will be an Array of To-dos
The actions will be:
- Add to-do
- Remove to-do
- Done

Create a type for Actions. Each action will be performed separately.  
An action has two types, the type of action and the payload.
- Add type sends a string to be added
- Remove type sends a to-do id to be removed
- Done type sends a number

## Homework for me

[Link](https://www.youtube.com/watch?v=FJDVKeh7RJI&t=4031s)

Implement the `TodoReducer`  inside the app. 
There is a video on explaining reducers [here](https://www.youtube.com/watch?v=HptuMAUaNGk)
