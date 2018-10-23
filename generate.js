function generate(width, height, objects, type) {

  var canvas;
  var ctx;

  // create canvas
  canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  ctx = canvas.getContext('2d');

  // create objects
  for (var i = 0; i < objects; i++) {
    var x = getRandomInt(0, width);
    var y = getRandomInt(0, height);
    var object = {
      position: {
        x: x,
        y: y,
      },
      hue: getRandomInt(0, 360),
      size: (Math.random() * 3),
      length: getRandomInt(50, height - y - 5),
      opacity: type === 'stars' ? getRandomInt(50, 100) : getRandomInt(10, 50),
      saturation: getRandomInt(0, 50) + '%',
    };

    ctx.beginPath();
    ctx.shadowBlur = Math.floor(Math.random() * 5 + 2);
    ctx.shadowColor = 'white';
    ctx.fillStyle =
      'hsla(' +
      object.hue +
      ', ' +
      object.saturation +
      ', 80%, .' +
      object.opacity +
      ')';

    ctx.fillRect(
      object.position.x,
      object.position.y,
      object.size,
      type === 'stars' ? object.size : object.length
    );
  }

  // return image data
  return canvas.toDataURL("image/png");

  // http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
