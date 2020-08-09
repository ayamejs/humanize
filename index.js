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

module.exports = { duration, bytes, version };




