import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="shadow-sm">
      <div className="container">
        <nav>
          <img src="./images/Logo.png" alt="logo photo" className="logo" />
          <div className="nav-links">
            <Link to={"/"}>
              <span className="nav-link active">الرئيسية</span>
            </Link>
            <Link to={"/aboutUs"}>
              <span className="nav-link">من نحن</span>
            </Link>
          </div>
          <div className="nav-icons">
            <span className="nav-icon cart">
              <Link to={"/cart"}>
                <span className="cart-count">
                  0
                </span>
                <FaShoppingCart />
              </Link>
            </span>
            <span className="nav-icon whatsapp">
              <a href="https://wa.me/201234567891" target="_blank">
                <FaWhatsapp />
              </a>
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
