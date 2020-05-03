import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Card } from 'react-native-paper';
import { getMovieById } from '../api';

export default class MovieDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Movie Wiki',
    headerTintColor: 'teal',
  });

  state = {
    movie: {
      Title: this.props.navigation.getParam('Title'),
      Poster: this.props.navigation.getParam('Poster'),
      Released: this.props.navigation.getParam('Year'),
    },
  };

  componentDidMount() {
    this.getMovieDetail();
  }

  getMovieDetail = async () => {
    const movieId = this.props.navigation.getParam('imdbID');
    const movie = await getMovieById(movieId);
    this.setState({ movie });
  };

  render() {
    return (
      <ScrollView>
        <Card style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title} numberOfLines={4}>
              {this.state.movie.Title}
            </Text>
            <View style={styles.rating}>
              <Icon name="star" color="orange" />
              <Text style={styles.title}>{this.state.movie.imdbRating}</Text>
            </View>
          </View>
          <Text>Released: {this.state.movie.Released}</Text>
          <Text>Runtime: {this.state.movie.Runtime}</Text>
          <Text>Genre: {this.state.movie.Genre}</Text>
          <Text>Rated: {this.state.movie.Rated}</Text>
          <Text>Director: {this.state.movie.Director}</Text>
          <Text>Actors: {this.state.movie.Actors}</Text>
        </Card>
        {this.state.movie.Poster !== 'N/A' && this.state.movie.Plot !== 'N/A' && (
          <Card style={styles.container}>
            <Image
              style={styles.poster}
              source={{ uri: this.state.movie.Poster }}
            />
            <Text>{this.state.movie.Plot}</Text>
          </Card>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },
  poster: {
    marginBottom: 10,
    width: '100%',
    height: 370,
  },
  title: {
    width: '70%',
    fontSize: 20,
    fontWeight: 'bold',
    marginEnd: 20,
    marginBottom: 20,
  },
  rating: {
    width: '15%',
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
