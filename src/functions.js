// Functions
const getUserBookings = () => {
  userBookings = allBookings.filter(
    (booking) => booking.userID === currentUser.id
  );
};

const updateUpcomingVisits = () => {
  const upcomingBookings = getUpcomingBookings(userBookings);
  const sortedBookings = sortBookingsOldToNew([...upcomingBookings]);

  populateNextVisit(sortedBookings);
};

const updateSpending = () => {
  const amount = userBookings.reduce(
    (acc, booking) => acc + allRooms[booking.roomNumber - 1].costPerNight,
    0
  );

  const formattedAmount = convertNumToDollarAmount(amount);
  return formattedAmount;
};

const updatePastVisits = () => {
  const pastBookings = getPastBookings(userBookings);
  const sortedNewPastBookings = sortBookingsNewToOld([...pastBookings]);
  const sortedOldPastBookings = sortBookingsOldToNew([...pastBookings]);

  populateRecentVisits(pastBookings);
};

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

const getUpcomingBookings = (bookings) => {
  return bookings.filter((booking) => {
    const bookingDate = new Date(booking.date);
    return bookingDate >= today;
  });
};

const getPastBookings = (bookings) => {
  return bookings.filter((booking) => {
    const bookingDate = new Date(booking.date);
    return bookingDate < today;
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

const makeRoomTypeButton = (booking) => {
  if (booking.roomNumber)
    return allRooms[booking.roomNumber - 1].roomType
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  else
    return allRooms[booking.number - 1].roomType
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
};

const getBookedRooms = () => {
  const checkInDate = checkInDateInput.value
    .split('Check-in Date')[0]
    .split('-')
    .join('/');

  return allBookings
    .filter((booking) => booking.date === checkInDate)
    .map((room) => room.roomNumber);
};

const getUnbookedRooms = (bookedRooms) => {
  return allRooms.filter((room) => {
    return !bookedRooms.includes(room.number);
  });
};

const getAvailableRooms = () => {
  const numGuests = numGuestsInput.value.split('num guests')[0];
  const numBedsNeeded = Math.round(numGuests / 2);
  const bookedRooms = getBookedRooms();
  const unbookedRooms = getUnbookedRooms(bookedRooms);

  return unbookedRooms.filter((room) => room.numBeds >= numBedsNeeded);
};

const assignBookedRoom = () => {
  const roomContainer = document.querySelector('.individual-room');

  const bedsInfo = document.querySelector('.bed-info').textContent.split(' ');
  const numBeds = Number(bedsInfo[0]);
  const bedSize = bedsInfo[1];
  const costPerNightInfo = document
    .querySelector('.cost-per-night')
    .textContent.split(' ')[3];
  const costPerNight = parseFloat(costPerNightInfo.replace('$', ''));

  bookedRoom = allRooms.filter(
    (room) =>
      room.costPerNight === costPerNight &&
      room.numBeds === numBeds &&
      room.bedSize === bedSize
  );
};

const hide = (element) => {
  element.classList.add('hidden');
};

const show = (element) => {
  element.classList.remove('hidden');
};

module.exports = {
  getUserBookings,
  updateUpcomingVisits,
  updateSpending,
  updatePastVisits,
  sortBookingsOldToNew,
  sortBookingsNewToOld,
  getUpcomingBookings,
  getPastBookings,
  convertNumToDollarAmount,
  formatDate,
  makeRoomTypeButton,
  getBookedRooms,
  getUnbookedRooms,
  getAvailableRooms,
  assignBookedRoom,
  hide,
  show,
};
