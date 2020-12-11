
var $car = document.querySelector('.car');
var carData = {
  direction: 'east'
};

document.addEventListener('keydown', function (event) {

  if (event.key === 'ArrowUp') {
    carData.direction = 'north';
    $car.setAttribute('class', 'car, north');
  } else if (event.key === 'ArrowRight') {
    carData.direction = 'east';
    $car.setAttribute('class', 'car');
  } else if (event.key === 'ArrowDown') {
    carData.direction = 'south';
    $car.setAttribute('class', 'car south');
  } else if (event.key === 'ArrowLeft') {
    carData.direction = 'west';
    $car.setAttribute('class', 'car, west');
  }

});
