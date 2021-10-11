import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet, Text, TouchableNativeFeedback, View, Image, SafeAreaView, Button, Alert, Platform, StatusBar, TextInput, Switch
} from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/Button';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/lists/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/TextInput';
import { Picker } from '@react-native-picker/picker';
import AppPicker from './app/components/Picker';
import LoginScreen from './app/screens/LoginScreen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import ListingEditScreen from './app/screens/ListingEditScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import jwtDecode from 'jwt-decode';
import AppLoading from 'expo-app-loading';

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
      <NavigationContainer theme={navigationTheme}>
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
