import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './screens/MainScreen';
import RecepieScreen from './screens/RecepieScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" options={{headerShown: false}} component={MainScreen}/>
          <Stack.Screen name="Meal" options={({ route }) => ({ title: route.params.title })} component={RecepieScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  </>
  );
}