import React from 'react';
import { View, Text, Button } from 'react-native';

export default function CustomizeScreen({ navigation }) {
    return (
    <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style = {{ fontSize: 24, marginBottom: 20 }}>Customize Screen</Text>
      <Button title = "Confirm Options" onPress = {() => navigation.navigate('Confirm')} />
      <Button title = "Back to Menu" onPress = {() => navigation.goBack()}  />
    </View>
    );
}