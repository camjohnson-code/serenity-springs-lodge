// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
const {
  sortBookingsOldToNew,
  sortBookingsNewToOld,
  convertNumToDollarAmount,
  formatDate,
} = require('./functions');

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
import './images/menu.png';
import './images/sign-out.png';

// Global Variables
const mobileMenuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuSection = document.querySelector('.mobile-menu-section');
const errorModule = document.querySelector('.error-module');
const loginPage = document.querySelector('.login-page');
const loginForm = document.querySelector('.form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const signInButton = document.querySelector('.sign-in-button');
const nav = document.querySelector('.customer-nav');
const navButtons = document.querySelectorAll('.nav-button');
const dropdownButtons = document.querySelectorAll('.dropdown-button');
const dropdownOptions = document.querySelector('.dropdown-options');
const toggleArrow = document.querySelector('.toggle-arrow');
const logOutButton = document.querySelector('.log-out');
const customerDashboard = document.querySelector('.customer-dashboard');
const dashboardSections = document.querySelectorAll('.dashboard-info');
const bookingsOverviewSection = document.querySelector('.bookings-overview');
const bookingsUpcomingSection = document.querySelector('.bookings-upcoming');
const bookRoomDashboard = document.querySelector('.book-rooms');
const dashboardButton = document.querySelector('.header-button');
const roomSearchButton = document.querySelector('.room-search-button');
const checkInDateInput = document.getElementById('check-in');
const numGuestsInput = document.getElementById('guests');
const submitArrow = document.querySelector('.submit-arrow');
const welcomeBanner = document.querySelector('.welcome-section');
const searchForm = document.querySelector('.room-finder');
const popularRoomsSection = document.querySelector('.popular-rooms');
const amenitiesSection = document.querySelector('.amenities');
const availableRoomsSection = document.querySelector('.available-rooms');
const availableRoomsHeader = document.querySelector('.available-rooms-header');
const availableRoomsDisplay = document.querySelector(
  '.available-rooms-context'
);
const availableRoomsContainer = document.querySelector(
  '.available-rooms-container'
);
const footer = document.querySelector('.footer');
let today = new Date();
let currentUser;
let allRooms;
let allBookings;
let userBookings;
let goBackLink;
let confirmButton;
let bookedRoom;
let isSignedIn = false;

// Event Listeners
document.addEventListener('click', function (event) {
  toggleMobileMenu(event);
});

loginForm.addEventListener('submit', function (event) {
  if (event.target === loginForm) {
    const customerID = username.value.split('customer')[1];
    const enteredPassword = password.value;

    if (
      !Number(customerID) ||
      Number(customerID) > 50 ||
      enteredPassword !== 'overlook2021'
    ) {
      event.preventDefault();
      showLoginErrorMessage(customerID, enteredPassword);
    } else {
      event.preventDefault();
      getUser(
        `https://peaceful-anchorage-36801-d8ce29adb0a7.herokuapp.com/api/v1/customers/${customerID}`
      ).then(() => changeDashboardView(event));
    }
  }
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
const fetchData = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        show(errorModule);
        throw new Error(error);
      }
      return response.json();
    })
    .catch((error) => {
      show(errorModule);
    });
};

const getUser = (url) => {
  return fetchData(url)
    .then((user) => {
      if (!user) {
        show(errorModule);
        throw new Error(error);
      }

      currentUser = user;
      populateName(currentUser);
    })
    .then(() =>
      getAllRooms(
        'https://peaceful-anchorage-36801-d8ce29adb0a7.herokuapp.com/api/v1/rooms'
      )
    )
    .then(() =>
      getAllBookings(
        'https://peaceful-anchorage-36801-d8ce29adb0a7.herokuapp.com/api/v1/bookings'
      )
    )
    .then(() => {
      isSignedIn = true;
      showMobileMenu();
      getUserBookings(allBookings, currentUser);
      updateUpcomingVisits();
      populateSpendingAmount();
      updatePastVisits();
      formatDateInput();
    })
    .catch((error) => {
      show(errorModule);
    });
};

const getAllRooms = (url) => {
  return fetchData(url)
    .then((rooms) => {
      if (!rooms) {
        show(errorModule);
        throw new Error(error);
      }

      allRooms = rooms.rooms;
    })
    .catch((error) => {
      show(errorModule);
    });
};

const getAllBookings = (url) => {
  return fetchData(url)
    .then((bookings) => {
      if (!bookings) {
        show(errorModule);
        throw new Error(error);
      }

      allBookings = bookings.bookings;
    })
    .catch((error) => {
      show(errorModule);
    });
};

const bookRoom = (url) => {
  const data = {
    userID: parseInt(currentUser.id),
    date: `${checkInDateInput.value.replaceAll('-', '/')}`,
    roomNumber: parseInt(bookedRoom[0].number),
  };

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        show(errorModule);
        throw new Error(error);
      }

      return response;
    })
    .catch((error) => {
      show(errorModule);
    });
};

// Functions
const hide = (element) => {
  element.classList.add('hidden');
};

const show = (element) => {
  element.classList.remove('hidden');
};

const changeDashboardView = (event) => {
  if (event.target === loginForm) {
    hide(loginPage);
    show(customerDashboard);
  }

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
    hide(availableRoomsSection);
    show(footer);
    show(welcomeBanner);
    show(searchForm);
    show(popularRoomsSection);
    show(amenitiesSection);
    footer.classList.remove('footer-no-rooms');
    checkInDateInput.value = '';
    checkInDateInput.type = 'text';
    numGuestsInput.value = '';
  }

  if (
    event.target === logOutButton ||
    event.target.classList.contains('log-out')
  ) {
    location.reload();
  }

  if (
    event.target === dashboardButton ||
    event.target.classList.contains('return-to-dashboard')
  ) {
    hide(footer);
    hide(bookRoomDashboard);
    show(customerDashboard);
    navButtons.forEach((button) => button.classList.remove('active'));
    navButtons[0].classList.add('active');
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[0]);
    });
    getUser(
      `https://peaceful-anchorage-36801-d8ce29adb0a7.herokuapp.com/api/v1/customers/${currentUser.id}`
    );
  }

  if (
    checkInDateInput.value &&
    numGuestsInput.value &&
    (event.target === roomSearchButton || event.target === submitArrow)
  ) {
    event.preventDefault();
    hide(welcomeBanner);
    hide(searchForm);
    hide(popularRoomsSection);
    hide(amenitiesSection);
    show(availableRoomsSection);
    populateAvailableRoomsContainer();
  }

  if (
    event.target.innerText === 'Go Back' ||
    event.target.innerText === 'again'
  ) {
    const nestedDivs = availableRoomsContainer.querySelectorAll('div');
    if (nestedDivs.length === 3) {
      show(availableRoomsSection);
      populateAvailableRoomsContainer();
    } else {
      checkInDateInput.value = '';
      checkInDateInput.type = 'text';
      numGuestsInput.value = '';
      show(welcomeBanner);
      show(searchForm);
      show(popularRoomsSection);
      show(amenitiesSection);
      hide(availableRoomsSection);
      footer.classList.remove('footer-no-rooms');
    }
  }

  if (
    event.target.innerText === 'New Search' ||
    event.target.innerText === 'Rooms' ||
    event.target.innerText === 'Amenities'
  ) {
    checkInDateInput.value = '';
    checkInDateInput.type = 'text';
    numGuestsInput.value = '';
    show(welcomeBanner);
    show(searchForm);
    show(popularRoomsSection);
    show(amenitiesSection);
    hide(availableRoomsSection);
    footer.classList.remove('footer-no-rooms');
  }

  if (
    event.target.classList.contains('book-now-button') ||
    event.target.innerText === 'Book Now'
  ) {
    footer.classList.add('footer-no-rooms');
    availableRoomsContainer.classList.add('no-rooms');
    showBookedRoom(event);
  }

  if (
    event.target.classList.contains('confirm-booking') ||
    event.target.innerText === 'Confirm'
  ) {
    assignBookedRoom();
    showConfirmedBooking(event);
    bookRoom(
      'https://peaceful-anchorage-36801-d8ce29adb0a7.herokuapp.com/api/v1/bookings'
    );
    getUser(
      `https://peaceful-anchorage-36801-d8ce29adb0a7.herokuapp.com/api/v1/customers/${currentUser.id}`
    );
  }
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

const getUserBookings = (bookings, user) => {
  userBookings = bookings.filter((booking) => booking.userID === user.id);
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

const formatDateInput = () => {
  checkInDateInput.min = new Date().toISOString().split('T')[0];
};

// DOM Manipulation Functions
const showMobileMenu = () => {
  if (isSignedIn && window.innerWidth <= 768) {
    show(mobileMenu);
    show(mobileMenuButton);
    show(mobileMenuSection);
  }
};

const toggleMobileMenu = (event) => {
  if (event.target.classList.contains('menu-button')) {
    mobileMenu.classList.toggle('active');
    mobileMenuSection.classList.toggle('active');
  }

  if (event.target.innerText === 'Home') {
    hide(footer);
    hide(bookRoomDashboard);
    show(customerDashboard);
    navButtons.forEach((button) => button.classList.remove('active'));
    navButtons[0].classList.add('active');
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[0]);
    });
    getUser(
      `https://peaceful-anchorage-36801-d8ce29adb0a7.herokuapp.com/api/v1/customers/${currentUser.id}`
    );
    mobileMenu.classList.toggle('active');
    mobileMenuSection.classList.toggle('active');
  }

  if (
    event.target.innerText === 'Spending' ||
    event.target.classList.contains('spending-link')
  ) {
    populateSpendingDashboard(userBookings);
    hide(footer);
    hide(bookRoomDashboard);
    show(customerDashboard);
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[1]);
      navButtons.forEach((button) => button.classList.remove('active'));
      navButtons[8].classList.add('active');
      mobileMenu.classList.toggle('active');
      mobileMenuSection.classList.toggle('active');
    });
  }

  if (event.target.innerText === 'Upcoming') {
    populateUpcomingBookings();
    hide(footer);
    hide(bookRoomDashboard);
    show(customerDashboard);
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[3]);
      mobileMenu.classList.toggle('active');
      mobileMenuSection.classList.toggle('active');
    });
  }

  if (event.target.innerText === 'Past') {
    populatePastBookings();
    hide(footer);
    hide(bookRoomDashboard);
    show(customerDashboard);
    dashboardSections.forEach((section) => {
      hide(section);
      show(dashboardSections[4]);
      mobileMenu.classList.toggle('active');
      mobileMenuSection.classList.toggle('active');
    });
  }

  if (
    event.target.innerText === 'Book A Room' ||
    event.target.classList.contains('booking-link')
  ) {
    hide(customerDashboard);
    show(bookRoomDashboard);
    hide(availableRoomsSection);
    show(footer);
    show(welcomeBanner);
    show(searchForm);
    show(popularRoomsSection);
    show(amenitiesSection);
    footer.classList.remove('footer-no-rooms');
    checkInDateInput.value = '';
    checkInDateInput.type = 'text';
    numGuestsInput.value = '';
    mobileMenu.classList.toggle('active');
    mobileMenuSection.classList.toggle('active');
  }
};

const toggleDropdownMenu = (event) => {
  if (
    (event.target === navButtons[7] ||
      event.target.closest('button') === navButtons[7]) &&
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

    container.innerHTML = `<div class="module ${
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
  const sortedBookings = sortBookingsNewToOld([...bookings]);
  container.innerHTML = '';

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
  const sortedBookings = sortBookingsNewToOld([...bookings]);

  container.innerHTML = '';

  sortedBookings.forEach((booking, index, array) => {
    const div = document.createElement('div');

    const date = booking.date;
    const formattedDate = formatDate(date);

    const amount = allRooms[booking.roomNumber - 1].costPerNight;
    const formattedAmount = convertNumToDollarAmount(amount);

    div.classList.add('module');
    div.innerHTML = `<p>Night #${array.length - index}: ${formattedDate}</p>
    <p class="bold">$${amount}</p>`;

    container.appendChild(div);
  });
};

const getBookingsInfo = (bookings) => {
  const pastBookings = getPastBookings(bookings);
  const upcomingBookings = getUpcomingBookings(bookings);

  const sortedPastBookings = sortBookingsNewToOld([...pastBookings]);
  const sortedUpcomingBookings = sortBookingsOldToNew([...upcomingBookings]);

  return { sortedPastBookings, sortedUpcomingBookings };
};

const populateBookingsOverview = () => {
  const upcomingVisitsDiv = document.querySelector('.overview-upcoming');
  const pastVisitsDiv = document.querySelector('.overview-past');

  const { sortedPastBookings, sortedUpcomingBookings } =
    getBookingsInfo(userBookings);

  if (sortedUpcomingBookings.length) {
    upcomingVisitsDiv.innerHTML = '';

    sortedUpcomingBookings.forEach((booking, index) => {
      const date = booking.date;
      const formattedDate = formatDate(date);
      const roomType = allRooms[
        sortedUpcomingBookings[index].roomNumber - 1
      ].roomType
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

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

  if (sortedPastBookings.length) {
    pastVisitsDiv.innerHTML = '';

    sortedPastBookings.forEach((booking) => {
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
  const { sortedUpcomingBookings } = getBookingsInfo(userBookings);

  const upcomingBookingsDiv = document.querySelector('.upcoming-bookings');

  if (sortedUpcomingBookings.length) {
    upcomingBookingsDiv.innerHTML = '';

    sortedUpcomingBookings.forEach((booking) => {
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
  const { sortedPastBookings } = getBookingsInfo(userBookings);

  const pastBookingsDiv = document.querySelector('.past-bookings');

  if (sortedPastBookings.length) {
    pastBookingsDiv.innerHTML = '';

    sortedPastBookings.forEach((booking) => {
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

const populateAvailableRoomsContainer = () => {
  const availableRooms = getAvailableRooms().sort(
    (a, b) => a.costPerNight - b.costPerNight
  );

  const roomDate = checkInDateInput.value;
  const formattedDate = formatDate(roomDate);

  availableRoomsDisplay.innerText = `Available Rooms on ${formattedDate}`;

  if (!goBackLink) {
    goBackLink = document.createElement('a');
    goBackLink.href = '#';
    goBackLink.innerText = `Go Back`;
    goBackLink.classList.add('go-back-link');

    availableRoomsHeader.appendChild(goBackLink);
  }

  if (!availableRooms.length) {
    footer.classList.add('footer-no-rooms');
    availableRoomsContainer.classList.add('no-rooms');

    availableRoomsContainer.innerHTML = `
    <p>I fiercely apologize, but there aren't any rooms available that match your criteria.</p>
    <br>
    <p>Please try <span class="link">again</span>.</p>`;
  } else {
    footer.classList.remove('footer-no-rooms');
    availableRoomsContainer.classList.remove('no-rooms');
    availableRoomsContainer.innerHTML = '';

    availableRooms.forEach((room) => {
      const individualRoom = document.createElement('div');
      const roomImage = document.createElement('div');
      const roomInfo = document.createElement('div');
      const roomType = makeRoomTypeButton(room);

      individualRoom.classList.add('individual-room');
      roomImage.classList.add(
        'room-image',
        `${allRooms[room.number - 1].roomType.split(' ')[0]}`
      );
      roomInfo.classList.add('room-info');

      roomImage.innerHTML = `<button class="module-button">${roomType}</button>`;
      roomInfo.innerHTML = `
      <p class="bold bed-info">${room.numBeds} ${room.bedSize} beds.</p>
      <p class="cost-per-night"><span class="bold">Cost Per Night:</span> ${convertNumToDollarAmount(
        room.costPerNight
      )}</p>
      <button class="orange-button book-now-button"><span class="bold book-now-button">Book Now</span></button>
      <button class="orange-button confirm-booking hidden"><span class="bold">Confirm</span></button>
      `;

      individualRoom.appendChild(roomImage);
      individualRoom.appendChild(roomInfo);
      availableRoomsContainer.appendChild(individualRoom);
    });
  }
};

const showBookedRoom = (event) => {
  const selectedRoom = event.target.closest('.individual-room');
  const roomDate = checkInDateInput.value;
  const formattedDate = formatDate(roomDate);

  availableRoomsDisplay.innerText = `Confirm Booking for ${formattedDate}`;
  availableRoomsContainer.innerText = 'Please confirm your booking.';
  availableRoomsContainer.appendChild(selectedRoom);

  const confirmButton = document.querySelector('.confirm-booking');
  const bookNowButton = document.querySelector('.book-now-button');
  show(confirmButton);
  hide(bookNowButton);
};

const showConfirmedBooking = (event) => {
  goBackLink = document.querySelector('.go-back-link');
  goBackLink.innerText = 'New Search';

  availableRoomsContainer.innerHTML = `
    <p>Your room has been booked!</p>
    <br>
    <p>Click <a href="#" class="link return-to-dashboard">here</a> to return to the dashboard and view your reservations.</p>
    `;
};

const showLoginErrorMessage = (submittedID, submittedPassword) => {
  const usernameErrorMessage = document.querySelector('.username-error');
  const passwordErrorMessage = document.querySelector('.password-error');

  if (usernameErrorMessage) {
    usernameErrorMessage.remove();
    username.classList.remove('sign-in-error');
  }

  if (passwordErrorMessage) {
    passwordErrorMessage.remove();
    password.classList.remove('sign-in-error');
  }

  if (!Number(submittedID) || Number(submittedID) > 50) {
    const errorText = document.createElement('p');
    errorText.classList.add('sign-in-error-message', 'username-error');
    errorText.innerText = ``;
    errorText.innerText = `Invalid username! Please try again.`;
    username.classList.add('sign-in-error');
    username.insertAdjacentElement('afterend', errorText);
  }

  if (submittedPassword !== 'overlook2021') {
    const errorText = document.createElement('p');
    errorText.classList.add('sign-in-error-message', 'password-error');
    errorText.innerText = ``;
    errorText.innerText = `Incorrect password! Please try again.`;
    password.classList.add('sign-in-error');
    password.insertAdjacentElement('afterend', errorText);
  }
};
