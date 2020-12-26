import React from 'react';
import {
  TouchableOpacity as BaseTouchableOpacity,
  TouchableOpacityProps as BaseTouchableOpacityProps,
} from 'react-native';
import {
  useRestyle,
  layout,
  spacing,
  border,
  backgroundColor,
  LayoutProps,
  spacingShorthand,
  SpacingProps,
  BorderProps,
  SpacingShorthandProps,
  BackgroundColorProps,
} from '@shopify/restyle';
import {Theme} from '@app/theme';

const restyleFunctions = [
  layout,
  spacing,
  border,
  spacingShorthand,
  backgroundColor,
];

export type TouchableOpacityProps = BaseTouchableOpacityProps &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme> &
  BackgroundColorProps<Theme> & {};

export const TouchableOpacity: React.FC<TouchableOpacityProps> = ({
  children,
  ...rest
}) => {
  const props = useRestyle(restyleFunctions, rest);

  return <BaseTouchableOpacity {...props}>{children}</BaseTouchableOpacity>;
};
