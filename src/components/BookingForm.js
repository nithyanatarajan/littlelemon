/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import './BookingForm.css';
import { useFormik } from 'formik';

const BookingForm = ({ onSubmit, availableTimes, updateAvailableTimesFor }) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  };
  const validateForm = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'First Name is required';
    }

    if (!values.lastName) {
      errors.lastName = 'Last Name is required';
    }

    if (!values.date) {
      errors.date = 'Date is required';
    }

    if (!values.time) {
      errors.time = 'Time is required';
    }

    if (!values.occasion) {
      errors.occasion = 'Occasion is required';
    }

    return errors;
  };

  const handleSubmit = (values, { resetForm, setStatus, setSubmitting }) => {
    const isSubmissionSuccess = onSubmit(values);
    if (isSubmissionSuccess) {
      setStatus('success');
      resetForm();
    }
    setStatus('error');
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validate: validateForm,
  });

  const handleDateChange = (e) => {
    formik.handleBlur(e);
    updateAvailableTimesFor(e.target.value);
  };

  return (
    <form className='form' onSubmit={formik.handleSubmit}>
      <div className='form-row'>
        <label htmlFor='firstName'>First Name</label>
        <div className='form-input'>
          <input
            type='text'
            id='firstName'
            name='firstName'
            {...formik.getFieldProps('firstName')}
            required
            aria-label='First Name'
          />

          {formik.touched.firstName && formik.errors.firstName && (
            <div className='form-error'>{formik.errors.firstName}</div>
          )}
        </div>
      </div>
      <div className='form-row'>
        <label htmlFor='lastName'>Last Name</label>
        <div className='form-input'>
          <input
            type='text'
            id='lastName'
            name='lastName'
            {...formik.getFieldProps('lastName')}
            required
            aria-label='Last Name'
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className='form-error'>{formik.errors.lastName}</div>
          )}
        </div>
      </div>
      <div className='form-row'>
        <label htmlFor='date'>Choose date</label>
        <div className='form-input'>
          <input
            type='date'
            id='date'
            name='date'
            {...formik.getFieldProps('date')}
            required
            onBlur={handleDateChange}
            aria-label='Choose date'
          />
          {formik.touched.date && formik.errors.date && (
            <div className='form-error'>{formik.errors.date}</div>
          )}
        </div>
      </div>
      <div className='form-row'>
        <label htmlFor='time'>Choose time</label>
        <div className='form-input'>
          <select
            id='time'
            name='time'
            {...formik.getFieldProps('time')}
            required
            aria-label='Choose time'
          >
            <option value=''>Select a time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {formik.touched.time && formik.errors.time && (
            <div className='form-error'>{formik.errors.time}</div>
          )}
        </div>
      </div>
      <div className='form-row'>
        <label htmlFor='guests'>Number of guests</label>
        <div className='form-input'>
          <input
            type='number'
            placeholder='1'
            min='1'
            max='10'
            id='guests'
            name='guests'
            {...formik.getFieldProps('guests')}
            required
            aria-label='Number of guests'
          />
        </div>
      </div>
      <div className='form-row'>
        <label htmlFor='occasion'>Occasion</label>
        <div className='form-input'>
          <select
            id='occasion'
            name='occasion'
            {...formik.getFieldProps('occasion')}
            required
            aria-label='Occasion'
          >
            <option value=''>Select an occasion</option>
            <option value='Birthday'>Birthday</option>
            <option value='Anniversary'>Anniversary</option>
          </select>
          {formik.touched.occasion && formik.errors.occasion && (
            <div className='form-error'>{formik.errors.occasion}</div>
          )}
        </div>
      </div>
      {formik.status === 'error' && (
        <div className='form-error'>
          Form submission failed, try again later.
        </div>
      )}
      <button
        className='primary-button'
        type='submit'
        disabled={!formik.isValid || formik.isSubmitting || !formik.dirty}
        aria-label='Book a table'
      >
        Book a table
      </button>
    </form>
  );
};

BookingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  availableTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateAvailableTimesFor: PropTypes.func.isRequired,
};

export default BookingForm;
