"use strict";
const dayjs = require('dayjs')
const { difference } = require("lodash");

const reposc = require("@sharefe-demo-monorepo/repo-c");

// main entry
repoA();

function repoA() {
  console.log("\n ------------- START(`repo-a` repo@v0.0.7) -------------");

  // Call dayjs (3th party lib)
  console.log(`\nToday: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}`)

  const arr1 = [2, 1, 3];
  const arr2 = [1, 3, 5];

  // Call lodash#difference (3th party lib)
  console.log(
    `\nThe difference array=${JSON.stringify(arr1)} & array=${JSON.stringify(
      arr2
    )} is: ${difference(arr1, arr2)}`
  );

  // Call repo-c (native lib)
  console.log(`\nThe result of calling the 'repo-c': ${reposc()}`);
  console.log("\n ------------- END(`repo-a` repo) -------------\n");
}
