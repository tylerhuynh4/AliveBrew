import * as React from 'react';
import { useFonts, Urbanist_400Regular, Urbanist_700Bold } from '@expo-google-fonts/urbanist';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import Intro from './screens/Launch/Intro';
import Launch from './screens/Launch/Launch';
import Login from './screens/Launch/Login';
import Menu from './screens/Menu';
import Customize from './screens/Customize';
import Confirm from './screens/Confirm';
import Progress from './screens/Progress';
import Complete from './screens/Complete';
import Error from './screens/Error';

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
        <Stack.Screen name = "Menu"
                      component = {Menu}
                      options = {{ title: 'Alive Brew Menu' }}/>
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
