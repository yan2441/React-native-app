import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import AppText from '../components/Text';
import ListItem from '../components/lists/ListItem';
import colors from '../config/colors';
import { Image } from 'react-native-expo-image-cache';


const ListingDetailsScreen = ({ route }) => {

  const listing = route.params;

  return (

    <View>
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        uri={listing.images[0].url}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}></View>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="yassine najem"
          subTitle="6 listing"
        />
      </View>
    </View>
  )
}

export default ListingDetailsScreen

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },

})
