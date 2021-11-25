import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Beer Near</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Simple website to find breweries near you in the United States utilizing the openbrewerydb API"></meta>
        <meta
          name="keywords"
          content="beer,breweries,near,me,united,states,openbrewerydb"></meta>
      </Head>
    </div>
  );
}
