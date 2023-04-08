function maskify(inputString: string): string {
  const maxLength = Math.max(inputString.length, 4);

  const lastFourChars = inputString.slice(-4);

  const maskedString = "#".repeat(maxLength - 4) + lastFourChars;

  if (inputString.length <= 4) {
    return inputString;
  }

  return maskedString;
}

module.exports = maskify;
