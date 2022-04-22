import NavLink from "./NavLink";

export default function SideNav({ data }) {
  return (
    <div className="lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
      <nav className="lg:text-sm lg:leading-6 relative">
        {data.navigationCollection.items[0].navigationGroupsCollection.items.map(
          (item) => {
            return (
              <ul key={item.sys.id}>
                <li className="mt-12 lg:mt-8">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 ">
                    {item.title}
                  </h5>
                  <NavLink data={item.listOfLinksCollection} />
                </li>
              </ul>
            );
          }
        )}
      </nav>
    </div>
  );
}
