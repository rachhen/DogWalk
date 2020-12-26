import React, {FC} from 'react';
import {Image as BaseImage, ImageProps} from 'react-native';
import {
  useRestyle,
  spacing,
  border,
  layout,
  LayoutProps,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
} from '@shopify/restyle';
import {Theme} from '../theme';

const restyleFunctions = [layout, spacing, border, backgroundColor];
type Props = ImageProps &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme>;

export const Image: FC<Props> = ({source, ...rest}) => {
  const props = useRestyle(restyleFunctions, rest);

  return <BaseImage source={source} {...props} />;
};
