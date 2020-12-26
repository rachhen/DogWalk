import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {SafeAreaView, Box, Text} from '@app/components';
import {HomeParamList} from 'types';

type ActivitiesProps = StackScreenProps<HomeParamList>;

const Activities: FC<ActivitiesProps> = () => {
  return (
    <SafeAreaView flex={1}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text variant="header">Activities</Text>
      </Box>
    </SafeAreaView>
  );
};

export default Activities;
