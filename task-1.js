const monthNameEl = document.querySelector("#month-name");
const dayNameEl = document.querySelector("#day-name");
const dayNumEl = document.querySelector("#day-number");
const yearEl = document.querySelector("#year");

const date = new Date ();
yearEl.textContent = date.getFullYear();
monthNameEl.textContent = date.toLocaleDateString('en', { month: "long"});
dayNumEl.textContent = date.getDay();
dayNameEl.textContent = date.toLocaleString('en',{weekday : "long"});