/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import PlatformModuleExample from './components/PlatformModuleExample';
import PlatformCodeSplit from './components/PlatformCodeSplit/PlatformCodeSplit';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Platform Specific Code</Text>
        <PlatformModuleExample />
        <PlatformCodeSplit />
        <Test />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    padding: 5,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});
export default App;
