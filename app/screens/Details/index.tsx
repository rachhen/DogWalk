import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {StyleSheet, StatusBar} from 'react-native';
import Animated from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import {
  Box,
  Text,
  SafeAreaView,
  Icon,
  TouchableOpacity,
  Image,
  Button,
  ButtonIcon,
} from '@app/components';
import {HomeParamList} from 'types';
import {detailData} from 'data';

type DetailProps = StackScreenProps<HomeParamList> & {};

const heightImageBanner = moderateScale(350);

const Details: FC<DetailProps> = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const marginTopBanner = heightImageBanner - insets.top - 80;
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const heightInterpolate = scrollY.interpolate({
    inputRange: [0, moderateScale(240), moderateScale(240)],
    outputRange: [heightImageBanner, insets.top + 70, insets.top + 70],
  });

  return (
    <Box flex={1} backgroundColor="card">
      <StatusBar barStyle="light-content" />
      <Animated.Image
        source={require('../../assets/images/HeroImage.jpg')}
        resizeMode="cover"
        style={[styles.image, {height: heightInterpolate}]}
      />
      <SafeAreaView flex={1}>
        <Box px="m" pb="s" flexDirection="row" justifyContent="space-between">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="md-arrow-back" size={30} color="card" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="md-bookmark" size={30} color="card" />
          </TouchableOpacity>
        </Box>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: scrollY}}},
          ])}>
          <Box
            flex={1}
            pt="xl"
            pb="l"
            px="l"
            backgroundColor="card"
            borderTopRightRadius="l"
            borderTopLeftRadius="l"
            style={{marginTop: marginTopBanner}}>
            <Box
              py="m"
              px="l"
              right={30}
              top={-30}
              borderRadius="s"
              shadowRadius={4}
              elevation={4}
              shadowColor="border"
              shadowOpacity={0.5}
              position="absolute"
              backgroundColor="card"
              shadowOffset={{width: 1, height: 1}}>
              <Text variant="subheader" fontWeight="bold">
                $ 12 / hr
              </Text>
            </Box>
            <Box py="m">
              <Text variant="header">{detailData.title}</Text>
            </Box>
            <Box flexDirection="row" justifyContent="space-between">
              <Box>
                <Text color="gray" variant="body">
                  AGE
                </Text>
                <Text variant="body">{detailData.age}</Text>
              </Box>
              <Box>
                <Text color="gray" variant="body">
                  SIZE
                </Text>
                <Text variant="body">{detailData.size}</Text>
              </Box>
              <Box>
                <Text color="gray" variant="body">
                  SEX
                </Text>
                <Text variant="body">{detailData.sex}</Text>
              </Box>
            </Box>
            <Box pt="m">
              <Text color="gray" variant="body" textTransform="uppercase">
                Location
              </Text>
              <Text variant="body">{detailData.location}</Text>
            </Box>
            <Box pt="m">
              <Text color="gray" variant="body" textTransform="uppercase">
                Service Type
              </Text>
              <Box flexDirection="row" alignItems="center">
                <Icon name={detailData.serviceTypeIcon} size={16} pr="s" />
                <Text variant="body">{detailData.serviceType}</Text>
              </Box>
            </Box>
            <Box pt="m">
              <Text color="gray" variant="body" textTransform="uppercase">
                Service Hours
              </Text>
              {detailData.serviceHours.map((serviceHour) => (
                <Box key={serviceHour.day} width="70%" pt="s">
                  <Box flexDirection="row" justifyContent="space-between">
                    <Box flex={1}>
                      <Text
                        variant="body"
                        color={serviceHour.isBooked ? 'border' : 'text'}>
                        {serviceHour.day}:
                      </Text>
                    </Box>
                    <Box flex={2}>
                      <Text
                        variant="body"
                        color={serviceHour.isBooked ? 'border' : 'text'}>
                        {serviceHour.startTime} - {serviceHour.endTime}
                      </Text>
                    </Box>
                    <Box flex={1.5}>
                      <Text variant="body" color="notification">
                        {serviceHour.isBooked ? 'Booked' : ''}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              ))}
              <Box flexDirection="row" mt="m">
                <Icon
                  name="md-information-circle-outline"
                  size={24}
                  color="warning"
                  pr="s"
                />
                <Text fontWeight="400" lineHeight={18}>
                  {detailData.serviceNote}
                </Text>
              </Box>
            </Box>
            <Box pt="m">
              <Text color="gray" variant="body" textTransform="uppercase">
                Service Fee
              </Text>
              <Text variant="body" fontWeight="600">
                $ {detailData.price} / hr
              </Text>
            </Box>
            <Box pt="m">
              <Text color="gray" variant="body" textTransform="uppercase">
                Details
              </Text>
              <Text variant="body">{detailData.details}</Text>
            </Box>
            <Box pt="m">
              <Text color="gray" variant="body" textTransform="uppercase">
                Her Human
              </Text>
              <Box mt="s" flexDirection="row" alignItems="center">
                <Box borderRadius="xl" width={70} height={70} overflow="hidden">
                  <Image
                    source={{uri: detailData.human.avatar}}
                    width={70}
                    height={70}
                  />
                </Box>
                <Box pl="m">
                  <Text variant="subheader" lineHeight={18}>
                    {detailData.human.name}
                  </Text>
                  <Text>{detailData.human.email}</Text>
                </Box>
              </Box>
            </Box>
            <Box flex={1} mt="l" flexDirection="row">
              <ButtonIcon name="comment" type="Octicons" outline mr="m" />
              <Button flex={1} onPress={() => navigation.navigate('Request')}>
                Create A Request
              </Button>
            </Box>
          </Box>
        </Animated.ScrollView>
      </SafeAreaView>
    </Box>
  );
};

export default Details;

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    height: heightImageBanner,
    width: '100%',
  },
});
