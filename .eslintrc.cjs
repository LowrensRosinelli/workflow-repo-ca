module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // Egne regler kan legges her senere
  },
  globals: {
    // Test-globals (Vitest / Playwright)
    describe: "readonly",
    it: "readonly",
    test: "readonly",
    expect: "readonly",
    beforeAll: "readonly",
    beforeEach: "readonly",
    afterAll: "readonly",
    afterEach: "readonly",
    vi: "readonly",
  },
};
