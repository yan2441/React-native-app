import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import colors from '../config/colors';
import AppText from './Text';
import Icon from './Icon';

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Icon backgroundColor={item.backgroundColor}
          name={item.icon} size={80} />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryPickerItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: "center",
    width: "33.3%"
  },
  label: {
    marginTop: 5,
    textAlign: "center"
  }
})
