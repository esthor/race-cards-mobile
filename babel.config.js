module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@@screens': './src/screens',
          '@@navigation': './src/navigation',
          '@@components': './src/components',
          '@@utils': './src/utils',
          '@@state': './src/state',
          '@@assets': './src/assets',
          '@@cards': './src/assets/cards',
        },
      },
    ],
  ],
};
