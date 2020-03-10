const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

//'readable' - many inputs over time
//'data' - one input

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  } else if (key < 10 && key > 0) {
    process.stdout.write(`Setting timer for ${key} seconds... `);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  } else if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});