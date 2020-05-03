import React from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export const SearchBar = props => (
  <View style={styles.searchView}>
    <TextInput
      style={styles.searchBar}
      value={props.searchText}
      onChangeText={props.onSearch}
      placeholder="Search here..."
    />
    <Icon color="teal" name="close" onPress={props.onClearSearch} />
  </View>
);

const styles = StyleSheet.create({
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  searchBar: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'teal',
    flex: 1,
  }
});
