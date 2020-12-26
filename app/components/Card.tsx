import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon, IconType} from './Icon';
import {Box} from './Box';
import {Text} from './Text';
import {Image} from './Image';

type Props = {
  title: string;
  image: string;
  daytime: string;
  type: string;
  price: number;
  iconName: string;
  iconType?: IconType;
  isBookmark?: boolean;
  onPress?: () => void;
};

export const Card: FC<Props> = (props) => {
  const {title, image, daytime, type, price, isBookmark, onPress} = props;

  const backgroundOverlay = 'rgba(0,0,0,0.4)';
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <Box borderRadius="m" overflow="hidden" mt="m">
        <Image source={{uri: image}} width={undefined} height={200} />
        <Box
          width="100%"
          height={200}
          position="absolute"
          style={{backgroundColor: backgroundOverlay}}
        />
        <Box
          width="100%"
          position="absolute"
          top={0}
          alignItems="flex-end"
          p="m">
          <Icon
            name={isBookmark ? 'md-bookmark' : 'md-bookmark-outline'}
            size={30}
            color="card"
          />
        </Box>
        <Box width="100%" position="absolute" bottom={0} p="m">
          <Text variant="header" color="card">
            {title}
          </Text>
          <Text variant="subheader_light" color="card">
            {daytime}
          </Text>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center">
            <Box flexDirection="row" alignItems="center">
              <Icon
                pr="s"
                size={25}
                color="card"
                type={props.iconType}
                name={props.iconName}
              />
              <Text color="card">{type}</Text>
            </Box>
            <Box flexDirection="row" pt="m">
              <Text variant="header" color="card">
                $ {price}
              </Text>
              <Text variant="header" color="border">
                {' '}
                / hr
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};
