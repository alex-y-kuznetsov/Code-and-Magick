'use strict';

// Открытие и закрытие окна персонажа
var openButton = document.querySelector('.setup-open');
var closeButton = document.querySelector('.setup-close');
var setupToggler = document.querySelector('.overlay');

var openCharSheet = function () {
  setupToggler.classList.remove('invisible');
};
var closeCharSheet = function () {
  setupToggler.classList.add('invisible');
};

openButton.addEventListener('click', openCharSheet);
closeButton.addEventListener('click', closeCharSheet);

// Получение случайного числа
var getRandomNumber = function (arrayLength) {
  return Math.floor(Math.random() * arrayLength);
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
  wizardCoat.style.fill = wizardCoatColors[getRandomNumber(wizardCoatColors.length)];
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
  wizardEyes.style.fill = wizardEyesColors[getRandomNumber(wizardEyesColors.length)];
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
  wizardFireball.style.backgroundColor = wizardFireballColors[getRandomNumber(wizardFireballColors.length)];
};
wizardFireball.addEventListener('click', changeWizardFireballColor);
