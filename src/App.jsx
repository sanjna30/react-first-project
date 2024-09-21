import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  let data = "hey hello";
  let subject = ["English","Hindi"];
  let profile = {
    name: "Sanajana Meena",
    age: 23,
    hobbies: "Reading coding"
  }
  return (
    
    <div>
       <h1>{data}</h1>
       <h1>{subject}</h1>
       <h1>{profile.name}</h1>
       <h1>{profile.age}</h1>
       <h1>{profile.hobbies}</h1>
    </div>

  )
}

export default App;