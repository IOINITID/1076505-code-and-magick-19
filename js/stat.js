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
var CLOUD_COLOR = '#ffffff';
var CLOUD_SHADOW = 'rgba(0, 0, 0, 0.7)';
// Функция отприсовки облака
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
// Функция нахождения максимального элемента в массиве
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (maxElement < arr[i]) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};
// Отрисовываю окно статистики с заданными параметрами
window.renderStatistics = function (ctx, names, times) {
  // Отрисовал тень для облака
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_SHADOW);
  // Отрисовал фон для облака
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);
  // Задал шрифт, его размер и цвет. Так же вывел в окно сообщение о победе
  ctx.font = 'PT Mono 16px';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + CLOUD_GAP, CLOUD_Y + FONT_GAP * 2);
  // Нашел максимальное время игроков
  var maxTime = getMaxElement(times);
  // Отрисовал имена игроков и их результат в цикле
  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + FONT_GAP * 4);
  }
  // Меняю цвет столбиков игроков
  for (var j = 0; j < names.length; j++) {
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240,' + Math.floor(Math.random(100).toFixed(2) * 100) + '%,' + '50%)';
    }
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * j, CLOUD_HEIGHT - FONT_GAP, BAR_WIDTH, (-BAR_HEIGHT * times[j] / maxTime));
  }
};
