async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];

  // eslint-disable-next-line no-undef
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!res.ok) {
    throw new Error(`No pets found as ${animal}, ${location}, ${breed}`);
  }
  return res.json();
}

export default fetchSearch;
