import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

const FlatListExample = () => {
  return (
    <View>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Osman'},
        ]}
        renderItem={({item, index}) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{`${item.key} -- ${index}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  itemContainer: {
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    padding: 5,
    backgroundColor: '#f3c4c4',
    display: 'flex',
    alignItems: 'center',
  },
  item: {
    fontSize: 18,
    height: 44,
    color: 'red',
  },
  text: {
    color: '#000000',
  },
});
export default FlatListExample;
