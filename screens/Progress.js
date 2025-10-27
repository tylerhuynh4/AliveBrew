import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProgressScreen({ navigation }) {
  return (
    <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style = {{ fontSize: 24, marginBottom: 20 }}>Progress Screen</Text>
      <Button title = "Complete Order" onPress={() => navigation.navigate('Complete')} />
      <Button title = "Error Occurred" onPress={() => navigation.navigate('Error')} />
    </View>
  );
}
