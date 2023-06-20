import PropTypes from 'prop-types';

const ReservationsForm = ({ onSubmit }) => (
  <form className='form' onSubmit={onSubmit} />
);

ReservationsForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default ReservationsForm;
