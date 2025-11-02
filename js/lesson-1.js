// alert -> undefined
// prompt
// const pr = prompt("login"); повертає рядок або null
// const con = confirm(""); повертає true/false

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().
// const number = Number(prompt("Введіть число"));
// number === 10 ? alert("right") : alert("wrong");

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// console.log(min);
// if (min <= 15) {
//   console.log(`${min} входить в першу чверть`);
// } else if (min > 15 && min <= 30) {
//   console.log(`${min} входить в другу чверть`);
// } else if (min > 30 && min <= 45) {
//   console.log(`${min} входить в третю чверть`);
// } else {
//   console.log(`${min} входить в четверту чверть`);
// }

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = prompt("Insert number from 1 to 4");
// let result;
// switch (num) {
//   case "1":
//     result = "Winter";
//     break;
//   case "2":
//     result = "Spring";
//     break;
//   case "3":
//     result = "Summer";
//     break;
//   case "4":
//     result = "Autumn";
//     break;
//   default:
//     result = "Wrong input";
// }
// console.log(result);

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const min = Number(prompt("Insert number"));

// const hours = String(Math.floor(min / 60));
// const minutes = String(min % 60);
// console.log(hours);
// console.log(minutes);
// console.log(`${hours.padStart(2, 0)}:${minutes.padStart(2, 0)}`);

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login = prompt("Insert your login");
// console.log(login);
// if (login === "admin") {
//   const pass = prompt("Insert your password");
//   alert(pass === "Iamtheboss" ? "hello boss" : "wrong password");
//   //   if (pass === "Iamtheboss") {
//   //     alert("hello boss");
//   //   } else {
//   //     alert("wrong password");
//   //   }
// } else if (login === null) {
//   alert("Canceled");
// } else {
//   alert("I do not know you");
// }

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
// let i = 0;
// while (i <= 20) {
//   console.log(i++);
// }

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sum = 0;
//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(getNumbers(10, 20));

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.
// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Not a number!";
//   }
//   return a < b ? a : b;
// }

// console.log(min(40, 50));

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//   return age >= 18 || confirm("Вам є 18 років?");
//   //return age >= 18 ? true : confirm("Вам є 18 років?");
// }
// console.log(isAdult(17));

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(i + " fizzBuzz");
//     } else if (i % 5 === 0) {
//       console.log(i + " buzz");
//     } else if (i % 3 === 0) {
//       console.log(i + " fizz");
//     }
//   }
// }

// fizzBuzz(90);

// 1. Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз.
// Цикл повинен питати число, доки користувач не
// введе число більше 100, чи не натисне кнопку
// Cancel в prompt
let num = prompt("Введіть число більше 100");
while (num !== null && Number(num) < 100) {
  num = prompt("Введіть число більше 100");
}
