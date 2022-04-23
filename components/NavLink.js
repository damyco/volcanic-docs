import { useRouter } from "next/router";
import Link from "next/link";

export default function NavLink({ data }) {
  const router = useRouter();
  return (
    <ul className="space-y-6 lg:space-y-2 border-l border-slate-100">
      {data.items.map((item) => {
        return (
          <li key={item.sys.id}>
            <Link href={item.slug}>
              <a
                className={
                  router.asPath == item.slug
                    ? "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold"
                    : "block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900"
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
