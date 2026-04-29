import { useLocation } from "react-router-dom";
import { nav } from "../../lib/Links";
import { InputInline } from "./Input";
import { BellRing } from "lucide-react";
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
        <ModeToggle />
      </section>
    </nav>
  );
};

export default Navbar;
