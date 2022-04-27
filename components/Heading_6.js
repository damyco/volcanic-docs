export default function Heading_6({ children, text }) {
  return (
    <h6 className="mb-2 mt-6 text-x font-extrabold text-slate-800 tracking-tight dark:text-slate-200">
      {children || text}
    </h6>
  );
}
