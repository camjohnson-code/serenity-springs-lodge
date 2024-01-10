// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
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

// console.log('This is the JavaScript entry file - your code begins here.');
document.addEventListener('DOMContentLoaded', function () {
  const dropdownButtons = document.querySelectorAll('.nav-button');
  const dropdownOptions = document.querySelector('.dropdown-options');
  const toggleArrow = document.querySelector('.toggle-arrow');

  dropdownButtons[1].addEventListener('click', function () {
    dropdownOptions.classList.toggle('active');
    toggleArrow.classList.toggle('rotate');
  });
});
