import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ORANGE = "#FF8C00";

export default function Chatbot({ navigation }) {
    const [message, setMessage] = useState("");

    return (
        <View style = { styles.container }>

            {/* Header */}
            <View style = { styles.header }>
                <TouchableOpacity style = { styles.backBtn } 
                                  onPress = { () => navigation.goBack() }>
                    <Text style = {styles.backText}>Back</Text>
                </TouchableOpacity>

                <View style = { styles.titleCard }>
                    <Text style = {styles.titleText}>Chatbot</Text>
                </View>

                <TouchableOpacity style = { styles.notifBtn }>
                    <Ionicons name = "notifications-outline"
                              size = { 40 } 
                              color = { ORANGE } />
                    <View style = { styles.alertDot } />
                </TouchableOpacity>

                <View style = { styles.menuIcon }>
                    <View style = { styles.menuBar } />
                    <View style = { styles.menuBar } />
                    <View style = { styles.menuBar } />
                </View>
            </View>

            {/* Logo */}
            <View style = { styles.logoWrap }>
                <View style = { styles.whiteCircle }>
                    <View style = { styles.imageMask }>
                        <Image source = { require("../assets/logo.png") }
                            style = { styles.logo }/>
                    </View>
                </View>
            </View>

            {/* Quick Buttons */}
            <View style = { styles.quickRow }>
                <ScrollView horizontal
                            showsHorizontalScrollIndicator = { false }
                            contentContainerStyle = { styles.quickScroll }>
                    <TouchableOpacity style = { styles.quickBtn }>
                        <Text style = {styles.quickText}>🤔 Where is my Order?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = { styles.quickBtn }>
                        <Text style = {styles.quickText}>💰 Pricing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = { styles.quickBtn }>
                        <Text style = {styles.quickText}>FAQ</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>


            {/* Input Bar */}
            <View style = { styles.inputBar }>
                <TouchableOpacity style = { styles.micBtn }>
                    <Ionicons name = "mic-outline" 
                              size = { 26 } 
                              color = { ORANGE } />
                </TouchableOpacity>
                <TextInput style = { styles.textInput }
                           placeholder = "Type your message here..."
                           placeholderTextColor = "#666"
                           value = { message }
                           onChangeText = { setMessage }/>
                    <TouchableOpacity style = { styles.sendBtn }>
                        <Ionicons name = "arrow-forward-circle-outline" 
                                  size = { 30 } 
                                  color = { ORANGE } />
                    </TouchableOpacity>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: ORANGE 
    },

    // Header
    header: {
        backgroundColor: '#fff', 
        paddingTop: 70,
        paddingBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: ORANGE,
    },
    backBtn: {
        position: 'absolute',
        left: 15,
        top: 70,
        backgroundColor: ORANGE,
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 10,
    },
    backText: { 
        color: '#fff', 
        fontWeight: 'bold' 
    },
    titleCard: {
        backgroundColor: ORANGE,
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 6,
    },
    titleText: { 
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: 18 
    },
    notifBtn: { 
        position: 'absolute', 
        right: 60,
        top: 70 
    },
    alertDot: {
        position: 'absolute',
        top: 4,
        right: 6,
        width: 12,
        height: 12,
        backgroundColor: 'red',
        borderRadius: 6,
    },
    menuIcon: {
        position: 'absolute',
        right: 20,
        top: 73,
        alignItems: 'center',
    },
    menuBar: {
        width: 20,
        height: 6,
        backgroundColor: ORANGE,
        marginVertical: 3,
        borderRadius: 2,
    },

    // Logo
    logoWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginBottom: 200,
    },
    whiteCircle: {
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 6,
        borderColor: '#000',
    },
    imageMask: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: '150%',
        height: '150%',
        resizeMode: 'cover',
        transform: [{ translateX: -16 }, { translateY: 15 }, { scale: 1.4 }],
    },

    // Quick Actions
        quickRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 100,
        alignSelf: 'center',
    },
    quickScroll: { flexDirection: 'row', },
    quickBtn: {
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingHorizontal: 8,
        paddingVertical: 8,
        marginHorizontal: 6,
        left: 20,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
    },
    quickText: { 
        color: '#000', 
        fontWeight: 'bold' 
    },

    // Prompt
    inputBar: {
        position: 'absolute',
        bottom: 35,
        left: 20,
        right: 20,
        backgroundColor: '#fff',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 6, 
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    },
    micBtn: {
        width: 38,
        height: 38,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginRight: 8,
    },
    textInput: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 16,
        color: '#000',
    },
    sendBtn: { marginLeft: 8 },
})
