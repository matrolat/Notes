import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  View } from 'react-native';
import Start from './Start';
import Add from './Add';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Start" component={Start} options={{headerShown: false}}
      initialParams={{ title: "",body:"" }}
      />       
      <Stack.Screen name="Add" component={Add} 
     options={
      {
        title:"Add Notes",
        headerStyle: {
          backgroundColor: '#1B1B1B',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
     }
      />       
    </Stack.Navigator>
  </NavigationContainer>
  )
}
