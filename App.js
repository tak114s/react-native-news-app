import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
})

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{ width: 100, height: 98 }}
            source={{
              uri: 'https://picsum.photos/200/200',
            }}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Text style={styles.subText}>React News</Text>
        </View>
      </View>
    </View>
  )
}

export default App