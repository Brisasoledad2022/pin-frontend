import logo from "../../assets/logo192.png";
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
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            {
              menuItems.map(item =>  <li class="nav-item"> 
              <a class="nav-link active" aria-current="page" href={item.url}>
                {item.name}
              </a>
            </li> )
            }
            {/* <li class="nav-item"> 
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contacts
              </a>
             </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
