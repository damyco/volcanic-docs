import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="ml-auto dark:hover:hover:shadow-white/40 hover:shadow-md hover:shadow-gray-500/20 transition-all select-none content-center	cursor-pointer w-[10rem] rounded-full border-slate-300 border-2 py-2 px-3 flex"
    >
      <p className="pr-2 text-gray-500 dark:text-gray-200">Theme switch:</p>

      {theme === "dark" ? (
        <FaSun className="text-gray-500 dark:text-gray-200 text-2xl " />
      ) : (
        <FaMoon className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer" />
      )}
    </div>
  );
}
