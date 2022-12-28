import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status];
}

//here the first & second question mark is telling us that if its available then give me that
//after that if there is an error occurred then just show me the empty array which is present after 2 ??

// *** OLDER CODE***
// as the useEffect is one of the hardest topic from React we are gonna do the ReactQueries basically it helps to minimize the
// the useEffect from the code and API/Queries handles ot for you
//  npm i @tanstack/react-query@4.10.1 to install the react Queries
// import { useState, useEffect } from "react";

// const localCache = {};

// export default function useBreedList(animal) {
//   const [breeList, setBreedList] = useState([]);
//   const [status, setStatus] = useState("unloaded");

//   useEffect(() => {
//     if (!animal) {
//       setBreedList([]);
//     } else if (localCache[animal]) {
//       setBreedList(localCache[animal]);
//     } else {
//       requestBreedList();
//     }

//     async function requestBreedList() {
//       setBreedList([]);
//       setStatus("loading");

//       // eslint-disable-next-line no-undef
//       const res = await fetch(
//         `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
//       );
//       const json = await res.json();
//       localCache[animal] = json.breeds || [];
//       setBreedList(localCache[animal]);
//       setStatus("loaded");
//     }
//   }, [animal]);
//   return [breeList, status];
// }
//if we are selecting a list and loading it and immediately switch back to original list after selecting to list of another animal
// it not like int that short timespan new breed is gonna be invented so we are gonna create localCache maneuver
