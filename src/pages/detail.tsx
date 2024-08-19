import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Button, Text, View } from 'react-native';

import { HOME_PAGE } from '../constants/const.ts';
import { NavigationProps } from '../types';

export default function DetailsScreen({ navigation }: NavigationProps): React.JSX.Element {
  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      console.log('DetailsScreen === useFocusEffect');
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, []),
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
      <Button title="Go to Home page" onPress={() => navigation?.navigate(HOME_PAGE.name)} />
    </View>
  );
}
