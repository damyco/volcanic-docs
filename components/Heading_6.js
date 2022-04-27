export default function Heading_1({ children, text }) {
  return (
    <h6 className="mb-2 text-x font-extrabold text-slate-800 tracking-tight dark:text-slate-200">
      {children || text}
    </h6>
  );
}
