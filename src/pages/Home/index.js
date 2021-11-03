import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

const HomePage = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Text>Welcome to home screen</Text>
      <Button
        title={'Go to profile'}
        onPress={() => {
          navigation.navigate('Profile', {name: 'Osman'});
        }}
      />
    </SafeAreaView>
  );
};

export default HomePage;
