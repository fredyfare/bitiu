import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header class="py-5 bg-[#24185d] w-full">
      <nav class="flex justify-between px-3 py-1">
        <Link
          to="/"
          class={`text-3xl text-[#b0b0b1] px-3 hover:text-white transition`}
          href="#home"
        >
          HOME
        </Link>
        <Link
          to="blog"
          class="text-3xl text-[#b0b0b1] px-3 hover:text-white transition"
          href="#blog"
        >
          BLOG
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
