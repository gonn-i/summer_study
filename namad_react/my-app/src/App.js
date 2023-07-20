import {useEffect, useState} from "react";

function Hello () {
  useEffect (()=> {
    console.log("hi :)");
    return ()=> {console.log("bye :(");}
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const[counter,setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setCounter((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  const onDiff = () => setShowing((prev) => !prev); 
  console.log("i run all the time");

  useEffect( () => {
    console.log("CALL THE API ...")
  }, []);

  useEffect( () => {
    console.log("I riun when 'keybord & counter' changes");
  }, [keyword,counter]);

  return (
    <div>
      <input 
        value={keyword} 
        type="text" 
        placeholder="Search here ..." 
        onChange={onChange}/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
      <button onClick={onDiff}>{showing? "Hide" : "Show"}</button>
      {showing? <Hello/>: null}
    </div>
  
    );
};

export default App;
