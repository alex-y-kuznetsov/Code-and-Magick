'use strict';

var ESCAPE_KEY_CODE = 27;
var ENTER_KEY_CODE = 13;

var openButton = document.querySelector('.setup-open');
var closeButton = document.querySelector('.setup-close');
var setupToggler = document.querySelector('.overlay');
var submitButton = document.querySelector('.setup-submit');

// Распределение ролей
var assignAttributes = function () {
  setupToggler.setAttribute('role', 'dialog');
  setupToggler.setAttribute('aria-labelledby', 'character-sheet');
  openButton.setAttribute('role', 'button');
  openButton.setAttribute('tabindex', '0');
  openButton.setAttribute('aria-pressed', 'false');
  closeButton.setAttribute('role', 'button');
  closeButton.setAttribute('tabindex', '0');
  closeButton.setAttribute('aria-pressed', 'false');
  submitButton.setAttribute('role', 'button');
  submitButton.setAttribute('tabindex', '0');
  submitButton.setAttribute('aria-pressed', 'false');
};
assignAttributes();

// Проверка нажатия кнопок Enter и Escape
var isEnter = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};
var isEscape = function (evt) {
  return evt.keyCode && evt.keyCode === ESCAPE_KEY_CODE;
};

// Изменение статуса aria-pressed
var toggleAria = function (element) {
  var ariaPressed = (element.getAttribute('aria-pressed') === 'true');
  if (ariaPressed) {
    element.setAttribute('aria-pressed', 'false');
  } else {
    element.setAttribute('aria-pressed', 'true');
  }
};

// Открытие и закрытие окна персонажа
var escapeCharSheet = function (evt) {
  if (isEscape(evt)) {
    setupToggler.classList.add('invisible');
  }
};
var submitCharSheet = function (evt) {
  toggleAria(submitButton);
  setupToggler.classList.add('invisible');
  if (isEnter(evt)) {
    setupToggler.classList.add('invisible');
  }
};
var openCharSheet = function (evt) {
  toggleAria(openButton);
  setupToggler.classList.remove('invisible');
  if (isEnter(evt)) {
    setupToggler.classList.remove('invisible');
    document.addEventListener('keydown', escapeCharSheet);
  }
};
var closeCharSheet = function (evt) {
  toggleAria(closeButton);
  setupToggler.classList.add('invisible');
  if (isEnter(evt)) {
    setupToggler.classList.add('invisible');
  }
};

openButton.addEventListener('click', openCharSheet);
openButton.addEventListener('keydown', openCharSheet);
closeButton.addEventListener('click', closeCharSheet);
closeButton.addEventListener('keydown', closeCharSheet);
submitButton.addEventListener('click', submitCharSheet);
submitButton.addEventListener('keydown', submitCharSheet);

// Валидация формы
var userName = document.querySelector('.setup-user-name');
userName.required = true;
userName.maxLength = 50;

// Получение случайного элемента массива
var getRandomArrayElem = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

// Изменение цвета плаща
var wizardCoat = document.querySelector('#wizard-coat');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var changeWizardCoatColor = function () {
  wizardCoat.style.fill = getRandomArrayElem(wizardCoatColors);
};
wizardCoat.addEventListener('click', changeWizardCoatColor);

// Изменение цвета глаз
var wizardEyes = document.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var changeWizardEyesColor = function () {
  wizardEyes.style.fill = getRandomArrayElem(wizardEyesColors);
};
wizardEyes.addEventListener('click', changeWizardEyesColor);

// Изменение цвета фаерболла
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var wizardFireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var changeWizardFireballColor = function () {
  wizardFireball.style.backgroundColor = getRandomArrayElem(wizardFireballColors);
};
wizardFireball.addEventListener('click', changeWizardFireballColor);
