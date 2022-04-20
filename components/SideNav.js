import React from "react";
import { useRouter } from "next/router";

import Link from "next/link";

export default function SideNav() {
  const router = useRouter();

  return (
    <div className="lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
      <nav className="lg:text-sm lg:leading-6 relative">
        <ul>
          <li className="mt-12 lg:mt-8">
            <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 ">
              🚀 Getting Started
            </h5>
            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 ">
              <li>
                <Link href="/setup">
                  <a
                    className={
                      router.pathname == "/setup"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    API Setup
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/language">
                  <a
                    className={
                      router.pathname == "/language"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Setting language
                  </a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li className="mt-12 lg:mt-8">
            <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 ">
              ⚙️ Settings - Site
            </h5>
            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 ">
              <li>
                <Link href="/notification">
                  <a
                    className={
                      router.pathname == "/notification"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Notification Center
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/site">
                  <a
                    className={
                      router.pathname == "/site"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Site
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/job-alerts">
                  <a
                    className={
                      router.pathname == "/job-alerts"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Job Alerts
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/job-alerts">
                  <a
                    className={
                      router.pathname == "/job-alerts"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Job Search
                  </a>
                </Link>
              </li>{" "}
              <li>
                <Link href="/job-alerts">
                  <a
                    className={
                      router.pathname == "/job-alerts"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Forms
                  </a>
                </Link>
              </li>{" "}
              <li>
                <Link href="/job-alerts">
                  <a
                    className={
                      router.pathname == "/job-alerts"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Navigation
                  </a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
