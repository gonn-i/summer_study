import Button from "./button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Contunue"}/>
    </div>
  );
}

export default App;