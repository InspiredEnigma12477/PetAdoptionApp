import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import SearchParams from "./SearchParams.jsx";

const App = () => {
  return (
    <StrictMode> {/*here strictmode is for preventing the unfamiliar behaviors which may occure due to upcoming updates of react */}
      <div>
        <h1>Adopt Me!</h1>
        <SearchParams />
      </div>
    </StrictMode>
  );
};
// eslint-disable-next-line no-undef
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
