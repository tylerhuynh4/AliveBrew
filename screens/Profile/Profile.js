import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Nav from '../../components/Nav';

const ORANGE = '#FF6B35';

export default function Profile({ navigation }) {
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState('Light mode');
  const [language] = useState('English');

  return (
    <View style = { styles.screen }>
      <ScrollView contentContainerStyle = {{ paddingBottom: 100 }}>
        {/* Header */}
        <View style = { [styles.header, { position: 'relative', overflow: 'visible'}] }></View>
        <View style = { styles.headerIcons }>
          <TouchableOpacity style = { styles.bell }
                            onPress = {() => navigation.navigate('Notifications')}>
            <Ionicons name = "notifications-outline"
                      size = { 40 } 
                      color = "#fff"/>
            <View style = { styles.dot } />
        </TouchableOpacity>

        <TouchableOpacity style = { styles.menuBtn }>
          <Ionicons name = "menu" 
                    size = { 40 } 
                    color = "#fff" />
        </TouchableOpacity>
      </View>

    
        {/* Account */}
        <View style = { styles.profileSection }>
          <View style = { styles.profileCircle }>
            <Ionicons name = "person-outline" 
                      size = { 80 } 
                      color = "#000" />
          </View>
          <View style={styles.nameTag}>
            <Text style={styles.accountText}>Account 1</Text>
          </View>
        </View>

        {/* Divider */}
        <View style = { styles.divider } />


        {/* Quick Actions */}
        <View style = { styles.quickRow }>
          <TouchableOpacity style = { styles.quickBtn }>
            <Ionicons name = "star-outline"
                      size = { 40 } 
                      color = { ORANGE } />
            <Text style = {styles.quickText}>Favorites</Text>
          </TouchableOpacity>

          <TouchableOpacity style = { styles.quickBtn }>
            <Ionicons name = "bag-outline"
                      size = { 40 } 
                      color = { ORANGE } />
            <Text style = {styles.quickText}>Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity style = { styles.quickBtn }>
            <Ionicons name = "happy-outline"
                      size = { 40 } 
                      color = { ORANGE }/>
            <Text style = {styles.quickText}>AI</Text>
          </TouchableOpacity>
        </View>

        {/* Favorites */}
        <View style = { styles.settingsBox }>
          <View style = { styles.settingRow }>
            <MaterialCommunityIcons name = "account-edit" 
                                    size = { 22 } 
                                    color = "#000"/>
            <Text style = {styles.settingText}>Edit profile information</Text>
          </View>

          <View style = { styles.settingRow }>
            <Ionicons name = "notifications-outline" 
                      size = { 22 } 
                      color = "#000" />
              <Text style = {styles.settingText}>Notifications</Text>
              <Text style = {styles.settingValue}>{notifications ? 'ON' : 'OFF'}</Text>
          </View>

          <View style = { styles.settingRow }>
            <Ionicons name = "language-outline" 
                      size = { 22 }
                      color = "#000" />
            <Text style = {styles.settingText}>Language</Text>
            <Text style = {styles.settingValue}>{language}</Text>
          </View>
        </View>

        {/* Orders */}
        <View style = { styles.settingsBox }>
          <View style = { styles.settingRow }>
            <Ionicons name = "location-outline"
                      size = { 22 } 
                      color = "#000" />
            <Text style = {styles.settingText}>Robot Location</Text>
          </View>

          <View style = { styles.settingRow }>
            <Ionicons name = "color-palette-outline" 
                      size = { 22 } 
                      color = "#000" />
            <Text style = {styles.settingText}>Theme</Text>
            <Text style = {styles.settingValue}>{theme}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Nav */}
      <Nav active = "account"
           navigation = { navigation } />
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
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 0,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  headerIcons: {
    position: 'absolute',
    top: 65,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 51,
  },
  bell: {
    marginRight: 14,
    zIndex: 52,
  },
  menuBtn: {
    marginLeft: 10,
    zIndex: 52,
  },

  dot: {
    position: 'absolute',
    right: 0,
    top: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#E52E2E',
  },

  // Profile
  profileSection: {
    alignItems: 'center',
    marginTop: -90,
    zIndex: 10,
    elevation: 10,
  },
  profileCircle: {
    borderWidth: 3,
    borderColor: '#000',
    width: 140,
    height: 140,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  nameTag: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  accountText: { 
    fontWeight: '800', 
    fontSize: 18 
  },

  // Quick
  quickRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginHorizontal: 20,
  },
  quickBtn: {
    borderWidth: 4,
    borderColor: ORANGE,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
    height: 110,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  quickText: {
    color: ORANGE,
    fontWeight: '900',
    marginTop: 8,
    fontSize: 17,
  },

  divider: {
    height: 2,
    backgroundColor: ORANGE,
    marginHorizontal: 40,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 1,
    opacity: 0.7,
  },

  // Settings
  settingsBox: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: ORANGE,
    borderRadius: 14,
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 14,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  settingText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#000',
  },
  settingValue: {
    color: ORANGE,
    fontWeight: '700',
    fontSize: 16,
  },
});
