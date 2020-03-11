import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const BelajarImage = props => {
  return (
    <View>
      <Image style={styles.stretch} source={require('./assets/masjid.png')} />

      <Image
        style={{width: 50, height: 50}}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});

export default BelajarImage;
