// This was created by Geoff Davis on 3/9/2022

const mmddyyyy = (d) =>
  `${(d.getUTCMonth() + 1).toString().padStart(2, '0')}/${d
    .getUTCDate()
    .toString()
    .padStart(2, '0')}/${d.getUTCFullYear()}`;

const yyyymmdd = (d) =>
  `${d.getUTCFullYear()}-${(d.getUTCMonth() + 1)
    .toString()
    .padStart(2, '0')}-${d.getUTCDate().toString().padStart(2, '0')}`;

const newOffsetDt = (d, x = 0) => new Date(Date.parse(d) + x * 86400000);

module.exports = { mmddyyyy, yyyymmdd, newOffsetDt };
