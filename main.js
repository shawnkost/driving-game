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
    var intervalID = setInterval(function () {
      carData.location.x += 3;
      $car.style.left = carData.location.x + 'px';
      carData.driving = true;
    }, 16);
  }
  if (event.key === " " && carData.driving === true) {
    clearInterval(intervalID);
    carData.driving = false;
  }
});
