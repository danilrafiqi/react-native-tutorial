import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
const Blink = props => {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    setInterval(() => setBlink(b => !b), 1000);
  }, []);

  if (blink === false) {
    return <Text>Nilai False, data tidak ditampilkan</Text>;
  }

  return <Text>{props.text}</Text>;
};

export default Blink;
