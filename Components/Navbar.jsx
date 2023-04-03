import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </>
  );
};
export default Navbar;
