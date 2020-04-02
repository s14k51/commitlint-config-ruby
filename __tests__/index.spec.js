const config = require('..');

describe('config', () => {
  it('expected', () => {
    expect(config).toStrictEqual({
      extends: ['@commitlint/config-conventional'],
      rules: {
        'scope-case': [2, 'always', ['lower-case', 'upper-case', 'camel-case', 'kebab-case', 'pascal-case']],
      },
    });
  });
});
