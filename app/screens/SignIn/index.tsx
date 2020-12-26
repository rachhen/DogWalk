import React from 'react';
import {Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Box, Text, SafeAreaView} from '@app/components';
import {AuthStackParamList} from 'types';

type Props = StackScreenProps<AuthStackParamList> & {};

const SignIn: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView flex={1} mode="padding">
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text variant="header">SignIn</Text>
        <Button
          title="Go to main"
          onPress={() => navigation.navigate('Main')}
        />
        <Button title="SignUp" onPress={() => navigation.navigate('SignUp')} />
      </Box>
    </SafeAreaView>
  );
};

export default SignIn;
