import React from "react";
// import { createRoot } from "react-dom";
import ReactDOM from "react-dom/client";
import Pet from "./Pet.jsx";
import SearchParams from "./SearchParams.jsx";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Shiro",
  //     animal: "Dog",
  //     breed: "Samoyed",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Maya",
  //     animal: "Cat",
  //     breed: "Ragdoll",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Magru",
  //     animal: "Crocodile",
  //     breed: "Alligator",
  //   }),
  // ]);
  // here we are going to replace it in form of jsx
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Shiro" animal="Dog" breed="Samoyed" />
      <Pet name="Maya" animal="Cat" breed="Ragdoll" />
      <Pet name="Magru" animal="Crocodile" breed="Alligator" /> */}

      <SearchParams />
    </div>
  );
};

// eslint-disable-next-line no-undef
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
