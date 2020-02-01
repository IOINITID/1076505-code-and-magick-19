'use strict';

// Определение констант и переменных
var CHARACTER_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var CHARACTER_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var CHARACTER_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var CHARACTER_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var CHARACTERS_QUANTITY = 4;

// Получение случайного числа (утилитная функция)
var getRandomNumber = function (number) {
  return Math.ceil(Math.random() * number);
};

// Получение случайного элемента из списка
var getRandomElement = function (elementList) {
  return elementList[getRandomNumber(elementList.length - 1)];
};

// Создание списка персонажей, в параметре указываем количество персонажей
var createRandomCharacters = function (quantityOfCharacters) {
  var characters = [];
  var currentCharacter;

  // Получение случайных полных имен персонажей
  var getRandomNames = function () {
    var characterFullName = getRandomElement(CHARACTER_NAMES) + ' ' + getRandomElement(CHARACTER_SURNAMES);
    return characterFullName;
  };

  // Создание объекта персонажа
  var createRandomCharacter = function () {
    var character = {};
    // Получение случайного полного имени персонажа
    var characterName = getRandomNames();
    // Получение случайного цвета плаща персонажа
    var characterCoatColor = getRandomElement(CHARACTER_COAT_COLORS);
    // Получение случайного цвета глаз персонажа
    var characterEyesColor = getRandomElement(CHARACTER_EYES_COLORS);
    // Запись свойств в объект персонажа
    character.name = characterName;
    character.coatColor = characterCoatColor;
    character.eyesColor = characterEyesColor;
    return character;
  };

  // Запись копии персонажа в список
  for (var i = 0; i < quantityOfCharacters; i++) {
    currentCharacter = createRandomCharacter();
    characters[i] = currentCharacter;
  }
  return characters;
};

var charactersList = createRandomCharacters(CHARACTERS_QUANTITY);

// Отриовка персонажа
var renderWizard = function (wizard) {
  // Получение шаблона
  var templateFragment = document.querySelector('#similar-wizard-template').content;
  var wizardItem = templateFragment.cloneNode(true);
  wizardItem.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardItem.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardItem.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardItem;
};

// Отрисовка всех персонажей и добавление их на страницу
var renderWizars = function (characterObjects) {
  // Получение фрагмента
  var fragment = document.createDocumentFragment();
  // Получение списка персонажей
  var wizardsList = document.querySelector('.setup-similar-list');

  // Добавление всех персонажей в фрагмент
  characterObjects.forEach(function (item) {
    fragment.appendChild(renderWizard(item));
  });

  // Добавление фрагмента на страницу
  wizardsList.appendChild(fragment);
};

// Открытие модального окна с настройкми
var showSetupModal = function () {
  // Получаем модальное окно с настройками
  var setupModal = document.querySelector('.setup');
  // Получаем окно похожих персонажей
  var setupList = setupModal.querySelector('.setup-similar');
  // Отображение окна настройки персонажа
  setupModal.classList.remove('hidden');
  // Отображение списка персонажей на странице
  setupList.classList.remove('hidden');
};

// Отрисовка всех персонажей
renderWizars(charactersList);

// Показывает модальное окно
showSetupModal();
