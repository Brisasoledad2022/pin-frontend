//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./sections/Navbar/Navbar";
import Home from "./sections/Home/Home";
import Products from "./sections/Products/Products";
import Services from "./sections/Services/Services";
import Contact from "./sections/Contacts/Contacts";
import About from "./sections/About/About";

function App() {
  return (
    <div className="w-100 min-vh-100">
      <Navbar />
      <Home />
      <Products />
      <Services />
      <Contact />
      <About name="Brisita"/>
    </div>
  );
}

export default App;
