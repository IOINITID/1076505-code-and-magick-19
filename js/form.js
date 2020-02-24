'use strict';

(function () {
  // Раздел открытия модального окна
  // Нажатие на кнопку открыть (аватар пользователя)
  var onSetupOpenButtonClick = function () {
    window.util.setup.classList.remove('hidden');
    document.addEventListener('keydown', onEscapeButtonPress);
  };

  // Нажатие на кнопку открыть (аватар пользователя)
  var onSetupOpenButtonPress = function (evt) {
    if (evt.key === window.util.ENTER_KEY) {
      window.util.setup.classList.remove('hidden');
      document.addEventListener('keydown', onEscapeButtonPress);
    }
  };

  // Сброс положения модального окна
  var resetModalWindow = function () {
    window.util.setup.style.left = '';
    window.util.setup.style.top = '';
    window.util.setup.classList.add('hidden');
    document.removeEventListener('keydown', onEscapeButtonPress);
  };

  // Нажатие на кнопку закрыть (иконка закрыть в форме настройки)
  var onSetupCloseButtonClick = function () {
    resetModalWindow();
  };

  // Нажатие на кнопку закрыть (иконка закрыть в форме настройки)
  var onSetupCloseButtonPress = function (evt) {
    if (evt.key === window.util.ENTER_KEY) {
      resetModalWindow();
    }
  };

  // Нажатие на кнопку Escape
  var onEscapeButtonPress = function (evt) {
    if (evt.key === window.util.ESC_KEY && evt.target !== window.util.userNameField) {
      resetModalWindow();
    }
  };

  // Смена цвета плаща персонажа
  var onWizardCoatClick = function () {
    var wizardCoatColorField = window.util.setup.querySelector('input[name=coat-color]');
    var wizardCoatColorItem = window.util.getRandomElement(window.util.CHARACTER_COAT_COLORS);
    window.util.wizardCoatColor.style.fill = wizardCoatColorItem;
    wizardCoatColorField.value = wizardCoatColorItem;
  };

  // Смена цвета глаз персонажа
  var onWizardEyesClick = function () {
    var wizardEyesColorFiled = window.util.setup.querySelector('input[name=eyes-color]');
    var wizardEyesColorItem = window.util.getRandomElement(window.util.CHARACTER_EYES_COLORS);
    window.util.wizardEyesColor.style.fill = wizardEyesColorItem;
    wizardEyesColorFiled.value = wizardEyesColorItem;
  };

  // Смена цвета огненного шара персонажа
  var onWizardFireballClick = function () {
    var wizardFireballColorFiled = window.util.setup.querySelector('input[name=fireball-color]');
    var wizardFireballColorItem = window.util.getRandomElement(window.util.CHARACTER_FIREBALL_COLORS);
    window.util.wizardFireballColor.style.backgroundColor = wizardFireballColorItem;
    wizardFireballColorFiled.value = wizardFireballColorItem;
  };

  // Нажатие на персонажа
  var onWizardClick = function (evt) {
    if (evt.target === window.util.wizardCoatColor) {
      onWizardCoatClick();
    } else if (evt.target === window.util.wizardEyesColor) {
      onWizardEyesClick();
    } else if (evt.target === window.util.wizardFireballColor) {
      onWizardFireballClick();
    }
  };

  // Добавление обработчиков
  window.util.setupOpenButton.addEventListener('click', onSetupOpenButtonClick);
  window.util.avatarIcon.addEventListener('keydown', onSetupOpenButtonPress);
  window.util.setupCloseButton.addEventListener('click', onSetupCloseButtonClick);
  window.util.setupCloseButton.addEventListener('keydown', onSetupCloseButtonPress);
  window.util.setupForm.addEventListener('click', onWizardClick);
})();
