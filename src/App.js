import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Increment } from "./actions";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Counter :{counter}</h2>
      <button onClick={() => dispatch(Increment(5))}>5+</button>
      <button>-</button>
    </div>
  );
}

export default App;
