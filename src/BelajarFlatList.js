import React from 'react';
import {View, FlatList, Text} from 'react-native';

const BelajarFlatList = () => {
  const daftarKeinginan = [
    {
      data: 'Mekkah',
    },
    {
      data: 'Madinah',
    },
    {
      data: 'Turki',
    },
    {
      data: 'Mesir',
    },
    {
      data: 'Paris',
    },
    {
      data: 'Spanyol',
    },
    {
      data: 'Lombok',
    },
    {
      data: 'Aceh',
    },
  ];

  return (
    <View>
      <FlatList
        data={daftarKeinginan}
        numColumns={2}
        renderItem={({item}) => <Text>{item.data}</Text>}
      />
    </View>
  );
};

export default BelajarFlatList;
