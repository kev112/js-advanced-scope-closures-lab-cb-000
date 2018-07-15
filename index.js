function produceDrivingRange(number) {
  return function (firstAve, secondAve) {
    function toInt (string) {
      return parseInt(string.slice(0,-2) )
    };
    firstAve = toInt('6th');
    secondAve = toInt('7th');
    let distance = Math.abs(secondAve - firstAve);

    const outOfRange = (distance > 10) ? true : false
    if (outOfRange) {
      return `${distance} blocks out of range`;
    } else {
      return `within range by ${distance}`;
    }

  }
}
