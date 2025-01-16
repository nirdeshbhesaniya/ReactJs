
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const bag = useSelector((store) => store.bag);
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img
            className="myntra-home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>

      <nav className="nav-bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">Studio <sup>New</sup></a>
      </nav>

      <div className="search-bar">
        <span className="material-symbols-outlined search-icon">search</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search for products, brands and more"
        />
      </div>

      <div className="action-bar">
        <div className="action-container">
          <span className="material-symbols-outlined action-icon">person</span>
          <span className="action-name">Profile</span>
        </div>

        <div className="action-container">
          <span className="material-symbols-outlined action-icon">favorite</span>
          <span className="action-name">Wishlist</span>
        </div>

        <Link className="action-container" to="/bag">
          <span className="material-symbols-outlined action-icon">
            shopping_bag
          </span>
          <span className="action-name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
