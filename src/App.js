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
import FlatListExample from './components/FlatListExample';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <FlatListExample />
    </SafeAreaView>
  );
};

export default App;
