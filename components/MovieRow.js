import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export const MovieRow = props => (
  <View>
    <TouchableOpacity onPress={() => props.onSelect()}>
      <Card style={styles.row}>
        <View style={styles.container}>
          <Image style={styles.poster} source={{ uri: props.Poster }} />
          <View style={styles.movieInfo}>
            <Text style={styles.title} numberOfLines={1}>
              {props.Title}
            </Text>
            <Text>{props.Year}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  row: {
    marginBottom: 10,
    marginStart: 10,
    marginEnd: 10,
    padding: 10,
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  poster: {
    height: 50,
    width: 50,
    backgroundColor: '#ebebeb',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    flexWrap: 'nowrap'
  },
  movieInfo: {
    flex: 1,
    width: 250,
    flexDirection: 'column',
    paddingStart: 10,
    marginEnd: 20,
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
});
