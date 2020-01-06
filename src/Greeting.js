import React from 'react';
import {View, Text} from 'react-native';

const Greeting = props => {
  return (
    <View>
      <Text>Halo {props.nama}</Text>
    </View>
  );
};

export default Greeting;
