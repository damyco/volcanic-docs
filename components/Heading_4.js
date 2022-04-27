export default function Heading_1({ children, text }) {
  return (
    <h4 className="mb-2 text-2xl font-extrabold text-slate-800 tracking-tight dark:text-slate-200">
      {children || text}
    </h4>
  );
}
