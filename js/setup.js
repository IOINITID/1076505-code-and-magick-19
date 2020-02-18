// 'use strict';

// // Определение констант и переменных
// var CHARACTER_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
// var CHARACTER_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
// var CHARACTER_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
// var CHARACTER_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
// var CHARACTER_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
// var CHARACTERS_QUANTITY = 4;
// var ENTER_KEY = 'Enter';
// var ESC_KEY = 'Escape';
// var setup = document.querySelector('.setup');
// var setupOpenButton = document.querySelector('.setup-open');
// var setupCloseButton = setup.querySelector('.setup-close');
// var avatarIcon = setupOpenButton.querySelector('.setup-open-icon');
// var userNameField = setup.querySelector('.setup-user-name');
// var setupForm = setup.querySelector('.setup-wizard-form');
// var wizardCoatColor = setup.querySelector('.wizard-coat');
// var wizardEyesColor = setup.querySelector('.wizard-eyes');
// var wizardFireballColor = setup.querySelector('.setup-fireball');

// // Получение случайного числа (утилитная функция)
// var getRandomNumber = function (number) {
//   return Math.ceil(Math.random() * number);
// };

// // Получение случайного элемента из списка
// var getRandomElement = function (elementList) {
//   return elementList[getRandomNumber(elementList.length - 1)];
// };

// // Создание списка персонажей, в параметре указываем количество персонажей
// var createRandomCharacters = function (quantityOfCharacters) {
//   var characters = [];
//   var currentCharacter;

//   // Получение случайных полных имен персонажей
//   var getRandomNames = function () {
//     var characterFullName = getRandomElement(CHARACTER_NAMES) + ' ' + getRandomElement(CHARACTER_SURNAMES);
//     return characterFullName;
//   };

//   // Создание объекта персонажа
//   var createRandomCharacter = function () {
//     var character = {};
//     // Получение случайного полного имени персонажа
//     var characterName = getRandomNames();
//     // Получение случайного цвета плаща персонажа
//     var characterCoatColor = getRandomElement(CHARACTER_COAT_COLORS);
//     // Получение случайного цвета глаз персонажа
//     var characterEyesColor = getRandomElement(CHARACTER_EYES_COLORS);
//     // Запись свойств в объект персонажа
//     character.name = characterName;
//     character.coatColor = characterCoatColor;
//     character.eyesColor = characterEyesColor;
//     return character;
//   };

//   // Запись копии персонажа в список
//   for (var i = 0; i < quantityOfCharacters; i++) {
//     currentCharacter = createRandomCharacter();
//     characters[i] = currentCharacter;
//   }
//   return characters;
// };

// // Отриовка персонажа
// var renderWizard = function (wizard) {
//   // Получение шаблона
//   var templateFragment = document.querySelector('#similar-wizard-template').content;
//   var wizardItem = templateFragment.cloneNode(true);
//   wizardItem.querySelector('.setup-similar-label').textContent = wizard.name;
//   wizardItem.querySelector('.wizard-coat').style.fill = wizard.coatColor;
//   wizardItem.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
//   return wizardItem;
// };

// // Отрисовка всех персонажей и добавление их на страницу
// var renderWizards = function (characterObjects) {
//   // Получение фрагмента
//   var fragment = document.createDocumentFragment();
//   // Получение списка персонажей
//   var wizardsList = document.querySelector('.setup-similar-list');

//   // Добавление всех персонажей в фрагмент
//   characterObjects.forEach(function (item) {
//     fragment.appendChild(renderWizard(item));
//   });

//   // Добавление фрагмента на страницу
//   wizardsList.appendChild(fragment);
// };

// // Открытие модального окна с настройкми
// // var showSetupModal = function () {
// //   // Получаем модальное окно с настройками
// //   var setupModal = document.querySelector('.setup');
// //   // Получаем окно похожих персонажей
// //   var setupList = setupModal.querySelector('.setup-similar');
// //   // Отображение окна настройки персонажа
// //   setupModal.classList.remove('hidden');
// //   // Отображение списка персонажей на странице
// //   setupList.classList.remove('hidden');
// // };

// var charactersList = createRandomCharacters(CHARACTERS_QUANTITY);

// // Отрисовка всех персонажей
// renderWizards(charactersList);

// Показывает модальное окно
// showSetupModal();

// // Раздел открытия модального окна
// // Нажатие на кнопку открыть (аватар пользователя)
// var onSetupOpenButtonClick = function () {
//   setup.classList.remove('hidden');
//   document.addEventListener('keydown', onEscapeButtonPress);
// };

// // Нажатие на кнопку открыть (аватар пользователя)
// var onSetupOpenButtonPress = function (evt) {
//   if (evt.key === ENTER_KEY) {
//     setup.classList.remove('hidden');
//     document.addEventListener('keydown', onEscapeButtonPress);
//   }
// };

// // Нажатие на кнопку закрыть (иконка закрыть в форме настройки)
// var onSetupCloseButtonClick = function () {
//   setup.classList.add('hidden');
//   document.removeEventListener('keydown', onEscapeButtonPress);
// };

// // Нажатие на кнопку закрыть (иконка закрыть в форме настройки)
// var onSetupCloseButtonPress = function (evt) {
//   if (evt.key === ENTER_KEY) {
//     setup.classList.add('hidden');
//     document.removeEventListener('keydown', onEscapeButtonPress);
//   }
// };

// // Нажатие на кнопку Escape
// var onEscapeButtonPress = function (evt) {
//   if (evt.key === ESC_KEY && evt.target !== userNameField) {
//     setup.classList.add('hidden');
//   }
// };

// // Смена цвета плаща персонажа
// var onWizardCoatClick = function () {
//   var wizardCoatColorField = setup.querySelector('input[name=coat-color]');
//   var wizardCoatColorItem = getRandomElement(CHARACTER_COAT_COLORS);
//   wizardCoatColor.style.fill = wizardCoatColorItem;
//   wizardCoatColorField.value = wizardCoatColorItem;
// };

// // Смена цвета глаз персонажа
// var onWizardEyesClick = function () {
//   var wizardEyesColorFiled = setup.querySelector('input[name=eyes-color]');
//   var wizardEyesColorItem = getRandomElement(CHARACTER_EYES_COLORS);
//   wizardEyesColor.style.fill = wizardEyesColorItem;
//   wizardEyesColorFiled.value = wizardEyesColorItem;
// };

// // Смена цвета огненного шара персонажа
// var onWizardFireballClick = function () {
//   var wizardFireballColorFiled = setup.querySelector('input[name=fireball-color]');
//   var wizardFireballColorItem = getRandomElement(CHARACTER_FIREBALL_COLORS);
//   wizardFireballColor.style.backgroundColor = wizardFireballColorItem;
//   wizardFireballColorFiled.value = wizardFireballColorItem;
// };

// // Нажатие на персонажа
// var onWizardClick = function (evt) {
//   if (evt.target === wizardCoatColor) {
//     onWizardCoatClick();
//   } else if (evt.target === wizardEyesColor) {
//     onWizardEyesClick();
//   } else if (evt.target === wizardFireballColor) {
//     onWizardFireballClick();
//   }
// };

// // Добавление обработчиков
// setupOpenButton.addEventListener('click', onSetupOpenButtonClick);
// avatarIcon.addEventListener('keydown', onSetupOpenButtonPress);
// setupCloseButton.addEventListener('click', onSetupCloseButtonClick);
// setupCloseButton.addEventListener('keydown', onSetupCloseButtonPress);
// setupForm.addEventListener('click', onWizardClick);
