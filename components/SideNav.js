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
                <Link href="/notification-center">
                  <a
                    className={
                      router.pathname == "/notification-center"
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
                <Link href="/job-search">
                  <a
                    className={
                      router.pathname == "/job-search"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Job Search
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/forms">
                  <a
                    className={
                      router.pathname == "/forms"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Forms
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/navigation">
                  <a
                    className={
                      router.pathname == "/navigation"
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
        <ul>
          <li className="mt-12 lg:mt-8">
            <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 ">
              ⚙️ Settings - Reference Data
            </h5>
            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 ">
              <li>
                <Link href="/disciplines">
                  <a
                    className={
                      router.pathname == "/disciplines"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Disciplines
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/job-functions">
                  <a
                    className={
                      router.pathname == "/job-functions"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Job Functions
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/job-types">
                  <a
                    className={
                      router.pathname == "/job-types"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Job Types
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/salaries">
                  <a
                    className={
                      router.pathname == "/salaries"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Salaries
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/currencies">
                  <a
                    className={
                      router.pathname == "/currencies"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Currencies
                  </a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li className="mt-12 lg:mt-8">
            <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 ">
              💻 Content
            </h5>
            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 ">
              <li>
                <Link href="/">
                  <a
                    className={
                      router.pathname == "/none"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Blogs
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a
                    className={
                      router.pathname == "/none"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Events
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a
                    className={
                      router.pathname == "/none"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Pages
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a
                    className={
                      router.pathname == "/none"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Clients
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a
                    className={
                      router.pathname == "/none"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Branches
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a
                    className={
                      router.pathname == "/none"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Consultants
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a
                    className={
                      router.pathname == "/none"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Testimonials
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a
                    className={
                      router.pathname == "/none"
                        ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                        : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
                    }
                  >
                    Tag manager
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
