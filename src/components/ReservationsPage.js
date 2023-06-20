import ReservationsForm from './ReservationsForm';
import './ReservationsPage.css';

const ReservationsPage = () => {
  const handleSubmit = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };
  return (
    <div className='form-wrapper'>
      <h3>Reserve a table</h3>
      <ReservationsForm onSubmit={handleSubmit} />
    </div>
  );
};
export default ReservationsPage;
