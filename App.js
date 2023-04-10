import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/Home";
import SpaceCraft from "./screens/SpaceCraft";
import StarMaps from './screens/StarMap';
import DailyPic from './screens/DailyPic';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}} >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='StarMaps' component={StarMaps} />
        <Stack.Screen name='SpaceCraft' component={SpaceCraft} />
        <Stack.Screen name='DailyPic' component={DailyPic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
