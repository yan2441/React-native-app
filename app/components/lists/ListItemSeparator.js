import React from 'react';
import { StyleSheet, View } from 'react-native'
import colors from '../../config/colors';

const ListItemSeparator = () => {
  return (
    <View style={styles.item} />
  )
}

export default ListItemSeparator

const styles = StyleSheet.create({
  item: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light
  }
})
