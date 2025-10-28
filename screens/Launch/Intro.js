import { Urbanist_700Bold } from '@expo-google-fonts/urbanist';
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Image, Dimensions } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

export default function Intro({ navigation }) {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const screenHeight = Dimensions.get('window').height;

    useEffect(() => {
        const animation = Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
        }),
            Animated.timing(fadeAnim, {
                toValue: 0,
                delay: 1000,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]);

        animation.start(() => {
            navigation.navigate('Launch') // Moves to Launch screen
        });

        return () => animation.stop();
    }, [fadeAnim, navigation]);

    return (<View style = { styles.container }>
                <Animated.View style = {[ styles.centerContent, { opacity: fadeAnim }]}>
                    <SharedElement id = "hello">
                        <Text style = {styles.hello}>Hello!</Text>
                    </SharedElement>

                    <SharedElement id = "logo">
                        <View style = {styles.logoContainer}>
                            <Image source = {require('../../assets/logo.png')} // logo
                                   style = {styles.logo}
                                   resizeMode = "cover"/>
                        </View>
                    </SharedElement>

                    <SharedElement id = "title">
                        <Text style = {styles.title}>Alive Brew</Text>
                    </SharedElement>
                    </Animated.View>
                </View>);
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF6B35',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    hello: {
        fontSize: 34,
        color: '#000',
        fontWeight: '700',
        marginBottom: 25,
        fontFamily: 'Urbanist_700Bold',
    },
    logoContainer: {
        width: 220,
        height: 220,
        borderRadius: 110,
        borderWidth: 6,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
        marginBottom: 25,
    },
    logo: {
        width: '165%',
        height: '165%',
        borderRadius: 110,
        transform: [{ scale: 1.1 }, { translateX: -12}, { translateY: 5}],
    },
    title: {
        fontSize: 36,
        color: '#000',
        fontFamily: 'Urbanist_700Bold',
    },
});

Intro.sharedElements = () => [
    { id: 'logo' },
    { id: 'hello' },
    { id: 'title' },
];