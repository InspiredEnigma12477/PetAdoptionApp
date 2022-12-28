// here we have installed the npm i react-router-dom@6.4.1 so that we can get the data from one page to another
// here we can add various ways such as getting to data with refreshing the page and getting to the data without getting to the page

import { useParams } from "react-router-dom";
//useParams is a Hook
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

//in App.jsx we had put the BrowserRouter component around our application
//which is making 'Context' available to components available to it

//and here useParams checks that browserRouter is available or not
// and through browserRouter it gets what it needs in this case its id
const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">☀️</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city},{pet.state}
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
      </div>
    </div>
  );
  // return <h2>ID - {id}</h2>;
};

export default Details;
//the first time it comes back its not gonna have the cache in it so we are gonna give results.isLoading
// here since we have set the cacheTime as infinity we dont have to search the query allover again it gets it back from the cache
