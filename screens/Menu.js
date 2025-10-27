import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';

const drinks = [ { id: 1, name: 'Thai Tea', price: 4.59, image: require('../assets/thai_tea.png') },
                 { id: 2, name: 'Iced Cranberry Blackcurrant Tea', price: 4.69, image: require('../assets/cranberry_tea.png') },
                 { id: 3, name: 'Matcha Thai Tea', price: 5.00, image: require('../assets/matcha_tea.png') },
               ];

export default function MenuScreen({ navigation }) {
    return (
        <View style = { styles.container }>
            <Text style = { styles.header }>Alive Brew</Text>
            <TextInput style = { styles.searchBar }
                       placeholder = "Search Drinks..."
                       placeholderTextColor = "#aaa"/>

            <ScrollView> { drinks.map((drink) => (
                <View key = {drink.id} style = {styles.card}>
                    <Image source = {drink.image} style = {styles.image} />
                    <View style = {styles.info}>
                        <Text style = {styles.name}>{drink.name}</Text>
                        <Text style = {styles.price}>${drink.price.toFixed(2)}</Text>
                        <TouchableOpacity style = {styles.addButton}
                                          onPress = {() => navigation.navigate('Customize', { drink })}>
                            <Text style = {styles.addText}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View> 
            ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#FFF',},
    header: { fontSize: 28, fontWeight: 'bold', textAlign: 'center',
              marginVertical: 10, color: "#FF6B35",},
    searchBar: { backgroundColor: '#f0f0f0', borderRadius: 8, padding: 10,
                 marginBottom: 10, },
    card: { flexDirection: 'row', alignItems: 'center', marginVertical: 10,
            backgroundColor: '#fafafa', borderRadius: 10, padding: 10,
            shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4, },
    image: { width: 80, height: 80, borderRadius: 8, },
    info: { flex: 1, marginLeft: 10, },
    name: { fontSize: 16, fontWeight: '600', },
    price: { color: '#777', marginBottom: 8 },
    addButton: { backgroundColor: '#FF6B35', paddingVertical: 5, borderRadius: 6,
                 width: 70, alignItems: 'center' },
    addText: { color: '#fff', fontWeight: 'bold', }
});