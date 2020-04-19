const conventionalConfig = require('@commitlint/config-conventional');

const conventionalTypes = conventionalConfig.rules['type-enum'][2];
const additionalTypes = ['wip'];
const types = [...conventionalTypes, ...additionalTypes];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', types],
  },
};
