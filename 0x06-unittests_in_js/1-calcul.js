const OPERATIONS = {
  SUM: 'SUM',
  SUBTRACT: 'SUBTRACT',
  DIVIDE: 'DIVIDE',
};

function isNegZero(n) {
  n = Number(n);
  return n === 0 && 1 / n === -Infinity;
}

module.exports = function calculateNumber(type, a, b = 0) {
  // Convert input parameters to numbers
  let aNum = Number(a);
  let bNum = Number(b);

  // Check if the input parameters are valid numbers
  if (Number.isNaN(aNum) || Number.isNaN(bNum)) {
    throw TypeError('Parameters must be numbers or able to coerce to number');
  }

  // Round the numbers to integers
  aNum = Math.round(aNum);
  bNum = Math.round(bNum);

  // Perform the requested operation
  switch (type) {
    case OPERATIONS.SUM:
      return aNum + bNum;
    case OPERATIONS.SUBTRACT:
      return aNum - bNum;
    case OPERATIONS.DIVIDE:
      if (bNum === 0) {
        return 'ERROR: Division by zero';
      }
      const quotient = aNum / bNum;
      return isNegZero(quotient) ? 0 : quotient;
    default:
      throw Error('Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".');
  }
};

