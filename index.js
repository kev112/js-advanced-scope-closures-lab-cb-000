function produceDrivingRange(number) {
  return function (firstAve, secondAve) {
    const toInt = (string) => {parseInt(string.slice(0,-2) )};
    firstAve = toInt(firstAve);
    secondAve = toInt(secondAve);
    distance = Math.abs(secondAve - firstAve);

    const outOfRange = (distance > 0) ? true : false
    if (outOfRange) {
      return
    }

  }
}
