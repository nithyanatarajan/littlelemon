/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import './ReservationsForm.css';
import { useState } from 'react';
import { useFormik } from 'formik';

const ReservationsForm = ({ onSubmit }) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  };

  const [availableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);

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

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validate: validateForm,
  });

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
