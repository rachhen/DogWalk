import React from 'react';
import {
  SafeAreaView as BaseSafeAreaView,
  NativeSafeAreaViewProps,
} from 'react-native-safe-area-context';
import {
  useRestyle,
  layout,
  LayoutProps,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
} from '@shopify/restyle';
import {Theme} from '@app/theme';

const restyleFunctions = [layout, spacing, border, backgroundColor];
type Props = LayoutProps<Theme> &
  SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  NativeSafeAreaViewProps;

export const SafeAreaView: React.FC<Props> = ({children, ...rest}) => {
  const props = useRestyle(restyleFunctions, rest);

  return <BaseSafeAreaView {...props}>{children}</BaseSafeAreaView>;
};
