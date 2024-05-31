import Link from "next/link";

const MainFooter = () => {
  return (
    <footer className="flex items-center justify-between w-full p-10">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">ProPhazeFacuet</h1>
        <p>
          Get yourself a little reward and get reward only at ProPhazeFacuet
        </p>
      </div>

      <nav className="flex items-center flex-col p-5 gap-2">
        <Link
          href="/"
          className="w-full p-2 bg-[#222] text-center rounded-lg hover:bg-[#333]"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="w-full p-2 bg-[#222] text-center rounded-lg hover:bg-[#333]"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="w-full p-2 bg-[#222] text-center rounded-lg hover:bg-[#333]"
        >
          Contact
        </Link>
        <Link
          href="/list"
          className="w-full p-2 bg-[#222] text-center rounded-lg hover:bg-[#333]"
        >
          list
        </Link>
      </nav>
    </footer>
  );
};

export default MainFooter;
