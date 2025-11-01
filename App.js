import * as React from 'react';
import { useFonts, Urbanist_400Regular, Urbanist_700Bold } from '@expo-google-fonts/urbanist';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import Intro from './screens/Launch/Intro';
import Launch from './screens/Launch/Launch';
import Login from './screens/Launch/Login';
import Hub from './screens/Home/Hub';
import Notifications from './screens/Notifications';
import Location from './screens/Location';
import Chatbot from './screens/Chatbot';
import Menu from './screens/Menu/Menu';
import Customize from './screens/Menu/Customize';
import Cart from './screens/Cart/Cart';
import Profile from './screens/Profile/Profile';

const Stack = createSharedElementStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Intro"
                       screenOptions = {{
                          headerShown: false,
                          presentation: 'transparentModal',
                          cardStyleInterpolator: ({ current: { progress } }) => ({
                            cardStyle: { opacity: progress },
                          }),
                       }}>
        <Stack.Screen name  = "Intro"
                      component = {Intro} />
        <Stack.Screen name  = "Launch"
                      component = {Launch} />
        <Stack.Screen name  = "Login"
                      component = {Login} />
        <Stack.Screen name  = "Hub"
                      component = {Hub} />
        <Stack.Screen name  = "Notifications"
                      component = {Notifications} />
        <Stack.Screen name = "Location" 
                      component = {Location} />
        <Stack.Screen name = "Chatbot" 
                      component = {Chatbot} />
        <Stack.Screen name = "Menu"
                      component = {Menu}
                      options = {{ title: 'Alive Brew Menu' }}/>
        <Stack.Screen name="Customize"
                      component={Customize}
                      options = {{ title: 'Customize Your Drink' }}/>
        <Stack.Screen name = "Cart" 
                      component = {Cart} />
        <Stack.Screen name = "Profile" 
                      component = {Profile} />
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
