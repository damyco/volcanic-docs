export default function notificationCenter() {
  return (
    <>
      <header className="mb-10 md:flex md:items-start">
        <div className="flex-auto max-w-4xl">
          <p className="mb-4 text-sm leading-6 font-semibold text-sky-500">
            Notification Center
          </p>

          <h1 className="text-2xl sm:text-2xl font-extrabold text-slate-900 tracking-tight ">
            Setting up Notifications
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            • Go through all branded email notifications that are active and
            check if everything is configured correctly.
          </p>

          <p className="mt-4 text-lg text-slate-700">
            • Inactive notifications needs to be filled, only then they can
            become active. You can edit them later from active tab.
          </p>
          <p className="mt-4 text-lg text-slate-700">
            • The emails (forms) coming with volcanic logo - the logo cannot be
            changed.
          </p>
          <p className="mt-4 text-lg text-slate-700">
            • When creating new forms, new notification will appear.
          </p>
          <p className="mt-4 text-lg text-slate-700">
            • Can set up email workflows (not currently used, but will be in the
            future).
          </p>
        </div>
      </header>
      <section className="mb-16 relative"></section>
    </>
  );
}
