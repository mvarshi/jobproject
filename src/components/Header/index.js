// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <ul className="nav-menu">
        <Link to="/" className="nav-link">
          <li>About</li>
        </Link>
        <Link to="/products" className="nav-link">
          <li>Projects</li>
        </Link>
        <Link to="/cart" className="nav-link">
          <li>Contacts</li>
        </Link>
      </ul>
    </div>
  </nav>
)
export default Header
