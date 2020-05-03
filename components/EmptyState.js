import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

export const EmptyState = () => (
  <View style={styles.container}>
    <Icon size={200} name="movie-filter" type="material" color="teal" />
    <Text style={styles.title}>Movies will appear here</Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'teal',
  },
});
