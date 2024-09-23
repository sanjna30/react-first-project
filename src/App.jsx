// import React from 'react'

// function App() {
//   return (
//     <div>hello </div>
//   )
// }
const App = () =>{
let info = [{
  name: 'sanjana',
  age: 20,
  gender:'male'
}];

let x = info.map((item,index) => {
  return (
    <div key={index}>

              <h1>Name:{item.name}</h1>
              <h1>Age:{item.age}</h1>
              <h1>Gender:{item.gender}</h1>
              
    </div>
  );
});
}
export default App