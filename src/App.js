import { useContext } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { CounterContext } from "./context/Counter";


function App() {
  const counterState = useContext(CounterContext);
  console.log("state", counterState);

  return (
    <div>
      <h2>Context API in ReactJS</h2>
      <h3>Counter is {counterState.count}</h3>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
