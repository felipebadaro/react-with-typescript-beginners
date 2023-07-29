import React from "react";
import { Person, Cat } from "../interfaces";

type HouseProps<C extends Cat, P extends Person> = {
  cats: C[];
  people: P[];
};

export default function House<C extends Cat, P extends Person>(
  props: HouseProps<C, P>
) {
  return (
    <div>
      <h2>Bicharada</h2>
      {props.people.map((person, i) => (
        <div key={i}>
          <p>
            {person.name} said {person.phrase}
          </p>
          <ul>
            {props.cats.map((cat, j) => (
              <li key={j}>
                {cat.name} said {cat.miau}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
