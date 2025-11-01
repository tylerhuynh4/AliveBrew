import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image, ActivityIndicator } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Nav from '../../components/Nav';

const ORANGE = '#FF6B35';
const GREEN = '#4CAF50';
const GREY = '#BDBDBD';
const WHITE = '#FFFFFF';

export default function Hub({ navigation }) {
  const percent = 0.75;

  return (
    <View style = { styles.screen }>
        {/* Header */}
        <View style = { styles.header }>
            <View style = { styles.searchWrap }>
            <Ionicons name = "search"
                      size = {18}
                      color = "#9A9A9A"
                      style = {{ marginLeft: 12 }} />
            <TextInput style = { styles.searchInput }
                       placeholder = "Search"
                       placeholderTextColor = "#9A9A9A"/>
            <TouchableOpacity style = { styles.filterPill }>
                <Ionicons name = "options-outline"
                          size={16} 
                          color="#fff" />
            </TouchableOpacity>
        </View>
            <TouchableOpacity style = { styles.bell }
                              onPress = {() => navigation.navigate('Notifications') }>
                <Ionicons name = "notifications-outline"
                          size={36} 
                          color="#fff" />
                <View style = { styles.dot } />
            </TouchableOpacity>
    </View>
    
    <ScrollView contentContainerStyle = { styles.body }
                showsVerticalScrollIndicator = { false }>
    
    {/* Welcome */}
    <Text style = { styles.welcome } 
          numberOfLines={1}
          ellipsizeMode="clip">Welcome to Alive Brew!</Text>

    {/* Robot Arm */}
    <View style = { styles.robotRow }>
        <Image source = {require('../../assets/robot.jpg')} 
               style = { styles.robotImg } />
        <View style = { styles.robotPanel }>
            <Text style = { styles.robotName }>Robot{'\n'}Arm 1</Text>
            <TouchableOpacity style = { styles.changeBtn }
                              onPress = {() => navigation.navigate('Location') }>
                <Text style = {styles.changeBtnText}>Change Robot</Text>
            </TouchableOpacity>
        </View>
    </View>

    <View style = { styles.sectionDivider } />

    {/* Progress Card */}
    <TouchableOpacity style = { styles.progressCard }
                      activeOpacity = {0.8}
                      onPress = {() => navigation.navigate('Status')}>
        <View style = { styles.progressHeader }>
            <Text style = {styles.progressTitle}>Drink in Progress</Text>
            <Text style = {styles.progressPct}>{Math.round(percent * 100)}%</Text>
        </View>

        {/* Progress Bar */}
        <View style = { styles.progressBarTrack }>
            <View style = {[styles.progressBarFill, { width: `${percent * 100}%` }]} />
        </View>

        <View style = { styles.stagesRow }>
            {/* Queued */}
            <View style = {[styles.stageBox,
                            styles.stageDone]}>
                <Text style = {styles.stageTextOrange}>Queued</Text>
                <MaterialCommunityIcons name="check-circle"
                                        size={28}
                                        color={GREEN}
                                        style={{ marginTop: 6 }}/>
            </View>

            <Ionicons name = "chevron-forward"
                      size = {22}
                      color="#fff" 
                      style = { styles.arrow } />

            {/* Making */}
            <View style = {[styles.stageBox,
                            styles.stageDone]}>
                <Text style = {styles.stageTextOrange}>Making</Text>
                <ActivityIndicator size = "small"
                                   color = "#E52E2E"
                                   style={{ marginTop: 6 }} />
            </View>

            <Ionicons name = "chevron-forward"
                      size={22}
                      color = "#fff" 
                      style = { styles.arrow } />

            {/* Finalizing */}
            <View style = {[styles.stageBox, 
                            styles.stageGrey]}>
                <Text style = {styles.stageText}>Finalizing</Text>
                <View style = { styles.timerWrap }>
                    <MaterialCommunityIcons name = "timer-sand" 
                                            size = {20} 
                                            color = "#E52E2E" />
                </View>
            </View>
        </View>
    </TouchableOpacity>

    <View style = { styles.sectionDivider } />

    {/*  Categories */}
    <View style = { styles.categoriesRow }>
        <TouchableOpacity style = { styles.catItem } 
                          onPress = {() => navigation.navigate('Favorites')}>
            <View style = {styles.catCircle}>
                <Image source = {require('../../assets/favorites.png')}
                       style={styles.catImg} />
            </View>
            <Text style = {styles.catLabel}>Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity style = { styles.catItem } 
                          activeOpacity = {0.7}>
            <View style = { styles.catCircle }>
                <Image source = {require('../../assets/popular.png')} 
                       style = { styles.catImg } />
            </View>
            <Text style = {styles.catLabel}>Popular</Text>
        </TouchableOpacity>

        <TouchableOpacity style = { styles.catItem }
                          activeOpacity = {0.7}>
            <View style = { styles.catCircle }>
                <Image source = {require('../../assets/seasonal.png')} 
                       style = { styles.catImg } />
            </View>
            <Text style = {styles.catLabel}>Seasonal</Text>
        </TouchableOpacity>
    </View>

    <View style = {{ height: 120 }} />
    </ScrollView>

    {/* Chatbot */}
    <TouchableOpacity style = { styles.chatbot }
                      activeOpacity = {0.85}
                      onPress = {() => navigation.navigate('Chatbot')}>
        <View style = { styles.chatbotImageWrap }>
            <Image source = { require('../../assets/logo.png') }
                   style = { styles.chatbotLogo } />
        </View>
    </TouchableOpacity>

    {/* Nav */}
    <Nav active = "home"
         navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: { 
        flex: 1, 
        backgroundColor: '#fff' 
    },
    header: {
        backgroundColor: ORANGE,
        paddingTop: 56,
        paddingBottom: 16,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 6,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    },
    searchWrap: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 42,
        borderRadius: 22,
        marginRight: 14,
        overflow: 'hidden',
        elevation: 2,
    },
    searchInput: { 
        flex: 1, 
        paddingHorizontal: 10, 
        fontSize: 16, 
        color: '#000' 
    },
    filterPill: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: '#E52E2E',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6,
    },
    bell: { 
        marginLeft: 8, 
        padding: 8 
    },
    dot: {
        position: 'absolute',
        right: 8,
        top: 10,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#E52E2E',
    },
    body: { 
        paddingHorizontal: 16, 
        paddingTop: 16 
    },
    welcome: {
        fontSize: 30, 
        fontWeight: '900',
        color: '#121212',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 25,
    },
    sectionDivider: {
        height: 2,
        backgroundColor: ORANGE,
        opacity: 0.45,
        borderRadius: 1,
        marginVertical: 14,
    },
    robotRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0,
    },
    robotImg: { 
        width: 150, 
        height: 150, 
        resizeMode: 'cover', 
        marginRight: -4 
    },
    robotPanel: {
        flex: 1,
        backgroundColor: ORANGE,
        borderTopRightRadius: 14,
        borderBottomRightRadius: 14,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    },
    robotName: { 
        color: '#fff', 
        fontSize: 26, 
        fontWeight: '800', 
        lineHeight: 30, 
        textAlign: 'center' 
    },
    changeBtn: {
        marginTop: 12,
        backgroundColor: '#fff',
        borderRadius: 24,
        paddingVertical: 10,
        paddingHorizontal: 22,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    changeBtnText: { 
        color: ORANGE, 
        fontWeight: '800', 
        fontSize: 16 
    },
    progressCard: {
        backgroundColor: ORANGE,
        borderRadius: 16,
        padding: 14,
        elevation: 6,
        shadowColor: '#000',
        shadowOpacity: 0.22,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    },
    progressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    progressTitle: { 
        color: '#fff', 
        fontWeight: '900', 
        fontSize: 22 
    },
    progressPct: { 
        color: '#fff', 
        fontWeight: '900', 
        fontSize: 18 
    },
    progressBarTrack: {
        height: 20, 
        backgroundColor: WHITE,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 12,
    },
    progressBarFill: { height: '100%', backgroundColor: GREEN, borderRadius: 10 },

    stagesRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    arrow: { marginHorizontal: 4 },
    stageBox: {
        flex: 1,
        borderRadius: 10,
        paddingVertical: 12,
        marginHorizontal: 2,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    stageText: { color: '#fff', fontWeight: '900', fontSize: 16 },
    stageTextOrange: { color: ORANGE, fontWeight: '900', fontSize: 16 },
    stageDone: { backgroundColor: WHITE },
    stageGrey: { backgroundColor: GREY },

    timerWrap: {
        marginTop: 6,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    categoriesRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
    catItem: { alignItems: 'center', width: '31%' },
    catCircle: {
        width: 110,
        height: 110,
        borderRadius: 55,
        backgroundColor: ORANGE,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    },
    catImg: { width: 94, height: 94, borderRadius: 47, resizeMode: 'cover' },
    catLabel: {
        marginTop: 10,
        fontWeight: '900',
        fontSize: 20,
        color: ORANGE,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
    },

    chatbot: {
        position: 'absolute',
        right: 16,
        bottom: 88,
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: ORANGE,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    },
    chatbotLogo: {
        width: 74,
        height: 74,
        borderRadius: 150,
        resizeMode: 'cover',
        transform: [{ scale: 1.8}, {translateX: -2.5 }, {translateY: 2 }],
    },
    chatbotImageWrap: {
        width: 74,
        height: 74,
        borderRadius: 37,
        overflow: 'hidden',
    },
    bottomNav: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 72,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#EFEFEF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        elevation: 12,
    },
    navItem: { 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    badge: {
        position: 'absolute',
        top: -4,
        right: -10,
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
        fontWeight: '800'
    },
});
