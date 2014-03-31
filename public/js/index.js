var ready = (function () {
  var isReady = false;
  return function ready (fn) {
    if (true === isReady || 'complete' === document.readyState) {
      isReady = true;
      setTimeout(fn);
      return;
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        console.log('ready')
        isReady = true;
        fn();
      });
    }
  };
}());

ready(function () {


});