# braille-pattern-cli-loading-indicator [![Test](https://github.com/edisoncks/braille-pattern-cli-loading-indicator/actions/workflows/test.yml/badge.svg)](https://github.com/edisoncks/braille-pattern-cli-loading-indicator/actions/workflows/test.yml) [![NPM Version](http://img.shields.io/npm/v/braille-pattern-cli-loading-indicator.svg?style=flat)](https://www.npmjs.org/package/braille-pattern-cli-loading-indicator)

Animated command line loading indicator using Unicode braille patterns (based on
Heroku CLI).

<table>
  <thead>
    <tr>
      <th>size</th>
      <th>rotation</th>
      <th>preview</th>
      <th>sample code</th>
    </tr>
  </thead>
  <tr>
    <td>large</td>
    <td>cw</td>
    <td>
      <img src="https://raw.githubusercontent.com/edisoncks/braille-pattern-cli-loading-indicator/main/examples/sample.gif" width="177">
    </td>
    <td>
      <a href="https://github.com/edisoncks/braille-pattern-cli-loading-indicator/blob/main/examples/formatted.js">examples/formatted.js</a>
    </td>
  </tr>
  <tr>
    <td>small</td>
    <td>ccw</td>
    <td>
      <img src="https://raw.githubusercontent.com/edisoncks/braille-pattern-cli-loading-indicator/main/examples/sample2.gif" width="177">
    </td>
    <td>
      <a href="https://github.com/edisoncks/braille-pattern-cli-loading-indicator/blob/main/examples/formatted-multicolor.js">examples/formatted-multicolor.js</a>
    </td>
  </tr>
</table>

# usage

- Use `start()` and `stop()` to enable or disable the loading indicator.
- Optionally specify `rotation` as `cw` (clockwise) or `ccw` (counterclockwise)
- Optionally provide a custom `format` function to add text or colors for the
  loading indicator.

```javascript
// ESM
import LoadingIndicator from "braille-pattern-cli-loading-indicator";

// CommonJS
const LoadingIndicator = require("braille-pattern-cli-loading-indicator").default;

const loader = new LoadingIndicator({
  size: "large",
  rotation: "cw",
  format: (pattern) => `charging plasma cannon ${pattern}`,
});

// Display loading indicator for 5 seconds, and then stop.
loader.start();
setTimeout(() => {
  loader.stop();
}, 5000);
```

# credits

heavily inspired by [heroku cli](https://github.com/heroku/heroku) loading
indicator
