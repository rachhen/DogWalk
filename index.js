/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './app/index.tsx';
import {BaseSetting} from './app/constants/index';

AppRegistry.registerComponent(BaseSetting.name, () => App);
