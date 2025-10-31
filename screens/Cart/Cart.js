import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const ORANGE = '#FF6B35';

export default function Cart({ navigation }) {
    const [cart, setCart] = useState([
        {
            id: 1,
            name: 'Thai Tea',
            details: 'Small, Light Ice, Boba',
            image: require('../../assets/thai_tea.png'),
            quantity: 1,
            price: 6.0,
        },
        {
            id: 2,
            name: 'Iced Cranberry Blackcurrant Tea',
            details: 'Medium, Extra Ice, Raspberry Syrup',
            image: require('../../assets/cranberry_tea.png'),
            quantity: 1,
            price: 6.0,
        },
    ]);

    const [selectedTime, setSelectedTime] = useState('ASAP');
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tip = 1.0;
    const total = subtotal + tip;

    const updateQuantity = (id, delta) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
            )
        );
    };

    return (
    <View style = { styles.screen }>

        {/* Header */}
        <View style = { styles.header }>
            <TouchableOpacity style = { styles.backBtn } 
                              onPress = {() => navigation.goBack()}>
                <Text style = {styles.backText}>Back</Text>
            </TouchableOpacity>

            <View style = { styles.cartCircle }>
                <Ionicons name = "cart-outline" 
                          size={34} 
                          color={ORANGE} />
                <View style = { styles.cartBadge }>
                    <Text style = {styles.badgeText}>{cart.length}</Text>
                </View>
            </View>

            <TouchableOpacity style = { styles.bell }
                              onPress = {() => navigation.navigate('Notifications')}>
                <Ionicons name = "notifications-outline" 
                          size = { 34 } 
                          color = "#fff"/>
                <View style = { styles.dot } />
            </TouchableOpacity>
        </View> 

        {/* Items */}
        <ScrollView contentContainerStyle = {styles.scrollWrap} 
                    showsVerticalScrollIndicator = { false }>
            {cart.map((item) => (
            <View key = { item.id }
                  style = { styles.cartCard }>
                <Image source = { item.image } 
                       style = { styles.image } />
                <View style = { styles.info }>
                    <Text style = {styles.name}>1x {item.name}</Text>
                    <Text style = {styles.details}>{item.details}</Text>
                    <TouchableOpacity>
                        <Text style = {styles.editText}>✎ Edit Order?</Text>
                    </TouchableOpacity>
                </View>

                <View style = { styles.qtyControls }>
                    <TouchableOpacity onPress = {() => updateQuantity(item.id, -1)}>
                        <Text style = { styles.qtyBtn }>–</Text>
                    </TouchableOpacity>
                    <Text style = {styles.qtyNum}>{item.quantity}</Text>
                    <TouchableOpacity onPress = {() => updateQuantity(item.id, 1)}>
                        <Text style = {styles.qtyBtn}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            ))}

            {/* Add More */}
            <TouchableOpacity style = {styles.addMoreBtn} 
                              onPress = {() => navigation.navigate('Menu')}>
                <Text style = {styles.addMoreText}>Add More Items</Text>
            </TouchableOpacity>

            {/* Delivery Time */}
            <View style = { styles.timeRow }>
                <TouchableOpacity style = {[
                    styles.timeBtn,
                    selectedTime === 'ASAP' && styles.timeBtnActive,
                ]}
                                  onPress = {() => setSelectedTime('ASAP')}>
                    <Text style = {styles.timeTextTop}>ASAP/Standard</Text>
                    <Text style = {styles.timeTextBottom}>5 minutes</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {[
                    styles.timeBtn,
                    selectedTime === 'Scheduled' && styles.timeBtnActiveGray,
                ]}
                                  onPress = {() => setSelectedTime('Scheduled')}>
                    <Text style = {styles.timeTextTop}>Schedule a Time</Text>
                </TouchableOpacity>
            </View>

            {/* Totals */}
            <View style = { styles.summary }>
                <View style = { styles.summaryRow }>
                    <Text style = {styles.label}>Subtotal</Text>
                    <Text style = {styles.value}>${subtotal.toFixed(2)}</Text>
                </View>
                <View style = { styles.summaryRow }>
                    <Text style = {styles.label}>Est. Time</Text>
                    <Text style = { styles.value }>5 Minutes</Text>
                </View>
                <View style = { styles.summaryRow }>
                    <Text style = {styles.label}>Tip</Text>
                    <Text style = {styles.value}>${tip.toFixed(2)}</Text>
                </View>
                <View style = { styles.summaryRow }>
                    <Text style = {[styles.label, styles.totalLabel]}>Total</Text>
                    <Text style = { [styles.value, styles.totalValue] }>
                        ${total.toFixed(2)}
                    </Text>
                </View>
            </View>

            {/* Place Order */}
            <TouchableOpacity style = { styles.placeBtn }>
                <Text style = {styles.placeText}>Place Order</Text>
            </TouchableOpacity>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: { 
        flex: 1, 
        backgroundColor: '#fff' 
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
        paddingVertical: 6,
        paddingHorizontal: 14,
    },
    backText: {
        color: ORANGE,
        fontWeight: '700',
        fontSize: 16,
    },
    cartCircle: {
        backgroundColor: '#fff',
        borderRadius: 40,
        padding: 14,
        borderWidth: 3,
        borderColor: ORANGE,
        position: 'relative',
    },
    cartBadge: {
        position: 'absolute',
        top: 4,
        right: 6,
        width: 22,
        height: 22,
        borderRadius: 11,
        backgroundColor: '#E52E2E',
        alignItems: 'center',
        justifyContent: 'center',
    },
    badgeText: { 
        color: '#fff', 
        fontWeight: '800', 
        fontSize: 12 
    },
    bell: { padding: 6 },
    dot: {
        position: 'absolute',
        right: 6,
        top: 8,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#E52E2E',
    },

    // Items 
    scrollWrap: { padding: 14 },
    cartCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 12,
        marginBottom: 14,
        elevation: 5,
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
    },
    info: { 
        flex: 1, 
        marginLeft: 10 
    },
    name: { 
        fontSize: 18, 
        fontWeight: '900',
        color: ORANGE 
    },
    details: { 
        fontSize: 14, 
        color: '#333', 
        marginVertical: 2 
    },
    editText: {
        color: ORANGE,
        fontSize: 14,
        fontWeight: '600',
        marginTop: 4,
        textDecorationLine: 'underline',
    },
    qtyControls: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: ORANGE,
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 6,
        minWidth: 70,
        justifyContent: 'space-between',
    },
    qtyBtn: { 
        color: '#fff', 
        fontWeight: '900', 
        fontSize: 20, 
        paddingHorizontal: 6 
    },
    qtyNum: { 
        color: '#fff',
        fontWeight: '800', 
        fontSize: 16 
    },  

    // Buttons 
    addMoreBtn: {
        backgroundColor: ORANGE,
        alignSelf: 'center',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 26,
        marginVertical: 8,
    },
    addMoreText: {
        color: '#fff', 
        fontWeight: '900', 
        fontSize: 18 
    },
    timeRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 12,
    },
    timeBtn: {
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: '#ccc',
        alignItems: 'center',
        minWidth: 150,
    },
    timeBtnActive: { backgroundColor: ORANGE },
    timeBtnActiveGray: { backgroundColor: '#555' },
    timeTextTop: { 
        color: '#fff', 
        fontWeight: '800', 
        fontSize: 15 
    },
    timeTextBottom: { 
        color: '#fff', 
        fontSize: 13 
    },

    // Summary
    summary: { 
        marginHorizontal: 20, 
        marginTop: 8 
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 4,
    },
    label: {
        color: ORANGE,
        fontWeight: '800',
        fontSize: 16,
    },
    value: {
        color: '#000',
        fontWeight: '700',
        fontSize: 16,
    },
    totalLabel: { fontSize: 18 },
    totalValue: { fontSize: 18 },

    placeBtn: {
        backgroundColor: ORANGE,
        alignSelf: 'center',
        borderRadius: 25,
        paddingVertical: 14,
        paddingHorizontal: 50,
        marginTop: 14,
        marginBottom: 40,
    },
    placeText: { 
        color: '#fff', 
        fontWeight: '900', 
        fontSize: 18 
    },
});
