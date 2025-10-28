import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView, } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function Login({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (<KeyboardAvoidingView style = { styles.screen }
                                behavior = {Platform.select({ ios: 'padding', android: undefined })}
                                keyboardVerticalOffset = { Platform.select({ ios: 80, android: 0 }) }>
            <ScrollView contentContainerStyle = {styles.scroll} 
                        keyboardShouldPersistTaps = "handled">

        {/* Back Button */}
        <TouchableOpacity style = { styles.backButton }
                          onPress = {() => navigation.navigate('Launch')}
                          activeOpacity = {0.8}>
            <Text style = {styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Title */}
        <Text style = { styles.loginTitle }>Login</Text>

        {/* Logo */}
        <SharedElement id = "logo">
          <View style = { styles.logoContainer }>
            <Image source = {require('../../assets/logo.png')}
                   style = { styles.logo }
                   resizeMod e= "cover"/>
          </View>
        </SharedElement>

        {/* Email */}
        <View style = { styles.inputGroup }>
          <TextInput style = { styles.input }
                     placeholder = "Enter your email"
                     placeholderTextColor = "#FF6B35"
                     autoCapitalize = "none"
                     keyboardType = "email-address"
                     returnKeyType = "next"/>
        </View>

        {/* Password */}
        <View style = { styles.inputGroup }>
          <View style = { styles.passwordRow }>
            <TextInput style = {[styles.input, styles.passwordInput]}
                       placeholder = "Enter your password"
                       placeholderTextColor = "#FF6B35"
                       secureTextEntry = {!passwordVisible}
                       autoCapitalize = "none"
                       returnKeyType = "done"/>
            <TouchableOpacity
              style = { styles.eyeButton }
              onPress = {() => setPasswordVisible(v => !v)}
              accessibilityLabel = {passwordVisible ? 'Hide password' : 'Show password'}>
              <Ionicons name = {passwordVisible ? 'eye-off' : 'eye'}
                        size = {22}
                        color = "#FF6B35"/>
            </TouchableOpacity>
          </View>
        </View>

        {/* Forgot Password (Dummy) */}
        <Text style = {styles.forgot}>Forgot Password?</Text>

        {/* Login Button */}
        <TouchableOpacity
          style = { styles.loginButton }
          onPress = {() => {}}   // Dummy
          activeOpacity = {0.9}>
          <Text style = { styles.loginText }>Login</Text>
        </TouchableOpacity>

        {/* Divider */ }
        <View style = { styles.dividerRow }>
          <View style = { styles.line } />
          <Text style = { styles.orText }>Or Login with</Text>
          <View style = { styles.line } /> 
        </View>

        {/* Social (Dummy) */}
        <View style = { styles.socialRow }>
          <TouchableOpacity style = {styles.socialButton}
                            activeOpacity = {0.8}>
            <FontAwesome name = "facebook"
                         size = {20} 
                         color = "#1877F2" />
          </TouchableOpacity>
          <TouchableOpacity style = {styles.socialButton}
                            activeOpacity = {0.8}>
            <AntDesign name = "google"
                       size = {20}
                       color = "#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style = {styles.socialButton}
                            activeOpacity = {0.8}>
            <AntDesign name = "apple"
                       size = {20}
                       color = "#000" />
          </TouchableOpacity>
        </View>

        {/* Guest */}
        <TouchableOpacity onPress = {() => navigation.navigate('Hub')}> 
            <Text style = {styles.guestText}>Continue as Guest</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

Login.sharedElements = () => [ { id: 'logo' },];

const ORANGE = '#FF6B35';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 32,
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: ORANGE,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 14,
    marginTop: 50,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
  },
  backText: {
    color: '#fff',
    fontFamily: 'Urbanist_700Bold',
    fontSize: 20,
  },
  loginTitle: {
    fontFamily: 'Urbanist_700Bold',
    fontSize: 40,
    color: '#000',
    marginTop: -80,
    marginBottom: 20,
    alignSelf: 'center',
  },
  logoContainer: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: '#000',
    backgroundColor: '#fff',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 5 },
    elevation: 6,
  },
  logo: {
    width: '150%',
    height: '150%',
    borderRadius: 140,
    resizeMode: 'cover',
    transform: [{ scale: 1.3 }, { translateX: -10}, { translateY: 10}],
  },
  inputGroup: {
    width: '85%',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 2.5,
    borderColor: ORANGE,
    borderRadius: 14,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    fontFamily: 'Urbanist_400Regular',
    fontSize: 16,
    color: ORANGE,
    marginBottom: 12,
  },
  passwordRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordInput: {
    paddingRight: 44,
  },
  eyeButton: {
    position: 'absolute',
    right: 16,
    top: 0,
    height: 60,
    justifyContent: 'center',
  },
  forgot: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 15,
    color: ORANGE,
    textAlign: 'flex-end',
    marginRight: -185,
    marginTop: -10,
    marginBottom: 12,
  },
  loginButton: {
    backgroundColor: ORANGE,
    paddingVertical: 18,
    width: '85%',
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 8,
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
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    marginVertical: 25,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: ORANGE,
  },
  orText: {
    marginHorizontal: 10,
    fontFamily: 'Urbanist_700Bold',
    color: ORANGE,
    fontSize: 14,
  },
  guestText: {
    color: ORANGE,
    fontFamily: 'Urbanist_700Bold',
    fontSize: 18,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginBottom: 30,
  },
  socialButton: {
    flex:1,
    height: 55,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  guestLinkContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  guestLink: {
    fontFamily: 'Urbanist_700Bold',
    fontSize: 16,
    color: '#000',
    borderBottomWidth: 1.5,
  },
});
