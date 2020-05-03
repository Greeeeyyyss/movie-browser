const baseUrl = 'https://www.omdbapi.com/';
const API_KEY = '7b68d61c';

export const getMovies = async (title, page) => {
  try {
    const param = `s=${title}&page=${page}`;
    return await request(param);
  } catch (error) {
    console.log('get movies error: ', error);
  }
};

export const getMovieById = async id => {
  try {
    const param = `i=${id}`;
    return await request(param);
  } catch (error) {
    console.log('get movie by id', error);
  }
};

const request = async param => {
  const search = encodeURI(param);
  const url = `${baseUrl}?${search}&apikey=${API_KEY}`
  const response = await fetch(url);
  const data = await response.json();
  console.log(url);
  console.log(data);
  return data;
}
