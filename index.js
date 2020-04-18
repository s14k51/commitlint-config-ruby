const typeEnum = require('@commitlint/config-angular-type-enum');

const angularTypes = typeEnum.value();
const additionalTypes = ['chore', 'wip'];
const customTypes = [...angularTypes, ...additionalTypes];

module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'type-enum': [2, 'always', customTypes],
  },
};