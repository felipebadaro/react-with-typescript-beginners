import "./App.css";
import House from "./components/House";
import { Person, Cat } from "./interfaces";

function App() {
  const firstPerson: Person = {
    id: 1,
    name: "Felipe",
    phrase: "Bonito!",
  };
  const secondPerson: Person = {
    id: 2,
    name: "Susan",
    phrase: "Filhaaa...",
  };
  const firstCat: Cat = {
    id: 1,
    name: "Shakespeare",
    age: 12,
    miau: "Uahh",
  };

  const secondCat: Cat = {
    id: 2,
    name: "Lakshmi",
    age: 8,
    miau: "Ah",
  };

  const thirdCat: Cat = {
    id: 3,
    name: "Petit Gateau",
    age: 6,
    miau: "Uahhhhhh prrrr",
  };

  const people: Person[] = [firstPerson, secondPerson];
  const cats: Cat[] = [firstCat, secondCat, thirdCat];

  return (
    <div className="App">
      <House cats={cats} people={people}></House>
    </div>
  );
}

export default App;
