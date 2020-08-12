const { version } = require("./package.json");

/**
 * Convert milliseconds into a human readable string.
 * @param {Number} time - Time in milliseconds.
 * @returns {String}
 * @example
 * humanize.duration(5000);
 * // => 5s
 * humanize.duration(1000 * 60 * 50);
 * // => 50m
 */
function duration(time) {
  const seconds = Math.floor(time / 1000) % 60 ;
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const days = Math.floor((time / (1000 * 60 * 60 * 24)) % 7);

  return [`${days}d`, `${hours}h`, `${minutes}m`, `${seconds}s`]
    .filter(time => !time.startsWith("0")).join(" ");
}

const suffixes = ["Bytes", "KB", "MB", "GB", "TB"];

/**
 * Turn bytes into a human readable string.
 * @param {Number} bytes - Amount of bytes.
 * @returns {String}
 * @example
 * humanize.bytes(3000);
 * // => 2.93 KB
 */
function bytes(bytes) {
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return (!bytes && "0 Bytes") || `${(bytes / Math.pow(1024, i)).toFixed(2)} ${suffixes[i]}`;
}

/**
 * Ordinal gives you the input number in a rank/ordinal format.
 * Ordinal(3) -> 3rd
 * @param {Number} num - The number.
 * @returns {String}
 */
function ordinal(num) {
  let suffix = "th";

  switch(num % 10) {
  case 1:
    if(num % 100 !== 11) suffix = "st";
    break;
  case 2:
    if(num % 100 !== 12) suffix = "nd";
    break;
  case 3:
    if(num % 100 !== 13) suffix = "rd";
    break;
  }

  return `${num}${suffix}`;
}


module.exports = { duration, bytes, ordinal, version };




