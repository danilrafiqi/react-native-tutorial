import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';

const BelajarButton = () => {
  const [text, setText] = useState('Saya belajar React');
  return (
    <View>
      <Button
        title="Klik saya"
        onPress={() => setText('Saya sudah expert di react')}
      />
      <Text>{text}</Text>
    </View>
  );
};

export default BelajarButton;
