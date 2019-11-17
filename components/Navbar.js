import Link from "next/link";

const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-nav">
        <Link href="/">
          <a className="nav-item nav-link">Home</a>
        </Link>
        <Link href="/favoriler">
          <a className="nav-item nav-link">Favoriler</a>
        </Link>
      </div>
    </nav>
  </div>
);
export default Navbar;
