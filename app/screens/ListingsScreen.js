import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native'
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import listingsApi from '../api/listings'
import AppText from '../components/Text'
import AppButton from '../components/Button'
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';


const ListingsScreen = ({ navigation }) => {

  const getListingsApi = useApi(listingsApi.getListings)

  useEffect(() => {
    getListingsApi.request()
  }, [])



  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && <>
        <AppText>couldn't retrieve the listings</AppText>
        <AppButton title="Retry" onPress={loadListings} />
      </>}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            thumbnailUrl={item.images[0].thumbnailUrl}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  )
}

export default ListingsScreen

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    backgroundColor: colors.light,
  },
})
