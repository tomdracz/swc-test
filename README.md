# Showing the compiler issue with inline options

## JSX disabled, Ecmascript parser

Command:
`node processing-jsx-jsx-disabled.js`

Output:
As expected, `Expression expected` and `Unterminated regexp literal` errors emitted

## JSX enabled, Ecmascript parser

Command:
`node processing-jsx-jsx-enabled.js`

Output:
As expected. Outputs file fine:

```
var testArrow = function() {
    return(/*#__PURE__*/ React.createElement("div", null, "Test"));
};
export default testArrow;
```

## TSX disabled, Typescript parser

Command:
`node processing-tsx-tsx-disabled.js`

Output:
Unexpected. Outputs file fine, would expect the file to error out same as `JSX disabled, Ecmascript parser`.

This DOES error out if the same options are supplied through `.swcrc` rather than inline

## TSX enabled, Typescript parser

Command:
`node processing-tsx-tsx-enabled.js`

Output:
As expected. Outputs file fine, same as JSX + Ecmascript