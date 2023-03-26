import logo from "../../assets/logo.png";
function Navbar() {
  const menuItems = [
    {
      name: "Home",
      url: "#Home",
    },
    {
      name: "About",
      url: "#About",
    },
    {
      name: "Products",
      url: "#Products",
    },
    {
      name: "Services",
      url: "#Services",
    },
    {
      name: "Contacts",
      url: "#Contacts",
    },
  ];

  return (
    <header className="d-flex align-items-center w-100 bg-transparent justify-content-between px-4">
      <img className="logo" alt="logo" src={logo} />

      <div className="d-flex align-items-center ">
        {menuItems.map((item) => (
          <a className="mx-3" key={item.name} href={item.url}>
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
