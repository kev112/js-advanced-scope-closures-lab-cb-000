function produceDrivingRange(number) {
  return function (firstAve, secondAve) {
    function toInt (string) {
      parseInt(string.slice(0,-2) )
    };
    firstAve = toInt(firstAve);
    secondAve = toInt(secondAve);
    distance = Math.abs(secondAve - firstAve);

    const outOfRange = (distance > 10) ? true : false
    if (outOfRange) {
      return `${distance} blocks out of range`;
    } else {
      return `within range by ${distance}`;
    }

  }
}
