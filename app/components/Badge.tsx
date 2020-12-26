import React, {FC, ReactElement} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
} from '@shopify/restyle';
import {Theme} from '@app/theme';

import {Box} from './Box';
import {Text} from './Text';
import {TouchableOpacity} from './TouchableOpacity';

const restyleFunctions = [spacing, border, backgroundColor];
type Props = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {
    label: string;
    renderIcon?: () => ReactElement;
    renderText?: () => ReactElement;
    onPress?: () => void;
  };

export const Badge: FC<Props> = ({
  label,
  renderIcon,
  renderText,
  onPress,
  ...rest
}) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <Box
      p="s"
      mt="m"
      borderRadius="m"
      flexDirection="row"
      alignItems="center"
      backgroundColor="field"
      alignSelf="flex-start"
      {...props}>
      {renderText ? renderText() : <Text fontWeight="600">{label}</Text>}
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        {renderIcon ? renderIcon() : <Icon name="close" size={24} />}
      </TouchableOpacity>
    </Box>
  );
};
