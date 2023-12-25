
import { Link } from "react-router-dom";
import Search from "../Order/Search";
import Username from "../User/UserName";
const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-4 uppercase sm:px-6">
      <Search/>

      <Link to="/" className="tracking-widest hover:text-red-600 transition-colors duration-200 sm:text-xl">
       &larr; Fast  Pizza Co.
      </Link>
      <Username/>
    </header>
  );
};

export default Header;
