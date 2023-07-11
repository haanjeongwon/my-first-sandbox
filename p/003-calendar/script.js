const calendar = document.getElementById('calendar-body');
const year = document.getElementById('year');
const month = document.getElementById('month');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

let today = new Date();
let todayString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

year.innerHTML = currentYear; // display current year
month.innerHTML = currentMonth + 1; // display current month
createCalendar(currentYear, currentMonth); // display calendar

// *function*
// create calendar
function createCalendar(year, month) {
  let firstDay = new Date(year, month, 1);
  let lastDay = new Date(year, month + 1, 0);

  let tr = document.createElement('tr');

  // add blanks (front)
  for (let i = 0; i < firstDay.getDay(); i++) {
    let td = document.createElement('td');
    tr.appendChild(td);
  };

  // add days
  let currentDay = new Date(firstDay);
  while (currentDay <= lastDay) { 

    // check -- sunday?
    if (currentDay.getDay() === 0) {
      calendar.appendChild(tr);
      tr = document.createElement('tr');
    };

    let td = document.createElement('td');
    // check -- today?
    let currentString = `${currentDay.getFullYear()}-${currentDay.getMonth()}-${currentDay.getDate()}`;
    if (currentString == todayString) {
      let todayMark = document.createElement('div');
      todayMark.innerText = currentDay.getDate();
      todayMark.classList.add('today');
      td.appendChild(todayMark);
      
    } else {
      td.innerText = currentDay.getDate();
    };
    tr.appendChild(td);

    currentDay.setDate(currentDay.getDate() + 1);
  };

  // add blanks (back)
  for (let i = currentDay.getDay(); i < 7; i++) {
    if (i == 0) {
      calendar.appendChild(tr);
      break;
    } else {
      let td = document.createElement('td');
      tr.appendChild(td);
      calendar.appendChild(tr);
    };
  };
};

// *function*
// button -- prev
btnPrev.addEventListener('click', function() {
  if (currentMonth == 0) {
    currentYear--;
    currentMonth = 11;
  } else {
    currentMonth--;
  };
  year.innerHTML = currentYear;
  month.innerHTML = currentMonth + 1;
  calendar.innerHTML = '';
  createCalendar(currentYear, currentMonth);
});

// *function*
// button -- next
btnNext.addEventListener('click', function() {
  if (currentMonth == 11) {
    currentYear++;
    currentMonth = 0;
  } else {
    currentMonth++;
  };
  year.innerHTML = currentYear;
  month.innerHTML = currentMonth + 1;
  calendar.innerHTML = '';
  createCalendar(currentYear, currentMonth);
});