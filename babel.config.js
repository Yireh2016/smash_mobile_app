module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ts',
          '.ios.ts',
          '.android.ts',
          '.tsx',
          '.ios.tsx',
          '.android.tsx',
        ],
      },
    ],
  ],
};
