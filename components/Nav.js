import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const ORANGE = '#FF6B35';

export default function Nav({ active, navigation }) {
  return (
    <View style = { styles.navBar }>

        {/* Home */}
        <TouchableOpacity style = {styles.navItem}
                          onPress = {() => navigation.navigate('Hub')}>
            <View style = {[styles.iconCircle,
                            active === 'home' && styles.iconCircleActive]}>
                <Ionicons name = "home"
                          size = {34}
                          color = {active === 'home' ? ORANGE : '#fff'}/>
            </View>
        </TouchableOpacity>

        {/* Menu */}
        <TouchableOpacity style = { styles.navItem }
                          onPress = {() => navigation.navigate('Menu')}>
            <View style = {[styles.iconCircle, 
                            active === 'menu' && styles.iconCircleActive]}>
                <MaterialCommunityIcons name = "coffee-outline"
                                        size = {34}
                                        color = {active === 'menu' ? ORANGE : '#fff'}/>
            </View>
        </TouchableOpacity>

        {/* Cart */}
        <TouchableOpacity style = {styles.navItem}
                          onPress = {() => navigation.navigate('Cart')}>
            <View style = {[styles.iconCircle, 
                            active === 'cart' && styles.iconCircleActive]}>
                <Ionicons name = "cart-outline"
                          size = {34}
                          color = {active === 'cart' ? ORANGE : '#fff'}/>
                <View style = { styles.badge }>
                    <Text style = {styles.badgeText}>2</Text>
                </View>
            </View>
        </TouchableOpacity>

        {/* Profile */}
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <View style = { [styles.iconCircle, active === 'account' && styles.iconCircleActive] }>
                <Ionicons name = "person-outline"
                          size = { 34 }
                          color = { active === 'account' ? ORANGE : '#fff' }/>
            </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    navBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 84,
        backgroundColor: ORANGE,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        elevation: 18,
        shadowColor: '#000',
        shadowOpacity: 0.35,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: -2 },
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 4,
    },
    iconCircle: {
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconCircleActive: {
        backgroundColor: '#fff',
        elevation: 8,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
    },
    iconWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    iconWrapActive: {
        backgroundColor: ORANGE,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    badge: {
        position: 'absolute',
        top: 4,
        right: 4,
        minWidth: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: '#E52E2E',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 3,
    },
    badgeText: {
        color: '#fff',
        fontSize: 11,
        fontWeight: '800',
    },
});
