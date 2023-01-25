import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Headers from '../components/Header'
import MovieCards from '../components/MovieCards'
const HomeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#F0F0F0", flex: 1 }} >
      <Headers />
      <MovieCards />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})