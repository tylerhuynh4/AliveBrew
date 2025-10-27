import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Confirm() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Confirm Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex:1,
                 alignItems: 'center',
                 justifyContent: 'center',
                 backgroundColor: '#fff',
    },
    text: { fontSize: 20,
            fontWeight: 'bold',
            color: '#333',
    },
});