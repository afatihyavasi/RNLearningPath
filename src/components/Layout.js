import React from 'react';
import {View, StyleSheet, ScrollView, Text, Image} from 'react-native';

const Layout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>HEADER</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>https://picsum.photos/200/300</Text>
        <Image
          source={{uri: 'https://picsum.photos/200/300'}}
          style={styles.image}
          blurRadius={2}
        />
        <View style={styles.list}>
          <Text>
            Height ve width px değeri almıyor. Sadece yüzdelik veya flex değeri
            ile belirlenebiliyor.
          </Text>
        </View>

        <View style={styles.list}>
          <Text>
            Text componentine özel bir çok stillendirme özelliği var.
            Stillendirme yapmak oldukça can sıkıcı.
          </Text>
        </View>

        <View style={styles.list}>
          <Text>
            URL ile resim kaynağı verildiği zaman width ve height değerlerinin
            verilmesi gerekiyor
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text>FOOTER</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 10,
    borderBottomColor: '#ccc',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderBottomColor: '#ccc',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    height: '10%',
    marginVertical: 5,
    textDecorationStyle: 'dotted',
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  list: {
    borderLeftColor: '#5d1ae3',
    borderLeftWidth: 5,
    margin: '2% 5%',
    borderStyle: 'solid',
    paddingLeft: 10,
  },
});
export default Layout;
