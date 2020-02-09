import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {useState} from 'react';

const BelajarText = () => {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        placeholder="Inputkan nama kamu"
        value={text}
        onChangeText={val => setText(val)}
      />
      <Text>Statenya adalah : {text}</Text>
    </View>
  );
};

export default BelajarText;
