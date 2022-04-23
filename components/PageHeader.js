import React from "react";

export default function PageHeader({ title, headerHeadline, headerBody }) {
  return (
    <>
      <p className="mb-4 text-sm leading-6 font-semibold text-sky-500">
        {title}
      </p>
      <h1 className="text-3xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
        {headerHeadline}
      </h1>
      <div>
        <p>{headerBody.json.content[0].content[0].value}</p>
      </div>
    </>
  );
}
