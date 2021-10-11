import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native'

import { ListItem, ListItemDeleteAction, ListItemSeparator } from '../components/lists';
import Screen from '../components/Screen';


const initialMessages = [
  {
    id: 1,
    title: 't1',
    description: "d1",
    image: require("../assets/mosh.jpg")
  },
  {
    id: 2,
    title: 't2',
    description: "d2",
    image: require("../assets/mosh.jpg")
  },
]

const MessagesScreen = () => {

  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = message => {
    setMessages(messages.filter(m => m.id !== message.id))
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) =>
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('d')}
            renderRightActions={
              () => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
          />}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 't2',
              description: "d2",
              image: require("../assets/mosh.jpg")
            },
          ])
        }}
      />
    </Screen>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({

})
