import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';

export default function Launch({ navigation }) {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.96)).current;

    useEffect(() => {
        Animated.parallel([Animated.timing (fadeAnim, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 57,
            tension: 80,
            useNativeDriver: true,
        }),]).start();
    }, [fadeAnim, scaleAnim]);

    return (<View style = {styles.screenContainer}> {/* footer anchor */}
                <Animated.View style = {[styles.container, { 
                    opacity: fadeAnim,
                    transform: [{ scale: scaleAnim }],
                },]}> 

                    {/* Hello text */}
                    <SharedElement id = "hello">
                        <Text style = {styles.hello}>Hello!</Text>
                    </SharedElement>

                    {/* Logo */}
                    <SharedElement id = "logo">
                        <View style = {styles.logoContainer}>
                            <Image source = {require('../../assets/logo.png')}
                                style = {styles.logo}
                                resizeMode = "cover"/>
                        </View>
                    </SharedElement>

                    {/* Title */}
                    <SharedElement id = "title">
                        <Text style = {styles.title}>Alive Brew</Text>
                    </SharedElement>
                
                    {/* Buttons */}
                    <View style = {styles.buttonGroup}>
                        <TouchableOpacity style = {styles.loginButton}   // First button
                                          onPress = {() => navigation.navigate('Login')}>
                            <Text style = {[styles.loginText]}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.guestButton}   // Second button
                                          onPress = {() => navigation.navigate('Hub')}>
                            <Text style = {[styles.guestText]}>Order as Guest</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
                
                {/* Bottom Text */}
                <View style = {styles.footerContainer}>
                    <Text style = {styles.footerText}
                          numberOfLines = {1}
                          adjustsFontSizeToFit>
                          Don't have an account?{' '}
                          <Text style = {styles.registerLink}>Register Now</Text>
                    </Text>
                </View>
            </View>);
}

const styles = StyleSheet.create ({
    screenContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 28,
    },
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    hello: {
        fontFamily: 'Urbanist_700Bold',
        fontSize: 40,
        color: '#000',
        marginTop: 70,
        marginBottom: 50,
    },
    logoContainer: {
        width: 280,
        height: 280,
        borderRadius: 140,
        borderWidth: 4,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 8,
        marginTop: -30,
        overflow: 'hidden',
    },
    logo: {
        width: '150%',
        height: '150%', 
        borderRadius: 140,
        resizeMode: 'cover',
        transform: [{ scale: 1.3 }, { translateX: -15}, { translateY: 10}],
    },
    title: {
        fontFamily: 'Urbanist_700Bold',
        fontSize: 45,
        color: '#000',
        marginTop: 10,
    },
    buttonGroup: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20,
        gap: 4,
    },
    loginButton: {
        backgroundColor: '#FF6B35',
        paddingVertical: 18,
        width: '95%',
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
        elevation: 3,
    },
    loginText: {
        color: '#fff',
        fontFamily: 'Urbanist_700Bold',
        fontSize: 20,
    },
    guestButton: {
        backgroundColor: '#fff',
        borderWidth: 2, 
        borderColor: '#FF6B35',
        paddingVertical: 18,
        width: '95%',
        borderRadius: 12, 
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 4,
        elevation: 2,
    },
    guestText: {
        color: '#FF6B35',
        fontFamily: 'Urbanist_700Bold',
        fontSize: 20,
    },
    footerContainer: {
        marginBottom: 20,
    },
    footerText: {
        fontFamily: 'Urbanist_400Regular',
        fontSize: 15,
        color: '#000',
        textAlign: 'center',
    },
    registerLink: {
        color: '#FF6B35',
        fontFamily: 'Urbanist_700Bold',
    },
});

Launch.sharedElements = () => [
  { id: 'logo' },
  { id: 'hello' },
  { id: 'title' },
];
