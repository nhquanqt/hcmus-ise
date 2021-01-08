import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native-web'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const BackButton = ({ goBack }) => (
  <TouchableOpacity onPress={goBack} style={styles.container}>
    <Image style={styles.image} source={{uri: './assets/arrow_back.png'}} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
})

export default BackButton