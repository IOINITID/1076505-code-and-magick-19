'use strict';

// Отрисовывка облака статистики с заданными параметрами
window.renderStatistics = function (ctx, names, times) {
  // Определение локальных констант
  var CLOUD_X = 140;
  var CLOUD_Y = 10;
  var CLOUD_GAP = 10;
  var BAR_WIDTH = 40;

  // Получение максимального значения из массива
  var getMaxElement = function (array) {
    return Math.max.apply(null, array);
  };

  // Получение случайного числа
  var getRandomNumber = function (number) {
    return Math.ceil(Math.random() * number);
  };

  // Получение синего цвета со случайным параметром насыщенности
  var getBlueColorWithRandomSaturation = function () {
    return 'hsl(240,' + getRandomNumber(100) + '%,' + '50%)';
  };

  // Отрисовка облака
  var renderCloud = function (x, y, color) {
    var CLOUD_WIDTH = 420;
    var CLOUD_HEIGHT = 270;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  // Отрисовка облака с заданными параметрами включая тень
  var renderCloudWithParameters = function () {
    var CLOUD_COLOR = '#ffffff';
    var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
    renderCloud(CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_SHADOW_COLOR);
    renderCloud(CLOUD_X, CLOUD_Y, CLOUD_COLOR);
  };

  // Отрисовка текста поздравления в цикле
  var renderCongratulation = function (strings, x, y) {
    var TEXT_FONT = '16px PT Mono';
    var TEXT_COLOR = '#000000';
    var TEXT_HEIGHT = 20;
    x = x || CLOUD_X + CLOUD_GAP;
    y = y || CLOUD_Y + TEXT_HEIGHT;
    ctx.font = TEXT_FONT;
    ctx.fillStyle = TEXT_COLOR;
    strings.forEach(function (string, i) {
      ctx.fillText(string, x, y + (TEXT_HEIGHT * i));
    });
  };

  // Вызов отрисовки текста поздравления с заданными параметрами
  var renderCongratulationWithParameters = function () {
    var TEXT_STRINGS = ['Ура вы победили!', 'Список результатов:'];
    renderCongratulation(TEXT_STRINGS);
  };

  // Отрисовка колонки гистограмы
  var renderBarColumn = function (barLeftPosition, barBottomPosition, columnHeight, color) {
    ctx.fillStyle = color;
    ctx.fillRect(barLeftPosition, barBottomPosition - columnHeight, BAR_WIDTH, columnHeight);
  };

  // Отрисовка имени и время игрока, изменение цвета колонки в зависимости от условия, вызов отрисовки колонки
  var renderBarText = function (barHeight, barLeftPosition, name, time) {
    var BAR_BOTTOM = 250;
    var PLAYER_BAR_COLOR = 'rgba(255, 0, 0, 1)';
    var playerTimePositionY = BAR_BOTTOM - barHeight - 10;
    var playerNamePositionY = BAR_BOTTOM + 20;
    var color = name === 'Вы' ? PLAYER_BAR_COLOR : getBlueColorWithRandomSaturation();
    time = Math.round(time);
    renderCongratulation([time], barLeftPosition, playerTimePositionY);
    renderCongratulation([name], barLeftPosition, playerNamePositionY);
    renderBarColumn(barLeftPosition, BAR_BOTTOM, barHeight, color);
  };

  // Отрисовка гистограмы, вызов отрисовки имени и время игрока
  var renderBarFull = function () {
    var BAR_HEIGHT = 150;
    var BAR_GAP = 50;
    var BAR_X = CLOUD_X + BAR_GAP;
    var maxTimeValue = getMaxElement(times);
    names.forEach(function (name, i) {
      var time = times[i];
      var currentBarHeight = time / maxTimeValue * BAR_HEIGHT;
      var currentBarPositionX = BAR_X + ((BAR_WIDTH + BAR_GAP) * i);
      renderBarText(currentBarHeight, currentBarPositionX, name, time);
    });
  };

  // Объединение вызовов функциий для отрисовки гистограмы
  var init = function () {
    renderCloudWithParameters();
    renderCongratulationWithParameters();
    renderBarFull();
  };

  // Инициализация вызова функций
  init();
};
