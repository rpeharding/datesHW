import {
  compareAsc,
  format,
  add,
  parse,
  isBefore,
  startOfDay,
  endOfMonth,
  startOfMonth,
  sub,
  differenceInDays,
  differenceInYears,
  isSameMonth,
  isThisMonth,
  endOfDecade,
  isValid,
  formatDistance,
  lastDayOfDecade,
} from "https://cdn.skypack.dev/date-fns";
import formatDistanceToNowStrict from "https://cdn.skypack.dev/date-fns/formatDistanceToNowStrict";

import { zhCN } from "https://cdn.skypack.dev/date-fns/locale";

// 1. Get current DateTime and output in a format "04/13/2022 15:38:54"
const date = new Date();
const formattedDate = format(date, "dd/MM/yyyy HH:mm:ss");
console.log(formattedDate);

// 2. Turn this date string into a date object...

const dateStr2 = "09/17/2020 23:45:02";
const parsedDate = parse(dateStr2, "MM/dd/yyyy HH:mm:ss", new Date());
console.log(parsedDate);

// 3. Display the current month in Chinese
const currentDate = new Date();
const formattedDate = format(currentDate, "MMM do", { locale: zhCN });
console.log(formattedDate); // Output: "10 de junio de 2023"

// 4. Create an older date and compare it to now to prove that is before
const oldDate = new Date(2023, 3, 17);
const today = new Date();

let result =
  compareAsc(oldDate, today) === -1
    ? "the older date is before"
    : "the older date is the same or after which means somethings gone wrong!";

console.log(result);
// 5. Create tomorrow by adding 1 day; create this time last week by subtracting 1 week, and; create the start of next month by subtracting 1 month.
// create start of next month by subtracting 1 month doesnt make sense to me? so i did it differently and imported start of month.

const today = new Date();
const tomorrow = add(today, { days: 1 });
const lastWeek = sub(today, { days: 7 });
const nextMonth = startOfMonth(add(today, { months: 1 }));

// note - this worked for add but isnt logging out for sub, even when i tested console logging the date fns example code for sub it gave me sub is not defined at date-fns error.

// 6. Find the start of the day and the end of the month
const startDay = startOfDay(today);
const endMonth = endOfMonth(today);
console.log(startDay);
console.log(endMonth);

// 7. Find the difference between 01/01/2018 and now in days and years

const oldDate = new Date(2018, 1, 1);

// const difference = differenceInDays(today, oldDate);

console.log(difference);

// 8. Create 2 dates and show whether they are the same month or not
const oldDate2 = new Date(1993, 6, 22);
const oldDate3 = new Date(1993, 3, 17);
const sameMonth = isSameMonth(oldDate2, oldDate3);
console.log(sameMonth);

// 9. Create a date and show whether it is this month
const oldDate4 = new Date(2023, 11, 9);
const thisMonth = isThisMonth(oldDate4);
console.log(thisMonth);

// 10. Find the last day of the decade

const lastDay = lastDayOfDecade(today);
console.log(lastDay);

// 11. Using 'distance', show how many days are left until xmas
const xmas = new Date(2023, 11, 25);
const distance = formatDistance(xmas, today);
console.log(distance);
// result: 5 days Copy

// 12. Show whether this date is valid

const thisDate = new Date();
const valid = isValid(thisDate);
console.log(valid);
