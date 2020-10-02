const config = require('../no-wip');

describe('no-wip config', () => {
  it('expected', () => {
    expect(config).toStrictEqual({
      defaultIgnores: false,
      extends: ['./index.js'],
      rules: {
        'type-enum': [2, 'always', [
          'feat',
          'fix',
          'refactor',
          'perf',
          'test',
          'docs',
          'chore',
        ]],
      },
    });
  });
});
