'use strict';

const pkg = require('../package.json')

module.exports = repoC;

function repoC() {
    const changed = 'changed to 3'

    return `${pkg.name}, v0.0.2 - ${changed}`
}
