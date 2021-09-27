import React, {useState} from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

const TextInputExample = () => {
  const [text, setText] = useState('');
  const handleChange = e => {
    setText(e);
  };
  return (
    <View>
      <TextInput
        onChangeText={handleChange}
        defaultValue={text}
        placeholder={'Hello'}
        style={styles.input}
      />
      {text !== '' && <Text style={styles.output}>{text}</Text>}

      <View>
        <Text style={styles.listItem}>
          {'\u2022 e.target.value ile component value erisilmiyor.'}
        </Text>
        <Text style={styles.listItem}>
          {
            '\u2022 Text elemanlarinin parentlarina verilen font ozellikleri etkilemiyor'
          }
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#abf5a8',
    color: '#123423',
    padding: 10,
    margin: 5,
  },
  output: {
    backgroundColor: '#fdbbbb',
    color: 'red',
    padding: 10,
    margin: 5,
  },
  listItem: {
    backgroundColor: '#FFFBEB',
    color: '#e18c20',
    fontWeight: 'bold',
    padding: 10,
    margin: 5,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e18c20',
  },
});

export default TextInputExample;
