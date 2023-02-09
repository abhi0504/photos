import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen'
import HomeScreen from './HomeScreen';
import UserScreen from './UserScreen'
import AlbumScreen from './AlbumsScreens';

const Stack = createNativeStackNavigator();

function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
         name="Home" 
         component={HomeScreen}
         options={{headerShown: false}}
          />
        <Stack.Screen name="User" options={({ route }) => ({ title: route.params.name })} component={UserScreen} />
        <Stack.Screen name="Album" component={AlbumScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;