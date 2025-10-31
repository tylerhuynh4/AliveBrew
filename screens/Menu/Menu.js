import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Nav from '../../components/Nav';

const ORANGE = '#FF6B35';

const drinks = [
    { id: 1, name: 'Thai Tea', price: 4.59, image: require('../../assets/thai_tea.png') },
    { id: 2, name: 'Iced Cranberry Blackcurrant Tea', price: 4.69, image: require('../../assets/cranberry_tea.png') },
    { id: 3, name: 'Matcha Thai Tea', price: 5.0, image: require('../../assets/matcha_tea.png') },
];

export default function Menu({ navigation }) {
    const [selected, setSelected] = useState('Seasonal');
    const [favorites, setFavorites] = useState({});

    const toggleFavorite = (id) => {
        setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
    };
    
    return (<View style = { styles.screen }>

        {/* Header */}
        <View style = { styles.header }>
            <TouchableOpacity style = { styles.backBtn }
                              onPress = {() => navigation.goBack()}>
                <Text style = {styles.backText}>Back</Text>
            </TouchableOpacity>

            <View style = { styles.robotCard }>
                <Text style = {styles.locationTitle}>Robot Arm A</Text>
                <Text style = {styles.locationSub}>Location A</Text>
            </View>

            <TouchableOpacity style = { styles.bell }
                              onPress = {() => navigation.navigate('Notifications')}>
                <Ionicons name = "notifications-outline"
                          size = { 36 } 
                          color = "#fff" />
                <View style = { styles.dot } />
            </TouchableOpacity>
        </View>

        {/* Filter + Search */}
        <View style = { styles.orangeCard }>
            <ScrollView horizontal
                        showsHorizontalScrollIndicator = { false }
                        contentContainerStyle = { styles.filterScroll }>
                <TouchableOpacity style = { styles.dropdown }>
                    <Text style = {styles.dropdownText}>Best Seller ▼</Text>
                </TouchableOpacity>

            {['Seasonal', 'Tea', 'Blended', 'Cold Brew', 'Specials'].map((cat) => (
                <TouchableOpacity key = { cat }
                                  style = {[styles.catBtn, selected === cat && styles.catBtnActive]}
                                  onPress = {() => setSelected(cat)}>
                    <Text style = {[styles.catText, selected === cat && styles.catTextActive]}>
                        {cat}
                    </Text>
                </TouchableOpacity>
    ))}
            </ScrollView>

            {/* Embed */}
            <View style = { styles.searchRow }>
                <View style = { styles.searchBar }>
                    <Ionicons name = "search" 
                              size = { 20 } 
                              color = "#888" 
                              style = {{ marginHorizontal: 8 }} />
                    <TextInput placeholder = "Search menu"
                               placeholderTextColor = "#aaa"
                               style = { styles.searchInput }/>
                </View>
                <TouchableOpacity style = { styles.filterIcon }>
                    <Ionicons name = "options-outline" 
                              size = { 26 } 
                              color = "#fff" />
                </TouchableOpacity>
            </View>
        </View>


        {/* Drinks */}
        <ScrollView contentContainerStyle = { styles.listWrap }
                    showsVerticalScrollIndicator = { false }>
            {drinks.map((drink) => (
            <View key = { drink.id } 
                  style = { styles.card }>
                <Image source = { drink.image } 
                       style = { styles.image } />
                <View style = { styles.info }>
                    <Text style = {styles.name}>{drink.name}</Text>
                    <Text style = {styles.price}>USD {drink.price.toFixed(2)}</Text>
                </View>

                <View style = { styles.actionArea }>
                    <TouchableOpacity onPress = {() => toggleFavorite(drink.id)}>
                        <MaterialCommunityIcons name = {favorites[drink.id] ? 'star' : 'star-outline'}
                                                size = { 28 }
                                                color = { ORANGE }/>
                    </TouchableOpacity>

                    <TouchableOpacity style = { styles.addButton }
                                      onPress = {() => navigation.navigate('Customize', { drink })}>
                        <Text style = {styles.addText}>add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ))}
            <View style = {{ height: 100 }} />
        </ScrollView>

        {/* Navigation */}
        <Nav active = "menu"
             navigation = { navigation } />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },

    // Header
    header: {
        backgroundColor: ORANGE,
        paddingTop: 56,
        paddingBottom: 12,
        paddingHorizontal: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backBtn: {
        backgroundColor: '#fff',
        borderRadius: 18,
        paddingVertical: 10,
        paddingHorizontal: 14,
    },
    backText: {
        color: ORANGE,
        fontWeight: '700',
        fontSize: 16,
    },
    robotCard: {
        backgroundColor: '#fff',
        borderRadius: 14,
        paddingVertical: 6,
        paddingHorizontal: 14,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    locationTitle: {
        color: ORANGE,
        fontWeight: '800',
        fontSize: 18,
    },
    locationSub: {
        color: '#555',
        fontSize: 14,
    },
    bell: {
        padding: 6,
    },
    dot: {
        position: 'absolute',
        right: 6,
        top: 8,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#E52E2E',
    },

    // Filters
    orangeCard: {
        backgroundColor: ORANGE,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        paddingVertical: 12,
        paddingHorizontal: 14,
        marginHorizontal: 10,
        marginTop: 12,
        elevation: 6,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
    },
    filterScroll: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
    },

    dropdown: {
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginRight: 8,
    },
    dropdownText: {
        color: '#000',
        fontWeight: '700',
    },

    catBtn: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 14,
        marginHorizontal: 4,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    catBtnActive: {
        backgroundColor: '#007AFF',
        shadowColor: '#007AFF',
        shadowOpacity: 0.4,
        shadowRadius: 6,
    },
    catText: {
        color: '#000',
        fontWeight: '700',
        fontSize: 15,
    },
    catTextActive: {
        color: '#fff',
    },

    // Search  
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 4,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 18,
        width: '100%',
        elevation: 6,
        paddingVertical: 10,
        paddingHorizontal: 8,
        marginRight: 6, 
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#000',
        paddingRight: 12,
    },
    filterIcon: {
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        right: 50,
    },

    // Drinks
    listWrap: {
        paddingTop: 16,
        paddingHorizontal: 14,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 12,
        marginBottom: 14,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    image: {
        width: 80,
        height: 100,
        borderRadius: 10,
        resizeMode: 'contain', 
        marginVertical: 4,
    },
    info: {
        flex: 1,
        marginLeft: 12,
    },
    name: {
        color: ORANGE,
        fontWeight: '900',
        fontSize: 16,
        marginBottom: 4,
    },
    price: {
        color: '#777',
        fontSize: 14,
        marginBottom: 8,
    },
    actionArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 10,
    },
    addButton: {
        borderWidth: 2,
        borderColor: ORANGE,
        borderRadius: 20,
        paddingVertical: 3,
        paddingHorizontal: 12,
    },
    addText: {
        color: ORANGE,
        fontWeight: '900',
        fontSize: 16,
    },
});