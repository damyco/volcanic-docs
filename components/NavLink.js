import { useRouter } from "next/router";
import Link from "next/link";

export default function NavLink({ data }) {
  const router = useRouter();
  return (
    <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
      {data.items.map((item) => {
        return (
          <li key={item.sys.id}>
            <Link href={item.slug}>
              <a
                className={
                  router.asPath == "/" + item.slug
                    ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold dark:text-sky-400"
                    : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900 dark:hover:text-slate-300 dark:text-slate-300 dark:hover:border-slate-500"
                }
              >
                {item.title}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
