function clock(){
 var date = new Date(),
 hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
 minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
 seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
 document.getElementById('clock').innerHTML = hours + ':' + minutes;
 document.getElementById('seconds').innerHTML = ":"+ seconds;
 
 var day=new Date();
var weekday=new Array(7);
weekday[0]="Воскресенье";
weekday[1]="Понедельник";
weekday[2]="Вторник";
weekday[3]="Среда";
weekday[4]="Четверг";
weekday[5]="Пятница";
weekday[6]="Суббота";

var mounth = new Array(12);
mounth[0]="янв.";
mounth[1]="фев.";
mounth[2]="мар.";
mounth[3]="апр.";
mounth[4]="май.";
mounth[5]="июн.";
mounth[6]="июл.";
mounth[7]="авг.";
mounth[8]="сен.";
mounth[9]="окт.";
mounth[10]="ноя.";
mounth[11]="дек.";

document.getElementById("date").innerHTML =  weekday[day.getDay()];
document.getElementById("day").innerHTML = day.getDate() + " " + mounth[day.getMonth()] +" "+day.getFullYear();
}
setInterval(clock, 1000);
clock();
