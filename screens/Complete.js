import React from 'react';
import { View, Text, Button } from 'react-native';

export default function CompleteScreen({ navigation }) {
  return (
    <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style = {{ fontSize: 24, marginBottom: 20 }}>Order Complete! 🎉</Text>
      <Button title = "Back to Menu" onPress={() => navigation.navigate('Menu')} />
    </View>
  );
}
