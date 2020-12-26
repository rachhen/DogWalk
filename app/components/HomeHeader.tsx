import React, {FC} from 'react';
import {Box} from './Box';
import {Text} from './Text';
import {Icon} from './Icon';
import {TouchableOpacity} from './TouchableOpacity';

type Props = {
  title: string;
  num: number;
  onFilterPress?: () => void;
};

export const HomeHeader: FC<Props> = (props) => {
  const {title, num, onFilterPress} = props;

  return (
    <Box
      p="m"
      flexDirection="row"
      backgroundColor="card"
      justifyContent="space-between">
      <Box flexDirection="row" alignItems="center">
        <Icon name="md-location-outline" size={34} />
        <Text variant="header" ml="s">
          {title}
        </Text>
      </Box>
      <TouchableOpacity activeOpacity={0.5} onPress={onFilterPress}>
        <Icon type="AntDesign" name="filter" size={34} />
        <Box
          width={22}
          height={22}
          borderRadius="xl"
          backgroundColor="text"
          justifyContent="center"
          alignItems="center"
          left={-5}
          top={-5}
          position="absolute">
          <Text color="card" fontSize={12}>
            {num}
          </Text>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};
