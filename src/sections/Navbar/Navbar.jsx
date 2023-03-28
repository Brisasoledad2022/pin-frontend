import logo from "../../assets/logo.png";

const Navbar = () => {
  const menuItems = ["Home", "About", "Products", "Services", "Contacts"];

  return (
    <header className="d-flex align-items-center w-100 bg-transparent justify-content-between py-5 container">
      <img className="logo" alt="logo" src={logo} />

      <div className="d-flex align-items-center ">
        {menuItems.map(item => <a className="mx-3" key={item} href={`#${item}`}>{item}</a>)}
      </div>
    </header>
  );
}

export default Navbar;
