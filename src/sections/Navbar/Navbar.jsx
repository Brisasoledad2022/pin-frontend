import logo from "../../assets/logo10.png";


const Navbar = () => {
  const menuItems = ["Home","About", "Products", "Services", "Contacts"];

  const clickHandler = id => {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'})
  }

  return (
    // <header className="d-flex align-items-center w-100 bg-transparent justify-content-between py-5 container">
    <header style={{backdropFilter: 'blur(2px)'}} className="d-flex align-items-center w-100 bg-transparent justify-content-between py-1">
      <img className="logo" alt="logo" src={logo} />

      <div className="d-flex align-items-center ">
        {/* {menuItems.map(item => <a className="mx-3" key={item} href={`#${item}`}>{item}</a>)} */}
        {menuItems.map(item => ( 
          <button 
            name={item} 
            key={item} 
            className='mx-3 bg-transparent border-0 text-light fs-4 neon' 
            onClick={e => clickHandler(e.target.name)}
          >
            {item.toUpperCase()}
          </button>)
          )}
      </div>
    </header>
  );

}

export default Navbar;
