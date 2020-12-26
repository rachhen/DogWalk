module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
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
          '@app/assets': './app/assets',
          '@app/components': './app/components',
          '@app/constants': './app/constants',
          '@app/hooks': './app/hooks',
          '@app/navigation': './app/navigation',
          '@app/screens': './app/screens',
          '@app/theme': './app/theme',
          '@app/utils': './app/utils',
        },
      },
    ],
  ],
};
