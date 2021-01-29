// 1 пункт

let name = prompt('Ваше имя?'),
    age = prompt('Ваш возраст?'),
    city = prompt('Город проживания?'),
    phone = prompt('Ваш телефон?'),
    email = prompt('Ваш email?'),
    company = prompt('Ваша компания?');

console.log('Меня зовут ' + name + '.' + ' Мне ' + age + ' лет.' + ' Я проживаю в городе ' + city + ' и работаю в компании ' + company + '.' + ' Мои контактные данные: ' + phone + ', ' + email);
console.log('');

// 2 пункт

let year = 2021 - age

console.log(name + ' родился в ' + year + ' году.');
console.log('');

// 3 пункт

// 846395

let x = 8 + 4 + 6,
    z = 3 + 9 + 5;

if(x == z) {
    console.log('да')
}

else {
    console.log('нет')
}

console.log('');

// 4 пункт

let a = -3;

if(a > 0) {
    console.log('Верно');
}

else {
    console.log('Неверно');
}

console.log('');

// 5 пункт

let a5 = 10,
    b5 = 2;

console.log(a5 + b5, a5 - b5, a5 * b5, a5 / b5);

if(a5 + b5 > 1) {
    console.log((a5 + b5) * (a5 + b5));
}

console.log('');

// 6 пункт

if(a5 > 2, a5 < 11) {
    console.log('Верно');
}

else if(b5 >= 6, b5 < 14) {
    console.log('Верно');
}

else {
    console.log('Неверно');
}

console.log('');

// 7 пункт

let n = prompt('Введите минуту часа (от 0 до 59)');

if(n > 0, n < 14) {
    console.log('Первая четверть часа')
}

else if(n > 15, n < 29) {
    console.log('Вторая четверть часа')
}

else if(n > 30, n < 44) {
    console.log('Третья четверть часа')
}

else if(n > 45, n < 59) {
    console.log('Четвёртая четверть часа')
}

else {
    console.log('Больше часа')
}

console.log('');

// 8 пункт

let day = prompt('Введите число месяца (от 1 до 31)')

if(day >= 1, day <= 10) {
    console.log('Первая декада месяца')
}

else if(day >= 11, day <= 20) {
    console.log('Вторая декада месяца')
}

else if(day >= 21, day <= 31) {
    console.log('Третья декада месяца')
}

else {
    console.log('Это больше или меньше месяца!')
}

console.log('');

// 9 пункт

let days = prompt('Введите количество дней'),
    weeks = days / 7,
    month = days / 31,
    years = days / 365,
    hour = 1 / 24,
    hours = days * 24,
    minute = hour / 60,
    minutes = hours * 60,
    second = minute / 60,
    seconds = minutes * 60;

if(days >=  1, days < 7) {
    console.log(days + ' день')
}

else if(days >= 7, days < 31) {
    console.log(weeks + ' неделя')
}

else if(days >= 31, days < 365) {
    console.log(month + ' месяц')
}

else if(days >= 365) {
    console.log(years + ' год')
}

else if(days >= hour, days < 1) {
    console.log(hours + ' час')
}

else if(days >= minute, days < hour) {
    console.log(minutes + ' минута')
}

else if(days >= second, days < minute) {
    console.log(seconds + ' секунда')
}

else {
    console.log('Меньше секунды')
}

// 10 пункт

if(days < 1) {
    console.log('Меньше дня')
}

else if(days >= 1, days < 32) {
    console.log('Январь, зима')
}

else if(days >= 32, days < 59) {
    console.log('Февраль, зима')
}

else if(days >= 59, days < 90) {
    console.log('Март, весна')
}

else if(days >= 90, days < 120) {
    console.log('Апрель, весна')
}

else if(days >= 120, days < 151) {
    console.log('Май, весна')
}

else if(days >= 151, days < 181) {
    console.log('Июнь, лето')
}

else if(days >= 181, days < 212) {
    console.log('Июль, лето')
}

else if(days >= 212, days < 243) {
    console.log('Август, лето')
}

else if(days >= 243, days < 273) {
    console.log('Сентябрь, осень')
}

else if(days >= 273,days < 304) {
    console.log('Октябрь, осень')
}

else if(days >= 304, days < 334) {
    console.log('Ноябрь, осень')
}

else if(days >= 334, days <= 365) {
    console.log('Декабрь, зима')
}

else if(days > 365) {
    console.log('Больше года')
}