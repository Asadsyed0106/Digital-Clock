 let  x = new Date();

let  year = x.getFullYear();
let  month =  x.getMonth();
let  hour =  x.getHours();
let  date  = x.getDate();
let  day =  x.getDay();
let   minute = x.getMinutes();

document.querySelector(".year").innerText = year;
document.querySelector(".month").innerText = month;
document.querySelector(".hour").innerText = hour;
document.querySelector(".date").innerText = date;

document.querySelector(".minute").innerText = minute;
