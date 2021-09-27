import React from 'react';
import {View, Platform, StyleSheet, Text} from 'react-native';

const PlatformModuleExample = () => {
  return (
    <View style={styles.container}>
      <Text>My position : CENTER</Text>
      <Text style={styles.subtitle}>Wolaa !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Platform.OS === 'android' ? 'green' : 'blue',
  },
  subtitle: {
    margin: 10,
    ...Platform.select({
      ios: {
        color: '#000000',
        backgroundColor: '#ffffff',
      },
      android: {
        color: '#ffffff',
        backgroundColor: '#000000',
      },
      default: {
        color: '#f8f8f8',
      },
    }),
  },
});
export default PlatformModuleExample;
