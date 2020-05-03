import React from 'react';
import {
  Button,
  FlatList,
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { getMovies } from '../api';
import { SearchBar } from '../components/SearchBar';
import { MovieRow } from '../components/MovieRow';
import { EmptyState } from '../components/EmptyState';
import { LoadMore } from '../components/LoadMore';

export default class MovieListScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Movie Browser',
    headerTintColor: 'teal',
  };

  state = {
    movies: [],
    currentMovies: [],
    searchText: '',
    page: 1,
    totalResults: 0,
  };

  search = text => {
    this.setState(prevState => ({
      searchText: text,
    }));
    this.getMoviesByTitle(text, 1);
  };

  getMoviesByTitle = async (title, page) => {
    const response = await getMovies(title, page);
    const movies = response && response.Search ? response.Search : [];
    this.setState(prevState => ({
      page: page,
      currentMovies: movies,
      movies: page === 1 ? movies : [...prevState.movies, ...movies],
      totalResults: +response.totalResults,
    }));
  };

  loadMoreMovies = () => {
    this.getMoviesByTitle(this.state.searchText, this.state.page + 1);
  };

  clearSearch = () => {
    this.setState({
      page: 1,
      searchText: '',
      movies: [],
      currentMovies: [],
      totalResults: 0,
    });
  };

  renderItem = ({ item }) => (
    <MovieRow
      {...item}
      onSelect={() => this.props.navigation.navigate('MovieDetail', item)}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          searchText={this.state.searchText}
          onSearch={this.search}
          onClearSearch={this.clearSearch}
        />
        {this.state.movies.length === 0 ? (
          <EmptyState />
        ) : (
          <FlatList
            data={this.state.movies}
            renderItem={this.renderItem}
            keyExtractor={item => item.imdbID}
            ListFooterComponent={
              <LoadMore
                onLoadMore={this.loadMoreMovies}
                totalResults={this.state.totalResults}
                currentMovies={this.state.currentMovies}
              />
            }
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
