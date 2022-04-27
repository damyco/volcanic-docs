import Heading_1 from "../components/Heading_1";

export default function IndexPage() {
  return (
    <>
      <main>
        <Heading_1 text="Welcome to the Volcanic CMS guide!" />

        <p className="mt-4 text-lg text-slate-800 dark:text-slate-200">
          Please use the navigation bar to get started.
        </p>
      </main>
    </>
  );
}
