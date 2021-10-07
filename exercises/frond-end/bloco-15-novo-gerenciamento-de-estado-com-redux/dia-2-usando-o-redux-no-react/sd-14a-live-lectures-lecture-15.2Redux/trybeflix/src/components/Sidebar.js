import React from 'react';
import { connect } from 'react-redux';

import { selectMovie } from '../action';

class Sidebar extends React.Component {
  render() {
    const { categoriesFromRedux, selectMovieRedux } = this.props;
    return (
      <aside>
        {categoriesFromRedux.map((category) => (
          <div key={ category.id }>
            <h3>{category.name}</h3>
            <ul>
              {category.movies.map((movie) => (
                <li key={ movie.id }>
                  {movie.title}
                  {' '}
                  was released in
                  {' '}
                  {movie.released}
                  <button
                    type="button"
                    onClick={ () => selectMovieRedux(movie, category) }
                  >
                    Select
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({
  categoriesFromRedux: state.movies.categories,
});

const mapDispatchToProps = (dispatch) => ({
  selectMovieRedux: (selectedMovie, selectedCategory) => (
    dispatch(selectMovie(selectedMovie, selectedCategory))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
