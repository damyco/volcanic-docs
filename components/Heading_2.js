export default function Heading_2({ children, text }) {
  return (
    <h2 className="mb-2 mt-6 text-4xl font-extrabold text-slate-800 tracking-tight dark:text-slate-200">
      {children || text}
    </h2>
  );
}
