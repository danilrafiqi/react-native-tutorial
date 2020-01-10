import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './style';

const BelajarStyle = () => {
  return (
    <View>
      <Text style={{fontSize: 26, fontWeight: 'bold', marginBottom: 20}}>
        Belajar React Style
      </Text>
      <Text style={{backgroundColor: 'grey', color: '#ffffff'}}>
        Belajar Inline Style
      </Text>
      <Text style={[styles.merah, styles.besar]}>Halo Lampung</Text>
      <Text style={styles.besar}>Halo juga</Text>
    </View>
  );
};

export default BelajarStyle;
