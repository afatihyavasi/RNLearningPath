import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const ProfilePage = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Text>HELLO</Text>
      <Text>{`This is ${route.params.name}'s profile`}</Text>
    </SafeAreaView>
  );
};

export default ProfilePage;
