import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MovieDetailScreen from './screens/MovieDetailScreen';
import MovieListScreen from './screens/MovieListScreen';

const AppNavigator = createStackNavigator(
  {
    MovieDetail: MovieDetailScreen,
    MovieList: MovieListScreen,
  },
  {
    initialRouteName: 'MovieList',
  }
);

const Container = createAppContainer(AppNavigator);

export default function App() {
  return <Container />;
}
