import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';
import colors from '../config/colors';
import AppText from './Text';

const OfflineNotice = () => {

  const netInfo = useNetInfo()

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText>No internet connection</AppText>
      </View>
    )


  return null
}

export default OfflineNotice

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: colors.primary,
    height: 50,
    top: Constants.statusBarHeight,
    position: "absolute",
    width: "100%",
    zIndex: 1
  },
  Text: {
    color: colors.white
  }
})