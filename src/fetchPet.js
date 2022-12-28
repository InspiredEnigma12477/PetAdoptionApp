//async functions always returns promises

const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  // eslint-disable-next-line no-undef
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiRes.json();
};

//this can be a good example for returning a method if you give correct querykey
//its gonna give you the correct response or result of the API


export default fetchPet;
