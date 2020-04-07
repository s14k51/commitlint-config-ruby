const config = require('..');

describe('config', () => {
  it('expected', () => {
    expect(config).toStrictEqual({
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
