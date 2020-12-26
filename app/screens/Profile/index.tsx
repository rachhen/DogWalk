import React, {FC} from 'react';
import {Box, Text, SafeAreaView} from '@app/components';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeParamList} from '@app/types';

type ProfileProps = StackScreenProps<HomeParamList>;

const Profile: FC<ProfileProps> = () => {
  return (
    <SafeAreaView flex={1}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text variant="header">Profile</Text>
      </Box>
    </SafeAreaView>
  );
};

export default Profile;
