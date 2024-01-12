// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/logo.svg';
import './images/login.jpg';
import './images/home.svg';
import './images/hotel.png';
import './images/spending.png';
import './images/calendar.png';
import './images/github-mark-white.png';
import './images/In-White-96.png';
import './images/arrow.png';
import './images/single.jpg';
import './images/welcome-section.jpg';

// Global Variables
const nav = document.querySelector('.customer-nav');
const navButtons = document.querySelectorAll('.nav-button');
const dropdownButtons = document.querySelectorAll('.dropdown-button');
const dropdownOptions = document.querySelector('.dropdown-options');
const toggleArrow = document.querySelector('.toggle-arrow');
const customerDashboard = document.querySelector('.customer-dashboard');
const dashboardSections = document.querySelectorAll('.dashboard-info');
const bookingsOverviewSection = document.querySelector('.bookings-overview');
const bookingsUpcomingSection = document.querySelector('.bookings-upcoming');
const bookRoomDashboard = document.querySelector('.book-rooms');
const dashboardButton = document.querySelector('.header-button');
const footer = document.querySelector('footer');
const today = new Date();
let currentUser;
let allRooms;
let allBookings;
let userBookings;

// Event Listeners
window.addEventListener('load', function () {
  getUser('http://localhost:3001/api/v1/customers/37');
});

nav.addEventListener('click', function (event) {
  if (event.target.closest('.nav-button')) {
    changeActiveButton(event);
    changeDashboardView(event);
    toggleDropdownMenu(event);
  }
});

customerDashboard.addEventListener('click', function (event) {
  if (event.target.closest('.dashboard-section')) {
    changeDashboardView(event);
  }
});

bookRoomDashboard.addEventListener('click', function (event) {
  changeDashboardView(event);
});

bookingsOverviewSection.addEventListener('click', function (event) {
  changeDashboardView(event);
});

bookingsUpcomingSection.addEventListener('click', function (event) {
  changeDashboardView(event);
});

// API Calls
const getUser = (url) => {
  return fetch(url)
    .then((respone) => respone.json())
    .then((user) => {
      currentUser = user;
      populateName(currentUser);
    })
    .then(() => getAllRooms('http://localhost:3001/api/v1/rooms'))
    .then(() => getAllBookings('http://localhost:3001/api/v1/bookings'))
    .then(() => {
      getUserBookings();
      updateUpcomingVisits();
      populateSpendingAmount();
      updatePastVisits();
      console.log('ALL ROOMS:', allRooms);
    });
};

const getAllRooms = (url) => {
  return fetch(url)
    .then((respone) => respone.json())
    .then((rooms) => {
      allRooms = rooms.rooms;
    });
};

const getAllBookings = (url) => {
  return fetch(url)
    .then((respone) => respone.json())
    .then((bookings) => {
      allBookings = bookings.bookings;
    });
};

// Functions
const getUserBookings = () => {
  userBookings = allBookings.filter(
    (booking) => booking.userID === currentUser.id
  );
};

const updateUpcomingVisits = () => {
  const futureBookings = getFutureBookings(userBookings);

  populateNextVisit(futureBookings);
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

  populateRecentVisits(pastBookings);
};

const changeDashboardView = (event) => {
  if (event.target.innerText === 'Home') {
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[0]);
    });
  }

  if (
    event.target.innerText === 'Spending' ||
    event.target.classList.contains('spending-link')
  ) {
    populateSpendingDashboard(userBookings);
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[1]);
      navButtons.forEach((button) => button.classList.remove('active'));
      navButtons[8].classList.add('active');
    });
  }

  if (event.target.innerText === 'Overview') {
    populateBookingsOverview();
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[2]);
    });
  }

  if (event.target.innerText === 'Upcoming') {
    populateUpcomingBookings();
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[3]);
    });
  }

  if (event.target.innerText === 'Past') {
    populatePastBookings();
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[4]);
    });
  }

  if (
    event.target.innerText === 'Book A Room' ||
    event.target.classList.contains('booking-link')
  ) {
    hide(customerDashboard);
    show(bookRoomDashboard);
    show(footer);
  }

  if (event.target === dashboardButton) {
    hide(footer);
    hide(bookRoomDashboard);
    show(customerDashboard);
  }
};

const sortBookingsNewToOld = (bookings) => {
  return bookings.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB - dateA;
  });
};

const sortBookingsOldToNew = (bookings) => {
  return bookings.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB - dateA;
  });
};

const getFutureBookings = (bookings) => {
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
  const dateObject = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return dateObject.toLocaleDateString('en-US', options);
};

const makeRoomTypeButton = (booking) => {
  return allRooms[booking.roomNumber - 1].roomType
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const hide = (element) => {
  element.classList.add('hidden');
};

const show = (element) => {
  element.classList.remove('hidden');
};

// DOM Manipulation Functions
const toggleDropdownMenu = (event) => {
  if (
    (event.target === navButtons[1] ||
      event.target.closest('button') === navButtons[1]) &&
    !event.target.classList.contains('dropdown-button')
  ) {
    dropdownOptions.classList.toggle('active');
    toggleArrow.classList.toggle('rotate');
  } else if (event.target.classList.contains('dropdown-button')) {
    dropdownOptions.classList.add('active');
    toggleArrow.classList.add('rotate');
  } else {
    dropdownOptions.classList.remove('active');
    toggleArrow.classList.remove('rotate');
  }
};

const changeActiveButton = (event) => {
  const targetButton = event.target.closest('button');

  if (
    (event.target.classList.contains('nav-button') ||
      (targetButton && targetButton.classList.contains('nav-button'))) &&
    (!targetButton || targetButton.innerText !== 'Bookings') &&
    targetButton.innerText !== 'Book A Room'
  ) {
    navButtons.forEach((button) => button.classList.remove('active'));

    if (
      targetButton !== navButtons[1] &&
      targetButton.innerText !== 'Book A Room'
    ) {
      targetButton.classList.add('active');
    }
  }
};

const populateName = () => {
  const customerGreeting = document.querySelector('.customer-greeting');
  customerGreeting.innerText = `Welcome, ${currentUser.name.split(' ')[0]}!`;
};

const populateNextVisit = (bookings) => {
  const container = document.querySelector('.upcoming-visits-container');

  if (bookings.length) {
    const date = bookings[0].date;

    const formattedDate = formatDate(date);
    const roomType = makeRoomTypeButton(bookings[0]);

    container.innerHTML += `<div class="module ${
      allRooms[bookings[0].roomNumber - 1].roomType.split(' ')[0]
    }">
        <div class="content">
          <p class="date">${formattedDate}</p>
        </div>
        <button class="module-button">${roomType}</button>
      </div>`;
  } else {
    container.innerHTML = `<div class="module">
        <div class="content">
          <p>No upcoming visits!</p>
          <p> Schedule one <span class="link booking-link">here</span>.</p>
        </div>
      </div>`;
  }
};

const populateSpendingAmount = () => {
  const spendMessage = document.querySelector('.spend-amount');
  const amount = updateSpending();

  spendMessage.innerText = `You have spent ${amount} over ${userBookings.length} nights.`;
};

const populateRecentVisits = (bookings) => {
  const container = document.querySelector('.past-visits-container');
  const sortedBookings = sortBookingsNewToOld(bookings);

  for (let i = 0; i < 4; i++) {
    if (sortedBookings[i]) {
      const date = sortedBookings[i].date;
      const formattedDate = formatDate(date);
      const roomType = makeRoomTypeButton(sortedBookings[i]);

      container.innerHTML += `<div class="module ${
        allRooms[sortedBookings[i].roomNumber - 1].roomType.split(' ')[0]
      }">
        <div class="content">
          <p class="date">${formattedDate}</p>
        </div>
        <button class="module-button">${roomType}</button>
      </div>`;
    }
  }
};

const populateSpendingDashboard = (bookings) => {
  updateSpendingTotal(bookings);
  updateSpendingBreakdown(bookings);
};

const updateSpendingTotal = (bookings) => {
  const spendingText = document.querySelector('.spending-total');

  spendingText.innerText = `Total: ${updateSpending(bookings)}`;
};

const updateSpendingBreakdown = (bookings) => {
  const container = document.querySelector('.nights-container');
  const sortedBookings = sortBookingsOldToNew(bookings);

  sortedBookings.forEach((booking, index) => {
    const div = document.createElement('div');

    const date = booking.date;
    const formattedDate = formatDate(date);

    const amount = allRooms[booking.roomNumber - 1].costPerNight;
    const formattedAmount = convertNumToDollarAmount(amount);

    div.classList.add('module');
    div.innerHTML = `<p>Night #${index + 1}: ${formattedDate}</p>
    <p class="bold">$${amount}</p>`;

    container.appendChild(div);
  });
};

const getBookingsInfo = (bookings) => {
  const pastBookings = userBookings.filter((booking) => {
    const bookingDate = new Date(booking.date);
    return bookingDate < today;
  });
  const futureBookings = getFutureBookings(bookings);

  return { pastBookings, futureBookings };
};

const populateBookingsOverview = () => {
  const upcomingVisitsDiv = document.querySelector('.overview-upcoming');
  const pastVisitsDiv = document.querySelector('.overview-past');

  const { pastBookings, futureBookings } = getBookingsInfo(userBookings);

  if (futureBookings.length) {
    futureBookings.forEach((booking) => {
      const date = booking.date;
      const formattedDate = formatDate(date);
      const roomType = makeRoomTypeButton(booking);

      const div = document.createElement('div');
      div.classList.add(
        'module',
        `${allRooms[booking.roomNumber - 1].roomType.split(' ')[0]}`
      );

      div.innerHTML = `
        <div class="content">
          <p class="date">${formattedDate}</p>
        </div>
        <button class="module-button">${roomType}</button>`;

      upcomingVisitsDiv.appendChild(div);
    });
  } else {
    const div = document.createElement('div');
    div.classList.add('module');
    div.innerHTML = `<div class="content">
          <p>You have no upcoming visits!</p>
          <p> Schedule one <span class="link booking-link">here</span>.</p>
        </div>`;

    upcomingVisitsDiv.innerHTML = '';
    upcomingVisitsDiv.appendChild(div);
  }

  if (pastBookings.length) {
    pastBookings.forEach((booking) => {
      const date = booking.date;
      const formattedDate = formatDate(date);
      const roomType = makeRoomTypeButton(booking);

      const div = document.createElement('div');
      div.classList.add(
        'module',
        `${allRooms[booking.roomNumber - 1].roomType.split(' ')[0]}`
      );

      div.innerHTML = `
          <div class="content">
            <p class="date">${formattedDate}</p>
          </div>
          <button class="module-button">${roomType}</button>`;

      pastVisitsDiv.appendChild(div);
    });
  } else {
    const div = document.createElement('div');
    div.classList.add('module');
    div.innerHTML = `<div class="content">
          <p>You haven't stayed with us yet!</p>
          <p> Schedule one <span class="link booking-link">here</span>.</p>
        </div>`;

    pastVisitsDiv.innerHTML = '';
    pastVisitsDiv.appendChild(div);
  }
};

const populateUpcomingBookings = () => {
  const { futureBookings } = getBookingsInfo(userBookings);

  const upcomingBookingsDiv = document.querySelector('.upcoming-bookings');

  if (futureBookings.length) {
    futureBookings.forEach((booking) => {
      const date = booking.date;
      const formattedDate = formatDate(date);
      const roomType = makeRoomTypeButton(booking);

      const div = document.createElement('div');
      div.classList.add(
        'module',
        `${allRooms[booking.roomNumber - 1].roomType.split(' ')[0]}`
      );

      div.innerHTML = `
            <div class="content">
              <p class="date">${formattedDate}</p>
            </div>
            <button class="module-button">${roomType}</button>`;

      upcomingBookingsDiv.appendChild(div);
    });
  } else {
    const div = document.createElement('div');
    div.classList.add('module');
    div.innerHTML = `<div class="content">
          <p>You have no upcoming visits!</p>
          <p> Schedule one <span class="link booking-link">here</span>.</p>
        </div>`;

    upcomingBookingsDiv.innerHTML = '';
    upcomingBookingsDiv.appendChild(div);
  }
};

const populatePastBookings = () => {
  const { pastBookings } = getBookingsInfo(userBookings);

  const pastBookingsDiv = document.querySelector('.past-bookings');

  if (pastBookings.length) {
    pastBookings.forEach((booking) => {
      const date = booking.date;
      const formattedDate = formatDate(date);
      const roomType = makeRoomTypeButton(booking);

      const div = document.createElement('div');
      div.classList.add(
        'module',
        `${allRooms[booking.roomNumber - 1].roomType.split(' ')[0]}`
      );

      div.innerHTML = `
            <div class="content">
              <p class="date">${formattedDate}</p>
            </div>
            <button class="module-button">${roomType}</button>`;

      pastBookingsDiv.appendChild(div);
    });
  } else {
    const div = document.createElement('div');
    div.classList.add('module');
    div.innerHTML = `<div class="content">
          <p>You haven't stayed with us yet!</p>
          <p> Schedule one <span class="link">here</span>.</p>
        </div>`;

    pastBookingsDiv.innerHTML = '';
    pastBookingsDiv.appendChild(div);
  }
};
