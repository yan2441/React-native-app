import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native'
import * as yup from 'yup';

import Screen from "../components/Screen"
import { ErrorMessage, AppFormField, SubmitButton, AppForm } from '../components/forms'
import auth from '../api/auth';
import useAuth from '../auth/useAuth';

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password")
})

const LoginScreen = () => {
  const authHook = useAuth()
  const [loginFailed, setLoginFailed] = useState(false)

  const handleSubmit = async ({ email, password }) => {
    const result = await auth.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    authHook.logIn(result.data)
  };

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email and/or password" visible={loginFailed} />
        <AppFormField
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="email"
          icon="email"
          name="email"
        />

        <AppFormField
          name="password"
          secureTextEntry={true}
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="password"
          icon="lock"
        />

        <SubmitButton title='login' />
      </AppForm>
    </Screen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20
  },
  container: {

    padding: 10,

  },
})

