import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './screens/Menu';
import Customize from './screens/Customize';
import Confirm from './screens/Confirm';
import Progress from './screens/Progress';
import Complete from './screens/Complete';
import Error from './screens/Error';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Menu"
                       screenOptions = {{ headerStyle: { backgroundColor: '#FF6B35'},
                                          headerTintColor: '#fff', 
                                          headerTitleStyle: { fontWeight: 'bold' }, 
                                        }}>
        <Stack.Screen name = "Menu"
                      component = {Menu}
                      options = {{ title: 'AliveBrew Menu' }}/>
        <Stack.Screen name="Customize"
                      component={Customize}
                      options = {{ title: 'Customize Your Drink' }}/>
        <Stack.Screen name = "Confirm" 
                      component = {Confirm} />
        <Stack.Screen name  = "Progress"
                      component = {Progress} />
        <Stack.Screen name = "Complete"
                      component = {Complete} />
        <Stack.Screen name = "Error"
                      component = {Error} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
