module.exports = function calculateNumber(a, b = 0) {
  // Convert input parameters to numbers
  const aNum = Number(a);
  const bNum = Number(b);

  // Check if the input parameters are valid numbers
  if (Number.isNaN(aNum) || Number.isNaN(bNum)) {
    throw new TypeError('Parameters must be numbers');
  }

  // Return the sum of the rounded numbers
  return Math.round(aNum) + Math.round(bNum);
};
