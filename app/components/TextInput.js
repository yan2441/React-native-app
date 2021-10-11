import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import defaultStyles from "../config/styles"
import colors from '../config/colors';

const AppTextInput = ({ icon, width = "100%", ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon &&
        <View style={styles.iconCon}>
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={defaultStyles.colors.medium} />
        </View>
      }
      <TextInput placeholderTextColor={defaultStyles.colors.medium} style={defaultStyles.text} {...otherProps} />
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({

  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10
  },
  iconCon: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  }
})
