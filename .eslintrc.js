module.exports = {
    root: true,
    env: { node: true, es6: true },
    extends: ['@nekohack/eslint-config'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module'
    }
}