import React, {FC} from 'react';
import {Theme} from '@app/theme';

import {Box} from './Box';
import {Icon} from './Icon';
import {TouchableOpacity} from './TouchableOpacity';

type HeaderProps = {
  onLeftPress?: () => void;
  onRightPress?: () => void;
  renderLeft?: () => React.ReactNode;
  renderRight?: () => React.ReactNode;
  color?: Extract<keyof Theme['colors'], {}>;
};

export const Header: FC<HeaderProps> = (props) => {
  const {renderLeft, renderRight, onLeftPress, onRightPress, color} = props;

  return (
    <Box px="m" pb="s" flexDirection="row" justifyContent="space-between">
      <TouchableOpacity activeOpacity={0.9} onPress={onLeftPress}>
        {renderLeft ? (
          renderLeft()
        ) : (
          <Icon name="md-arrow-back" size={30} color={color} />
        )}
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.9} onPress={onRightPress}>
        {renderRight ? (
          renderRight()
        ) : (
          <Icon name="md-bookmark" size={30} color={color} />
        )}
      </TouchableOpacity>
    </Box>
  );
};
