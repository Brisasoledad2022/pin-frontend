import Home from "./sections/Home/Home";
import Products from "./sections/Products/Products";
import Services from "./sections/Services/Services";
import Contact from "./sections/Contacts/Contacts";
import About from "./sections/About/About";
import Footer from "./sections/Footer/Footer.jsx";

function App() {
  return (
    <div className="w-100 min-vh-100">
      <Home />
      <About />
      <Products />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
