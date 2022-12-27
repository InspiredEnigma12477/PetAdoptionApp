import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breeList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      // eslint-disable-next-line no-undef
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);
  return [breeList, status];
}
//if we are selecting a list and loading it and immediately switch back to original list after selecting to list of another animal
// it not like int that short timespan new breed is gonna be invented so we are gonna create localCache maneuver
