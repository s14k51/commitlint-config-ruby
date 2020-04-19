const config = require('../no-wip');

describe('no-wip config', () => {
  it('expected', () => {
    expect(config).toStrictEqual({
      defaultIgnores: false,
      extends: ['@commitlint/config-conventional'],
    });
  });
});
