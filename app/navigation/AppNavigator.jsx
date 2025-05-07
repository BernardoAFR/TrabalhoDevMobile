import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../../src/screens/screens/DetailScreen';
import HomeScreen from '../../src/screens/screens/HomeScreen';

import React from 'react';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#30D5C8' },
              headerTintColor: '#fff',
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Linguagens' }} />
            <Stack.Screen name="Detail" component={DetailScreen} options={({ route }) => ({ title: route.params.name })} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}