// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
const body = document.querySelector('body');
console.log(body);

const title = document.querySelector('#title');
console.log(title);

const list = document.querySelector('.list');
console.log(list);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const allElem = document.querySelectorAll('[data-topic]');
console.log(allElem);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstElem = document.querySelector('[data-topic]');
console.log(firstElem);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(allElem[allElem.length - 1]);
console.log(list.lastElementChild);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const mainTitle = document.querySelector('h1');
console.log(mainTitle.nextElementSibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const thirdTitle = document.querySelectorAll('h3');
console.log(thirdTitle);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
thirdTitle.forEach(title => {
  title.classList.add('active');
});
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const specialList = document.querySelector('[data-topic = "navigation"]');
console.log(specialList);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// specialList.setAttribute('style', 'background-color:yellow')
specialList.style.backgroundColor = 'yellow';
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
specialList.querySelector('p').textContent = 'I`ve changed the text here';
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = 'manipulation';
const specialTopic = document.querySelector(`[data-topic = ${currentTopic}]`);
console.log();

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// specialTopic.style.backgroundColor='blue';
specialTopic.setAttribute('style', 'background-color:blue');

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const titleCompleted = document.querySelector('.completed');
console.log(titleCompleted);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const parent = titleCompleted.parentElement;
// const parent = titleCompleted.parentNode;
parent.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const newElem = (document.createElement('p').textContent =
  "Об'єктна модель документа (Document Object Model)");
mainTitle.after(newElem);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const newListElem = document.createElement('li');
// const newTitle = document.createElement('h3').textContent='Властивість innerHTML';
// const newText = document.createElement('p').textContent="Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// list.append(newListElem);
// newListElem.append(newTitle, newText);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

const elem = (newListElem.innerHTML =
  '<h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>');
list.insertAdjacentHTML('beforeend', elem);
// 20 - очисти список
// list.innerHTML = '';

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).
// const numberContainer = document.querySelector('.number-container');

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// let markupNumber = '';

// for (let i = 0; i < 100; i++) {
//   const newNumber = randomNumber();
//   const classNumber = newNumber % 2 === 0 ? 'even' : 'odd';

//   markupNumber += `
//     <div class="number ${classNumber}">
//       ${newNumber}
//     </div>
//   `;
// }
// numberContainer.innerHTML = markupNumber;

const numCont = document.querySelector('.number-container');
const arr = [];
for (let i = 0; i < 100; i++) {
  let number = randomNumber();
  const newElem = document.createElement('div');
  newElem.classList.add('number');
  newElem.textContent = number;
  if (number % 2 === 0) {
    newElem.classList.add('even');
  } else {
    newElem.classList.add('odd');
  }
  arr.push(newElem);
}
numCont.append(...arr);

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
const input = document.querySelector('.contact-form-input');
input.addEventListener('input', event => {
  if (event.target.value.length > 6) {
    input.classList.remove('error');
    input.classList.add('success');
  } else {
    input.classList.remove('success');
    input.classList.add('error');
  }
});
// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// input.addEventListener('focus', event => {
//   if (event.target.value.trim() === '') {
//     input.style.outline = '3px solid red';
//   } else {
//     input.style.outline = '3px solid green';
//   }
// });

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// input.addEventListener('blur', (event) => {
//   if (event.target.value.trim() !== '') {
//     input.style.outline = '3px solid lime';
//   } else {
//     input.style.outline = '3px solid red';
//   }
// });
// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
const form = document.querySelector('.contact-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const { accept, userName } = event.target.elements;
  if (userName.value.trim() !== '' && accept.checked === true) {
    const data = {};
    data.userName = userName.value.trim();
    console.log(data);
    form.reset();
    span.textContent = 'Anonymous';
  } else {
    alert('FILL IN ALL FIELDS');
    return;
  }
});
const span = document.querySelector('.js-username-output');
input.addEventListener('input', event => {
  if (event.target.value.trim() !== '') {
    span.textContent = event.target.value;
  } else {
    span.textContent = 'Anonymous';
  }
}); // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал: // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
// Form Events, Input, Focus, Blur and Submit.

const decrease = document.querySelector('.js-decrease');
const increase = document.querySelector('.js-increase');
let box = document.querySelector('.box');
const boxCont = document.querySelector('.box-container');
const styles = getComputedStyle(box);
const defaultSize = parseInt(styles.width);
let size = parseInt(styles.width);

decrease.addEventListener('click', event => {
  size -= 20;
  if (size < 10) {
    box.remove();
    box = null;
    size = defaultSize;
    return;
  }
  box.style.height = `${size}px`;
  box.style.width = `${size}px`;
});
increase.addEventListener('click', event => {
  if (!box) {
    const newBox = document.createElement('div');
    box = newBox;

    newBox.classList.add('box');
    boxCont.prepend(newBox);
  } else {
    size += 20;
  }
  box.style.height = `${size}px`;
  box.style.width = `${size}px`;
});
