import "./App.css";
import Greet from "./components/Greet";
import { Person, Product } from "./interfaces";

function App() {
  const firstPerson: Person = {
    id: 123,
    name: "Felipe",
  };
  const secondPerson: Person = {
    id: 456,
    name: "Susan",
  };
  return (
    <div className="App">
      <Greet person={firstPerson} />
    </div>
  );
}

export default App;
