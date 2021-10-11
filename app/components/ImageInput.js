import React, { useEffect } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker";

const ImageInput = ({ imageUri, onChangeImage }) => {

  const requestPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!result.granted)
      alert("give permission to the library")
  }

  useEffect(() => {
    requestPermission();
  }, [])

  const handlePress = () => {
    if (!imageUri) selectImage()
    else Alert.alert('Delete', 'are you sure you want to delate the this image', [
      { text: "Yes", onPress: () => onChangeImage(null) },
      { text: "No" }
    ])
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      })
      if (!result.cancelled)
        onChangeImage(result.uri)
    } catch (error) {
      console.log("error occurs")
    }
  }

  return (
    <TouchableNativeFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri &&
          <MaterialCommunityIcons
            size={40} name="camera"
            color={colors.medium} />
        }
        {imageUri &&
          <Image source={{ uri: imageUri }} style={styles.image} />
        }
      </View>
    </TouchableNativeFeedback>
  )
}

export default ImageInput

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    overflow: "hidden"
  },
  image: {
    height: "100%",
    width: "100%",
  }
})