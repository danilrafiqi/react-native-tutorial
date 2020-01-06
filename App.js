import React from 'react';
import {View, Text} from 'react-native';
import Greeting from './src/Greeting';

const App = () => {
  return (
    <View>
      <Text>Halo dunia</Text>
      <Greeting nama="LampungDev" />
      <Greeting nama="Sumatra" />
      <Greeting nama="Indonesia" />
    </View>
  );
};

export default App;
