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

nav.addEventListener('click', function (event) {
  if (
    event.target.classList.contains('nav-button') ||
    event.target.closest('button').classList.contains('nav-button')
  ) {
    navButtons.forEach((li) => li.classList.remove('active'));
    event.target.classList.toggle('active');
  }

  // dropdown opening/closing only
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
    console.log(event.target);
    dropdownOptions.classList.remove('active');
    toggleArrow.classList.remove('rotate');
  }

  if (event.target.classList.contains('dropdown-button')) {
    dropdownButtons.forEach((button) => button.classList.remove('active'));
    event.target.classList.add('active');
  }
});
