import React from 'react';
import { StyleSheet } from 'react-native'
import { useFormikContext } from 'formik';

import AppTextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';



const AppFormField = ({ name, width, ...otherProps }) => {

  const { errors, setFieldTouched, touched, setFieldValue, values } = useFormikContext();

  return (
    <>
      <AppTextInput
        //keyboardType="email-address"
        //autoCorrect={false}
        //autoCapitalize="none"
        //placeholder="email"
        //icon="email"
        onBlur={() => setFieldTouched(name)}
        onChangeText={text => setFieldValue(name, text)}
        values={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormField

const styles = StyleSheet.create({})
