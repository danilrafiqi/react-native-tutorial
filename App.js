import React from 'react';
import {View, Text} from 'react-native';
import Greeting from './src/Greeting';
import Blink from './src/Blink';
import BelajarStyle from './src/BelajarStyle';
import BelajarText from './src/BelajarText';
const App = () => {
  return (
    <View>
      {/* <Text>Halo dunia</Text> */}
      {/* <Greeting nama="LampungDev" />
      <Greeting nama="Sumatra" />
      <Greeting nama="Indonesia" /> */}

      {/* <Blink text="I love Programming" />
      <Blink text="I love Lampung" /> */}
      {/* <BelajarStyle /> */}

      <BelajarText />
    </View>
  );
};

export default App;
