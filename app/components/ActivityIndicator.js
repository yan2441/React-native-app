import React from 'react';
import LottieView from 'lottie-react-native'
import { StyleSheet, View } from 'react-native';


const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null
  return (
    <View style={style.overlay}>
      <LottieView
        autoPlay
        loop
        source={require('../assets/animations/loader.json')}
      />
    </View>

  )
}

export default ActivityIndicator

const style = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    zIndex: 1,
    opacity: 0.8,
  }
})