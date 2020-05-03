import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const LoadMore = props => (
  <View>
    {props.currentMovies.length === 10 && props.totalResults > 10 ? (
      <TouchableOpacity onPress={props.onLoadMore}>
        <Text style={styles.loadMore}>Load more...</Text>
      </TouchableOpacity>
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  loadMore: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flex: 1,
    padding: 10,
  },
});
