for (var i = 0; i < 10; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, j * 100);
  })(i)
}