/**
 * Runs the background floating cloud animations using fabric.js
 */


 /**
  * typedef cloud: { size: Integer, speed: Integer, x: Float, y: Float }
  */

/**
 * gives us the next animation frame
 */
window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

/**
 * @return a cloud object
 */
function generateCloud() {
  return {
    size: Math.randomIntBetween(75, 150),
    speed: Math.randomFloatBetween(1, 4),
    troll: Math.randomIntBetween(1, 4)
  };
}

/**
 * @return an array of cloud objects based on the size of the screen
 */
function generateClouds () {
  var arr = [];
  var i = 0;

  for (i; i < 15; i++) { arr.push(generateCloud()); }

  return arr;
}

/**
 * Updates the position of a cloud for the next frame
 * If the cloud does not have it's position defined, initializes a position,
 * Otherwise it moves the cloud to the right based on it's speed, and causes it to wrap around
 * once it reaches the end of the page
 */
function updateCloud(canvas, cloud) {
  var height = canvas.height;
  var width = canvas.width;
  if (!cloud.x || !cloud.y) {
    cloud.x = Math.randomFloatBetween(0, width);
    cloud.y = Math.randomFloatBetween(0, height);
  } else {
    cloud.x += cloud.speed;

    if (cloud.x > width + cloud.size) {
      cloud.x = -cloud.size;
    }
  }
}

/**
 * draws an individual cloud
 */
function drawCloud (context, cloud) {
  var img;

  if (trollState) {
    img = document.getElementById('background-troll' + cloud.troll);
  } else {
    img = document.getElementById('background-cloud');
  }

  context.drawImage(img, cloud.x, cloud.y, cloud.size, cloud.size);

}

/**
 * Updates the cloud objects, clears the canvas, and redraws the clouds.
 * then requests the next animation frame.
 */
function animate(clouds, canvas, context) {
  clouds.forEach(function (cloud) {
    updateCloud(canvas, cloud);
  })

  context.clearRect(0, 0, canvas.width, canvas.height);
  clouds.forEach(function (cloud) {
    drawCloud(context, cloud);
  });

  requestAnimFrame(function() {
    animate(clouds, canvas, context);
  });
}

$(function() {
  var clouds = generateClouds();

  var img = document.getElementById('background-cloud');
  img.onload = function() {
    var canvas = document.getElementById('splash-bg');
    var context = canvas.getContext('2d');

    // Set the canvas height and width to match the height and width of the page
    // For some reason, if done before img.onload, the width of the canvas returns 100px.
    canvas.height = $(canvas).height();
    canvas.width = $(canvas).width();
    $(window).resize(function() {
      var canvas = document.getElementById('splash-bg');

      canvas.height = $(canvas).height();
      canvas.width = $(canvas).width();
    })

    animate(clouds, canvas, context, img);
  }



})
