const config = require('..');

describe('default config', () => {
  it('expected', () => {
    expect(config).toStrictEqual({
      extends: ['@commitlint/config-conventional'],
      rules: {
        'type-enum': [2, 'always', [
          'build',
          'chore',
          'ci',
          'docs',
          'feat',
          'fix',
          'improvement', // remove when `@commitlint/config-conventional` gets updated
          'perf',
          'refactor',
          'revert',
          'style',
          'test',
          'wip',
        ]],
      },
    });
  });
});
