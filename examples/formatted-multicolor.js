"use strict";

import chalk from "chalk";
import LoadingIndicator from "#lib";

const colors = ["cyan", "blue", "magenta", "red", "yellow", "yellow"];

const loadingIndicator = new LoadingIndicator({
  size: "small",
  rotation: "ccw",
  format: function (pattern, i) {
    const color = colors[i];
    return chalk.blue("➜") + " connecting " + chalk[color](pattern);
  },
});
loadingIndicator.start();

setTimeout(function () {
  loadingIndicator.stop();
  console.log(chalk.green("✓") + " done");
}, 5000);
