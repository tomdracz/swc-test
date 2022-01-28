const fs = require('fs');
const swc = require('@swc/core');
const buffer = fs.readFileSync('input.jsx');

const swcOptions = {
  jsc: {
    parser: {
      syntax: 'ecmascript',
      jsx: true
    },
  },
};

swc
  .transform(buffer.toString(), {
    filename: 'input.jsx',
    ...swcOptions,
  })
  .then((output) => console.log(output.code));
