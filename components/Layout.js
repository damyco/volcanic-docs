import Header from "./Header";
import SideNav from "./SideNav";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
          <SideNav />
          <div className="lg:pl-[19.5rem]">
            <main className="max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none">
              <section className="mb-16 relative">{children}</section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
