import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="flex items-center gap-6">
        {/* className="hover:underline" */}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[32px] font-bold text-[#121212]"
              : "font-medium hover:text-black hover:underline"
          }
          to="/collections"
        >
          Collections
        </NavLink>
        <a href="#" className="hover:underline">
          Blog
        </a>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[32px] font-bold text-[#121212]"
              : "font-medium hover:text-black hover:underline"
          }
          to="/donate"
        >
          Donate
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
