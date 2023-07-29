import React from "react";
import { Person, Product } from "../interfaces";

type GreetProps = {
  person: Person;
};

export default function Greet(props: GreetProps) {
  return (
    <div>
      <h2>Hello {props.person.name}</h2>
    </div>
  );
}
