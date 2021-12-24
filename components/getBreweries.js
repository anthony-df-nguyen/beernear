export default async function getBreweries(mode,query,stateUpdate) {
  let modeQuery;
  if (mode == "state/city") {
    modeQuery = "by_city";
  }
  if (mode == "zip") {
    modeQuery = "by_postal";
  }
  if (mode == "dist") {
    modeQuery = "by_dist";
  }
  await fetch(`https://api.openbrewerydb.org/breweries?${modeQuery}=${query}`)
    .then((res) => res.json())
    .then((result) => {
      stateUpdate(result);
    });
}
