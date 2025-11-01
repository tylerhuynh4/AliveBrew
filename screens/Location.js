import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ORANGE = '#FF8C00';

export default function Location({ navigation }) {
    return (
        <ScrollView style = { styles.container } 
                    contentContainerStyle = { { paddingBottom: 80 } }>
                        
            {/* Header */}
            <View style = { styles.header }>
                <TouchableOpacity style = { styles.backBtn } 
                                  onPress = { () => navigation.goBack() }>
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>

                <View style = { styles.titleCard }>
                    <Text style = {styles.titleText}>Robot Location</Text>
                </View>
            </View>

            {/* Robot Arm Card */}
            <View style = { styles.card }>
                <Image source = { require('../assets/robot.jpg') } 
                       style = { styles.image } />
                <View style = { styles.info }>
                    <Text style = {styles.name}>Robot Arm #1</Text>
                    <Text style = {styles.sub}>Default</Text>
                    <TouchableOpacity style = { styles.chooseBtn }
                                      onPress = { () => navigation.navigate('Hub') }>
                        <Text style = {styles.chooseText}>Choose</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Divider */}
            <View style = { styles.divider } />

            {/* Bottom Section */}
            <View style = { styles.bottom }>
                <Text style = {styles.moreText}>More Locations{'\n'}Coming Soon!</Text>
                <View style = { styles.bobaRing }>
                    <View style = { styles.bobaMask}>
                        <Image source = { require('../assets/logo.png') } 
                               style = { styles.boba } />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#fff' },

    // Header
    header: {
        backgroundColor: ORANGE,
        paddingTop: 70,
        paddingBottom: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backBtn: {
        position: 'absolute',
        left: 20,
        top: 70,
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 3 },
    },
    backText: { 
        color: ORANGE, 
        fontWeight: 'bold', 
        fontSize: 16 
    },
    titleCard: {
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 28,
        paddingVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        marginLeft: 40,
    },
    titleText: { 
        color: ORANGE, 
        fontWeight: 'bold', 
        fontSize: 20 
    },

    // Card
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: 25,
        marginTop: 35,
        borderRadius: 25,
        alignItems: 'center',
        padding: 12,
        shadowColor: ORANGE,
        shadowOpacity: 0.4,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 4 },
        borderWidth: 2,
        borderColor: ORANGE,
    },
    image: { 
        width: 90,
        height: 90, 
        resizeMode: 'contain',
        marginRight: 15 
    },
    info: { flex: 1 },
    name: { 
        fontSize: 22, 
        fontWeight: 'bold', 
        color: '#000' 
    },
    sub: { 
        fontSize: 15, 
        color: '#444', 
        marginBottom: 8 
    },

    // Choose Button
    chooseBtn: {
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingVertical: 8,
        paddingHorizontal: 28,
        alignSelf: 'flex-start',
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 3 },
    },
    chooseText: { 
        color: '#000', 
        fontWeight: 'bold', 
        fontSize: 17 
    },

    // Divider
    divider: {
        height: 2,
        backgroundColor: ORANGE,
        marginVertical: 25,
        marginHorizontal: 40,
        borderRadius: 2,
        opacity: 0.8,
    },

    // Bottom
    bottom: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    moreText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 15,
        marginTop: 10,
        lineHeight: 28,
    },

    // Logo
    bobaRing: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: ORANGE,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    },
    bobaMask: {
        width: 92,
        height: 92,
        borderRadius: 46,
        backgroundColor: '#fff',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boba: {
        width: '115%',
        height: '115%',
        resizeMode: 'cover',
        transform: [{ scale: 1.9}, {translateX: -3.5 }, {translateY: 3 }],
    },
});
