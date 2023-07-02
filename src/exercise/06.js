// // Basic Forms
// // http://localhost:3000/isolated/exercise/06.js

// import * as React from 'react'
// import { useRef, useState } from 'react';

// function UsernameForm({onSubmitUsername}) {

//   const nameRef = useRef(undefined);
//   const [valid, setValid] = useState(null);

//   // 🐨 add a submit event handler here (`handleSubmit`).
//   // 💰 Make sure to accept the `event` as an argument and call
//   // `event.preventDefault()` to prevent the default behavior of form submit
//   // events (which refreshes the page).
//   // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
//   //
//   // 🐨 get the value from the username input (using whichever method
//   // you prefer from the options mentioned in the instructions)
//   // 💰 For example: event.target.elements[0].value
//   // 🐨 Call `onSubmitUsername` with the value of the input

//   // 🐨 add the onSubmit handler to the <form> below

//   // 🐨 make sure to associate the label to the input.
//   // to do so, set the value of 'htmlFor' prop of the label to the id of input
//   return (
//     <form 
//     onSubmit={(event)=>{
//       event.preventDefault();
//       onSubmitUsername(nameRef.current.value);
      
//       // console.log(event.target.elements[0].value);
//       // console.log(event.target[0].value);
//       // console.log(event.nativeEvent.target[0].value);
      
//       // onSubmitUsername(event.target.elements[0].value);
//     }}>
//       <div>
//         <label htmlFor="nameRef">Username:</label>
//         <input 
//         id="nameRef" 
//         type="text" 
//         ref={nameRef}
//         onChange={(event)=>{
//           event.preventDefault();
//           if(event.target?.value !== event.target?.value?.toLowerCase()){
//             setValid("Username must be lower case");
//           }else{
//             setValid(null);
//           }
//         }} />
//       </div>
//       {valid? <div role="alert" style={{color: "red"}}>{valid}</div>: null}
//       {valid 
//         ? <button type="submit" disabled={true}>Submit</button> 
//         : <button type="submit" disabled={false}>Submit</button> 
//       } 
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// export default App


// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('');

  return (
    <form 
    onSubmit={(event)=>{
      event.preventDefault();
      onSubmitUsername(username);
    }}>
      <div>
        <label htmlFor="nameRef">Username:</label>
        <input 
          id="nameRef" 
          type="text" 
          value={username}
          onChange={(event)=>{
            event.preventDefault();
            setUsername(event.target?.value?.toLowerCase());
          }} 
        />
      </div>
      <button type="submit">Submit</button> 
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
