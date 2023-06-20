import PropTypes from 'prop-types';
import './ReservationsForm.css';
import { useFormik } from 'formik';

const ReservationsForm = ({ onSubmit }) => {
  const initialValues = {
    firstName: '',
    lastName: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'First Name is required';
    }

    if (!values.lastName) {
      errors.lastName = 'Last Name is required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validate: validateForm,
  });

  return (
    <form className='form' onSubmit={formik.handleSubmit}>
      <div className='form-row'>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor='firstName'>First Name</label>
        <div className='form-input'>
          <input
            type='text'
            id='firstName'
            name='firstName'
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...formik.getFieldProps('firstName')}
            required
          />

          {formik.touched.firstName && formik.errors.firstName && (
            <div className='form-error'>{formik.errors.firstName}</div>
          )}
        </div>
      </div>
      <div className='form-row'>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor='lastName'>Last Name</label>
        <div className='form-input'>
          <input
            type='text'
            id='lastName'
            name='lastName'
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...formik.getFieldProps('lastName')}
            required
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className='form-error'>{formik.errors.lastName}</div>
          )}
        </div>
      </div>

      <button
        className='primary-button'
        type='submit'
        disabled={!formik.isValid || formik.isSubmitting || !formik.dirty}
      >
        Reserve a Table
      </button>
    </form>
  );
};

ReservationsForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default ReservationsForm;
