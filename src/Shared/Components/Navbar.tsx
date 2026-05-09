import { Link, useLocation } from "react-router-dom";
import { nav } from "../../lib/Links";
import { InputInline } from "./Input";
import { BellRing, Sparkles } from "lucide-react";
import { ModeToggle } from "../../components/Model-toggle";

interface NavItem {
  title: string;
  description?: string;
  url: string;
}

const Navbar = () => {
  const { pathname } = useLocation();

  const currentPage: NavItem | undefined = nav.sections
    .flatMap((section) => section.items)
    .find((item) => item.url === pathname);

  return (
    <nav className="flex  justify-between w-full  px-2 py-3 items-center ">
      <section className="p-4">
        <h1 className="text-sm md:text-lg text-neutral-800 dark:text-neutral-200 font-bold">
          {currentPage?.title}
        </h1>
        <p className="text-[10px] md:text-xs   text-neutral-600 dark:text-neutral-400">
          {currentPage?.description}
        </p>
      </section>
      <section className="flex items-center gap-4">
        <div className="hidden md:flex">
          <InputInline
            data={{ placeholder: "Search...", buttonText: "Search" }}
          />
        </div>
        <BellRing className="text-lg text-neutral-600 dark:text-neutral-400 cursor-pointer" />
        <Link
          to="/auth/login"
          className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-gray-900 to-purple-700 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:from-gray-800 hover:to-purple-600 sm:px-4 sm:py-2 sm:text-sm"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 ring-1 ring-emerald-300/40">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          Login
        </Link>
        <ModeToggle />
      </section>
    </nav>
  );
};

export default Navbar;
