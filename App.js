import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet, Text, TouchableNativeFeedback, View, Image, SafeAreaView, Button, Alert, Platform, StatusBar, TextInput, Switch
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import AppLoading from 'expo-app-loading';
import { navigationRef } from './app/navigation/rootNavigation';

export default function App() {

  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)

  const restoreToken = async () => {
    const user = await authStorage.getUser()
    if (user) setUser(user)
  }

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setIsReady(true)}
        onError={(e) => console.log(e)}
      />
    );



  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    padding: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
