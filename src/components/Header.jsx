// components/Header.js
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
