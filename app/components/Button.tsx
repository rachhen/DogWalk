import React, {FC} from 'react';

import {Text} from './Text';
import {Box} from './Box';
import {Icon, IconType} from './Icon';
import {TouchableOpacity, TouchableOpacityProps} from './TouchableOpacity';

type Props = TouchableOpacityProps & {
  children?: string;
  onPress?: () => void;
  variant?: 'outline';
  icon?: React.ReactNode;
};

export const Button: FC<Props> = ({onPress, children, ...props}) => {
  const {variant, icon, ...rest} = props;
  // const props = useRestyle(restyleFunctions, rest);

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} {...rest}>
      {variant === 'outline' ? (
        <Box p="l" borderRadius="m" alignItems="center" borderWidth={3}>
          {icon && icon}
          {children && (
            <Text fontSize={18} fontWeight="bold">
              {children}
            </Text>
          )}
        </Box>
      ) : (
        <Box p="l" borderRadius="m" alignItems="center" backgroundColor="black">
          {icon && icon}
          {children && (
            <Text color="card" fontSize={18} fontWeight="bold">
              {children}
            </Text>
          )}
        </Box>
      )}
    </TouchableOpacity>
  );
};

type ButtonIconProps = TouchableOpacityProps & {
  onPress?: () => void;
  outline?: boolean;
  name: string;
  type: IconType;
};
export const ButtonIcon: FC<ButtonIconProps> = (props) => {
  const {outline, onPress, name, type, ...rest} = props;
  const background = outline ? {} : {backgroundColor: 'black'};
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} {...rest}>
      <Box
        px="m"
        py="s"
        borderRadius="m"
        alignItems="center"
        borderWidth={3}
        {...background}>
        <Icon
          name={name}
          type={type}
          size={50}
          color={outline ? 'text' : 'card'}
        />
      </Box>
    </TouchableOpacity>
  );
};
