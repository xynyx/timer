const input = process.argv.slice(2);

input.forEach(el => {
  if (el < 0 || isNaN(el)) {
    return;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, el * 1000);
});