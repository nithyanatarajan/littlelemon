export const getDateStr = (date) => date.toISOString().substring(0, 10);
export const getToday = () => new Date(Date.now());
export const getDateUpto = (numberOfDaysToAdd) => {
  const today = getToday();
  const result = today.setDate(today.getDate() + numberOfDaysToAdd);
  return new Date(result);
};
