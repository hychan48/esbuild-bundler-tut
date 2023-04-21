/**
 * Quick and dirty
 * https://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments-to-a-node-js-program
 */
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
