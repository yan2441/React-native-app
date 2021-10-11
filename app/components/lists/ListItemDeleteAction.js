import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../config/colors';


const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View View style={styles.item} >
        <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
      </View >
    </TouchableWithoutFeedback>
  )
}

export default ListItemDeleteAction

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center"
  }
})
