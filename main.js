
var $car = document.querySelector('.car');
var carData = {
  direction: 'east'
};

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
});
