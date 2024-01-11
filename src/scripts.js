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
let currentUser;
let allRooms;
let allBookings;
let userBookings;

// Event Listeners
window.addEventListener('load', function () {
  getUser('http://localhost:3001/api/v1/customers/50');
  getAllRooms('http://localhost:3001/api/v1/rooms');
  getAllBookings('http://localhost:3001/api/v1/bookings');
});

nav.addEventListener('click', function (event) {
  toggleDropdownMenu(event);
  changeActiveButton(event);
});

// API Calls
const getUser = (url) => {
  return fetch(url)
    .then((respone) => respone.json())
    .then((user) => currentUser = user);
};

const getAllRooms = (url) => {
  return fetch(url)
    .then((respone) => respone.json())
    .then((rooms) => {
        allRooms = rooms.rooms;
    })
};

const getAllBookings = (url) => {
  return fetch(url)
    .then((respone) => respone.json())
    .then((bookings) => {
        allBookings = bookings.bookings;
        getUserBookings();
        updateUpcomingVisits();
        updateSpending();
        updatePastVisits();
    });
};

// Functions
const getUserBookings = () => {
    userBookings = allBookings.filter(booking => booking.userID === currentUser.id);
}

const updateUpcomingVisits = () => {
    console.log('update upcoming visits');
}

const updateSpending = () => {
    const spendMessage = document.querySelector('.spend-amount');
    const amount = userBookings.reduce((acc, booking) => acc + allRooms[booking.roomNumber - 1].costPerNight, 0)
    const formattedAmount = amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    
    spendMessage.innerText = `You have spent ${formattedAmount} over ${userBookings.length} nights.`
}

const updatePastVisits = () => {
    console.log('update past visits');
}

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
    event.target.closest('button').classList.contains('nav-button')
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
