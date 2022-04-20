export default function site() {
  return (
    <>
      <header className="mb-10 md:flex md:items-start">
        <div className="flex-auto max-w-4xl">
          <p className="mb-4 text-sm leading-6 font-semibold text-sky-500">
            Site
          </p>
          <h1 className="text-2xl sm:text-2xl font-extrabold text-slate-900 tracking-tight ">
            Setting up Site
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            • Set to and from e-mail address for notifications. Example:
            info.czech@reed.com
          </p>
          <p className="mt-4 text-lg text-slate-700">• Jobs per page: 20</p>
          <p className="mt-4 text-lg text-slate-700">
            • Jobs per in discipline: 20
          </p>
          <p className="mt-4 text-lg text-slate-700">• Blogs per page: 6</p>
          <p className="mt-4 text-lg text-slate-700">• Branches per page: 10</p>
          <p className="mt-4 text-lg text-slate-700">
            • Set site name (title) with divider
          </p>
        </div>
      </header>
      <section className="mb-16 relative"></section>
    </>
  );
}
