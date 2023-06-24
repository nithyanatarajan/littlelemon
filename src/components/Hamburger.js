import './Hamburger.css';
import PropTypes from 'prop-types';

const Hamburger = ({ onClick }) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div className='hamburger' onClick={onClick} onKeyDown={onClick}>
    <span />
    <span />
    <span />
  </div>
);

Hamburger.propTypes = {
  onClick: PropTypes.func,
};

Hamburger.defaultProps = {
  onClick: () => {},
};

export default Hamburger;
