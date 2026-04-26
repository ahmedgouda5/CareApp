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

  const currentPage: NavItem = nav.sections
    .flatMap((section) => section.items)
    .find((item) => item.url === pathname);

  return (
    <nav className="flex justify-between w-full  p-2 items-center bg-inherit ">
      <section className="p-4">
        <h1 className="text-lg text-neutral-800 dark:text-neutral-200 font-bold">
          {currentPage?.title}
        </h1>
        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          {currentPage?.description}
        </p>
      </section>
      <section className="flex items-center gap-4">
        <InputInline
          data={{ placeholder: "Search...", buttonText: "Search" }}
        />
        <BellRing className="text-lg text-neutral-600 dark:text-neutral-400 cursor-pointer" />
        <ModeToggle />
      </section>
    </nav>
  );
};

export default Navbar;
