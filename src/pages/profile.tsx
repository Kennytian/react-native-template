import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Button, Text, View } from 'react-native';

import { PROFILE_PAGE } from '../const.ts';
import { NavigationProps } from '../types';

export default function ProfileScreen({ navigation }: NavigationProps): React.JSX.Element {
  // const [user, setUser] = React.useState(null);
  //
  // useFocusEffect(
  //   useCallback(() => {
  //     const unsubscribe = API.subscribe(userId, (user) => setUser(data));
  //     return () => unsubscribe();
  //   }, [userId]),
  // );

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      console.log('ProfileScreen === useFocusEffect');
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, []),
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>个人 Screen</Text>
      <Button title="Go to Home page" onPress={() => navigation?.navigate(PROFILE_PAGE.name)} />
    </View>
  );
}
