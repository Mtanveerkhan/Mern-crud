import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewDoctor from './components/ViewDoctor';
import AddDoctor from './components/AddDoctor';
import BookAppointment from './components/BookAppointment';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="View Doctor">
        <Stack.Screen name="ViewDoctor" component={ViewDoctor} />
        <Stack.Screen name="AddDoctor" component={AddDoctor} />
        <Stack.Screen name="BookAppointment" component={BookAppointment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
