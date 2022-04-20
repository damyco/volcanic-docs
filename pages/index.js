import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Reed - Volcanic CMS user guide</title>
        <meta name="description" content="Volcanic CMS user guide" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-2xl sm:text-2xl font-extrabold text-slate-900 tracking-tight ">
          Welcome to the Volcanic CMS guide!
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Please use the navigation bar to get started.
        </p>
      </main>
    </>
  );
}
