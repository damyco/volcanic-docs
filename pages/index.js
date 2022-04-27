import Head from "next/head";
import Heading_1 from "../components/Heading_1";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Reed - Volcanic CMS user guide</title>
        <meta name="description" content="Volcanic CMS user guide" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
      </Head>
      <main>
        <Heading_1 text="Welcome to the Volcanic CMS guide!" />

        <p className="mt-4 text-lg text-slate-800 dark:text-slate-200">
          Please use the navigation bar to get started.
        </p>
      </main>
    </>
  );
}
