import React from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

let width = Dimensions.get('window').width; //full width
let height = Dimensions.get('window').height; //full height

const Layout = ({ children }) => {
    return (
        <SafeAreaView>
            <LinearGradient
            colors={['#011126', '#08678C', '#011126']}
            style={styles.linearGradient}
            >
            {children}
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
      height: height,
      width: width,
      paddingHorizontal: 16,
    },
  })

export default Layout
