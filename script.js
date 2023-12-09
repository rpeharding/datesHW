/*****************************************************************
 * Vanilla Date Exercises
 ******************************************************************/

// 1. Write a function that tests if something is a Date object or not. (Hint: Remember that Date is a class, so this would have to be an instance of that class...)

const date1 = new Date(1701887944346);
const age = 23;

function isDate(date) {
  return date instanceof Date;
}

//testing with above variables
console.log(isDate(date1));
console.log(isDate(age));

// 2. Create today's date

let datetoday = new Date();
console.log(datetoday);

// 3. Get the current timestamp (using a static method of Date)
console.log(Date.now());

// 4. Create a date to represent next Christmas Day
const christmas24 = new Date(2023, 11, 25, 2, 2, 0, 0).getTime();

// 5. Work out how many days it is until christmas
const now = Date.now();
let distance = christmas24 - now;
const daysToXmas = Math.floor(distance / (1000 * 60 * 60 * 24));
console.log(daysToXmas);
// Get difference between now and xmas
// Divide by number of ms in 1 day:
// milliseconds per day = 24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 msecs/second
// Math.floor for whole days; Math.ceil to include today

// 6. I'm going to make 2 random dates. I want you to log out which one is earlier (or if they are the same?!)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const date1 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date1", date1);

const date2 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date2", date2);

let earliestDate = "";
earliestDate +=
  date1.getTime() > date2.getTime()
    ? "date 2 is earliest"
    : date1.getTime() < date2.getTime()
    ? "date 1 is earliest"
    : "dates are the same";

console.log(earliestDate);

// // 7. How do I test if a date is valid? ****

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

// 8. Output today in the following format: MM-DD-YYYY - using the getter methods on the date object

let day = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

let todaysDate = `${day}-${month}-${year}`;

console.log(todaysDate);

// 9. Now output it using toLocaleDateString in english ('en-GB') and in german ('de-DE')

const todaysDate = new Date().toLocaleDateString("en-GB", "de-DE", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

console.log(todaysDate);

// // 10. Output the current time in hours, mins & seconds

let todaysTime = new Date().toLocaleTimeString("en-GB");
console.log(todaysTime);

// 11. Make a clock by starting with the current time and then every second adds a second to the date and prints it.
// let clockRef = document.getElementById("clock");

let clock = setInterval(() => {
  const now = new Date().getTime();
  let clockStart = new Date();
  const clockCount = clockStart.setSeconds(clockStart.getSeconds() + 1);
  let newCount = new Date(clockCount);
  let currentTime = newCount.toLocaleTimeString("en-GB");
  clockRef.innerHTML = currentTime;
}, 100);

// 12. Create a copy of today
let originalDate = new Date();
let dateCopy = new Date(originalDate);

// is the point of this so you can manipulate the copy without affecting the original?
dateCopy.setFullYear(2030);
console.log(dateCopy);
console.log(originalDate);

// 13. Use the setter methods to find out what is 3years, 2months and 1 day from now

let date = new Date();
date.setDate(date.getDate() + 1);
date.setMonth(date.getMonth() + 2);
date.setFullYear(date.getFullYear() + 3);

const futureDate = date.toLocaleDateString("en-GB");
console.log(futureDate);

// 14. Get your timezone from today (remember it's in mins and the sign is inverted)

let now = new Date();
let tz = now.getTimezoneOffset();
console.log(tz);

const myTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(myTimezone);

// 15. Use the Intl module formatter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) to get the time in Sydney (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

const options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Australia/Sydney",
  timeZoneName: "short",
};

const ausTime = new Intl.DateTimeFormat("en-AU", options).format(date);
console.log(ausTime);

// 16. Write a function that creates a years/months/days/hours/mins/secs/ms duration in ms.

const dateFunc = (years, days, hours, mins, secs, ms) => {
  const oneSecond = 1000;
  const oneMin = oneSecond * 60;
  const oneHour = oneMin * 60;
  const oneDay = oneHour * 24;
  const oneYear = oneDay * 365;
  console.log(
    ms +
      secs * oneSecond +
      mins * oneMin +
      hours * oneHour +
      days * oneDay +
      years * oneYear
  );
};

dateFunc(6, 309, 50, 20, 30, 6);

// know this doesn't work for months but is the principle of calculating ms

// 17. Write a function that returns an object with the years/months/days/hours/mins/secs/ms between 2 dates

//getting random dates
const date1 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 12),
  getRandomIntInclusive(1, 27)
);

const date2 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 12),
  getRandomIntInclusive(1, 27)
);

// converting ms to diff time units
const oneSecond = 1000;
const oneMin = oneSecond * 60;
const oneHour = oneMin * 60;
const oneDay = oneHour * 24;
const oneYear = oneDay * 365;

//calculate time diff function
const createTimeDifference = () => {
  const difference = dateMs(date2) - dateMs(date1);
  console.log(difference);

  // converting ms to y/d/h/m/ms
  const convertMs = (valueinMs) => {
    const years = Math.floor(valueinMs / oneYear);
    const days = Math.floor((valueinMs % oneYear) / oneDay);
    const hours = Math.floor((valueinMs % oneDay) / oneHour);
    const minutes = Math.floor((valueinMs % oneHour) / oneMin);
    const seconds = Math.floor((valueinMs % oneMin) / oneSecond);

    const diffInYears = `${years} years, ${days} days, ${hours} hours, ${minutes} mins, ${seconds} secs`;
    console.log(diffInYears);
  };
  convertMs(difference);
};

createTimeDifference();

//utility functions
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function dateMs(d) {
  return d.getTime();
}

/*****************************************************************
 * For date-fns Exercises follow link on page
 ******************************************************************/
