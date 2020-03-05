'use strict';

(function () {
  // Создание списка персонажей, в параметре указываем количество персонажей
  // var createRandomCharacters = function (quantityOfCharacters) {
  //   var characters = [];
  //   var currentCharacter;

  //   // Получение случайных полных имен персонажей
  //   var getRandomNames = function () {
  //     var characterFullName = window.util.getRandomElement(window.util.CHARACTER_NAMES) + ' ' + window.util.getRandomElement(window.util.CHARACTER_SURNAMES);
  //     return characterFullName;
  //   };

  //   // Создание объекта персонажа
  //   var createRandomCharacter = function () {
  //     var character = {};
  //     // Получение случайного полного имени персонажа
  //     var characterName = getRandomNames();
  //     // Получение случайного цвета плаща персонажа
  //     var characterCoatColor = window.util.getRandomElement(window.util.CHARACTER_COAT_COLORS);
  //     // Получение случайного цвета глаз персонажа
  //     var characterEyesColor = window.util.getRandomElement(window.util.CHARACTER_EYES_COLORS);
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

  // Отриовка персонажа
  var renderWizard = function (wizard) {
    // Получение шаблона
    var templateFragment = document.querySelector('#similar-wizard-template').content;
    var wizardItem = templateFragment.cloneNode(true);
    wizardItem.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardItem.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardItem.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardItem;
  };

  // Отрисовка всех персонажей и добавление их на страницу
  var renderWizards = function (characterObjects) {
    // Получение фрагмента
    var fragment = document.createDocumentFragment();
    // Получение списка персонажей
    var wizardsList = document.querySelector('.setup-similar-list');

    // Добавление всех персонажей в фрагмент
    characterObjects.forEach(function (item, i) {
      if (i < 4) {
        fragment.appendChild(renderWizard(item));
      }
    });

    // Добавление фрагмента на страницу
    wizardsList.appendChild(fragment);
  };

  // var charactersList = createRandomCharacters(window.util.CHARACTERS_QUANTITY);

  // Отрисовка всех персонажей
  // renderWizards(charactersList);

  var onLoadSuccess = function (response) {
    renderWizards(response);
    window.util.setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(onLoadSuccess, window.util.onRequestError);
})();
