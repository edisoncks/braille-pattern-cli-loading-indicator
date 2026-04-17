"use strict";

import LoadingIndicator from "#lib";

const loadingIndicator = new LoadingIndicator({ size: "large" });

// Display loading indicator for 5 seconds, and then stop.
loadingIndicator.start();
setTimeout(function () {
  loadingIndicator.stop();
}, 5000);
