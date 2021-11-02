/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Button,
  Dimensions,
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';

const App: () => Node = () => {
  const [positionX, setPositionX] = useState(0);
  const [offset, setOffset] = useState(20);
  const [side, setSide] = useState(1);
  const boxSize = 20;

  const handlePress = () => {
    detectCollusion();
    setPositionX(positionX + offset * side);
  };

  const detectCollusion = () => {
    if (positionX + offset * side + boxSize >= Dimensions.get('window').width) {
      setSide(-1);
    }
    if (positionX - boxSize / 2 + offset * side < 0) {
      setSide(1);
    }
  };
  return (
    <SafeAreaView>
      <Button title={'Press Me'} onPress={handlePress} />
      <View
        style={{
          ...styles.snake,
          left: positionX,
          width: boxSize,
          height: boxSize,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  snake: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 40,
  },
});

export default App;
