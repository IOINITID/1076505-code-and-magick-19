'use strict';

(function () {
  // Определение констант и переменных
  var CHARACTER_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var CHARACTER_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var CHARACTER_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var CHARACTER_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var CHARACTER_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var CHARACTERS_QUANTITY = 4;
  var ENTER_KEY = 'Enter';
  var ESC_KEY = 'Escape';
  var setup = document.querySelector('.setup');
  var setupOpenButton = document.querySelector('.setup-open');
  var setupCloseButton = setup.querySelector('.setup-close');
  var avatarIcon = setupOpenButton.querySelector('.setup-open-icon');
  var userNameField = setup.querySelector('.setup-user-name');
  var setupForm = setup.querySelector('.setup-wizard-form');
  var wizardCoatColor = setup.querySelector('.wizard-coat');
  var wizardEyesColor = setup.querySelector('.wizard-eyes');
  var wizardFireballColor = setup.querySelector('.setup-fireball');

  // Получение случайного числа (утилитная функция)
  var getRandomNumber = function (number) {
    return Math.ceil(Math.random() * number);
  };

  // Получение случайного элемента из списка
  var getRandomElement = function (elementList) {
    return elementList[getRandomNumber(elementList.length - 1)];
  };

  // Сообщение ошибки запроса
  var onRequestError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.util = {
    CHARACTER_NAMES: CHARACTER_NAMES,
    CHARACTER_SURNAMES: CHARACTER_SURNAMES,
    CHARACTER_COAT_COLORS: CHARACTER_COAT_COLORS,
    CHARACTER_EYES_COLORS: CHARACTER_EYES_COLORS,
    CHARACTER_FIREBALL_COLORS: CHARACTER_FIREBALL_COLORS,
    CHARACTERS_QUANTITY: CHARACTERS_QUANTITY,
    ENTER_KEY: ENTER_KEY,
    ESC_KEY: ESC_KEY,
    setup: setup,
    setupOpenButton: setupOpenButton,
    setupCloseButton: setupCloseButton,
    avatarIcon: avatarIcon,
    userNameField: userNameField,
    setupForm: setupForm,
    wizardCoatColor: wizardCoatColor,
    wizardEyesColor: wizardEyesColor,
    wizardFireballColor: wizardFireballColor,
    getRandomNumber: getRandomNumber,
    getRandomElement: getRandomElement,
    onRequestError: onRequestError,
  };
})();
