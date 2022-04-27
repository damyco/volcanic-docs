import Link from "next/link";

export default function Hyperlink({ node, children }) {
  return (
    <Link href={node.data.uri}>
      <a className="font-medium text-sky-600 dark:text-sky-400 hover:underline hover:decoration-1 hover:underline-offset-2">
        {children}
      </a>
    </Link>
  );
}
