import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import ErrorMessage from './ErrorMessage';
import ImageInputList from '../ImageInputList';
import { useFormikContext } from 'formik';

const FormImagePicker = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const handleAdd = uri => {
    setFieldValue(name, [...values[name], uri])
  }

  const handleRemove = uri => {
    setFieldValue(name, values[name].filter((imageUri) => imageUri !== uri))
  }

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default FormImagePicker

const styles = StyleSheet.create({

})