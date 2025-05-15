import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Header = () => {
  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <div className="lg:w-[350px]">
          <h1 className="text-[40px] font-semibold text-[#3C6D59]">
            <Link to="/">PUBLIC DOMAIN</Link>
          </h1>
          <p className="text-[20px]/[30px] text-wrap">
            Enjoy free access to public domain works in Nigeria
          </p>
        </div>
        <Navigation></Navigation>
        <div className="flex gap-2">
          <button className="text-xl">
            <span role="img" aria-label="search">
              🔍
            </span>
          </button>
          <Button>
            {" "}
            <Link to="/contactUs">Contact Us</Link>
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
