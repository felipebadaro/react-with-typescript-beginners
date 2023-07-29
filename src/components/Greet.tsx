import React from "react";

type GreetProps = {
  name: String;
};

export default function Greet(props: GreetProps) {
  return (
    <div>
      <h2>Hello {props.name}</h2>
    </div>
  );
}
