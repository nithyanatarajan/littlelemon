import PropTypes from 'prop-types';
import './ReservationsForm.css';

const ReservationsForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({});
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-row'>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor='firstName'>First Name</label>
        <input type='text' id='firstName' name='firstName' required />
      </div>

      <div className='form-row'>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor='lastName'>Last Name</label>
        <input type='text' id='lastName' name='lastName' required />
      </div>

      <button className='primary-button' type='submit'>
        Reserve a Table
      </button>
    </form>
  );
};

ReservationsForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default ReservationsForm;
