import logo from "../../assets/logo10.png";
import useWindowInfo from "../../hooks/useWindowInfo";

const Navbar = () => {
  const menuItems = ["Home", "About", "Products", "Services", "Contacts"];

  const clickHandler = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  const { mobileDesign } = useWindowInfo();

  return (
    <header
      style={{ backdropFilter: "blur(2px)" }}
      className={`d-flex ${
        mobileDesign && "flex-column"
      } align-items-center w-100 bg-transparent justify-content-between py-1`}
    >
      {!mobileDesign && <img className="logo" alt="logo" src={logo} />}
      <div className={`d-flex align-items-center ${mobileDesign && "justify-content-between"}`}>
        {menuItems.map((item) => (
          <button
            name={item}
            key={item}
            className={`bg-transparent border-0 text-light ${mobileDesign ? "fs-6"  : "fs-4 mx-3"} neon`}
            onClick={(e) => clickHandler(e.target.name)}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
