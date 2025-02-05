import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <View>
        <Text style={styles.head}>About: </Text>
        <Text style={styles.heading}>Opening: </Text>
        <Text style={styles.content}>8:00 AM</Text>
        <Text style={styles.heading}>Closing: </Text>
        <Text style={styles.content}>9:00 PM</Text>

      </View>
    )
  }
}

export default About

const styles = StyleSheet.create({
  head: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
  },
  content:{
    color: 'black',
    paddingLeft:25,
  }
})

