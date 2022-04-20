import React from "react";

export default function setup() {
  return (
    <>
      <header className="mb-10 md:flex md:items-start">
        <div className="flex-auto max-w-4xl">
          <p className="mb-4 text-sm leading-6 font-semibold text-sky-500">
            API Setup
          </p>

          <h1 className="text-3xl sm:text-2xl font-extrabold text-slate-900 tracking-tight ">
            Apps
          </h1>
          <p className="mt-4 text-lg text-slate-700 ">
            • Go to &gt; Settings &gt; Apps
          </p>
          <p className="mt-4 text-lg text-slate-700 ">
            • Make sure the LinkedIn is in Apps. If it is not in apps, create it
            and follow the steps. This is needed to create LinkedIn integration.
          </p>
          <p className="mt-4 text-lg text-slate-700">
            • When creating an API connection, the legacy token API key will be
            generated. Make sure you copy it as it is generated only once and
            will be lost if you navigate to any other page.
          </p>

          <h1 className="mt-8 text-3xl sm:text-2xl font-extrabold text-slate-900 tracking-tight ">
            Legacy Tokens
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            • Create new API connection if it is not present yet.
          </p>
          <p className="mt-4 text-lg text-slate-700">
            - Add name, usually will be &quot;Reed - X3 integration
            (country)&quot; <br />
            - Domain will be the current domain (URL)
            <br />
            - locale: en
            <br />
            - location locale: en
            <br />
            - permissions: add all, needs to be done one by one
            <br />
          </p>
          <p className="mt-4 text-lg text-slate-700">
            • When creating an API connection, the legacy token API key will be
            generated. Make sure you copy it as it is generated only once and
            will be lost if you navigate away. Save it to the word file.
          </p>
          <p className="mt-4 text-lg text-slate-700">
            • The key generated will have to be sent to the X3 team. They will
            need about a week to get this sorted, they will also need domains
            and IPs used.
          </p>

          <h1 className="mt-8 text-3xl sm:text-2xl font-extrabold text-slate-900 tracking-tight ">
            Web Hooks
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            • Create new webhook based off the other sites if it is not present
            yet.
          </p>
          <p className="mt-4 text-lg text-slate-700">
            - Name: Cadidates-X3
            <br />
            - Endpoint:
            https://ws.xms-portal.com/xms_webservice/reedGlobalPostingsV2
            <br />
            - HTTP method: POST
            <br />
            - Content type: application/json
            <br />
            - custom headers, add the following:
            <br />
            -- Name: x-country, value: Country Name (for example Czech Republic)
            <br />
            -- Name: x-author-name, value: Reed Volcanic
            <br />
            - skip the next sections and tick the boxes: async, Use V1 API
            resources, Active
            <br />- add the following Events: A user is saved, A user is
            deleted, A job is applied for
          </p>
        </div>
      </header>
      <section className="mb-16 relative"></section>
    </>
  );
}
