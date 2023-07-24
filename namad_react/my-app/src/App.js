import {useState} from "react";

function App() {
 const [toDo, setToDo] = useState("");
 const [toDos, setToDos] = useState([]);
 const onChange = (event) => {setToDo(event.target.value);}
const onSubmited = (event) => {
     event.preventDefault()
     if(toDo === "") return;
     setToDo("");
     setToDos((currentArray) => [toDo, ...currentArray])
  }
 
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmited}>
        <input value={toDo} onChange={onChange} type="text" placeholder="wrire your to do..."/>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index)=> (
        <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  
    );
};

export default App;
