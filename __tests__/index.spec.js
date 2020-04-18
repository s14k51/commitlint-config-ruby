const config = require('..');

describe('default config', () => {
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
          'wip',
        ]],
      },
    });
  });
});
