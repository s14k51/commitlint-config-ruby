const { noWIPTypes } = require('conventional-ruby-commit-types');

module.exports = {
  defaultIgnores: false,
  extends: ['./index.js'],
  rules: {
    'type-enum': [2, 'always', noWIPTypes],
  },
};
