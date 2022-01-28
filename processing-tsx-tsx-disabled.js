const fs = require('fs');
const swc = require('@swc/core');
const buffer = fs.readFileSync('input.tsx');

const swcOptions = {
  jsc: {
    parser: {
      syntax: 'typescript',
      tsx: false
    },
  },
};

swc
  .transform(buffer.toString(), {
    filename: 'input.tsx',
    ...swcOptions,
  })
  .then((output) => console.log(output.code));
