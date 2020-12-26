import React, {FC} from 'react';
import {TextInput as BaseTextInput, TextInputProps} from 'react-native';
import {
  useRestyle,
  layout,
  LayoutProps,
  spacing,
  spacingShorthand,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  SpacingShorthandProps,
  BackgroundColorProps,
  useTheme,
} from '@shopify/restyle';
import {DefaultFont, Theme} from '@app/theme';

const restyleFunctions = [
  layout,
  spacing,
  spacingShorthand,
  border,
  backgroundColor,
];
type Props = TextInputProps &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme>;

export const TextInput: FC<Props> = ({...rest}) => {
  const props = useRestyle(restyleFunctions, rest);
  const {colors} = useTheme<Theme>();

  return (
    <BaseTextInput
      placeholderTextColor={colors.text}
      style={{fontFamily: DefaultFont}}
      {...props}
    />
  );
};
