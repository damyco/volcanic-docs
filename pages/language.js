import React from "react";

export default function setup() {
  return (
    <>
      <header className="mb-10 md:flex md:items-start">
        <div className="flex-auto max-w-4xl">
          <p className="mb-4 text-sm leading-6 font-semibold text-sky-500">
            Setting language
          </p>

          <h1 className="text-2xl sm:text-2xl font-extrabold text-slate-900 tracking-tight ">
            Setting the language
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            • Go to Settings &gt; Languages
          </p>
          <p className="mt-4 text-lg text-slate-700">
            • Make sure setting the default language is one of the first things
            you do, if you change the language later it will change the URL
            structure.
          </p>
          <p className="mt-4 text-lg text-slate-700">
            • The default should be set to the specific country for example
            Czech will be the default language for CZ site.
          </p>
          <p className="mt-4 text-lg text-slate-700">
            • Make sure you have secondary language as well, usually that will
            be English (UK) - en
          </p>
          <p className="mt-4 text-lg text-slate-700">
            • add any other remaining languages if they are needed
          </p>
        </div>
      </header>
      <section className="mb-16 relative"></section>
    </>
  );
}
