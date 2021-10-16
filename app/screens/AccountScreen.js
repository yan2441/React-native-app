import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native'
import useAuth from '../auth/useAuth';
import Icon from '../components/Icon';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItems = [
  {
    id: 1,
    title: 'my lists',
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary
    }
  },
  {
    id: 1,
    title: 'my messages',
    icon: {
      name: "email",
      backgroundColor: colors.secondary
    },
    targetScreen: "Messages"
  },
]

const AccountScreen = ({ navigation }) => {
  const { user, logOut } = useAuth()


  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require('../assets/avatar.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={item => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) =>
            <ListItem
              title={item.title}
              IconComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          }

        />
      </View>
      <ListItem
        title="Log Out"
        onPress={() => logOut()}
        IconComponent={
          <Icon name="logout" backgroundColor="#ffe66d" />
        }
      />

    </Screen>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  screen: {
    backgroundColor: colors.light
  }
})
