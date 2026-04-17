"use strict";

import chalk from "chalk";
import LoadingIndicator from "#lib";

const loadingIndicator = new LoadingIndicator({
  size: "large",
  rotation: "cw",
  format: function (pattern) {
    return chalk.blue("➜") + " connecting " + chalk.green(pattern);
  },
});
loadingIndicator.start();

setTimeout(function () {
  loadingIndicator.stop();
  console.log(chalk.green("✓") + " done");
}, 5000);
