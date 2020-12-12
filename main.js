var $car = document.querySelector('.car');
var carData = {
  direction: 'east',
  location: {
    x: 0,
    y: 0
  },
  driving: false
};

var intervalID = null;

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

  if (event.key === ' ' && carData.driving === false) {
    intervalID = setInterval(function () {
      if (carData.direction === 'north') {
        carData.location.y -= 4;
      } else if (carData.direction === 'east') {
        carData.location.x += 4;
      } else if (carData.direction === 'south') {
        carData.location.y += 4;
      } else if (carData.direction === 'west') {
        carData.location.x -= 4;
      }
      $car.style.left = carData.location.x + 'px';
      $car.style.top = carData.location.y + 'px';
      carData.driving = true;
    }, 8);

  } else if (event.key === ' ' && carData.driving === true) {
    clearInterval(intervalID);
    carData.driving = false;
  }
});
