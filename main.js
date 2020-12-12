
var $car = document.querySelector('.car');
var carData = {
  direction: 'east',
  location: ['', '']
};
var leftValue = '';
var pIndex = '';

document.addEventListener('keydown', function (event) {

  if (event.key === 'ArrowUp') {
    carData.direction = 'north';
  } else if (event.key === 'ArrowRight') {
    carData.direction = 'east';
  } else if (event.key === 'ArrowDown') {
    carData.direction = 'south';
  } else if (event.key === 'ArrowLeft') {
    carData.direction = 'west';
  }

  $car.setAttribute('class', 'car ' + carData.direction);

  if (event.key === ' ') {

    leftValue = $car.style.left;
    pIndex = leftValue.indexOf('p');

    leftValue.substring(0, pIndex);
    var leftNumber = Number(leftValue);

    setInterval(function () {
      leftNumber += 3;
      $car.style.left = leftNumber + 'px';
    }, 16);
  }
});
