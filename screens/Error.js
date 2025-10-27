import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ErrorScreen({ navigation }) {
  return (
    <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style = {{ fontSize: 24, marginBottom: 20, color: 'red' }}>Error Occurred</Text>
      <Button title = "Back to Menu" onPress={() => navigation.navigate('Menu')} />
    </View>
  );
}