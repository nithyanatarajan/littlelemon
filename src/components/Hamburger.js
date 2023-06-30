import './Hamburger.css';
import PropTypes from 'prop-types';

const Hamburger = ({ onClick }) => (
  <button
    className='hamburger'
    onClick={onClick}
    type='button'
    aria-label='Open the menu'
  >
    <span />
    <span />
    <span />
  </button>
);

Hamburger.propTypes = {
  onClick: PropTypes.func,
};

Hamburger.defaultProps = {
  onClick: () => {},
};

export default Hamburger;
