import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ImageSourcePropType, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { APP_NAME, DETAILS_PAGE, HOME_PAGE, PROFILE_PAGE } from './constants/const.ts';
import Images from './constants/images.ts';
import DetailsScreen from './pages/detail.tsx';
import HomeScreen from './pages/home.tsx';
import ProfileScreen from './pages/profile.tsx';
import { IExtraData } from './types';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const themeColorSwitcher = (isDark: boolean): Theme['colors'] => {
  return {
    primary: isDark ? Colors.black : Colors.white,
    background: isDark ? Colors.black : Colors.lighter,
    card: isDark ? Colors.black : Colors.white,
    text: isDark ? Colors.white : Colors.black,
    border: isDark ? Colors.black : Colors.white,
    notification: isDark ? Colors.black : Colors.white,
  };
};

function Icon(props: { source: ImageSourcePropType | undefined }) {
  return <Image source={props.source} style={{ width: 24, height: 24 }} />;
}

function Home() {
  const someData: IExtraData = { name: 'John Doe', age: 30 };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarBadgeStyle: { backgroundColor: Colors.primary },
      }}
    >
      <Tab.Screen
        name={HOME_PAGE.name}
        options={{
          title: HOME_PAGE.title,
          tabBarBadge: undefined,
          tabBarIcon: ({ focused }) => (focused ? <Icon source={Images.home_focused} /> : <Icon source={Images.home} />),
        }}
      >
        {(props) => <HomeScreen {...props} extraData={someData} />}
      </Tab.Screen>
      <Tab.Screen
        name={PROFILE_PAGE.name}
        options={{
          title: PROFILE_PAGE.title,
          tabBarIcon: ({ focused }) => (focused ? <Icon source={Images.profile_focused} /> : <Icon source={Images.profile} />),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const theme: Theme = {
    dark: isDarkMode,
    colors: themeColorSwitcher(isDarkMode),
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={theme}
        documentTitle={{
          enabled: true,
          formatter: (options: Record<string, any> | undefined, route: Record<string, any> | undefined) => {
            console.log('documentTitle=options====', options);
            console.log('documentTitle=route====', route);
            return APP_NAME;
          },
        }}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'normal',
              // fontSize: 30,
              // fontFamily: '',
            },
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}
        >
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen
            name={DETAILS_PAGE.name}
            options={{
              title: DETAILS_PAGE.title,
            }}
            component={DetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
