import { NavLink } from 'react-router-dom';
import './Nav.css';
import PropTypes from 'prop-types';

const Nav = ({ show, setShow }) => {
  const handleOnClick = () => {
    setShow(false);
  };

  const additionalStyle = show ? 'show' : 'hide';
  return (
    <nav className={`nav ${additionalStyle}`}>
      <button
        className='close-icon'
        onClick={handleOnClick}
        onKeyDown={handleOnClick}
        type='button'
      >
        &#10005;
      </button>
      <ul>
        <li>
          <NavLink to='' onClick={handleOnClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='about' onClick={handleOnClick}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='menu' onClick={handleOnClick}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to='booking' onClick={handleOnClick}>
            Booking
          </NavLink>
        </li>
        <li>
          <NavLink to='order' onClick={handleOnClick}>
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink to='login' onClick={handleOnClick}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default Nav;
