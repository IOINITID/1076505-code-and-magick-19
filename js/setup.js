'use strict';

// Получение случайного числа (утилитная функция)
var getRandomNumber = function (number) {
  return Math.ceil(Math.random() * number);
};

// Определение констант и переменных
var CHARACTER_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var CHATACTER_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var CHARACTER_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var CHARACTER_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var characters = [];
var currentCharacter;
// Получение шаблона
var templateFragment = document.querySelector('#similar-wizard-template').content;
// Получаем модальное окно с настройками
var setupModal = document.querySelector('.setup');
// Получаем окно похожих персонажей
var setupList = setupModal.querySelector('.setup-similar');
// Получение списка персонажей
var wizardsList = setupModal.querySelector('.setup-similar-list');

// Создание списка персонажей, в параметре указываем количество персонажей
var createRandomCharacters = function (quantityOfCharacters) {

  // Получение случайных полных имен персонажей
  var getRandomNames = function (names, surnames) {
    var characterFullNames = [];
    // Объединение случайного имени и фамилии персонажа и их запись в список
    names.forEach(function (item, i) {
      characterFullNames[i] = names[getRandomNumber(names.length - 1)] + ' ' + surnames[getRandomNumber(names.length - 1)];
    });
    return characterFullNames;
  };

  // Создание объекта персонажа
  var createRandomCharacter = function () {
    var character = {};
    // Получение случайного полного имени персонажа
    var characterName = getRandomNames(CHARACTER_NAMES, CHATACTER_SURNAMES)[getRandomNumber(CHARACTER_NAMES.length - 1)];
    // Получение случайного цвета плаща персонажа
    var characterCoatColor = CHARACTER_COAT_COLORS[getRandomNumber(CHARACTER_COAT_COLORS.length - 1)];
    // Получение случайного цвета глаз персонажа
    var characterEyesColor = CHARACTER_EYES_COLORS[getRandomNumber(CHARACTER_EYES_COLORS.length - 1)];
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

// Отриовка персонажа
var renderWizard = function (wizard) {
  var wizardItem = templateFragment.cloneNode(true);
  wizardItem.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardItem.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardItem.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardItem;
};

// Отрисовка всех персонажей и добавление их на страницу
var renderWizars = function () {

  // Получение фрагмента
  var fragment = document.createDocumentFragment();

  // Добавление всех персонажей в фрагмент
  for (var i = 0; i < characters.length; i++) {
    fragment.appendChild(renderWizard(characters[i]));
  }

  // Добавление фрагмента на страницу
  wizardsList.appendChild(fragment);
};

// Создание списков персонажей
createRandomCharacters(4);

// Отрисовка всех персонажей
renderWizars();

// Отображение окна настройки персонажа
setupModal.classList.remove('hidden');

// Отображение списка персонажей на странице
setupList.classList.remove('hidden');
