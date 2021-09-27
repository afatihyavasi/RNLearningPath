/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import TextInputExample from './components/TextInputExample';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TextInputExample />
        <TextInputExample />
        <TextInputExample />
        <TextInputExample />
        <TextInputExample />
        <TextInputExample />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
