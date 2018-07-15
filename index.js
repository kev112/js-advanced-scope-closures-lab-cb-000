function produceDrivingRange(number) {
  return function (firstAve, secondAve) {
    const splice = (string) => {string.splice(0,-2)};
    firstAve = splice(firstAve);
    secondAve = splice(secondAve);
  }
}
