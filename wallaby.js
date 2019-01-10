const ngxWallabyJest = require('ngx-wallaby-jest');

module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.+(ts|html|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      'tsconfig.json',
      'tsconfig.spec.json',
      'jest.config.js',
      'setup-jest.ts',
      '!src/**/*.spec.ts',
    ],

    tests: ['src/**/*.spec.ts'],

    env: {
      type: 'node',
      runner: 'node'
    },
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        module: 'commonjs',
        noLib: false,
        noResolve: false,
        noEmitOnError: true,
        declaration: true,
      }),
    },
    preprocessors: {
      // This translate templateUrl and styleUrls to the right implementation
      // For wallaby
      'src/app/**/*.component.ts': ngxWallabyJest,
    },
    testFramework: 'jest'
  };
};
