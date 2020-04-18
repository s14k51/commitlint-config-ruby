const config = require('../no-wip');

describe('no-wip config', () => {
  it('expected', () => {
    expect(config).toStrictEqual({
      defaultIgnores: false,
      extends: ['@commitlint/config-angular'],
      rules: {
        'type-enum': [2, 'always', [
          'build',
          'ci',
          'docs',
          'feat',
          'fix',
          'perf',
          'refactor',
          'revert',
          'style',
          'test',
          'chore',
        ]],
      },
    });
  });
});
