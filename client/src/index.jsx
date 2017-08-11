import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './components/movieList.jsx';

// var movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: 0,
          title: 'Mean Girls'
        },
        {
          id: 1,
          title: 'Hackers'
        },
        {
          id: 2,
          title: 'The Grey'
        },
        {
          id: 3,
          title: 'Sunshine'
        },
        {
          id: 4,
          title: 'Ex Machina'
        },
      ]
    }
  }
  render() {
    return (
      <div>
        <h3>Hello World!</h3>
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
