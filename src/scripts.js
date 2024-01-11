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
let currentUser;
let allRooms;
let allBookings;
let userBookings;

// Event Listeners
window.addEventListener('load', function () {
  getUser('http://localhost:3001/api/v1/customers/30');
});

nav.addEventListener('click', function (event) {
  if (event.target.closest('.nav-button')) {
    toggleDropdownMenu(event);
    changeActiveButton(event);
    changeDashboardView(event);
  }
});

customerDashboard.addEventListener('click', function (event) {
  if (event.target.closest('.dashboard-section')) {
    changeDashboardView(event);
  }
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
      updateSpending();
      updatePastVisits();
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
  const currentDate = new Date();
  const futureBookings = allBookings
    .filter((booking) => booking.userID === currentUser.id)
    .filter((booking) => {
      const bookingDate = new Date(booking.date);
      return bookingDate >= currentDate;
    });

  populateNextVisit(futureBookings);
};

const updateSpending = () => {
  const amount = userBookings.reduce(
    (acc, booking) => acc + allRooms[booking.roomNumber - 1].costPerNight,
    0
  );
  const formattedAmount = amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  populateSpendingAmount(formattedAmount);
  return formattedAmount;
};

const updatePastVisits = () => {
  const currentDate = new Date();
  const pastBookings = allBookings
    .filter((booking) => booking.userID === currentUser.id)
    .filter((booking) => {
      const bookingDate = new Date(booking.date);
      return bookingDate < currentDate;
    });

  populateRecentVisits(pastBookings);
};

const changeDashboardView = (event) => {
  const closestModule = event.target.closest('.module');

  if (event.target.innerText === 'Home') {
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[0]);
    });
  }

  if (
    event.target.innerText === 'Spending' ||
    (closestModule &&
      closestModule.previousElementSibling.innerText === 'Spending' &&
      event.target.tagName.toLowerCase() === 'span')
  ) {
    populateSpendingDashboard(userBookings);
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[1]);
      navButtons.forEach((button) => button.classList.remove('active'));
      navButtons[5].classList.add('active');
    });
  }

  if (event.target.innerText === 'Overview') {
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[2]);
    });
  }

  if (event.target.innerText === 'Upcoming') {
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[3]);
    });
  }

  if (event.target.innerText === 'Past') {
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[4]);
    });
  }
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
  if (
    event.target.classList.contains('nav-button') ||
    (event.target.closest('button') &&
      event.target.closest('button').classList.contains('nav-button'))
  ) {
    navButtons.forEach((li) => li.classList.remove('active'));

    if (
      event.target !== navButtons[1] &&
      event.target.closest('button') !== navButtons[1]
    ) {
      event.target.classList.toggle('active');
    }
  }

  if (event.target.classList.contains('dropdown-button')) {
    dropdownButtons.forEach((button) => button.classList.remove('active'));
    event.target.classList.add('active');
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
    const dateObject = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);
    const roomType = allRooms[bookings[0].roomNumber - 1].roomType
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

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
          <p> Schedule one <span class="link">here</span>.</p>
        </div>
      </div>`;
  }
};

const populateSpendingAmount = (string) => {
  const spendMessage = document.querySelector('.spend-amount');

  spendMessage.innerText = `You have spent ${string} over ${userBookings.length} nights.`;
};

const populateRecentVisits = (bookings) => {
  const container = document.querySelector('.past-visits-container');
  const sortedBookings = bookings.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB - dateA;
  });

  for (let i = 0; i < 4; i++) {
    if (sortedBookings[i]) {
      const date = sortedBookings[i].date;
      const dateObject = new Date(date);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = dateObject.toLocaleDateString('en-US', options);
      const roomType = allRooms[sortedBookings[i].roomNumber - 1].roomType
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

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
  const sortedBookings = bookings.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA - dateB;
  });

  sortedBookings.forEach((booking, index) => {
    const div = document.createElement('div');

    const date = booking.date;
    const dateObject = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);

    const amount = allRooms[booking.roomNumber - 1].costPerNight;
    const formattedAmount = amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    div.classList.add('module');
    div.innerHTML = `<p>Night #${index + 1}: ${formattedDate}</p>
    <p class="bold">$${amount}</p>`;

    console.log(div.innerHTML);

    container.appendChild(div);
  });
};
