var TEN = 10;
var ONE_HUNDRED = 100;
var ONE_THOUSAND = 1000;
var ONE_HUNDRED_THOUSAND = 100000;
var ONE_MILLION = 1000000;
/* eslint-disable */
var ONE_BILLION = 1000000000;
var ONE_TRILLION = 10000000000000;
var ONE_QUADRILLION = 10000000000000000000;
var MAX = 9007199254740992;
/* eslint-enable */

var LESS_THAN_TEN = [
  "sufuri",
  "moja",
  "mbili",
  "tatu",
  "nne",
  "tano",
  "sita",
  "saba",
  "nane",
  "tisa"
];

var TENTHS_LESS_THAN_HUNDRED = [
  "sufuri",
  "kumi",
  "ishirini",
  "thelathini",
  "arubaini",
  "hamsini",
  "sitini",
  "sabini",
  "themanini",
  "tisini"
];

/**
 * Converts an integer into words. Omits decimals
 *
 * @example nambari(10) => 'kumi'
 * @param {number|string} number
 * @returns {string}
 */
function nambari(number, words = []) {
  var remainder, word;

  if (number === 0) {
    return !words ? "sufuri" : words.join(" ").replace(/,$/, "");
  }
  if (number < TEN) {
    remainder = 0;
    word = LESS_THAN_TEN[number];
  } else if (number < ONE_HUNDRED) {
    remainder = number % TEN;
    word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / TEN)];
    if (remainder) {
      word += " na " + LESS_THAN_TEN[remainder];
      remainder = 0;
    }
  } else if (number < ONE_THOUSAND) {
    remainder = number % ONE_HUNDRED;
    word = "mia " + nambari(Math.floor(number / ONE_HUNDRED));
  } else if (number < ONE_MILLION) {
    if (number < ONE_HUNDRED_THOUSAND) {
      remainder = number % ONE_THOUSAND;
      word = "elfu " + nambari(Math.floor(number / ONE_THOUSAND));
    } else {
      remainder = number % ONE_HUNDRED_THOUSAND;
      word = "laki " + nambari(Math.floor(number / ONE_HUNDRED_THOUSAND));
    }
  }
  words.push(word);
  return nambari(remainder, words);
}

module.exports = nambari;
