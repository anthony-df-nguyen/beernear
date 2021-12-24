export default async function getBreweries(search, mode,updateArrayState) {
  let querystring;
  if (mode === "zip") {
    querystring = `https://api.openbrewerydb.org/breweries?by_postal=${search}`;
  }
  if (mode === "city") {
    querystring = `https://api.openbrewerydb.org/breweries?by_city=${search}`;
  }
  if (mode === "state") {
    querystring = `https://api.openbrewerydb.org/breweries?by_state=${search}`;
  }

  await fetch(querystring)
    .then((res) => res.json())
    .then((b) => updateArrayState(b));
}
