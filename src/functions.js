// Functions
const sortBookingsOldToNew = (bookings) => {
  return bookings.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA - dateB;
  });
};

const sortBookingsNewToOld = (bookings) => {
  return bookings.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB - dateA;
  });
};

const convertNumToDollarAmount = (num) => {
  return num.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

const formatDate = (date) => {
  let dateInputs;
  if (date.split('/').map(Number).length === 3)
    dateInputs = date.split('/').map(Number);
  else dateInputs = date.split('-').map(Number);

  const [year, month, day] = dateInputs;
  const dateObject = new Date(year, month - 1, day);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return dateObject.toLocaleDateString('en-US', options);
};

module.exports = {
  sortBookingsOldToNew,
  sortBookingsNewToOld,
  convertNumToDollarAmount,
  formatDate,
};
