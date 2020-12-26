import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import {Box, Text, SafeAreaView, Button} from '@app/components';
import {AuthStackParamList} from 'types';

type Props = StackScreenProps<AuthStackParamList>;

const SignUp: React.FC<Props> = ({navigation}) => {
  const [t] = useTranslation();

  return (
    <SafeAreaView flex={1} backgroundColor="background" mode="padding">
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text variant="header">{t('sign_up')}</Text>
        <Button onPress={() => navigation.navigate('SignIn')} variant="outline">
          Sign In
        </Button>
      </Box>
    </SafeAreaView>
  );
};

export default SignUp;
