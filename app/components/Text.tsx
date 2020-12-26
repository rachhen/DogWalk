import {createText} from '@shopify/restyle';
import theme, {DefaultFont} from '@app/theme';

const textVariants = {
  textVariants: {
    defaults: {
      fontFamily: DefaultFont,
      fontWeight: '500',
      fontSize: 15,
      lineHeight: 24,
      color: 'text',
    },
    header: {
      fontFamily: DefaultFont,
      fontWeight: 'bold',
      fontSize: 24,
      // lineHeight: 42.5,
      color: 'text',
    },
    subheader: {
      fontFamily: DefaultFont,
      fontWeight: '600',
      fontSize: 18,
      lineHeight: 36,
      color: 'text',
    },
    subheader_light: {
      fontFamily: DefaultFont,
      fontWeight: '400',
      fontSize: 18,
      lineHeight: 24,
      color: 'text',
    },
    body: {
      fontFamily: DefaultFont,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 24,
      color: 'text',
    },
    button: {},
  },
};

const textTheme = Object.assign(theme, textVariants);

export type TextTheme = typeof textTheme;
export const Text = createText<TextTheme>();
