function calculateNumber(type, a, b) {
  // Convert input parameters to numbers and round them
  const n1 = Math.round(Number(a));
  const n2 = Math.round(Number(b));

  // Perform the requested operation based on the type
  switch (type) {
    case 'SUBTRACT':
      return n1 - n2;
    case 'DIVIDE':
      // Check for division by zero
      if (n2 === 0) {
        return 'Error: Division by zero';
      }
      return n1 / n2;
    default:
      return n1 + n2;
  }
}

module.exports = calculateNumber;

