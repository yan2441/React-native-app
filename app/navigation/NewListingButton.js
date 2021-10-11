import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons"

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" size={40} color={colors.white} />
      </View>
    </TouchableOpacity>
  )
}

export default NewListingButton

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderWidth: 8,
    borderRadius: 40,
    height: 80,
    width: 80,
    bottom: 20
  },
})