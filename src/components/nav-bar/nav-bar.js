import { Link } from 'react-router-dom';
import './nav-bar.css';
import { ContactUs } from '../contact-us/contact-us';
import { Login } from '../login/login';
export const NavBar = () => {
  return (
    <nav className="NavBar align-items-center d-flex justify-content-center z-1">
      <div className="logo">
        {/* <image src="/public/layout/logo.png" alt="logo" /> */}
        <img src="/layout/logo.png" alt="logo" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
      <div className="contact d-flex gap-2 ">

        < Login />
        < ContactUs />
      </div>

    </nav>
  );
}