export default function Heading_1({ children, text }) {
  return (
    <h1 className="mb-2 mt-6 text-5xl font-extrabold text-slate-800 tracking-tight dark:text-slate-200">
      {children || text}
    </h1>
  );
}
