import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Route, Router } from 'react-router';

const Home = () => (
  <h1>Hello World!</h1>
);

// This would work as expected if our browser URL was /index.html
// render(
//   <Home/>,
//   document.getElementById('react-container')
// );

// This won't work, as instead of /index.html, we need the browser URL to be /home (to match the route)
render(
  <Router history={browserHistory}>
    <Route path="home" component={Home} />
  </Router>,
  document.getElementById('react-container')
);