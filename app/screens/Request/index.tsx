import React, {FC} from 'react';
import {StatusBar, ScrollView} from 'react-native';
import {
  Box,
  Text,
  SafeAreaView,
  Header,
  Icon,
  Checkbox,
  Image,
  TextInput,
  Button,
} from '@app/components';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeParamList} from 'types';
import {requestData} from 'data';

type RequestProps = StackScreenProps<HomeParamList> & {};

const Request: FC<RequestProps> = ({navigation}) => {
  const [note, setNote] = React.useState<string>('');
  const [isError, setIsError] = React.useState<boolean>(false);

  const onNoteChange = (text: string) => {
    if (note.length >= 500) {
      setIsError(true);
    } else {
      setIsError(false);
    }

    setNote(text);
  };

  return (
    <SafeAreaView flex={1} backgroundColor="card">
      <StatusBar barStyle="light-content" />
      <Box
        width="100%"
        height={150}
        position="absolute"
        backgroundColor="primary"
      />
      <Header color="card" onLeftPress={() => navigation.goBack()} />
      <Box
        mt="m"
        flex={1}
        backgroundColor="card"
        borderTopLeftRadius="l"
        borderTopRightRadius="l">
        <ScrollView>
          <Box mt="xl" px="l">
            <Text variant="body">
              Please complete and confirm the information below.
            </Text>
          </Box>
          <Box mt="m" px="l">
            <Text variant="body" textTransform="uppercase" color="gray">
              Location
            </Text>
            <Text variant="body">{requestData.location}</Text>
          </Box>
          <Box mt="m" px="l">
            <Text variant="body" textTransform="uppercase" color="gray">
              Service Type
            </Text>
            <Box flexDirection="row" alignItems="center">
              <Icon name={requestData.serviceTypeIcon} size={16} pr="s" />
              <Text variant="body">{requestData.serviceType}</Text>
            </Box>
          </Box>
          <Box mt="m" px="l">
            <Text variant="body" textTransform="uppercase" color="gray">
              Service Hours
            </Text>
            <Box mt="m">
              {requestData.serviceHours.map((serviceHour) => (
                <Box key={serviceHour.day} width="50%" pb="l">
                  <Box flexDirection="row" justifyContent="space-between">
                    <Box flex={1}>
                      <Checkbox checked={true} />
                    </Box>
                    <Box flex={1}>
                      <Text variant="body">{serviceHour.day}:</Text>
                    </Box>
                    <Box flex={2}>
                      <Text variant="body">
                        {serviceHour.startTime} - {serviceHour.endTime}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              ))}
              <Box flexDirection="row">
                <Icon
                  name="md-information-circle-outline"
                  size={24}
                  color="warning"
                  pr="s"
                />
                <Box flex={1}>
                  <Text fontWeight="400" lineHeight={18}>
                    {requestData.serviceNote}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box mt="m" px="l">
            <Text variant="body" textTransform="uppercase" color="gray">
              Service Fee
            </Text>
            <Box flex={1}>
              <Text variant="body">$ {requestData.price} / hr</Text>
              {requestData.serviceHours.map((serviceHour) => (
                <Box key={serviceHour.day} pt="s">
                  <Box flexDirection="row" justifyContent="space-between">
                    <Box flex={0.5}>
                      <Text variant="body" fontWeight="400">
                        {serviceHour.day}:
                      </Text>
                    </Box>
                    <Box flex={2}>
                      <Text variant="body" fontWeight="400">
                        {serviceHour.startTime} - {serviceHour.endTime}
                      </Text>
                    </Box>
                    <Box flex={1} alignItems="flex-end">
                      <Text variant="body">$ {requestData.price}</Text>
                    </Box>
                  </Box>
                </Box>
              ))}
              <Box
                mt="s"
                flexDirection="row"
                justifyContent="space-between"
                borderTopColor="border"
                borderTopWidth={1}>
                <Text variant="subheader" fontWeight="700">
                  Total:
                </Text>
                <Text variant="subheader" fontWeight="700">
                  $ {requestData.serviceHours.length * requestData.price}
                </Text>
              </Box>
              <Box flexDirection="row">
                <Icon
                  name="md-information-circle-outline"
                  size={24}
                  color="warning"
                  pr="s"
                />
                <Box flex={1}>
                  <Text fontWeight="400" lineHeight={18}>
                    Your wage will be transfer to your account as soon as you
                    complete your daily service.
                  </Text>
                  <Text fontWeight="400" lineHeight={48}>
                    You will be earned $ 36 / per week.
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box mt="m" px="l">
            <Text variant="body" textTransform="uppercase" color="gray">
              Your Profile:
            </Text>
            <Box flexDirection="row" alignItems="center" mt="m">
              <Box borderRadius="xl" width={70} height={70} overflow="hidden">
                <Image
                  width={70}
                  height={70}
                  source={{uri: requestData.user.avatar}}
                />
              </Box>
              <Box ml="l">
                <Text variant="subheader">{requestData.user.name}</Text>
                <Box
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center">
                  <Icon
                    name="star"
                    type="AntDesign"
                    color="warning"
                    size={20}
                    mr="s"
                  />
                  <Text>{requestData.user.rate} </Text>
                  <Text>({requestData.user.votes} votes)</Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box mt="m" px="l">
            <Text variant="body" textTransform="uppercase" color="gray">
              Any Note?
            </Text>
            <Box
              pb="m"
              borderBottomWidth={1}
              borderBottomColor={isError ? 'notification' : 'border'}>
              <TextInput
                multiline={true}
                value={note}
                onChangeText={onNoteChange}
              />
            </Box>
            <Box flex={1} pt="s" alignItems="flex-end">
              <Text color="gray">{note.length} / 500</Text>
            </Box>
          </Box>
          <Box mt="l" px="l" pb="l">
            <Button>Send the Request</Button>
          </Box>
        </ScrollView>
      </Box>
    </SafeAreaView>
  );
};

export default Request;
