import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import {Box, SafeAreaView, HomeHeader, Badge, Card} from '@app/components';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeParamList} from 'types';
import {homeData} from '../../data';

type HomeProps = StackScreenProps<HomeParamList> & {};

const Home: FC<HomeProps> = ({navigation}) => {
  return (
    <SafeAreaView
      flex={1}
      backgroundColor="card"
      edges={['left', 'right', 'top']}>
      <HomeHeader
        title="Siem Reap, Cambodia"
        num={2}
        onFilterPress={() => {}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box flex={1} backgroundColor="background" px="m" pb="m">
          <Box>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Badge label="Price hourly: min $10" />
              <Badge label="Small dogs" marginLeft="s" />
            </ScrollView>
          </Box>
          {homeData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              daytime={item.daytime}
              type={item.type}
              price={item.price}
              isBookmark={item.isBookmark}
              image={item.image}
              iconName={item.icon}
              onPress={() => navigation.navigate('Details')}
            />
          ))}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
