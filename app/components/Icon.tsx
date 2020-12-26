import React, {FC} from 'react';
import {
  useRestyle,
  color,
  spacing,
  spacingShorthand,
  ColorProps,
  SpacingProps,
  SpacingShorthandProps,
} from '@shopify/restyle';
import {TextProps} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Theme} from '@app/theme';

export type IconType =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'SimpleLineIcons'
  | 'Octicons'
  | 'Zocial'
  | 'Fontisto';

const restyleFunctions = [color, spacing, spacingShorthand];

type Props = ColorProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  TextProps & {
    name: string;
    color?: string;
    size?: number;
    type?: IconType;
  };

export const Icon: FC<Props> = ({type, name, ...rest}) => {
  const props = useRestyle(restyleFunctions, rest);

  switch (type) {
    case 'AntDesign':
      return <AntDesign name={name} {...props} />;

    case 'Entypo':
      return <Entypo name={name} {...props} />;

    case 'EvilIcons':
      return <EvilIcons name={name} {...props} />;

    case 'Feather':
      return <Feather name={name} {...props} />;

    case 'FontAwesome':
      return <FontAwesome name={name} {...props} />;

    case 'FontAwesome5':
      return <FontAwesome5 name={name} {...props} />;

    case 'Foundation':
      return <Foundation name={name} {...props} />;

    case 'MaterialIcons':
      return <MaterialIcons name={name} {...props} />;

    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons name={name} {...props} />;

    case 'SimpleLineIcons':
      return <SimpleLineIcons name={name} {...props} />;

    case 'Octicons':
      return <Octicons name={name} {...props} />;

    case 'Zocial':
      return <Zocial name={name} {...props} />;

    case 'Fontisto':
      return <Fontisto name={name} {...props} />;

    default:
      return <Ionicons name={name} {...props} />;
  }
};
