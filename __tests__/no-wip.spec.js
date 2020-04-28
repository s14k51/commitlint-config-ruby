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
          'docs',
          'style',
          'refactor',
          'perf',
          'test',
          'build',
          'ci',
          'chore',
          'revert',
        ]],
      },
    });
  });
});
