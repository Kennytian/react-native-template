import { useFocusEffect } from '@react-navigation/native';
import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

import { DETAILS_PAGE } from '../constants/const.ts';
import { IExtraData, NavigationProps } from '../types';

type HomeScreenProps = PropsWithChildren<{
  extraData?: IExtraData;
}>;

export default function HomeScreen({ extraData, navigation }: HomeScreenProps & NavigationProps) {
  const [count, setCount] = useState(0);

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      console.log('HomeScreen === useFocusEffect');
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, []),
  );

  useEffect(() => {
    navigation?.setOptions({
      headerRight: () => <Button onPress={() => setCount((c) => c + 1)} title="Update count" color="white" />,
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{count}</Text>
      <Text>Home Screen</Text>
      <Text>{JSON.stringify(extraData)}</Text>
      <Button
        title={'更新'}
        onPress={() => {
          navigation?.setOptions({
            title: '已更新',
          });
        }}
      />
      <Button
        title={'点击进入详情页'}
        onPress={() => {
          navigation?.navigate(DETAILS_PAGE.name);
        }}
      />
    </View>
  );
}
