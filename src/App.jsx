// import React, { StrictMode } from "react";
// import { createRoot } from "react-dom";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Pet from "./Pet.jsx";
import SearchParams from "./SearchParams.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./Details.jsx";

//cacheTime determines for how long a certain response is supposed to stay in cache before it gets garbage collected
//staleTime determines for how long a certain response will still be considered fresh (or not stale), dismissing the need for a new request.
//cacheTime relates to the expiration of a specific value, while staleTime will be expiring the validity of a certain query.

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

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
  // <StrictMode> {/*here strictmode is for preventing the unfamiliar behaviors which may occure due to upcoming updates of react */}

  //here its the old way without using the BrowserRoutes
  // <div>
  //   <h1>Adopt Me!</h1>
  //   {/* <Pet name="Shiro" animal="Dog" breed="Samoyed" />
  // <Pet name="Maya" animal="Cat" breed="Ragdoll" />
  // <Pet name="Magru" animal="Crocodile" breed="Alligator" /> */}
  //   <SearchParams />
  // </div>

  // here where there is browser router is conceived its gonna take us to that page
  // like clicking on the pet is gonna take us to its details
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />}></Route>
          {/*here we have written the /details/:id so that after clicking on name of pet its gonna route to details of pet and the colon : is for showing the id of pet*/}
          <Route path="/" element={<SearchParams />}></Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
// eslint-disable-next-line no-undef
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
