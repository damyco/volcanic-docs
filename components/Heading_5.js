export default function Heading_5({ children, text }) {
  return (
    <h5 className="mb-2 mt-6 text-xl font-extrabold text-slate-800 tracking-tight dark:text-slate-200">
      {children || text}
    </h5>
  );
}
