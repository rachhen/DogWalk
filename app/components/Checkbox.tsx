import React, {FC} from 'react';

import {Box} from './Box';
import {Icon} from './Icon';
import {TouchableOpacity} from './TouchableOpacity';

type Props = {
  checked?: boolean;
  onChange?: (val: boolean) => void;
};

export const Checkbox: FC<Props> = (props) => {
  const {checked, onChange} = props;
  const [value, setValue] = React.useState(checked);
  const checkStyle = value ? {backgroundColor: 'black'} : {borderWidth: 2};

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        setValue(!value);
        onChange && onChange(!value);
      }}>
      <Box position="relative">
        <Box
          width={30}
          height={30}
          borderRadius="s"
          position="absolute"
          alignItems="center"
          justifyContent="center"
          {...checkStyle}>
          {value && <Icon name="md-checkmark-sharp" size={25} color="card" />}
        </Box>
      </Box>
    </TouchableOpacity>
  );
};
