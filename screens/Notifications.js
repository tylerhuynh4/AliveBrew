import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ORANGE = '#FF6B35';
const LIGHT_GREY = '#F5F5F5';
const DARK_GREY = '#5A5A5A';

export default function Notifications({ navigation }) {
    const notifications = [
        {
            id: 1,
            message: 'Swing by to pick up your drink!',
            time: '1 minute ago',
            image: require('../assets/favorites.png'),
        },
        {
            id: 2,
            message: 'Your Order #1 is almost ready!',
            time: '3 minutes ago',
            image: require('../assets/favorites.png'),
        },
    ];
    
    const isEmpty = notifications.length === 0;
    
    return ( <View style = { styles.screen }>
        
        {/* Header */}
        <View style = { styles.header }>
            <TouchableOpacity style = { styles.backBtn } 
                              onPress={() => navigation.goBack()}>
                <Text style = {styles.backText}>Back</Text>
            </TouchableOpacity>
            <View style = { styles.titleWrap }>
                <Text style = {styles.title}>Notifications</Text>
            </View>
        </View>

        {/* Content */}
        <ScrollView contentContainerStyle = { styles.listWrap } 
                    showsVerticalScrollIndicator = { false }>
            {notifications.map((item, index) => (
            <View key = { item.id }
                  style = { styles.notifItem }>
                <Image source = { item.image } 
                       style = { styles.notifImg } />
                <View style = { styles.textWrap }>
                    <Text style = {styles.msg}>{item.message}</Text>
                    <Text style = {styles.time}>{item.time}</Text>
                </View>
            {index < notifications.length - 1 && <View style = { styles.divider } />}
            </View>
        ))}

        {/* Caught Up */}
        <View style = { styles.emptyState }>
            <Text style = {styles.emptyTextTop}>You’re All</Text>
            <Text style = {styles.emptyTextBottom}>Caught Up!</Text>
            <View style = { styles.bubbleWrap }>
                <View style = { styles.bubbleImgMask }>
                    <Image source = { require('../assets/logo.png') } 
                           style = { styles.bubbleImg } />
                </View>
            </View>
        </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: ORANGE,
        paddingTop: 70, 
        paddingBottom: 22,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    backBtn: {
        backgroundColor: '#fff',
        borderRadius: 18,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#fff',
    },
    backText: {
        color: ORANGE,
        fontWeight: '800',
        fontSize: 18,
    },
    titleWrap: {
        flex: 1,
        alignItems: 'center',
        marginLeft: -48, 
    },
    title: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 26,
        borderRadius: 24,
        color: ORANGE,
        fontWeight: '900',
        fontSize: 22,
        overflow: 'hidden',
    },
    listWrap: {
        paddingVertical: 14,
    },
    notifItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: LIGHT_GREY,
        paddingHorizontal: 14,
        paddingVertical: 12,
        marginHorizontal: 14,
        borderRadius: 10,
        marginBottom: 10,
        position: 'relative',
    },
    notifImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 14,
    },
    textWrap: {
        flex: 1,
    },
    msg: {
        fontSize: 18,
        fontWeight: '800',
        color: '#000',
    },
    time: {
        fontSize: 14,
        color: DARK_GREY,
        marginTop: 3,
    },
    divider: {
        position: 'absolute',
        bottom: -1,
        left: 0,
        right: 0,
        height: 2,
        backgroundColor: ORANGE,
    },
    emptyState: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        marginBottom: 80,
    },
    emptyTextTop: {
        fontSize: 40,
        color: '#000',
        fontWeight: '900',
        textAlign: 'center',
        lineHeight: 46,
    },
    emptyTextBottom: {
        fontSize: 40,
        color: '#000',
        fontWeight: '900',
        textAlign: 'center',
        lineHeight: 46,
        marginBottom: 20,
    },
    bubbleWrap: {
        width: 120, 
        height: 120,
        borderRadius: 65,
        borderWidth: 2, 
        borderColor: ORANGE,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    bubbleImgMask: {
        width: 118,
        height: 118,
        borderRadius: 60,
        overflow: 'hidden',
    },
    bubbleImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        transform: [{ scale: 2 }, { translateX: -4.5}, { translateY: 4} ],
    },
});
