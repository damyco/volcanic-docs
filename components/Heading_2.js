export default function Heading_2({ children, text }) {
  return (
    <h2 className="mb-2 text-4xl font-extrabold text-slate-800 tracking-tight dark:text-slate-200">
      {children || text}
    </h2>
  );
}
