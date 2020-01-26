'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 140;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var FONT_GAP = 20;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var cloudColor = '#ffffff';
var textColor = '#000000';
var cloudShadowColor = 'rgba(0, 0, 0, 0.7)';
var textFont = 'PT Mono 16px';
var playerBarColor = 'rgba(255, 0, 0, 1)';

// Получение случайного числа
var getRandomNumber = function (number) {
  return Math.ceil(Math.random() * number);
};

// Получение оттенка синего цвета с случайным параметром насыыщенности
var getBlueColorWithRandomSaturation = function () {
  return 'hsl(240,' + getRandomNumber(100) + '%,' + '50%)';
};

// Отрисовка облака
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Функция нахождения максимального элемента в массиве
var getMaxElement = function (array) {
  return Math.max.apply(null, array);
};

// Отрисовка текста с позравлением
var renderCongratulationText = function (ctx) {
  ctx.font = textFont;
  ctx.fillStyle = textColor;
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + CLOUD_GAP, CLOUD_Y + FONT_GAP * 2);
};

// Отрисовка текста гистограммы
var renderBarText = function (ctx, names, times, item) {
  ctx.fillStyle = textColor;
  ctx.fillText(names[item], CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * item, CLOUD_HEIGHT);
  ctx.fillText(Math.floor(times[item]), CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * item, CLOUD_Y + FONT_GAP * 4);
};

// Отрисовка столбика гистограммы
var renderBar = function (ctx, times, item) {
  // Нашел максимальное время игроков
  var maxTime = getMaxElement(times);
  ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * item, CLOUD_HEIGHT - FONT_GAP, BAR_WIDTH, (-BAR_HEIGHT * times[item] / maxTime));
};

// Отрисовка всей гистограммы
var renderBarChart = function (ctx, names, times) {
  names.forEach(function (item, i) {
    renderBarText(ctx, names, times, i);
    ctx.fillStyle = item === 'Вы' ? playerBarColor : getBlueColorWithRandomSaturation();
    renderBar(ctx, times, i);
  });
};

// Отрисовываю окно статистики с заданными параметрами
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, cloudShadowColor);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, cloudColor);
  renderCongratulationText(ctx);
  renderBarChart(ctx, names, times);
};
