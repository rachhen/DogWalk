import React from 'react';
import {Box, Text, SafeAreaView} from '@app/components';

const Settings = () => {
  return (
    <SafeAreaView flex={1} mode="padding">
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text variant="header">Settings</Text>
      </Box>
    </SafeAreaView>
  );
};

export default Settings;
