import { useState, useEffect } from "react";
const ANIMALS = ["DOG", "CAT", "BIRD", "REPTILE", "RABBIT"];
// here we have created a list of animals peoples can select from
const BREEDS = ["German Shephard"];
//these are function components with hooks
const SearchParams = () => {
  /*
    const locationHook = useState("");
    const location = locationHook[0];
    const setLocation = locationHook[1];
    here these three lines are just equivalent to the the below line
    */
  const [location, setLocation] = useState(""); //here useState is a hook by convention all hook starts with "use"
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            disabled={BREEDS.length === 0}
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {BREEDS.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
