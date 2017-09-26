if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin-js-gradle-sample'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-js-gradle-sample'.");
}
this['kotlin-js-gradle-sample'] = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main(args) {
    println('Hello World');
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('kotlin-js-gradle-sample', _);
  return _;
}(typeof this['kotlin-js-gradle-sample'] === 'undefined' ? {} : this['kotlin-js-gradle-sample'], kotlin);
