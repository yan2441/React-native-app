import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/Button';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/background.jpg")}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>sell what you have done with</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton title="login" onPress={() => navigation.navigate("Login")} />
        <AppButton title="register" color="secondary" onPress={() => navigation.navigate("Register")} />
      </View>
    </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: "#4ecdc4"
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20
  }
})
