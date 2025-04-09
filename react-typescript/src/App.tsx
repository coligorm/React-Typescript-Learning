import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';

// function App() {
//   let stringValue: string = 'Hello World';
//   let numberValue: number = 34;
//   let booleanValue: boolean = true;
//   let numberArray: number[] = [1, 2, 3];
//   let stringArray: Array<string> = ["An Array ", "2"];
//   let tupleValue: [string, number] = ["Tuple ", 1];
//   enum EnumValue { first = 1, second = 2, third = 3}

//   // To display an enum, it must to converted to an array of values
// const enumArray = Object.keys(EnumValue).filter(text => isNaN(Number(text)));
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           The value {stringValue} is of {typeof stringValue} type! <br></br>
//           The value {numberValue} is of {typeof numberValue} type!<br></br>
//           The value {booleanValue} is of {typeof booleanValue} type!<br></br>
//           The value {numberArray} is of {typeof numberArray} type!<br></br>
//           The first value inside { numberArray } is of { typeof numberArray[0] } type!<br></br>
//           The value {stringArray} is of {typeof stringArray} type!<br></br>
//           The first value inside { stringArray } is of { typeof stringArray[0] } type!<br></br>
//           The value {tupleValue} is of {typeof tupleValue} type!<br></br>
//           The first value inside {tupleValue} is of {typeof tupleValue[0]} type!<br></br>
//           The second value inside {tupleValue} is of {typeof tupleValue[1]} type!<br></br>
//           {/* Then the enum must to mapped for each text and corresponding numeric value */}
//           <ul>
//             {enumArray.map((text) => {
//               const num = EnumValue[text as keyof typeof EnumValue];
//               return (
//                 <li>
//                   {text} - {num}
//                 </li>
//               );
//             })}
//           </ul>
//           The value { EnumValue['second'] } is of { typeof EnumValue['second'] } type!<br></br>
//         </p>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>TypeScript is cool</h1>
        <Message message='Hello' myname='Colin' />
        </header>
    </div>
  )
}

export default App;
