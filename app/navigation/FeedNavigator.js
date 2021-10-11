import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="transparentModal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listing" component={ListingsScreen} />
    <Stack.Screen name="ListingDetails"
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
)

export default FeedNavigator;