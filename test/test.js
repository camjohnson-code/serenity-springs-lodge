import chai from 'chai';
const expect = chai.expect;

const {
  sortBookingsOldToNew,
  sortBookingsNewToOld,
  convertNumToDollarAmount,
  formatDate,
} = require('../src/functions');

describe('sortBookingsOldToNew', function () {
  let bookings;
  let invalidDateBookings;

  beforeEach(function () {
    bookings = [
      { id: '1', date: '2022/04/22' },
      { id: '2', date: '2022/01/24' },
      { id: '3', date: '2022/01/10' },
    ];

    invalidDateBookings = [
      { id: '1', date: 'invalid date' },
      { id: '2', date: '2022-05-01' },
    ];
  });

  it('should return an array of bookings sorted from oldest to most recent', function () {
    const sortedBookings = sortBookingsOldToNew(bookings);
    expect(sortedBookings).to.deep.equal([
      { id: '3', date: '2022/01/10' },
      { id: '2', date: '2022/01/24' },
      { id: '1', date: '2022/04/22' },
    ]);
  });

  it('should handle empty array input', function () {
    const sortedBookings = sortBookingsOldToNew([]);
    expect(sortedBookings).to.deep.equal([]);
  });

  it('should exclude invalid date formats', function () {
    bookings.push({ id: '4', date: 'invalid date' });
    const sortedBookings = sortBookingsOldToNew(invalidDateBookings);
    expect(sortedBookings).to.deep.equal([
      { id: '2', date: '2022-05-01' }
    ]);
  });
});

describe('sortBookingsNewToOld', function () {
  let bookings;

  beforeEach(function () {
    bookings = [
      { id: '1', date: '2022/04/22' },
      { id: '2', date: '2022/01/24' },
      { id: '3', date: '2022/01/10' },
    ];
  });

  it('should return an array of bookings sorted from newest to oldest', function () {
    const sortedBookings = sortBookingsNewToOld(bookings);
    expect(sortedBookings).to.deep.equal([
      { id: '1', date: '2022/04/22' },
      { id: '2', date: '2022/01/24' },
      { id: '3', date: '2022/01/10' },
    ]);
  });

  it('should handle empty array input', function () {
    const sortedBookings = sortBookingsNewToOld([]);
    expect(sortedBookings).to.deep.equal([]);
  });

  it('should exclude invalid date formats', function () {
    bookings.push({ id: '4', date: 'invalid date' });
    const sortedBookings = sortBookingsNewToOld(bookings);
    expect(sortedBookings).to.deep.equal([
      { id: '1', date: '2022/04/22' },
      { id: '2', date: '2022/01/24' },
      { id: '3', date: '2022/01/10' },
    ]);
  });
});

describe('convertNumToDollarAmount', function () {
  let amount;

  beforeEach(function () {
    amount = 1234.56;
  });

  it('should return a formatted currency string for a valid number', function () {
    const formattedAmount = convertNumToDollarAmount(amount);
    expect(formattedAmount).to.equal('$1,234.56');
  });

  it('should return "Invalid Amount" for invalid or non-numeric input', function () {
    const invalidAmount = convertNumToDollarAmount('invalid amount');
    expect(invalidAmount).to.equal('Invalid Amount');
  });
});

describe('formatDate', function () {
  let date;

  beforeEach(function () {
    date = '2022/04/22';
  });

  it('should return a formatted date string for valid date input', function () {
    const validDate = formatDate(date);
    expect(validDate).to.equal('April 22, 2022');
  });

  it('should handle different date formats gracefully', function () {
    date = '2022-01-24';
    const validDate = formatDate(date);
    expect(validDate).to.equal('January 24, 2022');
  });

  it('should return "Invalid Date" for invalid date input', function () {
    date = 'invalid date';
    const invalidDate = formatDate(date);
    expect(invalidDate).to.equal('Invalid Date');
  });
});
