export default function OrderedList({ children }) {
  console.log(children);
  return <ul className="space-y-2 my-6 ml-5 unorderedList">{children}</ul>;
}
