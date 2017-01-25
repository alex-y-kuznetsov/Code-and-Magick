'use strict';

var messageY = 40;
var drawMessage = function (ctx, messageText) {

  ctx.fillText(messageText, 120, messageY);
  messageY += 20;
};

var getColor = function (name) {
  if (name === 'Вы') {
    return 'rgba(255, 0, 0, 1.0)';
  } else {
    return ['rgba(0, 0, 255, ', (Math.random()).toFixed(1), ')'].join('');
  }
};

var drawCol = function (ctx, name, time, step, columnIndentI, histoX, histoHeight) {
  time = Math.round(time);
  var height = step * time;

  ctx.fillStyle = getColor(name);

  ctx.fillText(time.toFixed(0), histoX + columnIndentI, 90 + histoHeight - height);
  ctx.fillRect(histoX + columnIndentI, 100 + histoHeight - height, 40, height);
  ctx.fillText(name, histoX + columnIndentI, 100 + histoHeight + 20);
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
  ctx.font = '16px PT Mono';

  drawMessage(ctx, 'Ура, Вы победили!');
  drawMessage(ctx, 'Список результатов:');

  var max = -1;

  times.forEach(function (time) {
    if (time > max) {
      max = time;
    }
  });

  var histoHeight = 150;
  var histoX = 140;
  var step = histoHeight / max;
  var columnIndent = 90;

  for (var i = 0; i < times.length; i++) {
    drawCol(ctx, names[i], times[i], step, columnIndent * i, histoX, histoHeight);
  }
};
