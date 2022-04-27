export default function Heading_3({ children, text }) {
  return (
    <h3 className="mb-2 mt-6 text-3xl font-extrabold text-slate-800 tracking-tight dark:text-slate-200">
      {children || text}
    </h3>
  );
}
