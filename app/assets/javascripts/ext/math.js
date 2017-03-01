/**
 * Returns a random floating point between min and max using Math.rand
 */
Math.randomFloatBetween  = function (min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min and max using Math.rand
 */
Math.randomIntBetween = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
